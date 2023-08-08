package fitzoneapi.web.rest;


import fitzoneapi.domain.User;
import fitzoneapi.domain.dto.AuthResponse;
import fitzoneapi.domain.dto.LoginDto;
import fitzoneapi.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/login")
public class LoginRestController {


    private final UserService userService;

    public LoginRestController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping()
    public ResponseEntity<AuthResponse> login(@RequestBody LoginDto loginDto) {
        User user = this.userService.login(loginDto.getUsername(), loginDto.getPassword());
        if (user != null) {
            return ResponseEntity.ok(new AuthResponse(user.getUsername()));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

}

