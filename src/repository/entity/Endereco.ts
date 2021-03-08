/* eslint-disable new-cap */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from './Usuario';

@Entity()
/** Representação de endereço */
export class Endereco {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  rua: string;

  @Column({
    type: 'int',
  })
  numero: number;

  @Column()
  complemento: string;

  @Column({
    nullable: false,
  })
  cep: string;

  @Column({
    nullable: false,
  })
  cidade: string;

  @Column({
    type: 'varchar',
    length: 2,
    nullable: false,
  })
  UF: string;

  @ManyToOne(() => Usuario, (user) => user.endereco)
  usuario: Usuario;
}
