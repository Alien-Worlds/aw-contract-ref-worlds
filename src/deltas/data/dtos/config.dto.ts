/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:19:51 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Pair } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} ConfigMongoModel
 */
export type ConfigMongoModel = {
  _id?: MongoDB.ObjectId;
  duration?: number;
  fee?: Pair[];
  pass?: Pair[];
  quorum_token?: Pair[];
  quorum_account?: Pair[];
  allow_per_account_voting?: Pair[];
  allow_vote_type?: Pair[];
  next_referendum_id?: number;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} ConfigRawModel
 */
export type ConfigRawModel = {
  duration?: number;
  fee?: Pair[];
  pass?: Pair[];
  quorum_token?: Pair[];
  quorum_account?: Pair[];
  allow_per_account_voting?: Pair[];
  allow_vote_type?: Pair[];
  next_referendum_id?: number;
  [key: string]: unknown;
};

