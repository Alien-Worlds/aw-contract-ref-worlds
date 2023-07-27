/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:05:56 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';
import { Pair } from '@alien-worlds/aw-antelope';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} VotesMongoModel
 */
export type VotesMongoModel = {
  _id?: MongoDB.ObjectId;
  voter?: string;
  votes?: Pair[];
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} VotesRawModel
 */
export type VotesRawModel = {
  voter?: string;
  votes?: Pair[];
  [key: string]: unknown;
};

