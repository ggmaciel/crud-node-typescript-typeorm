import { Server } from "@overnightjs/core";
import express from "express";
import { AlunosController } from "./controllers/alunos";
import { createConnection } from "typeorm";
import { Db } from "./util/db";

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  public async init(): Promise<void> {
    this.setupExpress();
    await this.dbConnection();
    this.setupControllers();
  }

  private setupExpress(): void {
    this.app.use(express.json());
  }

  private setupControllers(): void {
    const alunosController = new AlunosController();
    this.addControllers([alunosController]);
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.info("Server listening on port: ", this.port);
    });
  }

  private async dbConnection(): Promise<void> {
    await createConnection();
    await this.dbInstantiation();
  }

  private async dbInstantiation(): Promise<void> {
    const db = new Db();

    await db.dbInstantiation();
  }
}
