import { Document } from 'mongoose';

export interface Auction extends Document {
    auctioneerId: String,
    title: String,
    details: String,
    auctionOpen : Date,
    auctionClose: Date,
    paymentDue: Date,
    itemCollection: Date,
    bidders: [String],
    items: [{
        name: String,
        images: [String],
        documents: [String],
        details: String
    }]
}