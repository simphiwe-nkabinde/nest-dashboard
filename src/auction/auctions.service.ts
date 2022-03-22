import { Inject, Injectable } from '@nestjs/common';
import {Model } from 'mongoose';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';
import { Auction } from './interfaces/auction.interface';

@Injectable()
export class AuctionsService {

  constructor(
    @Inject('AUCTION_MODEL')
    private auctionModel: Model<Auction>
  ) {}

  async create(createAuctionDto: CreateAuctionDto): Promise<Auction> {
    const createdAuction = new this.auctionModel(createAuctionDto);
    return createdAuction.save();
  }

  async findAllByAdmin(id: string): Promise<Auction[]> {
    return this.auctionModel.find({auctioneerId: id})
  }

  async updateDocuments(id: string, updateAuctionDocumentsDto: UpdateAuctionDto) {
    
  }

  findAll() {
    return `This action returns all auction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auction`;
  }

  update(id: number, updateAuctionDto: UpdateAuctionDto) {
    return `This action updates a #${id} auction`;
  }

  remove(id: number) {
    return `This action removes a #${id} auction`;
  }
}
