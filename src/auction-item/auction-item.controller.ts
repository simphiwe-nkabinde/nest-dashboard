import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuctionItemService } from './auction-item.service';
import { CreateAuctionItemDto } from './dto/create-auction-item.dto';
import { UpdateAuctionItemDto } from './dto/update-auction-item.dto';

@Controller('auction-item')
export class AuctionItemController {
  constructor(private readonly auctionItemService: AuctionItemService) {}

  @Post()
  create(@Body() createAuctionItemDto: CreateAuctionItemDto) {
    return this.auctionItemService.create(createAuctionItemDto);
  }

  @Get()
  findAll() {
    return this.auctionItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.auctionItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuctionItemDto: UpdateAuctionItemDto) {
    return this.auctionItemService.update(+id, updateAuctionItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.auctionItemService.remove(+id);
  }
}
