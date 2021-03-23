import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Aluno } from "./Aluno";
import { Disciplina } from "./Disciplina";

@Entity("tb_notas")
export class Notas {
  @PrimaryGeneratedColumn()
  id!: number | null;

  @ManyToOne(() => Aluno, (aluno) => aluno.notas, {
    onDelete: "CASCADE",
  })
  aluno!: Aluno;

  @ManyToOne(() => Disciplina, (disciplina) => disciplina.notas, {
    onDelete: "CASCADE",
  })
  disciplina!: Disciplina;

  @Column()
  primeiraNota!: number;

  @Column()
  segundaNota!: number;

  @Column()
  notaAtividade!: number;
}
