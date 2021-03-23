import { getRepository } from "typeorm";
import { Professor } from "../entities/Professor";

export class ProfessorRepository {
  constructor(private repo = getRepository(Professor)) {}

  public async saveProfessor(professor: Professor): Promise<void> {
    await this.repo.save(professor);
  }

  public async deleteAll(): Promise<void> {
    await this.repo.delete({});
  }
}
