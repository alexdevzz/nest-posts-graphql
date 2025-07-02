import { Args, Int, Mutation, Resolver } from '@nestjs/graphql'
import { PostsService } from './posts.service'
import { Query } from '@nestjs/graphql'
import { Post } from './post.entity'
import { CreatePostInput } from './dto/create-post.input'

@Resolver()
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

  @Mutation(() => Post)
  createPost(@Args('postInput') postInput: CreatePostInput) {
    return this.postsService.createPost(postInput)
  }
}
