package fitzoneapi.repository;

import fitzoneapi.domain.User;
import fitzoneapi.domain.WorkoutA;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface WorkoutARepository extends JpaRepository<WorkoutA, LocalDateTime> {

    List<WorkoutA> findAllByUser(User user);

}
