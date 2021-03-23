import { AlunoRepository } from "../repositories/AlunoRepository";
import { Aluno } from "../entities/Aluno";
import { Disciplina } from "../entities/Disciplina";
import { DisciplinaRepository } from "../repositories/DisciplinaRepository";
import { ProfessorRepository } from "../repositories/ProfessorRepository";
import { Professor } from "../entities/Professor";
import { NotasRepository } from "..//repositories/NotasRepository";
import { Notas } from "..//entities/Notas";

export class Db {
  constructor(
    private alunoRepository = new AlunoRepository(),
    private disciplinaRepository = new DisciplinaRepository(),
    private professorRepository = new ProfessorRepository(),
    private notasRepository = new NotasRepository()
  ) {}
  public async dbInstantiation(): Promise<void> {
    await this.alunoRepository.deleteAll();
    await this.disciplinaRepository.deleteAll();
    await this.professorRepository.deleteAll();
    await this.notasRepository.deleteAll();

    const prof1: Professor = {
      id: null,
      nome: "Marcello",
      senha: "123456",
      telefone: "99999-9999",
      disciplinas: [],
    };

    const alu1: Aluno = {
      id: null,
      curso: "ADS",
      disciplinas: [],
      faltas: 0,
      moduloAtual: "1°",
      nome: "Gustavo Maciel",
      notas: [],
      numMatricula: "123456789",
      senha: "123456",
      telefone: "99999-9999",
    };

    const alu2: Aluno = {
      id: null,
      curso: "ADS",
      disciplinas: [],
      faltas: 0,
      moduloAtual: "1°",
      nome: "Paulo Alves",
      notas: [],
      numMatricula: "987654321",
      senha: "123456",
      telefone: "99999-9999",
    };

    const dis1: Disciplina = {
      alunos: [alu1, alu2],
      id: null,
      horario: "18h30 - 21h10",
      nome: "Banco de dados",
      notas: [],
      professor: prof1,
      turno: "Noite",
    };

    const nota1: Notas = {
      aluno: alu1,
      id: null,
      notaAtividade: 10,
      disciplina: dis1,
      primeiraNota: 10,
      segundaNota: 10,
    };

    await this.professorRepository.saveProfessor(prof1);
    await this.alunoRepository.saveAluno([alu1, alu2]);
    await this.disciplinaRepository.saveDisciplina([dis1]);
    await this.notasRepository.saveNotas(nota1);

    alu1.disciplinas.push(dis1);
    alu1.notas.push(nota1);
    prof1.disciplinas.push(dis1);
    dis1.notas.push(nota1);
    nota1.disciplina = dis1;

    await this.professorRepository.saveProfessor(prof1);
    await this.alunoRepository.saveAluno([alu1, alu2]);
    await this.disciplinaRepository.saveDisciplina([dis1]);
    await this.notasRepository.saveNotas(nota1);
  }
}
