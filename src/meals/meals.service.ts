import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Meal, Prisma } from '@prisma/client';

@Injectable()
export class MealsService {
  constructor(private prisma: PrismaService) {}

  async meal(
    mealWhereUniqueInput: Prisma.MealWhereUniqueInput,
  ): Promise<Meal | null> {
    return this.prisma.meal.findUnique({
      where: mealWhereUniqueInput,
    });
  }

  async meals(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.MealWhereUniqueInput;
    where?: Prisma.MealWhereInput;
    orderBy?: Prisma.MealOrderByWithRelationInput;
  }): Promise<Meal[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.meal.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createMeal(data: Prisma.MealCreateInput): Promise<Meal> {
    return this.prisma.meal.create({
      data: {
        ...data,
        mealCategory: {
          connect: { id: Number(data.mealCategory) },
        },
      },
    });
  }

  async updateMeal(params: {
    where: Prisma.MealWhereUniqueInput;
    data: Prisma.MealUpdateInput;
  }): Promise<Meal> {
    const { where, data } = params;

    if (data.mealCategory) {
      await this.prisma.meal.update({
        data: {
          mealCategory: {
            disconnect: true,
          },
        },
        where,
      });

      return this.prisma.meal.update({
        data: {
          ...data,
          mealCategory: {
            connect: { id: Number(data.mealCategory) },
          },
        },
        where,
      });
    } else {
      return this.prisma.meal.update({
        data,
        where,
      });
    }
  }

  async deleteMeal(where: Prisma.MealWhereUniqueInput): Promise<Meal> {
    return this.prisma.meal.delete({
      where,
    });
  }
}
