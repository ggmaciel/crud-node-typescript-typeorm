import { Entity, OneToMany } from "typeorm";
import { Disciplina } from "./Disciplina";
import { User } from "./User";

@Entity("tb_professor")
export class Professor extends User {
  @OneToMany(() => Disciplina, (disciplinas) => disciplinas.professor, {
    onDelete: "CASCADE",
  })
  disciplinas!: Disciplina[];
}
