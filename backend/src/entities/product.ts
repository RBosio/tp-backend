import { Field, Float, ID, Int, ObjectType } from "type-graphql";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category";

@ObjectType()
@Entity()
export class Product {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number

  @Field(() => String)
  @Column({length: 20})
  name!: string

  @Field(() => Float)
  @Column('decimal', {precision: 6, scale: 2})
  price!: number

  @Field(() => Int)
  @Column()
  stock!: number

  @Field(() => Date)
  @CreateDateColumn()
  created_at!: Date

  @Field(() => ID)
  @ManyToOne(() => Category, category => category.id, {
    cascade: true
  })
  category!: number

  @Field(() => String)
  @Column({length: 100, nullable: true})
  image!: string

  @Field(() => Boolean)
  @Column({default: true})
  status!: boolean
}