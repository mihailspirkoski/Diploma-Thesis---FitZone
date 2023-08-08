package fitzoneapi.repository;

import fitzoneapi.domain.Exercises;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ExercisesRepository extends JpaRepository<Exercises, String> {

    Optional<Exercises> findByName(String exerciseName);
}
