import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Hall } from '@modules/halls/infra/typeorm/entities/Hall';

@Entity('school')
export class School {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string

  @Column()
  country: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;


  @OneToMany(() => Hall, hall => hall.school )
  @JoinColumn({name: 'school_id'})
  halls: Hall[];

  constructor(){
    if(!this.id ){
      this.id = uuid();
    }
  }

}