import { Module } from '@nestjs/common';
import { AuctionItemService } from './auction-item.service';
import { AuctionItemController } from './auction-item.controller';

@Module({
  controllers: [AuctionItemController],
  providers: [AuctionItemService]
})
export class AuctionItemModule {}
