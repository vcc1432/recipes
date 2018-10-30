import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export default class Recipe extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:false})
  title: string

  @Column('text', {nullable:false})
  description: string

  @Column('text', {nullable:false})
  pictureUrl: string

}
