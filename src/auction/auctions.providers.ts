import { Connection } from 'mongoose';
import { AuctionSchema } from './schemas/auction.schema';

export const auctionsProviders = [
  {
    provide: 'AUCTION_MODEL',
    useFactory: (connection: Connection) => connection.model('Auction', AuctionSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];