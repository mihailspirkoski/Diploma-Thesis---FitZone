package fitzoneapi.domain;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;


@Data
@Entity
public class WorkoutA {

    @Id
    private LocalDateTime dateCreated;

    private Integer s1repsSQ;

    private Integer s2repsSQ;

    private Integer s3repsSQ;

    private Integer s4repsSQ;

    private Integer s5repsSQ;

    private Double weightSQ;

    private Integer s1repsBP;

    private Integer s2repsBP;

    private Integer s3repsBP;

    private Integer s4repsBP;

    private Integer s5repsBP;

    private Double weightBP;

    private Integer s1repsBR;

    private Integer s2repsBR;

    private Integer s3repsBR;

    private Integer s4repsBR;

    private Integer s5repsBR;

    private Double weightBR;

    private Integer s1repsPU;

    private Integer s2repsPU;

    private Integer s1repsDS;

    private Integer s2repsDS;

    @ManyToOne
    private User user;

    public WorkoutA() {
    }

    public WorkoutA(LocalDateTime dateCreated,
                    User user,
                    Integer s1repsSQ, Integer s2repsSQ, Integer s3repsSQ, Integer s4repsSQ, Integer s5repsSQ, Double weightSQ,
                    Integer s1repsBP, Integer s2repsBP, Integer s3repsBP, Integer s4repsBP, Integer s5repsBP, Double weightBP,
                    Integer s1repsBR, Integer s2repsBR, Integer s3repsBR, Integer s4repsBR, Integer s5repsBR, Double weightBR,
                    Integer s1repsPU, Integer s2repsPU,
                    Integer s1repsDS, Integer s2repsDS) {
        this.dateCreated = dateCreated;
        this.user = user;
        this.s1repsSQ = s1repsSQ;
        this.s2repsSQ = s2repsSQ;
        this.s3repsSQ = s3repsSQ;
        this.s4repsSQ = s4repsSQ;
        this.s5repsSQ = s5repsSQ;
        this.weightSQ = weightSQ;
        this.s1repsBP = s1repsBP;
        this.s2repsBP = s2repsBP;
        this.s3repsBP = s3repsBP;
        this.s4repsBP = s4repsBP;
        this.s5repsBP = s5repsBP;
        this.weightBP = weightBP;
        this.s1repsBR = s1repsBR;
        this.s2repsBR = s2repsBR;
        this.s3repsBR = s3repsBR;
        this.s4repsBR = s4repsBR;
        this.s5repsBR = s5repsBR;
        this.weightBR = weightBR;
        this.s1repsPU = s1repsPU;
        this.s2repsPU = s2repsPU;
        this.s1repsDS = s1repsDS;
        this.s2repsDS = s2repsDS;
    }
}
