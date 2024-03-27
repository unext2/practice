import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;

public class DBUtils {
    public static Connection getConnection() {
        String dbURL = null;
        String dbUsername = null;
        String dbPassword = null;

        FileInputStream fis = null;
        Properties properties = new Properties();

        try {
            fis = new FileInputStream("src/main/resources/config.properties");
            properties.load(fis);

            dbURL = properties.getProperty("db.host");
            dbUsername = properties.getProperty("db.username");
            dbPassword = properties.getProperty("db.password");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        try {
            Class.forName("org.postgresql.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

        Connection connection = null;

        try {
            connection = DriverManager.getConnection(dbURL, dbUsername, dbPassword);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return connection;
    }
}
