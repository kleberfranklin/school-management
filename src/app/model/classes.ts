export class ClasseSchedules{
    id!: string;
    horarioInicial?: string;
    horarioFinal?: string;
    diaSemana?: string;
    materia?: string;
    professor?: string;
    ensino!: string;
    
    constructor(ensino: string){
        this.ensino = ensino;
    }
    



}