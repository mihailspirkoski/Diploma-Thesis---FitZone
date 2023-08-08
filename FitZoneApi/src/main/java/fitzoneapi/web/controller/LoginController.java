package fitzoneapi.web.controller;

import fitzoneapi.config.CustomAuthProvider;
import fitzoneapi.domain.User;
import fitzoneapi.domain.exceptions.InvalidArgumentsException;
import fitzoneapi.domain.exceptions.InvalidUserCredentialsException;
import fitzoneapi.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;


@Controller
@RequestMapping("/login")
public class LoginController {

    private final UserService userService;

    private final CustomAuthProvider customAuthProvider;

    public LoginController(UserService userService, CustomAuthProvider customAuthProvider) {
        this.userService = userService;
        this.customAuthProvider = customAuthProvider;
    }

    @GetMapping
    public String getLoginPage(Model model) {
        return "login";
    }

    @PostMapping
    public String login(HttpServletRequest request, Model model) {

        User user = null;
        try {
            user = this.userService.login(request.getParameter("username"), request.getParameter("password"));
            request.getSession().setAttribute("user", user);


            return "redirect:/home";

        } catch (InvalidUserCredentialsException | InvalidArgumentsException exception) {
            model.addAttribute("hasError", true);
            model.addAttribute("error", exception.getMessage());
            return "login";
        }
    }
}
