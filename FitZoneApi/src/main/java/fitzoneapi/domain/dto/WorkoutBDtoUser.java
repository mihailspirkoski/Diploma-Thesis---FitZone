package fitzoneapi.domain.dto;

import lombok.Data;

@Data
public class WorkoutBDtoUser {

    private String name;

    private Integer s1repsSQ;

    private Integer s2repsSQ;

    private Integer s3repsSQ;

    private Integer s4repsSQ;

    private Integer s5repsSQ;

    private Double weightSQ;

    private Integer s1repsOP;

    private Integer s2repsOP;

    private Integer s3repsOP;

    private Integer s4repsOP;

    private Integer s5repsOP;

    private Double weightOP;

    private Integer s1repsDL;

    private Double weightDL;

    private Integer s1repsPU;

    private Integer s2repsPU;

    private Integer s1repsCU;

    private Integer s2repsCU;
}
