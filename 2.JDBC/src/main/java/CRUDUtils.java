import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class CRUDUtils {

    private static String INSERT_GENRE = "INSERT INTO genres(name) values (?);";
    private static String UPDATE_GENRE =  "UPDATE genres SET name = ? WHERE id = ?";
    private static String DELETE_GENRE = "DELETE FROM genres WHERE id = ?";

    public static List<Genres> getStudentData(String query) {

        List<Genres> genres = new ArrayList<>();

        try (Connection connection = DBUtils.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            ResultSet rs = preparedStatement.executeQuery();

            while(rs.next()){
                int id = rs.getInt("id");
                String name = rs.getString("name");

                genres.add(new Genres(id, name));
            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        return genres;
    }

    public static List<Genres> saveGenre(Genres genre){
        List<Genres> genres = new ArrayList<>();

        try (Connection connection = DBUtils.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(INSERT_GENRE)) {

            preparedStatement.setString(1, genre.getName());
            preparedStatement.executeUpdate();

            PreparedStatement allGenres = connection.prepareStatement("SELECT * FROM genres");

            ResultSet rs = allGenres.executeQuery();

            while(rs.next()){
                int id = rs.getInt("id");
                String name = rs.getString("name");

                genres.add(new Genres(id, name));
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        return genres;

    }

    public static List<Genres> updateGenre(int genreId, String genreName){
        List<Genres> genres = new ArrayList<>();


        try (Connection connection = DBUtils.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(UPDATE_GENRE)) {

            preparedStatement.setString(1, genreName);
            preparedStatement.setInt(2, genreId);


            preparedStatement.executeUpdate();

            PreparedStatement allGenres = connection.prepareStatement("SELECT * FROM genres");

            ResultSet rs = allGenres.executeQuery();

            while(rs.next()){
                int id = rs.getInt("id");
                String name = rs.getString("name");

                genres.add(new Genres(id, name));
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        return genres;
    }

public static List<Genres> deleteGenre(int genreId){

    List<Genres> genres = new ArrayList<>();

    try (Connection connection = DBUtils.getConnection();
         PreparedStatement preparedStatement = connection.prepareStatement(DELETE_GENRE)) {

        preparedStatement.setInt(1, genreId);
        preparedStatement.executeUpdate();

        PreparedStatement allGenres = connection.prepareStatement("SELECT * FROM genres");

        ResultSet rs = allGenres.executeQuery();

        while(rs.next()){
            int id = rs.getInt("id");
            String name = rs.getString("name");

            genres.add(new Genres(id, name));
        }

    } catch (SQLException e) {
        throw new RuntimeException(e);
    }
    return genres;

}











}