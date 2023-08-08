package fitzoneapi.service;

import fitzoneapi.domain.Exercises;

import java.util.List;
import java.util.Optional;

public interface ExercisesService {

    Optional<Exercises> save(String name);

    List<Exercises> findAll();

}
