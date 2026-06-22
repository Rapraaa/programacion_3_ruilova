import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity'; // Ajusta la ruta a tu entidad
import { Category } from './entities/category.entity'; // Ajusta la ruta a tu entidad
import { CreatePostDto } from './dto/create-post.dto'; // Ajusta la ruta a tu DTO

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,

    @InjectRepository(Category)
    private readonly categoriesRepository: Repository<Category>,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    // 1. Busca la categoría — si no existe, lanza un error 404 explícito
    const category = await this.categoriesRepository.findOne({
      where: { id: createPostDto.categoryId },
    });

    if (!category) {
      throw new NotFoundException(
        `La categoría con ID "${createPostDto.categoryId}" no existe.`,
      );
    }

    // 2. Crea el post en memoria vinculando el DTO y la entidad categoría
    const post = this.postsRepository.create({
      ...createPostDto,
      category, // Asignamos el objeto de la categoría encontrada
    });

    // 3. Lo guarda en la base de datos y lo devuelve
    return await this.postsRepository.save(post);
  }

  async findOne(id: string): Promise<Post> {
    const post = await this.postsRepository.findOne({
      where: { id },
      relations: ['category'],
    });

    if (!post) {
      throw new NotFoundException(`El post con ID "${id}" no fue encontrado.`);
    }

    return post;
  }
}
