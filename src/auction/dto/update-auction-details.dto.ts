import { PartialType } from '@nestjs/mapped-types';
import { CreateAuctionDto } from './create-auction.dto';

export class UpdateAuctionDetailsDto extends PartialType(CreateAuctionDto) {
    auctionOpen : Date;
    auctionClose: Date;
    paymentDue: Date;
    itemCollection: Date;
    details: string;
}
