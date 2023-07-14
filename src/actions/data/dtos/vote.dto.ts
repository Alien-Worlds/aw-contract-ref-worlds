/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:56:02 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

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

