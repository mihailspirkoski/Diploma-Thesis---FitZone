package fitzoneapi.service.impl;

import fitzoneapi.domain.User;
import fitzoneapi.domain.WorkoutA;
import fitzoneapi.repository.UserRepository;
import fitzoneapi.repository.WorkoutARepository;
import fitzoneapi.service.WorkoutAService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;


@Service
public class WorkoutAServiceImpl implements WorkoutAService {

    private final WorkoutARepository workoutARepository;

    private final UserRepository userRepository;

    public WorkoutAServiceImpl(WorkoutARepository workoutARepository, UserRepository userRepository) {
        this.workoutARepository = workoutARepository;
        this.userRepository = userRepository;
    }

    @Override
    public List<WorkoutA> findAllbyUser(String username) {

        User user = this.userRepository.findUserByUsername(username);

        return this.workoutARepository.findAllByUser(user);
    }

    @Override
    public WorkoutA lastWorkoutAbyUser(String username) {

        User user = this.userRepository.findUserByUsername(username);

        List<WorkoutA> workouts = this.workoutARepository.findAllByUser(user);

        int size = workouts.size();

        if (size == 0) {
            return null;
        } else return workouts.get(size - 1);
    }

    @Override
    public WorkoutA create(LocalDateTime dateCreated, String username, Integer s1repsSQ, Integer s2repsSQ, Integer s3repsSQ, Integer s4repsSQ, Integer s5repsSQ, Double weightSQ, Integer s1repsBP, Integer s2repsBP, Integer s3repsBP, Integer s4repsBP, Integer s5repsBP, Double weightBP, Integer s1repsBR, Integer s2repsBR, Integer s3repsBR, Integer s4repsBR, Integer s5repsBR, Double weightBR, Integer s1repsPU, Integer s2repsPU, Integer s1repsDS, Integer s2repsDS) {

        User user = this.userRepository.findUserByUsername(username);

        WorkoutA workoutA = new WorkoutA(dateCreated, user, s1repsSQ, s2repsSQ, s3repsSQ, s4repsSQ, s5repsSQ, weightSQ, s1repsBP, s2repsBP, s3repsBP, s4repsBP, s5repsBP, weightBP, s1repsBR, s2repsBR, s3repsBR, s4repsBR, s5repsBR, weightBR, s1repsPU, s2repsPU, s1repsDS, s2repsDS);

        return this.workoutARepository.save(workoutA);
    }
}
