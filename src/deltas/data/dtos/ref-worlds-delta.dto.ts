/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:56:02 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

import { ConfigMongoModel, ConfigRawModel } from './config.dto';
import { DepositsMongoModel, DepositsRawModel } from './deposits.dto';
import { ReferendumsMongoModel, ReferendumsRawModel } from './referendums.dto';
import { VotesMongoModel, VotesRawModel } from './votes.dto';

export type DataDocumentType =
  | ConfigMongoModel
  | DepositsMongoModel
  | ReferendumsMongoModel
  | VotesMongoModel;

export type DataRawType =
  | ConfigRawModel
  | DepositsRawModel
  | ReferendumsRawModel
  | VotesRawModel;


export type RefWorldsDeltaMongoModel = {
  _id?: MongoDB.ObjectId;
  block_number?: MongoDB.Long;
  code?: string;
  scope?: string;
  table?: string;
  data_hash?: string;
  data?: DataDocumentType;
  payer?: string;
  primary_key?: MongoDB.Long,
  present?: boolean;
  block_timestamp?: Date;
};

export type RefWorldsDeltaRawModel = {
  block_timestamp: Date;
  block_number: string;
  code: string;
  scope: string;
  table: string;
  payer: string;
  primary_key: string;
  present: boolean;
  data: DataRawType;
};
