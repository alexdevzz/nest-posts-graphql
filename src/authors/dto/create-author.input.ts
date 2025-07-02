import { InputType, Field } from '@nestjs/graphql'
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator'

@InputType()
export class CreateAuthorInput {
  @MinLength(3)
  @IsNotEmpty()
  @MaxLength(20)
  @Field()
  name: string
}
