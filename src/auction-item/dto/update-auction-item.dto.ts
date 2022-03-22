import { PartialType } from '@nestjs/mapped-types';
import { CreateAuctionItemDto } from './create-auction-item.dto';

export class UpdateAuctionItemDto extends PartialType(CreateAuctionItemDto) {}
