import { PartialType } from '@nestjs/mapped-types';
import { CreateAuctionDto } from './create-auction.dto';

export class UpdateAuctionTermsDto extends PartialType(CreateAuctionDto) {
    terms: string
}
