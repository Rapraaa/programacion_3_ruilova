
import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductDTO } from './product_dto';

@Injectable()
export class AppService {
  private products: ProductDTO[] = [
    {
      id: 1,
      name: "Laptop",
      price: 999.99,
      stock: 15
    },
    {
      id: 2,
      name: "Laptop DELL",
      price: 999.99,
      stock: 15
    }
  ];

  getHealth(): any {
    return {
      status: 'online',
      service: 'blog service api',
      version: '0.0.1',
      date: new Date()
    };
  }

  createProducto(product: ProductDTO): ProductDTO {
    const newProduct: ProductDTO = {
      ...product,
      id: Math.floor(Math.random() * 1000) + 1,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  findAll(): ProductDTO[] {
    return this.products;
  }

  findbyid(id: string): ProductDTO {
    const product = this.products.find(p => p.id === Number(id));
    if (!product) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
    return product;
  }

  update(id: string, updatedProductDto: Partial<ProductDTO>): ProductDTO {
    const product = this.products.find(p => p.id === Number(id));

    if (!product) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }

    Object.assign(product, updatedProductDto);
    return product;
  }

  deleteById(id: string): ProductDTO {
    const index = this.products.findIndex(p => p.id === Number(id));

    if (index === -1) {
      throw new NotFoundException(`Producto con ID ${id} no existe`);
    }

    const deletedProduct = this.products[index];

    this.products.splice(index, 1);

    return deletedProduct;
  }

  areaTriangulo(data: any): any {
    const area = (data.base * data.altura) / 2;
    return {
      "base": data.base,
      "altura": data.altura,
      "areaTriangulo": area,
    };
  }
}