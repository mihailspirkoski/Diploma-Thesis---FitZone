package fitzoneapi.service;


import fitzoneapi.domain.WorkoutB;

import java.time.LocalDateTime;
import java.util.List;

public interface WorkoutBService {

    List<WorkoutB> findAllbyUser(String username);

    WorkoutB lastWorkoutBbyUser(String username);

    WorkoutB create(LocalDateTime dateCreated,
                    String username,
                    Integer s1repsSQ, Integer s2repsSQ, Integer s3repsSQ, Integer s4repsSQ, Integer s5repsSQ, Double weightSQ,
                    Integer s1repsOP, Integer s2repsOP, Integer s3repsOP, Integer s4repsOP, Integer s5repsOP, Double weightOP,
                    Integer s1repsDL, Double weightDL,
                    Integer s1repsPU, Integer s2repsPU,
                    Integer s1repsCU, Integer s2repsCU);

}
