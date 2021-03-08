/* eslint-disable new-cap */
import { Entity, Column } from 'typeorm';
import { Usuario } from './Usuario';

@Entity()
/** User representation */
export class Pessoa {
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

  // eslint-disable-next-line prettier/prettier
  @Column(type => Usuario)
  usuario: Usuario;
}
