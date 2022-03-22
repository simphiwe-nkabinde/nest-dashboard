import { PartialType } from '@nestjs/mapped-types';
import { CreateAuctionDto } from './create-auction.dto';

export class UpdateAuctionDocumentsDto extends PartialType(CreateAuctionDto) {
    
}
