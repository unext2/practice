package com.database;
import DBUtils.DBConnect;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Album_style {
    private int id;
    private int genreId;
    private int albumId;

    @Override
    public String toString() {
        return "Albums_style{" +
                "id=" + id +
                ", genreId=" + genreId +
                ", albumId=" + albumId +
                '}';
    }

    public Album_style() {
    }

    public Album_style(int id, int genreId, int albumId) {
        this.id = id;
        this.genreId = genreId;
        this.albumId = albumId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getGenreId() {
        return genreId;
    }

    public void setGenreId(int genreId) {
        this.genreId = genreId;
    }

    public int getAlbumId() {
        return albumId;
    }

    public void setAlbumId(int albumId) {
        this.albumId = albumId;
    }

    public static void createAlbumStyle() {
        String query = "INSERT INTO album_style (genre_id, album_id) VALUES (?, ?)";
        int genreId = 5;
        int albumId = 2;
        try (Connection connection = DBConnect.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setInt(1, genreId);
            preparedStatement.setInt(2, albumId);
            preparedStatement.executeUpdate();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public static void readAlbumStyle() {
        List<Album_style> albumStyles = new ArrayList<>();
        try (Connection connection = DBConnect.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM album_style")) {
            ResultSet rs = preparedStatement.executeQuery();

            while (rs.next()) {
                int id = rs.getInt("id");
                int albumId = rs.getInt("album_id");
                int genreId = rs.getInt("genre_id");

                albumStyles.add(new Album_style(id, genreId, albumId));
            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        System.out.println(albumStyles);
    }

    public static void updateAlbumStyle() {
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

    public static void deleteAlbumStyle() {
        String query = "DELETE FROM album_style";

        try (Connection connection = DBConnect.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.executeUpdate();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
