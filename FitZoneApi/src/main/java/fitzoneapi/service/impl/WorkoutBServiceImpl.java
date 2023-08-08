package fitzoneapi.service.impl;

import fitzoneapi.domain.User;
import fitzoneapi.domain.WorkoutB;
import fitzoneapi.repository.UserRepository;
import fitzoneapi.repository.WorkoutBRepository;
import fitzoneapi.service.WorkoutBService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class WorkoutBServiceImpl implements WorkoutBService {

    private final WorkoutBRepository workoutBRepository;

    private final UserRepository userRepository;

    public WorkoutBServiceImpl(WorkoutBRepository workoutBRepository, UserRepository userRepository) {
        this.workoutBRepository = workoutBRepository;
        this.userRepository = userRepository;
    }

    @Override
    public List<WorkoutB> findAllbyUser(String username) {

        User user = this.userRepository.findUserByUsername(username);

        return this.workoutBRepository.findAllByUser(user);
    }

    @Override
    public WorkoutB lastWorkoutBbyUser(String username) {

        User user = this.userRepository.findUserByUsername(username);

        List<WorkoutB> workouts = this.workoutBRepository.findAllByUser(user);

        int size = workouts.size();

        if (size == 0) {
            return null;
        } else return workouts.get(size - 1);
    }

    @Override
    public WorkoutB create(LocalDateTime dateCreated, String username, Integer s1repsSQ, Integer s2repsSQ, Integer s3repsSQ, Integer s4repsSQ, Integer s5repsSQ, Double weightSQ, Integer s1repsOP, Integer s2repsOP, Integer s3repsOP, Integer s4repsOP, Integer s5repsOP, Double weightOP, Integer s1repsDL, Double weightDL, Integer s1repsPU, Integer s2repsPU, Integer s1repsCU, Integer s2repsCU) {

        User user = this.userRepository.findUserByUsername(username);

        WorkoutB workoutB = new WorkoutB(dateCreated, user, s1repsSQ, s2repsSQ, s3repsSQ, s4repsSQ, s5repsSQ, weightSQ, s1repsOP, s2repsOP, s3repsOP, s4repsOP, s5repsOP, weightOP, s1repsDL, weightDL, s1repsPU, s2repsPU, s1repsCU, s2repsCU);

        return this.workoutBRepository.save(workoutB);
    }
}
