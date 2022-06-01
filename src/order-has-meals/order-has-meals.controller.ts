import { Controller, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { OrderHasMealsService } from './order-has-meals.service';
import { OrderHasMeal as OrderHasMealModel } from '@prisma/client';

@Controller('order-has-meals')
export class OrderHasMealsController {
  constructor(private readonly orderHasMealsService: OrderHasMealsService) {}

  @Post()
  async createOrderHasMeal(
    @Body()
    orderHasMealData: {
      quantity: number;
      order: any;
      meal: any;
    },
  ): Promise<OrderHasMealModel> {
    return this.orderHasMealsService.createOrderHasMeal(orderHasMealData);
  }

  @Get()
  async getAllOrderHasMeals(): Promise<OrderHasMealModel[]> {
    return this.orderHasMealsService.orderHasMeals({ skip: 0 });
  }

  @Get('byId')
  async getOrderById(
    @Body()
    mealId_orderId: {
      mealId: number;
      orderId: number;
    },
  ): Promise<OrderHasMealModel> {
    return this.orderHasMealsService.orderHasMeal({ mealId_orderId });
  }

  @Patch()
  async updateOrderHasMeal(
    @Body()
    mealId_orderId: {
      mealId: number;
      orderId: number;
    },
    orderHasMealData: {
      quantity: number;
    },
  ): Promise<OrderHasMealModel> {
    return this.orderHasMealsService.updateOrderHasMeal({
      where: { mealId_orderId },
      data: orderHasMealData,
    });
  }

  @Delete()
  async deleteOrderHasMeal(
    @Body()
    mealId_orderId: {
      mealId: number;
      orderId: number;
    },
  ): Promise<OrderHasMealModel> {
    return this.orderHasMealsService.deleteOrderHasMeal({ mealId_orderId });
  }
}
