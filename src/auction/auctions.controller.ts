import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuctionsService } from './auctions.service';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDetailsDto } from './dto/update-auction-details.dto';
import { UpdateAuctionDocumentsDto } from './dto/update-auction-documents.dto';
import { UpdateAuctionTermsDto } from './dto/update-auction-terms.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';

@Controller('auction')
export class AuctionsController {
  constructor(private readonly auctionsService: AuctionsService) {}

  @Post()
  create(@Body() createAuctionDto: CreateAuctionDto) {
    return this.auctionsService.create(createAuctionDto);
  }

  //GET
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.auctionsService.findOne(+id);
  }
  @Get('admin/:adminId')
  findAllByAdmin(@Param('adminId') adminId: string) {
    return this.auctionsService.findAllByAdmin(adminId)
  }

  //UPDATE auction documents, details, terms - ADMIN
  @Patch(':id/documents')
  updateDocuments(@Param(':id') id: string, @Body() updateAuctionDocumentsDto: UpdateAuctionDocumentsDto) {
    return this.auctionsService.updateDocuments(+id, updateAuctionDocumentsDto)
  }
  @Patch(':id/details')
  updateDetails(@Param(':id') id: string, @Body() updateAuctionDetailsDto: UpdateAuctionDetailsDto) {
    return this.auctionsService.updateDetails(+id, UpdateAuctionDetailsDto)
  }
  @Patch(':id/terms')
  updateTerms(@Param(':id') id: string, @Body() updateAuctionTermsDto: UpdateAuctionTermsDto) {
    return this.auctionsService.updateTerms(+id, UpdateAuctionTermsDto)
  }


  //DELETE
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.auctionsService.remove(+id);
  }

  // @Get()
  // findAll() {
  //   return this.auctionsService.findAll();
  // }


  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuctionDto: UpdateAuctionDto) {
  //   return this.auctionsService.update(+id, updateAuctionDto);
  // }


}
