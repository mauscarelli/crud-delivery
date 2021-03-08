/* eslint-disable new-cap */
import { PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Endereco } from './Endereco';

/** Abstração de usuário */
export abstract class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
    unique: true,
    nullable: false,
  })
  username: string;

  @Column({
    nullable: false,
  })
  password: string;

  @Column({
    nullable: false,
  })
  telefone: string;

  @OneToMany(() => Endereco, (end) => end.usuario)
  endereco: Endereco[];
}
