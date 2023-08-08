package fitzoneapi.web.controller;

import fitzoneapi.domain.Exercises;
import fitzoneapi.domain.exceptions.ExerciseAlreadyExistsException;
import fitzoneapi.service.ExercisesService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("exercises")
public class ExercisesController {

    private final ExercisesService exercisesService;

    public ExercisesController(ExercisesService exercisesService) {
        this.exercisesService = exercisesService;
    }

    @GetMapping
    public String getExercisesPage(@RequestParam(required = false) String error, Model model) {

        if (error != null && !error.isEmpty()) {
            model.addAttribute("hasError", true);
            model.addAttribute("error", error);
        }
        List<Exercises> exercises = this.exercisesService.findAll();
        model.addAttribute("exercises", exercises);
        model.addAttribute("bodyContent", "exercises");

        return "exercises";
    }


    @PostMapping
    public String addExercise(@RequestParam String exercise, Model model) {

        try {
            this.exercisesService.save(exercise);
            return "redirect:/exercises";
        } catch (ExerciseAlreadyExistsException exception) {
            model.addAttribute("hasError", true);
            model.addAttribute("error", exception.getMessage());
            return "home";
        }


    }
}
