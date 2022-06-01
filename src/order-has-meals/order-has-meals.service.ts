import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderHasMeal, Prisma } from '@prisma/client';

@Injectable()
export class OrderHasMealsService {
  constructor(private prisma: PrismaService) {}

  async orderHasMeal(
    orderHasMealWhereUniqueInput: Prisma.OrderHasMealWhereUniqueInput,
  ): Promise<OrderHasMeal | null> {
    return this.prisma.orderHasMeal.findUnique({
      where: orderHasMealWhereUniqueInput,
    });
  }

  async orderHasMeals(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.OrderHasMealWhereUniqueInput;
    where?: Prisma.OrderHasMealWhereInput;
    orderBy?: Prisma.OrderHasMealOrderByWithRelationInput;
  }): Promise<OrderHasMeal[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.orderHasMeal.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createOrderHasMeal(
    data: Prisma.OrderHasMealCreateInput,
  ): Promise<OrderHasMeal> {
    return this.prisma.orderHasMeal.create({
      data: {
        ...data,
        order: {
          connect: {
            id: Number(data.order),
          },
        },
        meal: {
          connect: {
            id: Number(data.meal),
          },
        },
      },
    });
  }

  async updateOrderHasMeal(params: {
    where: Prisma.OrderHasMealWhereUniqueInput;
    data: Prisma.OrderHasMealUpdateInput;
  }): Promise<OrderHasMeal> {
    const { where, data } = params;
    return this.prisma.orderHasMeal.update({
      data,
      where,
    });
  }

  async deleteOrderHasMeal(
    where: Prisma.OrderHasMealWhereUniqueInput,
  ): Promise<OrderHasMeal> {
    return this.prisma.orderHasMeal.delete({ where });
  }
}
