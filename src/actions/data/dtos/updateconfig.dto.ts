/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 07:08:16 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Pair } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} UpdateconfigMongoModel
 */
export type UpdateconfigMongoModel = {
  _id?: MongoDB.ObjectId;
  config?: SetConfigItemMongoModel;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * @typedef {Object} SetConfigItemMongoModel
 */
export type SetConfigItemMongoModel = {
  _id?: MongoDB.ObjectId;
  duration?: number;
  fee?: Pair[];
  pass?: Pair[];
  quorum_token?: Pair[];
  quorum_account?: Pair[];
  allow_per_account_voting?: Pair[];
  allow_vote_type?: Pair[];
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} UpdateconfigRawModel
 */
export type UpdateconfigRawModel = {
  config?: SetConfigItemRawModel;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * @typedef {Object} SetConfigItemRawModel
 */
export type SetConfigItemRawModel = {
  duration?: number;
  fee?: Pair[];
  pass?: Pair[];
  quorum_token?: Pair[];
  quorum_account?: Pair[];
  allow_per_account_voting?: Pair[];
  allow_vote_type?: Pair[];
  [key: string]: unknown;
};

