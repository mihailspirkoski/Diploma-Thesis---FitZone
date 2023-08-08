package fitzoneapi.web.rest;


import fitzoneapi.domain.WorkoutA;
import fitzoneapi.domain.dto.WorkoutADtoDate;
import fitzoneapi.domain.dto.WorkoutADtoUser;
import fitzoneapi.service.WorkoutAService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/workouta")
public class WorkoutARestController {


    private final WorkoutAService workoutAService;


    public WorkoutARestController(WorkoutAService workoutAService) {
        this.workoutAService = workoutAService;
    }

    @PostMapping
    public WorkoutADtoDate lastworkoutA(@RequestBody String name) {

        int length = name.length();

        String newname = name.substring(1, length - 1);
        WorkoutA workoutA = this.workoutAService.lastWorkoutAbyUser(newname);

        if (workoutA == null) {
            return new WorkoutADtoDate();
        }

        WorkoutADtoDate dto = new WorkoutADtoDate(workoutA.getDateCreated(), workoutA.getS1repsSQ(), workoutA.getS2repsSQ(),
                workoutA.getS3repsSQ(), workoutA.getS4repsSQ(), workoutA.getS5repsSQ(), workoutA.getWeightSQ(),
                workoutA.getS1repsBP(), workoutA.getS2repsBP(), workoutA.getS3repsBP(), workoutA.getS4repsBP(),
                workoutA.getS5repsBP(), workoutA.getWeightBP(), workoutA.getS1repsBR(), workoutA.getS2repsBR(), workoutA.getS3repsBR(),
                workoutA.getS4repsBR(), workoutA.getS5repsBR(), workoutA.getWeightBR(),
                workoutA.getS1repsPU(), workoutA.getS2repsPU(),
                workoutA.getS1repsDS(), workoutA.getS2repsDS());

        return dto;
    }

    @PostMapping("/all")
    public List<WorkoutADtoDate> getAll(@RequestBody String name) {

        int length = name.length();

        String newname = name.substring(1, length - 1);

        List<WorkoutA> workouts = this.workoutAService.findAllbyUser(newname);

        if (workouts.isEmpty()) {
            List<WorkoutADtoDate> workoutdto = new ArrayList<>();
            return workoutdto;
        }

        List<WorkoutADtoDate> workoutdto = new ArrayList<>();

        for (WorkoutA current : workouts) {
            WorkoutADtoDate currentdto = new WorkoutADtoDate(current.getDateCreated(), current.getS1repsSQ(), current.getS2repsSQ(),
                    current.getS3repsSQ(), current.getS4repsSQ(), current.getS5repsSQ(), current.getWeightSQ(),
                    current.getS1repsBP(), current.getS2repsBP(), current.getS3repsBP(), current.getS4repsBP(),
                    current.getS5repsBP(), current.getWeightBP(), current.getS1repsBR(), current.getS2repsBR(), current.getS3repsBR(),
                    current.getS4repsBR(), current.getS5repsBR(), current.getWeightBR(),
                    current.getS1repsPU(), current.getS2repsPU(),
                    current.getS1repsDS(), current.getS2repsDS());
            workoutdto.add(currentdto);
        }

        return workoutdto;

    }

    @PostMapping("/add")
    public String addworkout(@RequestBody WorkoutADtoUser workoutADtoUser) {

        LocalDateTime date = LocalDateTime.now();

        this.workoutAService.create(date, workoutADtoUser.getName(), workoutADtoUser.getS1repsSQ(), workoutADtoUser.getS2repsSQ(),
                workoutADtoUser.getS3repsSQ(), workoutADtoUser.getS4repsSQ(), workoutADtoUser.getS5repsSQ(), workoutADtoUser.getWeightSQ(),
                workoutADtoUser.getS1repsBP(), workoutADtoUser.getS2repsBP(), workoutADtoUser.getS3repsBP(), workoutADtoUser.getS4repsBP(),
                workoutADtoUser.getS5repsBP(), workoutADtoUser.getWeightBP(), workoutADtoUser.getS1repsBR(), workoutADtoUser.getS2repsBR(),
                workoutADtoUser.getS3repsBR(), workoutADtoUser.getS4repsBR(), workoutADtoUser.getS5repsBR(), workoutADtoUser.getWeightBR(),
                workoutADtoUser.getS1repsPU(), workoutADtoUser.getS2repsPU(), workoutADtoUser.getS1repsDS(), workoutADtoUser.getS2repsDS());


        return "Successfully added workoutA!";
    }


}
