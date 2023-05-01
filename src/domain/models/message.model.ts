import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { User } from './user.model';
import { Team } from './team.model';

@Entity('tb_message')
export class Message extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @Column()
  type: number;

  @ManyToOne(() => User, {
    eager: true,
  })
  @JoinColumn({ name: 'user_id' })
  User: User;

  @Column()
  @Exclude()
  user_id: number;

  @ManyToOne(() => Team, {
    eager: true,
  })
  @JoinColumn({ name: 'team_id' })
  Team: Team;

  @Column()
  @Exclude()
  team_id: number;

  @UpdateDateColumn()
  @Exclude()
  created_at: number;

  @UpdateDateColumn()
  @Exclude()
  updated_at: number;
}
