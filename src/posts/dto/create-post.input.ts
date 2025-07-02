import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator'

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
}
