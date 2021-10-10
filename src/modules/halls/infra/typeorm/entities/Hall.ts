import { Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { School } from '@modules/schools/infra/typeorm/entities/School';

@Entity('hall')
export class Hall{
  @PrimaryColumn()
  id: string;

  @Column()
  number: string;

  @Column()
  school_id: string;

  @CreateDateColumn()
  created_at: Date;


  @UpdateDateColumn()
  updated_at: Date;


  @ManyToOne(()=> School, school => school.halls,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn({name: 'school_id'})
  school:School;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }

}