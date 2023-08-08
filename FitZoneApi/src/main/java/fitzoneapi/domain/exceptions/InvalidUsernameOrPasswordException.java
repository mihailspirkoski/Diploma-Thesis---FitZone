package fitzoneapi.domain.exceptions;

public class InvalidUsernameOrPasswordException extends RuntimeException {

    public InvalidUsernameOrPasswordException() {
        super("Invalid Username or Password.");
    }
}
