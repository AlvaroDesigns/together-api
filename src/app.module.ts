import { Module } from '@nestjs/common';
import { ItineraryModule } from './itinerary/itinerary.module';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, ItineraryModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
