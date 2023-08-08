package fitzoneapi.service;


import fitzoneapi.domain.WorkoutYoga;

import java.time.LocalDateTime;
import java.util.List;

public interface WorkoutYogaService {

    List<WorkoutYoga> findAllbyUser(String username);

    WorkoutYoga lastWorkoutAbyUser(String username);

    WorkoutYoga create(LocalDateTime dateCreated,
                       String username,
                       Integer MPmin, Integer MPsec, Integer RHPmin, Integer RHPsec, Integer TPmin, Integer TPsec, Integer DFDmin, Integer DFDsec, Integer WImin, Integer WIsec, Integer WIImin, Integer WIIsec, Integer TRImin, Integer TRIsec, Integer GPmin, Integer GPsec, Integer UFDmin, Integer UFDsec, Integer PPmin, Integer PPsec, Integer BPmin, Integer BPsec, Integer CCSmin, Integer CCSsec, Integer SPmin, Integer SPsec, Integer CPmin, Integer CPsec, Integer HLFmin, Integer HLFsec, Integer SWAmin, Integer SWAsec, Integer childmin, Integer childsec, Integer corpsemin, Integer corpsesec);
}
