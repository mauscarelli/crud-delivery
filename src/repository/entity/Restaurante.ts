/* eslint-disable new-cap */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
/** User representation */
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
