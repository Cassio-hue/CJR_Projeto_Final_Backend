import { Module } from '@nestjs/common';
import { OrderHasMealsService } from './order-has-meals.service';
import { OrderHasMealsController } from './order-has-meals.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [OrderHasMealsController],
  providers: [OrderHasMealsService],
})
export class OrderHasMealsModule {}
