import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Category } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    return this.prismaService.category.create({
      data: createCategoryDto,
    });
  }

  async findAll(filter: string) {
    // Obtener los nombres de los campos válidos a partir del tipo `Category`
    const validFields: Array<keyof Category> = [
      'id',
      'name',
      'description',
      'createdAt',
    ]; // Add all the fields of Category here

    // Convertir el parámetro de filtro en un array de campos
    const selectedFields = filter ? filter.split(',') : null;

    // Filtrar los campos para incluir solo los válidos
    const filteredFields = selectedFields
      ? selectedFields.filter((field) =>
          validFields.includes(field as keyof Category),
        )
      : [];

    // Construir el objeto `select` solo con los campos válidos
    const select = filteredFields.length
      ? filteredFields.reduce((acc, field) => {
          acc[field] = true;
          return acc;
        }, {})
      : undefined;

    // Realizar la consulta en Prisma con los campos seleccionados
    return this.prismaService.category.findMany({
      select,
    });
  }

  async findCategory(id: number, deleted?: boolean) {
    // Construir el filtro `where` condicionalmente
    const where: any = { id };

    // Agregar `deletedAt` al filtro solo si es necesario
    if (deleted === true) {
      where.deletedAt = { not: null }; // Busca registros eliminados
    } else if (deleted === false) {
      where.deletedAt = null; // Busca registros que no han sido eliminados
    }

    const category = await this.prismaService.category.findFirst({
      where,
    });

    if (!category) throw new NotFoundException('Category not found');

    return category;
  }
  findOne(id: number) {
    const category = this.findCategory(id, false);
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    if (Object.keys(updateCategoryDto).length === 0) {
      throw new NotFoundException('Category not found');
    }

    const dataCategory = await this.findCategory(id, false);

    if (!dataCategory) throw new NotFoundException('Category not found');

    const updatedCategory = await this.prismaService.category.update({
      where: {
        id,
      },
      data: updateCategoryDto,
    });
    return {
      success: true,
      message: 'Category updated successfully',
      data: updatedCategory,
    };
  }

  async remove(id: number) {
    const isRemoved = await this.findCategory(id, false);

    if (!isRemoved) {
      throw new NotFoundException('Category not found');
    }

    const deletd = {
      deletedAt: new Date(),
    };

    return this.prismaService.category.update({
      where: {
        id,
      },
      data: deletd,
    });
  }
}
