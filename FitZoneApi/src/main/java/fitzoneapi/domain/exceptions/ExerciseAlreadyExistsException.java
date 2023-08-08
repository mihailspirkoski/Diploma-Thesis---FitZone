package fitzoneapi.domain.exceptions;

public class ExerciseAlreadyExistsException extends RuntimeException {

    public ExerciseAlreadyExistsException() {
        super("Exercise already exists");
    }
}
