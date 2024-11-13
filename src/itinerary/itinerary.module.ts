import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ItineraryController } from './itinerary.controller';
import { ItineraryService } from './itinerary.service';

@Module({
  controllers: [ItineraryController],
  providers: [ItineraryService, PrismaService],
})
export class ItineraryModule {}
