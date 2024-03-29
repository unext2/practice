package App;
import DBUtils.DBConnect;
import com.database.Genres;
import com.database.Albums;
import com.database.Album_style;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        System.out.println("Tables init");
        Statement statement = null;
        Connection connection = null;
        try {
            connection = DBConnect.getConnection();
            statement = connection.createStatement();
            String script = "src/main/resources/init.sql";
            String sql = new String(Files.readAllBytes(Paths.get(script)));
            statement.executeUpdate(sql);
        } catch (SQLException | IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (connection != null)
                    connection.close();
                if (statement != null)
                    statement.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        System.out.println("Init script was successfully executed");

        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("Choose operation:");
            System.out.println("1) Create");
            System.out.println("2) Read");
            System.out.println("3) Update");
            System.out.println("4) Delete");
            System.out.println("5) Leave");

            int choice = scanner.nextInt();
            switch (choice) {
                case 1:
                    createOperation();
                    break;
                case 2:
                    readOperation();
                    break;
                case 3:
                    updateOperation();
                    break;
                case 4:
                    deleteOperation();
                    break;
                case 5:
                    System.out.println("Программа завершена.");
                    return;
                default:
                    System.out.println("Неверный выбор. Пожалуйста, введите число от 1 до 5.");
            }
        }
    }

    private static void createOperation() {
        int num = selectTable();
        switch (num) {
            case 1:
                Genres.createGenre();
                break;
            case 2:
                Albums.createAlbum();
                break;
            case 3:
                //TODO
                break;
            case 4:
                //TODO
                break;
            case 5:
                //TODO
                return;
            case 6:
                //TODO
                break;
            case 7:
                //TODO
                break;
            case 8:
                Album_style.createAlbumStyle();
                break;
            case 9:
                //TODO
                break;
            default:
                System.out.println("Wrong number! Exit!");
                return;
        }
    }

    private static void readOperation() {
        int num = selectTable();
        switch (num) {
            case 1:
                Genres.readGenres();
                break;
            case 2:
                Albums.readAlbums();
                break;
            case 3:
                //TODO
                break;
            case 4:
                //TODO
                break;
            case 5:
                //TODO
                return;
            case 6:
                //TODO
                break;
            case 7:
                //TODO
                break;
            case 8:
                Album_style.readAlbumStyle();
                break;
            case 9:
                //TODO
                break;
            default:
                System.out.println("Wrong number! Exit!");
                return;
        }
    }

    private static void updateOperation() {
        int num = selectTable();
        switch (num) {
            case 1:
                Genres.updateGenre();
                break;
            case 2:
                Albums.updateAlbum();
                break;
            case 3:
                //TODO
                break;
            case 4:
                //TODO
                break;
            case 5:
                //TODO
                return;
            case 6:
                //TODO
                break;
            case 7:
                //TODO
                break;
            case 8:
                Album_style.updateAlbumStyle();
                break;
            case 9:
                //TODO
                break;
            default:
                System.out.println("Wrong number! Exit!");
                return;
        }
    }

    private static void deleteOperation() {
        int num = selectTable();
        switch (num) {
            case 1:
                Genres.deleteGenres();
                break;
            case 2:
                Albums.deleteAlbums();
                break;
            case 3:
                //TODO
                break;
            case 4:
                //TODO
                break;
            case 5:
                //TODO
                return;
            case 6:
                //TODO
                break;
            case 7:
                //TODO
                break;
            case 8:
                Album_style.deleteAlbumStyle();
                break;
            case 9:
                //TODO
                break;
            default:
                System.out.println("Wrong number! Exit!");
                return;
        }
    }

    private static int selectTable() {
        System.out.println("Choose table:");
        System.out.println("1) Genres");
        System.out.println("2) Albums");
        System.out.println("3) Artists");
        System.out.println("4) Employees");
        System.out.println("5) Equipment");
        System.out.println("6) Songs");
        System.out.println("7) Discography");
        System.out.println("8) Albums_style");
        System.out.println("9) Records");

        Scanner scanner = new Scanner(System.in);
        int res = 0;
        while ((res = scanner.nextInt()) > 9 || res < 1) {
            System.out.println("Wrong number! Choose between 1..9");
        }

        return res;
    }
}
