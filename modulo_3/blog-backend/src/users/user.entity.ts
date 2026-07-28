import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  username!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ nullable: true })
  password?: string;

  @Column({ default: true })
  isActive!: boolean;

  @Column({ nullable: true })
  profile!: string;

  @Column({ unique: true, nullable: true })
  googleId?: string | null;

  @Column({ nullable: true })
  avatarUrl?: string | null;
}