import { Field, InputType, Int } from '@nestjs/graphql'
import { IsInt, IsNotEmpty, MaxLength, MinLength } from 'class-validator'

@InputType()
export class CreatePostInput {
  @MinLength(3)
  @IsNotEmpty()
  @MaxLength(20)
  @Field()
  title: string

  @MaxLength(400)
  @Field({ nullable: true })
  content?: string

  @IsInt()
  @Field()
  authorId: number
}
