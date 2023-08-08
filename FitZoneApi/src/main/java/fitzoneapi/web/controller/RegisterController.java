package fitzoneapi.web.controller;

import fitzoneapi.domain.exceptions.InvalidUsernameOrPasswordException;
import fitzoneapi.domain.exceptions.PasswordsDoNotMatchException;
import fitzoneapi.domain.exceptions.UsernameAlreadyExistsException;
import fitzoneapi.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping(value = {"/register"})
public class RegisterController {


    private final UserService userService;

    public RegisterController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public String getRegisterPage(@RequestParam(required = false) String error, Model model) {
        if (error != null && !error.isEmpty()) {
            model.addAttribute("hasError", true);
            model.addAttribute("error", true);
        }
        return "register";
    }

    @PostMapping
    public String register(@RequestParam String username,
                           @RequestParam String password,
                           @RequestParam String repeatedPassword,
                           Model model) {
        try {
            this.userService.register(username, password, repeatedPassword);
            return "redirect:/login";
        } catch (InvalidUsernameOrPasswordException | PasswordsDoNotMatchException |
                 UsernameAlreadyExistsException exception) {
            model.addAttribute("hasError", true);
            model.addAttribute("error", exception.getMessage());
            return "register";
        }
    }
}
