/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 07:08:16 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} RmvexpiredMongoModel
 */
export type RmvexpiredMongoModel = {
  _id?: MongoDB.ObjectId;
  referendum_id?: number;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} RmvexpiredRawModel
 */
export type RmvexpiredRawModel = {
  referendum_id?: number;
  dac_id?: string;
  [key: string]: unknown;
};

