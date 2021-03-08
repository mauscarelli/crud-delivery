/* eslint-disable new-cap */
import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from 'typeorm';
import { Endereco } from './Endereco';

@Entity()
/** Representacao usuario */
export class Usuario {
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

  // TODO - Corrigir erro salvando relação
  // eslint-disable-next-line prettier/prettier
  // @OneToMany(type => Endereco, end => end.usuario, {cascade: true})
  @OneToMany(type => Endereco, end => end.usuario)
  endereco: Endereco[];
}
