/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:05:56 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';
import { Pair, ActionMongoModel, ActionRawModel } from '@alien-worlds/aw-antelope';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} ReferendumsMongoModel
 */
export type ReferendumsMongoModel = {
  _id?: MongoDB.ObjectId;
  referendum_id?: number;
  proposer?: string;
  type?: string;
  voting_type?: string;
  status?: string;
  title?: string;
  content_ref?: string;
  token_votes?: Pair[];
  account_votes?: Pair[];
  expires?: Date;
  acts?: ActionMongoModel[];
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} ReferendumsRawModel
 */
export type ReferendumsRawModel = {
  referendum_id?: number;
  proposer?: string;
  type?: string;
  voting_type?: string;
  status?: string;
  title?: string;
  content_ref?: string;
  token_votes?: Pair[];
  account_votes?: Pair[];
  expires?: Date;
  acts?: ActionRawModel[];
  [key: string]: unknown;
};

