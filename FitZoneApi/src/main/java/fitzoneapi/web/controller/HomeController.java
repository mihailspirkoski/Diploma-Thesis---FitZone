package fitzoneapi.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping(value = {"/", "/home"})
public class HomeController {

    @GetMapping
    public String getHomePage(Model model, HttpServletRequest request) {

        String username = request.getRemoteUser();

        return "home";
    }

    @GetMapping("/access_denied")
    public String getAccessDeniedPage(Model model) {
        return "access_denied";
    }

}
