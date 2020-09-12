package facades;

import utils.EMF_Creator;
import entities.Movie;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

//Uncomment the line below, to temporarily disable this test
//@Disabled
public class FacadeMovieTest {

    private static EntityManagerFactory emf;
    private static FacadeMovie facade;
    private static Movie m1, m2;

    public FacadeMovieTest() {
    }

    @BeforeAll
    public static void setUpClass() {
        emf = EMF_Creator.createEntityManagerFactoryForTest();
        facade = FacadeMovie.getFacadeMovie(emf);
    }

    @AfterAll
    public static void tearDownClass() {
//        Clean up database after test is done or use a persistence unit with drop-and-create to start up clean on every test
    }

    // Setup the DataBase in a known state BEFORE EACH TEST
    //TODO -- Make sure to change the script below to use YOUR OWN entity class
    @BeforeEach
    public void setUp() {
        EntityManager em = emf.createEntityManager();
        m1 = new Movie(1994, "The Shawshank Redemption", new String[]{"Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"});
        m2 = new Movie(1972, "The Godfather", new String[]{"Marlon Brando", "Al Pacino", "James Caan", "Richard S. Castellano"});
        try {
            em.getTransaction().begin();
            em.createNamedQuery("Movie.deleteAllRows").executeUpdate();
            em.persist(m1);
            em.persist(m2);
            em.getTransaction().commit();
        } finally {
            em.close();
        }
    }

    @AfterEach
    public void tearDown() {
//        Remove any data after each test was run
    }

    // TODO: Delete or change this method 
    @Test
    public void testAFacadeMovieGetCount() {
        assertEquals(2, facade.getMovieCount(), "Expects two rows in the database");
    }

    @Disabled
    @Test
    public void testGetMovieByID() {
        assertEquals(m1.getId().longValue(), facade.getMovieByID(m1.getId()), "Expects to get ID: "+ m1.getId());
    }
}
