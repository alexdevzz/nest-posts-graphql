import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { AuthorsService } from './authors.service'
import { Author } from './entities/author.entity'
import { CreateAuthorInput } from './dto/create-author.input'

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(private readonly authorsService: AuthorsService) { }

  @Mutation(() => Author)
  createAuthor(@Args('authorInput') createAuthorInput: CreateAuthorInput) {
    return this.authorsService.createAuthor(createAuthorInput)
  }

  @Query(() => [Author], { name: 'authors' })
  authors() {
    return this.authorsService.findAll()
  }

  @Query(() => Author, { name: 'author' })
  author(@Args('id', { type: () => Int }) id: number) {
    return this.authorsService.findAuthorById(id)
  }
}
