import { Module } from '@nestjs/common';
import { AuctionsService } from './auctions.service';
import { AuctionsController } from './auctions.controller';
import { auctionsProviders } from './auctions.providers';
import { DatabaseModule } from '../database/database.module';
DatabaseModule

@Module({
  imports: [DatabaseModule],
  controllers: [AuctionsController],
  providers: [AuctionsService, ...auctionsProviders]
})
export class AuctionModule {}
