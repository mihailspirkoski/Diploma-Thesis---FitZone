package fitzoneapi.service.impl;

import fitzoneapi.domain.Exercises;
import fitzoneapi.domain.exceptions.ExerciseAlreadyExistsException;
import fitzoneapi.repository.ExercisesRepository;
import fitzoneapi.service.ExercisesService;


import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class ExercisesServiceImpl implements ExercisesService {

    private final ExercisesRepository exercisesRepository;

    public ExercisesServiceImpl(ExercisesRepository exercisesRepository) {
        this.exercisesRepository = exercisesRepository;
    }

    @Override
    public List<Exercises> findAll() {
        return this.exercisesRepository.findAll();
    }

    @Override
    @Transactional
    public Optional<Exercises> save(String name) {

        if (this.exercisesRepository.findByName(name).isPresent()) {
            throw new ExerciseAlreadyExistsException();
        } else return Optional.of(this.exercisesRepository.save(new Exercises(name)));
    }
}
