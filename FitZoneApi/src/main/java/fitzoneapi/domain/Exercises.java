package fitzoneapi.domain;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;


@Data
@Entity
public class Exercises {

    @Id
    private String name;

    public Exercises() {
    }

    public Exercises(String name) {
        this.name = name;
    }

    //todo - add skullcrashers and barbell bicep curl

}

