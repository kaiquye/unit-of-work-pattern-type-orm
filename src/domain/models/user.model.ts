import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Team } from './team.model';
import { Document } from './document.model';

@Entity('tb_user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @ManyToOne(() => Team, {
    eager: true,
  })
  @JoinColumn({ name: 'team_id' })
  Team: Team;

  @OneToOne(() => Document)
  Document: Document;

  @Column()
  position: string;

  @Column()
  @Exclude()
  team_id: string;

  @Column()
  password: string;

  @UpdateDateColumn()
  @Exclude()
  created_at: number;

  @UpdateDateColumn()
  @Exclude()
  updated_at: number;
}
