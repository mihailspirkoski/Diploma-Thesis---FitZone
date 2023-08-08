package fitzoneapi.domain.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class WorkoutBDtoDate {

    private LocalDateTime date;

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

    public WorkoutBDtoDate(LocalDateTime date, Integer s1repsSQ, Integer s2repsSQ, Integer s3repsSQ, Integer s4repsSQ, Integer s5repsSQ, Double weightSQ, Integer s1repsOP, Integer s2repsOP, Integer s3repsOP, Integer s4repsOP, Integer s5repsOP, Double weightOP, Integer s1repsDL, Double weightDL, Integer s1repsPU, Integer s2repsPU, Integer s1repsCU, Integer s2repsCU) {
        this.date = date;
        this.s1repsSQ = s1repsSQ;
        this.s2repsSQ = s2repsSQ;
        this.s3repsSQ = s3repsSQ;
        this.s4repsSQ = s4repsSQ;
        this.s5repsSQ = s5repsSQ;
        this.weightSQ = weightSQ;
        this.s1repsOP = s1repsOP;
        this.s2repsOP = s2repsOP;
        this.s3repsOP = s3repsOP;
        this.s4repsOP = s4repsOP;
        this.s5repsOP = s5repsOP;
        this.weightOP = weightOP;
        this.s1repsDL = s1repsDL;
        this.weightDL = weightDL;
        this.s1repsPU = s1repsPU;
        this.s2repsPU = s2repsPU;
        this.s1repsCU = s1repsCU;
        this.s2repsCU = s2repsCU;
    }

    public WorkoutBDtoDate() {
    }
}
