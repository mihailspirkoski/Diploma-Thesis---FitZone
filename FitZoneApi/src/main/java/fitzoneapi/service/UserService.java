package fitzoneapi.service;

import fitzoneapi.domain.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {

    User login(String username, String password);

    User register(String username, String password, String repeatPassword);

    User addUserToRoleUser(String username);

    User addUserToRoleAdmin(String username);

    List<User> findAll();

    boolean hasUserWithUsername(String username);

    User getUser(String username);

}
