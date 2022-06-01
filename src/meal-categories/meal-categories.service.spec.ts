import { Test, TestingModule } from '@nestjs/testing';
import { MealCategoriesService } from './meal-categories.service';

describe('MealCategoriesService', () => {
  let service: MealCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealCategoriesService],
    }).compile();

    service = module.get<MealCategoriesService>(MealCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
