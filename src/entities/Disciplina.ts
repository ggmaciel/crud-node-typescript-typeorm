import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Aluno } from "./Aluno";
import { Notas } from "./Notas";
import { Professor } from "./Professor";

@Entity("tb_disciplinas")
export class Disciplina {
  @PrimaryGeneratedColumn()
  id!: number | null;

  @Column()
  nome!: string;

  @Column()
  horario!: string;

  @Column()
  turno!: string;

  @ManyToOne(() => Professor, (professor) => professor.disciplinas, {
    onDelete: "CASCADE",
  })
  professor!: Professor;

  @ManyToMany(() => Aluno, (alunos) => alunos.disciplinas, {
    onDelete: "CASCADE",
  })
  alunos!: Aluno[];

  @OneToMany(() => Notas, (notas) => notas.disciplina, {
    onDelete: "CASCADE",
  })
  notas!: Notas[];
}
