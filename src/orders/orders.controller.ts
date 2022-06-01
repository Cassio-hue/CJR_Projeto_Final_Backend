import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order as OrderModel } from '@prisma/client';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(
    @Body()
    orderData: {
      price: string;
      user: any;
      situation: any;
      meals: any;
      OrderId: number;
    },
  ): Promise<OrderModel> {
    return this.ordersService.createOrder(orderData);
  }

  @Get()
  async getAllOrders(): Promise<OrderModel[]> {
    return this.ordersService.orders({
      skip: 0,
    });
  }

  @Get(':id')
  async getOrderById(@Param('id') id: string): Promise<OrderModel> {
    return this.ordersService.order({ id: Number(id) });
  }

  @Patch(':id')
  async updateOrderField(
    @Param('id') id: string,
    @Body()
    orderData: {
      price?: string;
      situation?: any;
    },
  ): Promise<OrderModel> {
    return this.ordersService.updateOrder({
      data: orderData,
      where: { id: Number(id) },
    });
  }

  @Delete(':id')
  async deleteOrder(@Param('id') id: string): Promise<OrderModel> {
    return this.ordersService.deleteOrder({ id: Number(id) });
  }
}
