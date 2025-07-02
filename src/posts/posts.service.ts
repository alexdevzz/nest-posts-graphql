import { Injectable } from '@nestjs/common'
import { Post } from './entities/post.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreatePostInput } from './dto/create-post.input'
import { Author } from 'src/authors/entities/author.entity'
import { AuthorsService } from 'src/authors/authors.service'

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
    private authorService: AuthorsService
  ) { }

  async findAll(): Promise<Post[]> {
    return this.postRepository.find()
  }

  async createPost(post: CreatePostInput): Promise<Post> {
    const newPost = this.postRepository.create(post)
    return this.postRepository.save(newPost)
  }

  async findPostById(id: number): Promise<Post | null> {
    return this.postRepository.findOne({
      where: {
        id,
      },
    })
  }

  async getAuthor(authorId: number): Promise<Author | null> {
    return this.authorService.findAuthorById(authorId)
  }
}
