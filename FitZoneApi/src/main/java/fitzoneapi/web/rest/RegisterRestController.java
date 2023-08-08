package fitzoneapi.web.rest;

import fitzoneapi.domain.dto.AuthResponse;
import fitzoneapi.domain.dto.RegisterDto;
import fitzoneapi.domain.exceptions.PasswordsDoNotMatchException;
import fitzoneapi.domain.exceptions.UsernameAlreadyExistsException;
import fitzoneapi.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/register")
public class RegisterRestController {

    private final UserService userService;

    public RegisterRestController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping()
    public AuthResponse register(@RequestBody RegisterDto registerDto) {

        if (this.userService.hasUserWithUsername(registerDto.getUsername())) {
            throw new UsernameAlreadyExistsException();
        }
        if (!(registerDto.getPassword().equals(registerDto.getRepeatpassword()))) {
            throw new PasswordsDoNotMatchException();
        }
        this.userService.register(registerDto.getUsername(), registerDto.getPassword(), registerDto.getRepeatpassword());

        return new AuthResponse(registerDto.getUsername());
    }

}
