package fitzoneapi.repository;

import fitzoneapi.domain.User;
import fitzoneapi.domain.WorkoutB;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface WorkoutBRepository extends JpaRepository<WorkoutB, LocalDateTime> {

    List<WorkoutB> findAllByUser(User user);

}
