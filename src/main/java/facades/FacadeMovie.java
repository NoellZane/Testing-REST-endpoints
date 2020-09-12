package facades;

import dto.MovieDTO;
import entities.Movie;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.TypedQuery;

public class FacadeMovie {

    private static FacadeMovie instance;
    private static EntityManagerFactory emf;

    //Private Constructor to ensure Singleton
    private FacadeMovie() {
    }

    /**
     *
     * @param _emf
     * @return an instance of this facade class.
     */
    public static FacadeMovie getFacadeMovie(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new FacadeMovie();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    public long getMovieCount() {
        EntityManager em = emf.createEntityManager();
        try {
            long MovieCount = (long) em.createQuery("SELECT COUNT(m) FROM Movie m").getSingleResult();
            return MovieCount;
        } finally {
            em.close();
        }

    }

    public List<Movie> getAllMovies() {
        EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            TypedQuery query = em.createQuery("select m from Movie m", Movie.class);
            return query.getResultList();
        } finally {
            em.close();
        }
    }

    public MovieDTO getMovieByID(long id) {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            Movie movie = em.find(Movie.class, id);
            return new MovieDTO(movie);
        } finally {
            em.close();
        }
    }

    public Movie addMovie(Movie movie) {
        EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(movie);
            em.getTransaction().commit();
            return movie;
        } finally {
            em.close();
        }
    }

    public List<MovieDTO> getMovieByTitle(String title) {
        EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            TypedQuery query = em.createQuery("select m from Movie m where m.title = :title ", Movie.class).setParameter("title", title);
            List<Movie> movies = query.getResultList();
            List<MovieDTO> movieDTO = new ArrayList<>();
            for (Movie movie : movies) {
                movieDTO.add(new MovieDTO(movie));
            }
            return movieDTO;
        } finally {
            em.close();
        }
    }
    
    public void populateDB(){
            EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(new Movie(1994,"The Shawshank Redemption", new String[]{"Tim Robbins", "Morgan Freeman", "Bob Gunton","William Sadler"}));
            em.persist(new Movie(1972,"The Godfather", new String[]{"Marlon Brando", "Al Pacino", "James Caan", "Richard S. Castellano"}));
            em.persist(new Movie(1986, "Topgun", new String[]{"Tom Cruise", "Val Kilmer","Kelly McGills"}));
            em.persist(new Movie(2003, "Kill Bill", new String[]{"Uma Thurman", "Daryl Hannah"}));
            em.persist(new Movie(1991, "Point Break", new String[]{"Patrick Swayze", "Keanu Reeves"}));
            em.getTransaction().commit();
        } finally {
            em.close();
        }
    }
}
