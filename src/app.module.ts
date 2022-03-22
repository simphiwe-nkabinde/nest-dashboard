import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuctionItemModule } from './auction-item/auction-item.module';
import { AuctionModule } from './auction/auction.module';

@Module({
  imports: [AuctionItemModule, AuctionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
