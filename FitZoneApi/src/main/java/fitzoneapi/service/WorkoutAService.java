package fitzoneapi.service;

import fitzoneapi.domain.WorkoutA;

import java.time.LocalDateTime;
import java.util.List;

public interface WorkoutAService {

    List<WorkoutA> findAllbyUser(String username);

    WorkoutA lastWorkoutAbyUser(String username);

    WorkoutA create(LocalDateTime dateCreated,
                    String username,
                    Integer s1repsSQ, Integer s2repsSQ, Integer s3repsSQ, Integer s4repsSQ, Integer s5repsSQ, Double weightSQ,
                    Integer s1repsBP, Integer s2repsBP, Integer s3repsBP, Integer s4repsBP, Integer s5repsBP, Double weightBP,
                    Integer s1repsBR, Integer s2repsBR, Integer s3repsBR, Integer s4repsBR, Integer s5repsBR, Double weightBR,
                    Integer s1repsPU, Integer s2repsPU,
                    Integer s1repsDS, Integer s2repsDS);
}
