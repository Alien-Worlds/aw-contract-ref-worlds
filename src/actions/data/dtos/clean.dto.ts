/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:07:05 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} CleanMongoModel
 */
export type CleanMongoModel = {
  _id?: MongoDB.ObjectId;
  account?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} CleanRawModel
 */
export type CleanRawModel = {
  account?: string;
  dac_id?: string;
  [key: string]: unknown;
};

