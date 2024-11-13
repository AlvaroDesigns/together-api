import { Body, Get, Injectable, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { response } from 'express';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ItineraryService {
  constructor(private prisma: PrismaService) {}

  @Get()
  @ApiOperation({ summary: 'Get' })
  getItinerary(params: { id: string }) {
    const user = this.prisma.user.findMany({
      where: { id: Number(params.id) },
      include: {},
    });

    if (!user)
      return Response.json({ message: 'Note not found' }, { status: 404 });
  }

  @Post()
  @ApiOperation({ summary: 'Create a Itinerary' })
  async create(id: string, @Body() request: Request) {
    console.log('--------request', request, id);

    try {
      const data = await request.json();

      const itinerary = await this.prisma.itinerary.upsert({
        where: { id: Number(id) },
        update: {},
        create: data,
      });

      return response.json(itinerary);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          return Response.json(
            {
              message: 'Note not created',
            },
            {
              status: 500,
            },
          );
        }

        return Response.json(
          {
            message: error.message,
          },
          {
            status: 500,
          },
        );
      }
    }
  }
}
