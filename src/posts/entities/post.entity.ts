import { ObjectType, Field, Int } from '@nestjs/graphql'
import { Author } from 'src/authors/entities/author.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number

  @Column()
  @Field()
  title: string

  @Column({ type: 'text', nullable: true })
  @Field({ nullable: true })
  content?: string

  @Column()
  @Field(() => Int)
  authorId: number

  @ManyToOne(() => Author, (author) => author.posts)
  @Field(() => Author)
  author: Author
}
