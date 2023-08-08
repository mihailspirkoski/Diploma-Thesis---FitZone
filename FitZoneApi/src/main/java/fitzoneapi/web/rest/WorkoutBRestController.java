package fitzoneapi.web.rest;

import fitzoneapi.domain.WorkoutB;
import fitzoneapi.domain.dto.WorkoutBDtoDate;
import fitzoneapi.domain.dto.WorkoutBDtoUser;
import fitzoneapi.service.WorkoutBService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/workoutb")
public class WorkoutBRestController {

    private final WorkoutBService workoutBService;

    public WorkoutBRestController(WorkoutBService workoutBService) {
        this.workoutBService = workoutBService;
    }

    @PostMapping
    public WorkoutBDtoDate lastworkoutB(@RequestBody String name) {

        int length = name.length();

        String newname = name.substring(1, length - 1);

        WorkoutB workoutB = this.workoutBService.lastWorkoutBbyUser(newname);

        if (workoutB == null) {
            return new WorkoutBDtoDate();
        }

        WorkoutBDtoDate dto = new WorkoutBDtoDate(workoutB.getDateCreated(), workoutB.getS1repsSQ(), workoutB.getS2repsSQ(),
                workoutB.getS3repsSQ(), workoutB.getS4repsSQ(), workoutB.getS5repsSQ(), workoutB.getWeightSQ(), workoutB.getS1repsOP(),
                workoutB.getS2repsOP(), workoutB.getS3repsOP(), workoutB.getS4repsOP(), workoutB.getS5repsOP(),
                workoutB.getWeightOP(), workoutB.getS1repsDL(), workoutB.getWeightDL(), workoutB.getS1repsPU(),
                workoutB.getS2repsPU(), workoutB.getS1repsCU(), workoutB.getS2repsCU());

        return dto;
    }

    @PostMapping("/all")
    public List<WorkoutBDtoDate> getAll(@RequestBody String name) {

        int length = name.length();

        String newname = name.substring(1, length - 1);

        List<WorkoutB> workouts = this.workoutBService.findAllbyUser(newname);

        if (workouts.isEmpty()) {
            List<WorkoutBDtoDate> workoutdto = new ArrayList<>();
            return workoutdto;
        }

        List<WorkoutBDtoDate> workoutdto = new ArrayList<>();

        for (WorkoutB current : workouts) {
            WorkoutBDtoDate currentdto = new WorkoutBDtoDate(current.getDateCreated(), current.getS1repsSQ(), current.getS2repsSQ(),
                    current.getS3repsSQ(), current.getS4repsSQ(), current.getS5repsSQ(), current.getWeightSQ(),
                    current.getS1repsOP(), current.getS2repsOP(), current.getS3repsOP(), current.getS4repsOP(),
                    current.getS5repsOP(), current.getWeightOP(), current.getS1repsDL(), current.getWeightDL(),
                    current.getS1repsPU(), current.getS2repsPU(), current.getS1repsCU(), current.getS2repsCU());
            workoutdto.add(currentdto);
        }

        return workoutdto;

    }

    @PostMapping("/add")
    public String addworkout(@RequestBody WorkoutBDtoUser workoutBDtoUser) {

        LocalDateTime date = LocalDateTime.now();

        this.workoutBService.create(date, workoutBDtoUser.getName(), workoutBDtoUser.getS1repsSQ(), workoutBDtoUser.getS2repsSQ(),
                workoutBDtoUser.getS3repsSQ(), workoutBDtoUser.getS4repsSQ(), workoutBDtoUser.getS5repsSQ(), workoutBDtoUser.getWeightSQ(),
                workoutBDtoUser.getS1repsOP(), workoutBDtoUser.getS2repsOP(), workoutBDtoUser.getS3repsOP(), workoutBDtoUser.getS4repsOP(),
                workoutBDtoUser.getS5repsOP(), workoutBDtoUser.getWeightOP(), workoutBDtoUser.getS1repsDL(), workoutBDtoUser.getWeightDL(),
                workoutBDtoUser.getS1repsPU(), workoutBDtoUser.getS2repsPU(), workoutBDtoUser.getS1repsCU(), workoutBDtoUser.getS2repsCU());


        return "Successfully added workoutB!";
    }
}
