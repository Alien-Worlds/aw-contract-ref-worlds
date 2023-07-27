/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:05:56 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';
import { ExtendedAssetMongoModel, ExtendedAssetRawModel } from '@alien-worlds/aw-antelope';

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

