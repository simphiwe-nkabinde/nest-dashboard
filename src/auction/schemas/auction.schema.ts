import * as mongoose from 'mongoose';

export const AuctionSchema = new mongoose.Schema({
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
});