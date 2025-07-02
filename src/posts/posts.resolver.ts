import { Args, Int, Mutation, Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { PostsService } from './posts.service'
import { Query } from '@nestjs/graphql'
import { Post } from './entities/post.entity'
import { CreatePostInput } from './dto/create-post.input'
import { Author } from 'src/authors/entities/author.entity'

@Resolver(() => Post)
export class PostsResolver {
  constructor(private postsService: PostsService) { }

  @Query(() => [Post])
  posts() {
    return this.postsService.findAll()
  }

  @Query(() => Post)
  post(@Args('id', { type: () => Int }) id: number) {
    return this.postsService.findPostById(id)
  }

  @ResolveField(() => Author)
  author(@Parent() post: Post): Promise<Author | null> {
    return this.postsService.getAuthor(post.authorId)
  }

  @Mutation(() => Post)
  createPost(@Args('postInput') postInput: CreatePostInput) {
    return this.postsService.createPost(postInput)
  }
}
