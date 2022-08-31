import * as bcrypt from 'bcrypt';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity('tbl_user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  nome: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  status: boolean;
  @Column()
  confirmationToken: string;
  @Column({ nullable: false })
  salt: string;
  @CreateDateColumn()
  createAt: Date;
  @UpdateDateColumn()
  updateAt: Date;

  async checkPassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
