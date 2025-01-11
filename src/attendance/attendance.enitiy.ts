// src/attendance/attendance.entity.ts
import { Entity,Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { Employee } from '../employee/employee.entity';

@Entity()
export class Attendance {
  @PrimaryColumn('uuid')
  id: string = uuidv4();

  @ManyToOne(() => Employee, (employee) => employee.id, { eager: true })
  employee: Employee;

  @Column({ type: 'date' })
  date: string;
}

import { v4 as uuidv4 } from 'uuid';

