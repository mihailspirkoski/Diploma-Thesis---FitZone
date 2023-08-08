package fitzoneapi.web.rest;

import fitzoneapi.domain.WorkoutYoga;
import fitzoneapi.domain.dto.WorkoutYogaDtoUser;
import fitzoneapi.domain.dto.WorkoutYogaDtoDate;
import fitzoneapi.service.WorkoutYogaService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/workoutyoga")
public class WorkoutYogaRestController {

    private final WorkoutYogaService workoutYogaService;

    public WorkoutYogaRestController(WorkoutYogaService workoutYogaService) {
        this.workoutYogaService = workoutYogaService;
    }


    @PostMapping
    public WorkoutYogaDtoDate lastworkoutYoga(@RequestBody String name) {

        int length = name.length();

        String newname = name.substring(1, length - 1);

        WorkoutYoga workoutYoga = this.workoutYogaService.lastWorkoutAbyUser(newname);

        if (workoutYoga == null) {
            return new WorkoutYogaDtoDate();
        }

        WorkoutYogaDtoDate dto = new WorkoutYogaDtoDate(workoutYoga.getDateCreated(), workoutYoga.getMPmin(), workoutYoga.getMPsec(),
                workoutYoga.getRHPmin(), workoutYoga.getRHPsec(), workoutYoga.getTPmin(), workoutYoga.getTPsec(), workoutYoga.getDFDmin(), workoutYoga.getDFDsec(),
                workoutYoga.getWImin(), workoutYoga.getWIsec(), workoutYoga.getWIImin(), workoutYoga.getWIIsec(), workoutYoga.getTRImin(), workoutYoga.getTRIsec(),
                workoutYoga.getGPmin(), workoutYoga.getGPsec(), workoutYoga.getUFDmin(), workoutYoga.getUFDsec(), workoutYoga.getPPmin(), workoutYoga.getPPsec(),
                workoutYoga.getBPmin(), workoutYoga.getBPsec(), workoutYoga.getCCSmin(), workoutYoga.getCCSsec(), workoutYoga.getSPmin(), workoutYoga.getSPsec(),
                workoutYoga.getCPmin(), workoutYoga.getCPsec(), workoutYoga.getHLFmin(), workoutYoga.getHLFsec(), workoutYoga.getSWAmin(), workoutYoga.getSWAsec(),
                workoutYoga.getChildmin(), workoutYoga.getChildsec(), workoutYoga.getCorpsemin(), workoutYoga.getCorpsesec());

        return dto;

    }

    @PostMapping("/all")
    public List<WorkoutYogaDtoDate> getAll(@RequestBody String name) {

        int length = name.length();

        String newname = name.substring(1, length - 1);

        List<WorkoutYoga> workouts = this.workoutYogaService.findAllbyUser(newname);

        if (workouts.isEmpty()) {
            List<WorkoutYogaDtoDate> workoutdto = new ArrayList<>();
            return workoutdto;
        }

        List<WorkoutYogaDtoDate> workoutdto = new ArrayList<>();

        for (WorkoutYoga current : workouts) {
            WorkoutYogaDtoDate currentdto = new WorkoutYogaDtoDate(current.getDateCreated(), current.getMPmin(), current.getMPsec(),
                    current.getRHPmin(), current.getRHPsec(), current.getTPmin(), current.getTPsec(), current.getDFDmin(), current.getDFDsec(),
                    current.getWImin(), current.getWIsec(), current.getWIImin(), current.getWIIsec(), current.getTRImin(), current.getTRIsec(),
                    current.getGPmin(), current.getGPsec(), current.getUFDmin(), current.getUFDsec(), current.getPPmin(), current.getPPsec(),
                    current.getBPmin(), current.getBPsec(), current.getCCSmin(), current.getCCSsec(), current.getSPmin(), current.getSPsec(),
                    current.getCPmin(), current.getCPsec(), current.getHLFmin(), current.getHLFsec(), current.getSWAmin(), current.getSWAsec(),
                    current.getChildmin(), current.getChildsec(), current.getCorpsemin(), current.getCorpsesec());
            workoutdto.add(currentdto);
        }

        return workoutdto;
    }

    @PostMapping("/add")
    public String addworkout(@RequestBody WorkoutYogaDtoUser workoutYogaDtoUser) {

        LocalDateTime date = LocalDateTime.now();

        this.workoutYogaService.create(date, workoutYogaDtoUser.getName(), workoutYogaDtoUser.getMPmin(), workoutYogaDtoUser.getMPsec(),
                workoutYogaDtoUser.getRHPmin(), workoutYogaDtoUser.getRHPsec(), workoutYogaDtoUser.getTPmin(), workoutYogaDtoUser.getTPsec(), workoutYogaDtoUser.getDFDmin(), workoutYogaDtoUser.getDFDsec(),
                workoutYogaDtoUser.getWImin(), workoutYogaDtoUser.getWIsec(), workoutYogaDtoUser.getWIImin(), workoutYogaDtoUser.getWIIsec(), workoutYogaDtoUser.getTRImin(), workoutYogaDtoUser.getTRIsec(),
                workoutYogaDtoUser.getGPmin(), workoutYogaDtoUser.getGPsec(), workoutYogaDtoUser.getUFDmin(), workoutYogaDtoUser.getUFDsec(), workoutYogaDtoUser.getPPmin(), workoutYogaDtoUser.getPPsec(),
                workoutYogaDtoUser.getBPmin(), workoutYogaDtoUser.getBPsec(), workoutYogaDtoUser.getCCSmin(), workoutYogaDtoUser.getCCSsec(), workoutYogaDtoUser.getSPmin(), workoutYogaDtoUser.getSPsec(),
                workoutYogaDtoUser.getCPmin(), workoutYogaDtoUser.getCPsec(), workoutYogaDtoUser.getHLFmin(), workoutYogaDtoUser.getHLFsec(), workoutYogaDtoUser.getSWAmin(), workoutYogaDtoUser.getSWAsec(),
                workoutYogaDtoUser.getChildmin(), workoutYogaDtoUser.getChildsec(), workoutYogaDtoUser.getCorpsemin(), workoutYogaDtoUser.getCorpsesec());

        return "Successfully added workoutYoga!";

    }

}
