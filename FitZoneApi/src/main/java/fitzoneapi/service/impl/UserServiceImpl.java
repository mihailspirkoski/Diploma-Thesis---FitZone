package fitzoneapi.service.impl;

import fitzoneapi.domain.Role;
import fitzoneapi.domain.User;
import fitzoneapi.domain.exceptions.*;
import fitzoneapi.repository.UserRepository;
import fitzoneapi.service.UserService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {


    private final UserRepository userRepository;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;


    public UserServiceImpl(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }


    @Override
    public User login(String username, String password) {
        if (username == null || username.isEmpty() || password == null || password.isEmpty()) {
            throw new InvalidArgumentsException();
        }
        User user = userRepository.findUserByUsername(username);
        if (user != null) {
            boolean pwMatches = bCryptPasswordEncoder.matches(password, user.getPassword());
            if (pwMatches) {

                return user;
            } else throw new InvalidUserCredentialsException();
        } else throw new InvalidUserCredentialsException();

    }

    @Override
    public User register(String username, String password, String repeatPassword) {
        if (username == null || username.isEmpty() || password == null || password.isEmpty())
            throw new InvalidUsernameOrPasswordException();
        if (!password.equals(repeatPassword))
            throw new PasswordsDoNotMatchException();
        if (this.userRepository.findByUsername(username).isPresent())
            throw new UsernameAlreadyExistsException();
        User user = new User(username, bCryptPasswordEncoder.encode(password));
        return userRepository.save(user);
    }

    @Override
    public User addUserToRoleUser(String username) {
        User user = userRepository.findUserByUsername(username);
        user.setRole(Role.ROLE_USER);
        return userRepository.save(user);
    }

    @Override
    public User addUserToRoleAdmin(String username) {
        User user = userRepository.findUserByUsername(username);
        user.setRole(Role.ROLE_ADMIN);
        return userRepository.save(user);
    }

    @Override
    public List<User> findAll() {
        return this.userRepository.findAll();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException(username));
    }

    @Override
    public boolean hasUserWithUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public User getUser(String username) {
        return userRepository.findUserByUsername(username);
    }
}
