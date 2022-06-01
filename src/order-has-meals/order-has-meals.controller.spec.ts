import { Test, TestingModule } from '@nestjs/testing';
import { OrderHasMealsController } from './order-has-meals.controller';
import { OrderHasMealsService } from './order-has-meals.service';

describe('OrderHasMealsController', () => {
  let controller: OrderHasMealsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderHasMealsController],
      providers: [OrderHasMealsService],
    }).compile();

    controller = module.get<OrderHasMealsController>(OrderHasMealsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
