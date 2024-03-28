package com.database;
import DBUtils.DBConnect;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Scanner;

public class Albums {
    private int id;
    private String title;
    private Date date;

    @Override
    public String toString() {
        return "Albums{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", date=" + date +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Albums() {
    }

    public Albums(int id, String title, Date date) {
        this.id = id;
        this.title = title;
        this.date = date;
    }

    public static void createAlbum() {
        System.out.println("Please enter the title of an album:");
        Scanner scanner = new Scanner(System.in);
        String title = scanner.nextLine();
        System.out.println("Please enter the date of an album:");
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date date = null;
        try {
            date = dateFormat.parse(scanner.nextLine());
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
        String query = "INSERT INTO albums (title, date) VALUES (?, ?)";

        try (Connection connection = DBConnect.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setString(1, title);
            java.sql.Date sqlDate = new java.sql.Date(date.getTime());
            preparedStatement.setDate(2, sqlDate);
            preparedStatement.executeUpdate();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public static void readAlbums() {
        List<Albums> albums = new ArrayList<>();
        try (Connection connection = DBConnect.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM albums")) {
            ResultSet rs = preparedStatement.executeQuery();

            while (rs.next()) {
                int id = rs.getInt("id");
                String title = rs.getString("title");
                Date date = rs.getDate("date");

                albums.add(new Albums(id, title, date));
            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        System.out.println(albums);
    }

    public static void updateAlbum() {
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

    public static void deleteAlbums() {
        String query = "DELETE FROM albums";

        try (Connection connection = DBConnect.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.executeUpdate();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}


