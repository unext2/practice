package com.database;
import DBUtils.DBConnect;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Genres {
    private int id;
    private String name;

    @Override
    public String toString() {
        return "com.database.Genres{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }

    public Genres() {
    }

    public Genres(int id, String name) {
        this.id = id;
        this.name = name;
    }

    static public void createGenre() {
        System.out.println("Please enter the name of a genre:");
        Scanner scanner = new Scanner(System.in);
        String name = scanner.nextLine();
        String query = "INSERT INTO genres (name) VALUES (?)";

        try (Connection connection = DBConnect.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setString(1, name);
            preparedStatement.executeUpdate();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    static public void readGenres() {
        List<Genres> genres = new ArrayList<>();
        try (Connection connection = DBConnect.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM genres")) {
            ResultSet rs = preparedStatement.executeQuery();

            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");

                genres.add(new Genres(id, name));
            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        System.out.println(genres);
    }

    static public void updateGenre() {
        System.out.println("Please enter query:");
        Scanner scanner = new Scanner(System.in);
        String query = scanner.nextLine();

        try (Connection connection = DBConnect.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.executeUpdate();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    static public void deleteGenres() {
        String query = "DELETE FROM genres";

        try (Connection connection = DBConnect.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.executeUpdate();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
