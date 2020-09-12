package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import dto.MoviesDTO;
import entities.Movie;
import utils.EMF_Creator;
import facades.FacadeMovie;
import java.util.List;
import javax.persistence.EntityManagerFactory;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("movie")
public class MovieResource {

    private static final EntityManagerFactory EMF = EMF_Creator.createEntityManagerFactory();

    //An alternative way to get the EntityManagerFactory, whithout having to type the details all over the code
    //EMF = EMF_Creator.createEntityManagerFactory(DbSelector.DEV, Strategy.CREATE);
    private static final FacadeMovie FACADE = FacadeMovie.getFacadeMovie(EMF);
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();

    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String demo() {
        return "{\"msg\":\"Hello World\"}";
    }

    @Path("count")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String getMovieCount() {
        long count = FACADE.getMovieCount();
        //System.out.println("--------------->"+count);
        return "{\"count\":" + count + "}";  //Done manually so no need for a DTO
    }

    @Path("all")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String getAllMovies() {
        List<Movie> allMovies = FACADE.getAllMovies();
        return GSON.toJson(FACADE.getAllMovies());
    }

    @Path("simpleall")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String getSimpleAllMovies() {
        MoviesDTO allMovies = new MoviesDTO(FACADE.getAllMovies());

        return GSON.toJson(allMovies);
    }

    @GET
    @Path("/{id}")
    @Produces({MediaType.APPLICATION_JSON})
    public String getMovieByID(@PathParam("id") int id) {
        return GSON.toJson(FACADE.getMovieByID(id));
    }

    @GET
    @Path("/getmoviebytitle/{title}")
    @Produces({MediaType.APPLICATION_JSON})
    public String getMovieByTitle(@PathParam("title") String title) {
        return GSON.toJson(FACADE.getMovieByTitle(title));
    }

    @GET
    @Path("/populate")
    @Produces({MediaType.APPLICATION_JSON})
    public String populate() {
        FACADE.populateDB();
        return "{\"msg\":\"5 movies added\"}";
    }
}
