import { Entity, Column, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Employee {
  @PrimaryColumn('uuid')
  id: string = uuidv4();

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: 'Normal Employee' })
  group: string;
}