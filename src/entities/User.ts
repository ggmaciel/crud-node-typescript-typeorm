import { Column, PrimaryGeneratedColumn } from "typeorm";

export abstract class User {
  @PrimaryGeneratedColumn()
  id!: number | null;

  @Column()
  nome!: string;

  @Column()
  senha!: string;

  @Column()
  telefone!: string;
}
