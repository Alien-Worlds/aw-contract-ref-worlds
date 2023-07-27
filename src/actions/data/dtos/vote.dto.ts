/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:05:56 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} VoteMongoModel
 */
export type VoteMongoModel = {
  _id?: MongoDB.ObjectId;
  voter?: string;
  referendum_id?: number;
  vote?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} VoteRawModel
 */
export type VoteRawModel = {
  voter?: string;
  referendum_id?: number;
  vote?: string;
  dac_id?: string;
  [key: string]: unknown;
};

