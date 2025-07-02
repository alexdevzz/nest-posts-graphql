import { Injectable } from '@nestjs/common'
import { Post } from './post.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreatePostInput } from './dto/create-post.input'

@Injectable()
export class PostsService {
  constructor(@InjectRepository(Post) private postRepository: Repository<Post>) { }

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
}
