import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SituationsService } from './situations.service';
import { Situation as SituationModel } from '@prisma/client';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('situations')
export class SituationsController {
  constructor(private readonly situationsService: SituationsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createSituation(
    @Body()
    situationData: {
      description: string;
    },
  ): Promise<SituationModel> {
    return this.situationsService.createSituation(situationData);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllSituations(): Promise<SituationModel[]> {
    return this.situationsService.situations({
      skip: 0,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getSituationById(@Param('id') id: string): Promise<SituationModel> {
    return this.situationsService.situation({ id: Number(id) });
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateSituation(
    @Param('id') id: string,
    @Body()
    situationData: {
      description: string;
    },
  ): Promise<SituationModel> {
    return this.situationsService.updateSituation({
      data: situationData,
      where: { id: Number(id) },
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteSituation(@Param('id') id: string): Promise<SituationModel> {
    return this.situationsService.deleteSituation({ id: Number(id) });
  }
}
