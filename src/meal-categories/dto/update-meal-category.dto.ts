import { PartialType } from '@nestjs/mapped-types';
import { CreateMealCategoryDto } from './create-meal-category.dto';

export class UpdateMealCategoryDto extends PartialType(CreateMealCategoryDto) {}
