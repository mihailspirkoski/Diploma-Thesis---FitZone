package fitzoneapi.domain.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class WorkoutYogaDtoDate {

    private LocalDateTime date;

    private Integer MPmin;
    private Integer MPsec;

    private Integer RHPmin;
    private Integer RHPsec;

    private Integer TPmin;
    private Integer TPsec;

    private Integer DFDmin;
    private Integer DFDsec;

    private Integer WImin;
    private Integer WIsec;

    private Integer WIImin;
    private Integer WIIsec;

    private Integer TRImin;
    private Integer TRIsec;

    private Integer GPmin;
    private Integer GPsec;

    private Integer UFDmin;
    private Integer UFDsec;

    private Integer PPmin;
    private Integer PPsec;

    private Integer BPmin;
    private Integer BPsec;

    private Integer CCSmin;
    private Integer CCSsec;

    private Integer SPmin;
    private Integer SPsec;

    private Integer CPmin;
    private Integer CPsec;

    private Integer HLFmin;
    private Integer HLFsec;

    private Integer SWAmin;
    private Integer SWAsec;

    private Integer Childmin;
    private Integer Childsec;

    private Integer Corpsemin;
    private Integer Corpsesec;

    public WorkoutYogaDtoDate() {
    }

    public WorkoutYogaDtoDate(LocalDateTime date, Integer MPmin, Integer MPsec, Integer RHPmin, Integer RHPsec, Integer TPmin, Integer TPsec, Integer DFDmin, Integer DFDsec, Integer WImin, Integer WIsec, Integer WIImin, Integer WIIsec, Integer TRImin, Integer TRIsec, Integer GPmin, Integer GPsec, Integer UFDmin, Integer UFDsec, Integer PPmin, Integer PPsec, Integer BPmin, Integer BPsec, Integer CCSmin, Integer CCSsec, Integer SPmin, Integer SPsec, Integer CPmin, Integer CPsec, Integer HLFmin, Integer HLFsec, Integer SWAmin, Integer SWAsec, Integer childmin, Integer childsec, Integer corpsemin, Integer corpsesec) {
        this.date = date;
        this.MPmin = MPmin;
        this.MPsec = MPsec;
        this.RHPmin = RHPmin;
        this.RHPsec = RHPsec;
        this.TPmin = TPmin;
        this.TPsec = TPsec;
        this.DFDmin = DFDmin;
        this.DFDsec = DFDsec;
        this.WImin = WImin;
        this.WIsec = WIsec;
        this.WIImin = WIImin;
        this.WIIsec = WIIsec;
        this.TRImin = TRImin;
        this.TRIsec = TRIsec;
        this.GPmin = GPmin;
        this.GPsec = GPsec;
        this.UFDmin = UFDmin;
        this.UFDsec = UFDsec;
        this.PPmin = PPmin;
        this.PPsec = PPsec;
        this.BPmin = BPmin;
        this.BPsec = BPsec;
        this.CCSmin = CCSmin;
        this.CCSsec = CCSsec;
        this.SPmin = SPmin;
        this.SPsec = SPsec;
        this.CPmin = CPmin;
        this.CPsec = CPsec;
        this.HLFmin = HLFmin;
        this.HLFsec = HLFsec;
        this.SWAmin = SWAmin;
        this.SWAsec = SWAsec;
        this.Childmin = childmin;
        this.Childsec = childsec;
        this.Corpsemin = corpsemin;
        this.Corpsesec = corpsesec;
    }
}
