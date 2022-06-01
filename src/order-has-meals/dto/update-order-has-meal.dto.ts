import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderHasMealDto } from './create-order-has-meal.dto';

export class UpdateOrderHasMealDto extends PartialType(CreateOrderHasMealDto) {}
