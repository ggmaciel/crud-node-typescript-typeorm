import { getRepository } from "typeorm";
import { Aluno } from "../entities/Aluno";

export class AlunoRepository {
  constructor(private repo = getRepository(Aluno)) {}

  //db save
  public async saveAluno(aluno: Aluno[]): Promise<void> {
    await this.repo.save(aluno);
  }

  public async updateSenha(id: number, senha: string): Promise<Aluno> {
    const aluno = await this.repo.findOneOrFail({ where: { id: id } });
    aluno.senha = senha;
    return await this.repo.save(aluno);
  }

  public async findById(id: number): Promise<Aluno> {
    return await this.repo.findOneOrFail({
      where: { id: id },
      relations: ["disciplinas", "notas"],
    });
  }

  public async insert(aluno: Aluno): Promise<Aluno> {
    return await this.repo.save(aluno);
  }

  public async delete(id: number): Promise<void> {
    const aluno = await this.repo.findOneOrFail({ where: { id: id } });
    await this.repo.delete(aluno);
  }

  public async deleteAll(): Promise<void> {
    await this.repo.delete({});
  }
}
