import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  JoinColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { User } from './user.model';

@Entity('tb_document')
export class Document extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  document_type: string;

  @Column()
  document: number;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  User: User;

  @Column()
  @Exclude()
  user_id: number;
}
