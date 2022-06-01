import { Test, TestingModule } from '@nestjs/testing';
import { MealCategoriesController } from './meal-categories.controller';
import { MealCategoriesService } from './meal-categories.service';

describe('MealCategoriesController', () => {
  let controller: MealCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MealCategoriesController],
      providers: [MealCategoriesService],
    }).compile();

    controller = module.get<MealCategoriesController>(MealCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
