import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MealsService } from './meals.service';
import { Meal as MealModel } from '@prisma/client';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('meals')
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createMeal(
    @Body()
    mealData: {
      name: string;
      description?: string;
      price: string;
      imagePath?: string;
      available?: boolean;
      mealCategory: any;
    },
  ): Promise<MealModel> {
    return this.mealsService.createMeal(mealData);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllMeals(): Promise<MealModel[]> {
    return this.mealsService.meals({
      skip: 0,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getMealById(@Param('id') id: string): Promise<MealModel> {
    return this.mealsService.meal({ id: Number(id) });
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateMealField(
    @Param('id') id: string,
    @Body()
    mealData: {
      name?: string;
      description?: string;
      price?: string;
      imagePath?: string;
      available?: boolean;
      mealCategory?: any;
    },
  ): Promise<MealModel> {
    return this.mealsService.updateMeal({
      data: mealData,
      where: { id: Number(id) },
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteMeal(@Param('id') id: string): Promise<MealModel> {
    return this.mealsService.deleteMeal({ id: Number(id) });
  }
}
