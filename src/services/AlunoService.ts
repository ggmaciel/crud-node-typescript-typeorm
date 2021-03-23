import { QueryFailedError } from "typeorm";
import { Aluno } from "../entities/Aluno";
import { AlunoRepository } from "../repositories/AlunoRepository";
import { InternalError } from "./errors/InternalError";

export class AlunoRequestError extends InternalError {
  constructor(message: string, code = 404) {
    super(message, code);
  }
}

export class EmptyFieldsError extends InternalError {
  constructor(message: string, code = 400) {
    super(message, code);
  }
}

export class AlunoService {
  constructor(private alunoRepository = new AlunoRepository()) {}

  public async find(id: number): Promise<Aluno> {
    try {
      return await this.alunoRepository.findById(id);
    } catch (err) {
      throw new AlunoRequestError("Aluno não encontrado");
    }
  }

  public async insert(aluno: Aluno): Promise<Aluno> {
    try {
      return await this.alunoRepository.insert(aluno);
    } catch (err) {
      if (err instanceof QueryFailedError) {
        throw new EmptyFieldsError("Campos em branco");
      } else {
        throw new AlunoRequestError("Algo deu errado");
      }
    }
  }

  public async delete(id: number): Promise<void> {
    try {
      await this.alunoRepository.delete(id);
    } catch (err) {
      throw new AlunoRequestError("Aluno não encontrado");
    }
  }

  public async updateSenha(id: number, senha: string): Promise<Aluno> {
    try {
      if (!senha || senha == "" || senha == undefined) {
        throw new EmptyFieldsError("");
      }
      return await this.alunoRepository.updateSenha(id, senha);
    } catch (err) {
      if (err instanceof EmptyFieldsError) {
        throw new EmptyFieldsError("Senha não pode ser em branco");
      } else {
        throw new AlunoRequestError("Aluno não encontrado");
      }
    }
  }
}
