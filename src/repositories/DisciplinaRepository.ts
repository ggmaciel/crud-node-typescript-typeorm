import { getRepository } from "typeorm";
import { Disciplina } from "../entities/Disciplina";

export class DisciplinaRepository {
  constructor(private repo = getRepository(Disciplina)) {}

  public async saveDisciplina(disciplina: Disciplina[]): Promise<void> {
    await this.repo.save(disciplina);
  }

  public async deleteAll(): Promise<void> {
    await this.repo.delete({});
  }

  public async find(id: number | null): Promise<Disciplina | undefined> {
    return await this.repo.findOne({
      where: { id: id },
      relations: ["alunos", "professor", "notas"],
    });
  }
}
