import { Module } from '@nestjs/common';
import { MealCategoriesService } from './meal-categories.service';
import { MealCategoriesController } from './meal-categories.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MealCategoriesController],
  providers: [MealCategoriesService],
})
export class MealCategoriesModule {}
