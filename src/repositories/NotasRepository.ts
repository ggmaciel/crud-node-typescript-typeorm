import { getRepository } from "typeorm";
import { Notas } from "../entities/Notas";

export class NotasRepository {
  constructor(private repo = getRepository(Notas)) {}

  public async saveNotas(notas: Notas): Promise<void> {
    await this.repo.save(notas);
  }

  public async deleteAll(): Promise<void> {
    await this.repo.delete({});
  }

  public async findAll(): Promise<Notas[] | undefined> {
    return await this.repo.find({ relations: ["disciplina", "aluno"] });
  }
}
