package DBUtils;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.DriverManager;
import java.util.Properties;

public class DBConnect {
    public static java.sql.Connection getConnection() {
        String dbURL = null;
        String dbUsername = null;
        String dbPassword = null;

        FileInputStream fis = null;
        Properties properties = new Properties();

        try {
            try {
                fis = new FileInputStream("src/main/resources/config.properties");
            } catch (FileNotFoundException e) {
                return null;
            }
            properties.load(fis);
            dbURL = properties.getProperty("db.host");
            dbUsername = properties.getProperty("db.username");
            dbPassword = properties.getProperty("db.password");
        } catch (IOException e) {
            return null;
        }

        try {
            Class.forName("org.postgresql.Driver");
        } catch (ClassNotFoundException e) {
            return null;
        }

        java.sql.Connection connection = null;

        try {
            connection = DriverManager.getConnection(dbURL, dbUsername, dbPassword);
        } catch (Exception e) {
            return null;
        }
        return connection;
    }
}
