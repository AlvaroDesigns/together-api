import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateItineraryDto } from './dto/create-itinerary.dto';
import { ItineraryService } from './itinerary.service';

@Controller('itinerary')
export class ItineraryController {
  constructor(private itineraryService: ItineraryService) {}

  @ApiTags('itinerary')
  @Get(':id')
  @ApiOperation({ summary: 'Get itinerary by id' })
  get(@Param('id') id: string) {
    return this.itineraryService.getItinerary({ id });
  }

  @ApiTags('itinerary')
  @Post(':id')
  @ApiOperation({ summary: 'Create itinerary' })
  @ApiBody({ type: CreateItineraryDto })
  @ApiParam({ name: 'id', type: String, description: 'ID of the itinerary' })
  async createItinerary(@Param('id') id: string, @Body() itinerary: any) {
    return this.itineraryService.create(id, itinerary);
  }
}
