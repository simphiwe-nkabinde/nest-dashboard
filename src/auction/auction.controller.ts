import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuctionService } from './auction.service';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDetailsDto } from './dto/update-auction-details.dto';
import { UpdateAuctionDocumentsDto } from './dto/update-auction-documents.dto';
import { UpdateAuctionTermsDto } from './dto/update-auction-terms.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';

@Controller('auction')
export class AuctionController {
  constructor(private readonly auctionService: AuctionService) {}

  @Post()
  create(@Body() createAuctionDto: CreateAuctionDto) {
    return this.auctionService.create(createAuctionDto);
  }

  //GET
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.auctionService.findOne(+id);
  }
  @Get('admin/:adminId')
  findAllByAdmin(@Param('adminId') adminId: string) {
    return this.auctionService.findAllByAdmin(+adminId)
  }

  //UPDATE auction documents, details, terms - ADMIN
  @Patch(':id/documents')
  updateDocuments(@Param(':id') id: string, @Body() updateAuctionDocumentsDto: UpdateAuctionDocumentsDto) {
    return this.auctionService.updateDocuments(+id, updateAuctionDocumentsDto)
  }
  @Patch(':id/details')
  updateDetails(@Param(':id') id: string, @Body() updateAuctionDetailsDto: UpdateAuctionDetailsDto) {
    return this.auctionService.updateDetails(+id, UpdateAuctionDetailsDto)
  }
  @Patch(':id/terms')
  updateTerms(@Param(':id') id: string, @Body() updateAuctionTermsDto: UpdateAuctionTermsDto) {
    return this.auctionService.updateTerms(+id, UpdateAuctionTermsDto)
  }


  //DELETE
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.auctionService.remove(+id);
  }

  // @Get()
  // findAll() {
  //   return this.auctionService.findAll();
  // }


  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuctionDto: UpdateAuctionDto) {
  //   return this.auctionService.update(+id, updateAuctionDto);
  // }


}
