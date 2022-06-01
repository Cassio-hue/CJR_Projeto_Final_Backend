import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Situation, Prisma } from '@prisma/client';

@Injectable()
export class SituationsService {
  constructor(private prisma: PrismaService) {}

  async situation(
    situationWhereUniqueInput: Prisma.SituationWhereUniqueInput,
  ): Promise<Situation | null> {
    return this.prisma.situation.findUnique({
      where: situationWhereUniqueInput,
    });
  }

  async situations(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SituationWhereUniqueInput;
    where?: Prisma.SituationWhereInput;
    orderBy?: Prisma.SituationOrderByWithRelationInput;
  }): Promise<Situation[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.situation.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createSituation(data: Prisma.SituationCreateInput): Promise<Situation> {
    return this.prisma.situation.create({
      data,
    });
  }

  async updateSituation(params: {
    where: Prisma.SituationWhereUniqueInput;
    data: Prisma.SituationUpdateInput;
  }): Promise<Situation> {
    const { where, data } = params;
    return this.prisma.situation.update({
      data,
      where,
    });
  }

  async deleteSituation(
    where: Prisma.SituationWhereUniqueInput,
  ): Promise<Situation> {
    return this.prisma.situation.delete({
      where,
    });
  }
}
