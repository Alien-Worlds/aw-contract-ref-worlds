/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:05:56 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

import { CancelMongoModel, CancelRawModel } from './cancel.dto';
import { CleanMongoModel, CleanRawModel } from './clean.dto';
import { ClearconfigMongoModel, ClearconfigRawModel } from './clearconfig.dto';
import { ExecMongoModel, ExecRawModel } from './exec.dto';
import { ProposeMongoModel, ProposeRawModel } from './propose.dto';
import { PublresultMongoModel, PublresultRawModel } from './publresult.dto';
import { RefundMongoModel, RefundRawModel } from './refund.dto';
import { RmvexpiredMongoModel, RmvexpiredRawModel } from './rmvexpired.dto';
import { StakeobsvMongoModel, StakeobsvRawModel } from './stakeobsv.dto';
import {
  UpdateconfigMongoModel,
  UpdateconfigRawModel,
} from './updateconfig.dto';
import {
  UpdatestatusMongoModel,
  UpdatestatusRawModel,
} from './updatestatus.dto';
import { VoteMongoModel, VoteRawModel } from './vote.dto';

export type DataDocumentType =
  | CancelMongoModel
  | CleanMongoModel
  | ClearconfigMongoModel
  | ExecMongoModel
  | ProposeMongoModel
  | PublresultMongoModel
  | RefundMongoModel
  | RmvexpiredMongoModel
  | StakeobsvMongoModel
  | UpdateconfigMongoModel
  | UpdatestatusMongoModel
  | VoteMongoModel;

export type DataRawType =
  | CancelRawModel
  | CleanRawModel
  | ClearconfigRawModel
  | ExecRawModel
  | ProposeRawModel
  | PublresultRawModel
  | RefundRawModel
  | RmvexpiredRawModel
  | StakeobsvRawModel
  | UpdateconfigRawModel
  | UpdatestatusRawModel
  | VoteRawModel;

export type RefWorldsActionMongoModel = {
  _id?: MongoDB.ObjectId;
  block_timestamp?: Date;
  block_num?: MongoDB.Long;
  global_sequence?: MongoDB.Long;
  recv_sequence?: MongoDB.Long;
  trx_id?: string;
  action_hash?: string;
  action?: {
    account: string;
    name: string;
    data: DataDocumentType;
  };
};

export type RefWorldsActionRawModel = {
  account: string;
  name: string;
  block_timestamp: Date;
  block_num: string;
  global_sequence: string;
  recv_sequence: string;
  transaction_id: string;
  data: DataRawType;
  [key: string]: unknown;
};
