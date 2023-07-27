/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:05:56 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

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

