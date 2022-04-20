import { Address, BigInt } from "@graphprotocol/graph-ts";
import { Collection, Sale } from "../generated/schema";

export function getOrCreateCollection(address: Address): Collection {
  var collectionAddress = address.toHex();
  let collection = Collection.load(collectionAddress);

  if (collection == null) {
    collection = new Collection(collectionAddress);
    collection.save();
  }
  return collection;
}

export function createSale(
  saleId: string,
  amount: BigInt,
  buyer: Address,
  seller: Address,
  collection: Collection,
  tokenId: BigInt,
  timestamp: BigInt,
  currency: Address,
  price: BigInt
): void {
    
    let sale = new Sale(saleId);
    sale.amount = amount;
    sale.buyer = buyer.toHex();
    sale.seller = seller.toHex();
    sale.collection = collection.id;
    sale.tokenId = tokenId;
    sale.timestamp = timestamp;
    sale.currency = currency;
    sale.price = price;
    sale.save();
}
