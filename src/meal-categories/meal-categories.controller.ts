import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MealCategoriesService } from './meal-categories.service';
import { MealCategory as MealCategoryModel } from '@prisma/client';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('meal-categories')
export class MealCategoriesController {
  constructor(private readonly mealCategoriesService: MealCategoriesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createMealCategory(
    @Body()
    mealCategoryData: {
      name: string;
    },
  ): Promise<MealCategoryModel> {
    return this.mealCategoriesService.createMealCategory(mealCategoryData);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllMealCategories(): Promise<MealCategoryModel[]> {
    return this.mealCategoriesService.mealCategories({
      skip: 0,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getMealCategoryById(
    @Param('id') id: string,
  ): Promise<MealCategoryModel> {
    return this.mealCategoriesService.mealCategory({ id: Number(id) });
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateMealCategory(
    @Param('id') id: string,
    @Body()
    mealCategoryData: {
      name: string;
    },
  ): Promise<MealCategoryModel> {
    return this.mealCategoriesService.updateMealCategory({
      data: mealCategoryData,
      where: { id: Number(id) },
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteMealCategory(
    @Param('id') id: string,
  ): Promise<MealCategoryModel> {
    return this.mealCategoriesService.deleteMealCategory({ id: Number(id) });
  }
}
