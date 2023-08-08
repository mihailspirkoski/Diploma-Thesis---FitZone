package fitzoneapi.web.controller;

import fitzoneapi.domain.User;
import fitzoneapi.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public String getUsersPage(String error, Model model) {
        if (error != null && !error.isEmpty()) {
            model.addAttribute("hasError", true);
            model.addAttribute("error", error);
        }
        List<User> users = this.userService.findAll();
        model.addAttribute("users", users);
        model.addAttribute("bodyContent", "users");

        return "users";
    }

    @PostMapping("/admin")
//    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public String addUserToRoleAdmin(@RequestParam String username, Model model) {

        this.userService.addUserToRoleAdmin(username);
        return "redirect:/users";
    }

    @PostMapping("/user")
    public String addUserToRoleUser(@RequestParam String username, Model model) {

        this.userService.addUserToRoleUser(username);
        return "redirect:/users";
    }
}
