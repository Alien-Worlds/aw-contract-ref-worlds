/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 07:08:16 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { ActionMongoModel, ActionRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} ProposeMongoModel
 */
export type ProposeMongoModel = {
  _id?: MongoDB.ObjectId;
  proposer?: string;
  type?: string;
  voting_type_name?: string;
  title?: string;
  content?: string;
  dac_id?: string;
  acts?: ActionMongoModel[];
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} ProposeRawModel
 */
export type ProposeRawModel = {
  proposer?: string;
  type?: string;
  voting_type_name?: string;
  title?: string;
  content?: string;
  dac_id?: string;
  acts?: ActionRawModel[];
  [key: string]: unknown;
};

