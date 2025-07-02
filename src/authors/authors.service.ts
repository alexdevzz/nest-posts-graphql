import { Injectable } from '@nestjs/common'
import { CreateAuthorInput } from './dto/create-author.input'
import { InjectRepository } from '@nestjs/typeorm'
import { Author } from './entities/author.entity'
import { Repository } from 'typeorm'

@Injectable()
export class AuthorsService {
  constructor(@InjectRepository(Author) private authorRepository: Repository<Author>) { }

  createAuthor(author: CreateAuthorInput): Promise<Author> {
    const newAuthor = this.authorRepository.create(author)
    return this.authorRepository.save(newAuthor)
  }

  findAll(): Promise<Author[]> {
    return this.authorRepository.find()
  }

  findAuthorById(id: number): Promise<Author | null> {
    return this.authorRepository.findOne({
      where: {
        id,
      },
    })
  }
}
