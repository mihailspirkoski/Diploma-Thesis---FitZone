package fitzoneapi.repository;

import fitzoneapi.domain.User;
import fitzoneapi.domain.WorkoutYoga;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;


@Repository
public interface WorkoutYogaRepository extends JpaRepository<WorkoutYoga, LocalDateTime> {

    List<WorkoutYoga> findAllByUser(User user);

}
