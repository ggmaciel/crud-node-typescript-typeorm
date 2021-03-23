import { Column, Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";
import { Disciplina } from "./Disciplina";
import { Notas } from "./Notas";
import { User } from "./User";

@Entity("tb_alunos")
export class Aluno extends User {
  @Column()
  faltas!: number;

  @Column()
  curso!: string;

  @Column()
  numMatricula!: string;

  @Column()
  moduloAtual!: string;

  @OneToMany(() => Notas, (notas) => notas.aluno, {
    onDelete: "CASCADE",
  })
  notas!: Notas[];

  @ManyToMany(() => Disciplina, (disciplinas) => disciplinas.alunos, {
    onDelete: "CASCADE",
  })
  @JoinTable()
  disciplinas!: Disciplina[];
}
