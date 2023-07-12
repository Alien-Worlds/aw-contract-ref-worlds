/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 07:08:16 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { ExtendedAssetMongoModel, ExtendedAssetRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} DepositsMongoModel
 */
export type DepositsMongoModel = {
  _id?: MongoDB.ObjectId;
  account?: string;
  deposit?: ExtendedAssetMongoModel;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} DepositsRawModel
 */
export type DepositsRawModel = {
  account?: string;
  deposit?: ExtendedAssetRawModel;
  [key: string]: unknown;
};

