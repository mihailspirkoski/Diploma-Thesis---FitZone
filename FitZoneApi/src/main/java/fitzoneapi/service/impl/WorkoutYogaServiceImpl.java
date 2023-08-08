package fitzoneapi.service.impl;

import fitzoneapi.domain.User;
import fitzoneapi.domain.WorkoutYoga;
import fitzoneapi.repository.UserRepository;
import fitzoneapi.repository.WorkoutYogaRepository;
import fitzoneapi.service.WorkoutYogaService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class WorkoutYogaServiceImpl implements WorkoutYogaService {

    private final WorkoutYogaRepository workoutYogaRepository;

    private final UserRepository userRepository;

    public WorkoutYogaServiceImpl(WorkoutYogaRepository workoutYogaRepository, UserRepository userRepository) {
        this.workoutYogaRepository = workoutYogaRepository;
        this.userRepository = userRepository;
    }

    @Override
    public List<WorkoutYoga> findAllbyUser(String username) {

        User user = this.userRepository.findUserByUsername(username);

        return this.workoutYogaRepository.findAllByUser(user);
    }

    @Override
    public WorkoutYoga lastWorkoutAbyUser(String username) {

        User user = this.userRepository.findUserByUsername(username);

        List<WorkoutYoga> workouts = this.workoutYogaRepository.findAllByUser(user);

        int size = workouts.size();

        if (size == 0) {
            return null;
        } else return workouts.get(size - 1);

    }

    @Override
    public WorkoutYoga create(LocalDateTime dateCreated, String username, Integer MPmin, Integer MPsec, Integer RHPmin, Integer RHPsec, Integer TPmin, Integer TPsec, Integer DFDmin, Integer DFDsec, Integer WImin, Integer WIsec, Integer WIImin, Integer WIIsec, Integer TRImin, Integer TRIsec, Integer GPmin, Integer GPsec, Integer UFDmin, Integer UFDsec, Integer PPmin, Integer PPsec, Integer BPmin, Integer BPsec, Integer CCSmin, Integer CCSsec, Integer SPmin, Integer SPsec, Integer CPmin, Integer CPsec, Integer HLFmin, Integer HLFsec, Integer SWAmin, Integer SWAsec, Integer childmin, Integer childsec, Integer corpsemin, Integer corpsesec) {

        User user = this.userRepository.findUserByUsername(username);

        WorkoutYoga workoutYoga = new WorkoutYoga(dateCreated, user, MPmin, MPsec, RHPmin, RHPsec, TPmin, TPsec, DFDmin, DFDsec, WImin, WIsec, WIImin, WIIsec, TRImin, TRIsec, GPmin, GPsec, UFDmin, UFDsec, PPmin, PPsec, BPmin, BPsec, CCSmin, CCSsec, SPmin, SPsec, CPmin, CPsec, HLFmin, HLFsec, SWAmin, SWAsec, childmin, childsec, corpsemin, corpsesec);

        return this.workoutYogaRepository.save(workoutYoga);

    }

}
