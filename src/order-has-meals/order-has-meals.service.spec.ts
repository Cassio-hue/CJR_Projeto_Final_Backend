import { Test, TestingModule } from '@nestjs/testing';
import { OrderHasMealsService } from './order-has-meals.service';

describe('OrderHasMealsService', () => {
  let service: OrderHasMealsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderHasMealsService],
    }).compile();

    service = module.get<OrderHasMealsService>(OrderHasMealsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
