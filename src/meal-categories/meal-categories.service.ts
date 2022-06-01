import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MealCategory, Prisma } from '@prisma/client';

@Injectable()
export class MealCategoriesService {
  constructor(private prisma: PrismaService) {}

  async mealCategory(
    mealCategoryWhereUniqueInput: Prisma.MealCategoryWhereUniqueInput,
  ): Promise<MealCategory | null> {
    return this.prisma.mealCategory.findUnique({
      where: mealCategoryWhereUniqueInput,
    });
  }

  async mealCategories(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.MealCategoryWhereUniqueInput;
    where?: Prisma.MealCategoryWhereInput;
    orderBy?: Prisma.MealCategoryOrderByWithRelationInput;
  }): Promise<MealCategory[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.mealCategory.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createMealCategory(
    data: Prisma.MealCategoryCreateInput,
  ): Promise<MealCategory> {
    return this.prisma.mealCategory.create({
      data,
    });
  }

  async updateMealCategory(params: {
    where: Prisma.MealCategoryWhereUniqueInput;
    data: Prisma.MealCategoryUpdateInput;
  }): Promise<MealCategory> {
    const { where, data } = params;
    return this.prisma.mealCategory.update({
      data,
      where,
    });
  }

  async deleteMealCategory(
    where: Prisma.MealCategoryWhereUniqueInput,
  ): Promise<MealCategory> {
    return this.prisma.mealCategory.delete({
      where,
    });
  }
}
