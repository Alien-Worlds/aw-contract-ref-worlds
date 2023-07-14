/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:19:51 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} RefundMongoModel
 */
export type RefundMongoModel = {
  _id?: MongoDB.ObjectId;
  account?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} RefundRawModel
 */
export type RefundRawModel = {
  account?: string;
  [key: string]: unknown;
};

