import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_task')
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  status: string;
}
