/* eslint-disable new-cap */
import { Entity, Column } from 'typeorm';
import { Usuario } from './Usuario';

@Entity()
/** User representation */
export class Pessoa extends Usuario {
  @Column({
    length: 50,
    nullable: false,
  })
  primeiroNome: string;

  @Column({
    length: 50,
    nullable: false,
  })
  ultimoNome: string;

  @Column({
    length: 12,
    nullable: false,
  })
  cpf: string;
}
