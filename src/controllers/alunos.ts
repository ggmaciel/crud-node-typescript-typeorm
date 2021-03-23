import { Controller, Delete, Get, Post, Put } from "@overnightjs/core";
import { AlunoService } from "../services/AlunoService";
import { Request, Response } from "express";
import { Aluno } from "../entities/Aluno";

@Controller("alunos")
export class AlunosController {
  constructor(private alunoService = new AlunoService()) {}

  @Get(":id")
  public async getAluno(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const alu = await this.alunoService.find(id);

      res.status(200).send(alu);
    } catch (err) {
      res
        .status(err.code)
        .send({ error: { message: err.message, code: err.code } });
    }
  }

  @Post("")
  public async postAluno(req: Request, res: Response): Promise<void> {
    try {
      const aluno: Aluno = await this.alunoService.insert(req.body);

      res.status(201).send(aluno);
    } catch (err) {
      res
        .status(err.code)
        .send({ error: { message: err.message, code: err.code } });
    }
  }

  @Delete(":id")
  public async deleteAluno(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);

      await this.alunoService.delete(id);

      res.status(204).send(`Aluno com id: ${id} deletado `);
    } catch (err) {
      res
        .status(err.code)
        .send({ error: { message: err.message, code: err.code } });
    }
  }

  @Put(":id")
  public async updateSenha(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const senha = req.body.senha;

      const updatedAluno = await this.alunoService.updateSenha(id, senha);

      res.status(200).send(updatedAluno);
    } catch (err) {
      res
        .status(err.code)
        .send({ error: { message: err.message, code: err.code } });
    }
  }
}
