/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:05:56 GMT
 */


import { 
  Cancel,
  Clean,
  Clearconfig,
  Exec,
  Propose,
  Publresult,
  Refund,
  Rmvexpired,
  Stakeobsv,
  Updateconfig,
  Updatestatus,
  Vote,
} from '../../domain/entities';
import { 
  ContractAction, 
  MapperImpl, 
  parseToBigInt 
} from '@alien-worlds/aw-core';

import { CancelMongoMapper, CancelRawMapper } from "./cancel.mapper";
import { CleanMongoMapper, CleanRawMapper } from "./clean.mapper";
import { ClearconfigMongoMapper, ClearconfigRawMapper } from "./clearconfig.mapper";
import { ExecMongoMapper, ExecRawMapper } from "./exec.mapper";
import { ProposeMongoMapper, ProposeRawMapper } from "./propose.mapper";
import { PublresultMongoMapper, PublresultRawMapper } from "./publresult.mapper";
import { RefundMongoMapper, RefundRawMapper } from "./refund.mapper";
import { RmvexpiredMongoMapper, RmvexpiredRawMapper } from "./rmvexpired.mapper";
import { StakeobsvMongoMapper, StakeobsvRawMapper } from "./stakeobsv.mapper";
import { UpdateconfigMongoMapper, UpdateconfigRawMapper } from "./updateconfig.mapper";
import { UpdatestatusMongoMapper, UpdatestatusRawMapper } from "./updatestatus.mapper";
import { VoteMongoMapper, VoteRawMapper } from "./vote.mapper";
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { DataEntityType } from '../../domain/entities/ref-worlds-action';
import { 
  RefWorldsActionMongoModel,
  RefWorldsActionRawModel,
  CancelMongoModel,
  CancelRawModel,
  CleanMongoModel,
  CleanRawModel,
  ClearconfigMongoModel,
  ClearconfigRawModel,
  ExecMongoModel,
  ExecRawModel,
  ProposeMongoModel,
  ProposeRawModel,
  PublresultMongoModel,
  PublresultRawModel,
  RefundMongoModel,
  RefundRawModel,
  RmvexpiredMongoModel,
  RmvexpiredRawModel,
  StakeobsvMongoModel,
  StakeobsvRawModel,
  UpdateconfigMongoModel,
  UpdateconfigRawModel,
  UpdatestatusMongoModel,
  UpdatestatusRawModel,
  VoteMongoModel,
  VoteRawModel,
} from '../dtos';
import { RefWorldsActionName } from '../../domain/enums';

// Mongo Mapper
export class RefWorldsActionMongoMapper
  extends MongoMapper<ContractAction<DataEntityType>, RefWorldsActionMongoModel>
{
  public fromEntity(
    entity: ContractAction<DataEntityType>
  ): RefWorldsActionMongoModel {
    let entityData;
    switch (entity.name) {
      case RefWorldsActionName.Cancel:
        entityData = new CancelMongoMapper().fromEntity(
          entity.data as Cancel
        );
        break;
      case RefWorldsActionName.Clean:
        entityData = new CleanMongoMapper().fromEntity(
          entity.data as Clean
        );
        break;
      case RefWorldsActionName.Clearconfig:
        entityData = new ClearconfigMongoMapper().fromEntity(
          entity.data as Clearconfig
        );
        break;
      case RefWorldsActionName.Exec:
        entityData = new ExecMongoMapper().fromEntity(
          entity.data as Exec
        );
        break;
      case RefWorldsActionName.Propose:
        entityData = new ProposeMongoMapper().fromEntity(
          entity.data as Propose
        );
        break;
      case RefWorldsActionName.Publresult:
        entityData = new PublresultMongoMapper().fromEntity(
          entity.data as Publresult
        );
        break;
      case RefWorldsActionName.Refund:
        entityData = new RefundMongoMapper().fromEntity(
          entity.data as Refund
        );
        break;
      case RefWorldsActionName.Rmvexpired:
        entityData = new RmvexpiredMongoMapper().fromEntity(
          entity.data as Rmvexpired
        );
        break;
      case RefWorldsActionName.Stakeobsv:
        entityData = new StakeobsvMongoMapper().fromEntity(
          entity.data as Stakeobsv
        );
        break;
      case RefWorldsActionName.Updateconfig:
        entityData = new UpdateconfigMongoMapper().fromEntity(
          entity.data as Updateconfig
        );
        break;
      case RefWorldsActionName.Updatestatus:
        entityData = new UpdatestatusMongoMapper().fromEntity(
          entity.data as Updatestatus
        );
        break;
      case RefWorldsActionName.Vote:
        entityData = new VoteMongoMapper().fromEntity(
          entity.data as Vote
        );
        break;
    }

    const model: RefWorldsActionMongoModel = {
      block_timestamp: entity.blockTimestamp,
      block_number: new MongoDB.Long(entity.blockNumber),
      global_sequence: new MongoDB.Long(entity.globalSequence),
      receiver_sequence: new MongoDB.Long(entity.receiverSequence),
      trx_id: entity.transactionId,
      action: {
        name: entity.name,
        account: entity.account,
        data: entityData,
      },
    };

    if (entity.id && MongoDB.ObjectId.isValid(entity.id)) {
      model._id =  new MongoDB.ObjectId(entity.id);
    }

    return model;
  }

  public toEntity(
    mongoModel: RefWorldsActionMongoModel
  ): ContractAction<DataEntityType> {
    let data;
    switch (mongoModel.action.name) {
      case RefWorldsActionName.Cancel:
        data = new CancelMongoMapper().toEntity(
          mongoModel.action.data as CancelMongoModel
        );
        break;
      case RefWorldsActionName.Clean:
        data = new CleanMongoMapper().toEntity(
          mongoModel.action.data as CleanMongoModel
        );
        break;
      case RefWorldsActionName.Clearconfig:
        data = new ClearconfigMongoMapper().toEntity(
          mongoModel.action.data as ClearconfigMongoModel
        );
        break;
      case RefWorldsActionName.Exec:
        data = new ExecMongoMapper().toEntity(
          mongoModel.action.data as ExecMongoModel
        );
        break;
      case RefWorldsActionName.Propose:
        data = new ProposeMongoMapper().toEntity(
          mongoModel.action.data as ProposeMongoModel
        );
        break;
      case RefWorldsActionName.Publresult:
        data = new PublresultMongoMapper().toEntity(
          mongoModel.action.data as PublresultMongoModel
        );
        break;
      case RefWorldsActionName.Refund:
        data = new RefundMongoMapper().toEntity(
          mongoModel.action.data as RefundMongoModel
        );
        break;
      case RefWorldsActionName.Rmvexpired:
        data = new RmvexpiredMongoMapper().toEntity(
          mongoModel.action.data as RmvexpiredMongoModel
        );
        break;
      case RefWorldsActionName.Stakeobsv:
        data = new StakeobsvMongoMapper().toEntity(
          mongoModel.action.data as StakeobsvMongoModel
        );
        break;
      case RefWorldsActionName.Updateconfig:
        data = new UpdateconfigMongoMapper().toEntity(
          mongoModel.action.data as UpdateconfigMongoModel
        );
        break;
      case RefWorldsActionName.Updatestatus:
        data = new UpdatestatusMongoMapper().toEntity(
          mongoModel.action.data as UpdatestatusMongoModel
        );
        break;
      case RefWorldsActionName.Vote:
        data = new VoteMongoMapper().toEntity(
          mongoModel.action.data as VoteMongoModel
        );
        break;
    }

    const {
      _id,
      block_timestamp,
      block_number,
      global_sequence,
      receiver_sequence,
      trx_id,
      action,
    } = mongoModel;

    return new ContractAction<DataEntityType>(
      _id.toString(),
      block_timestamp,
      parseToBigInt(block_number),
      action.account,
      action.name,
      parseToBigInt(global_sequence),
      parseToBigInt(receiver_sequence),
      trx_id,
      data,
    );
  }
}

// Processor Task Mapper
export class RefWorldsActionProcessorTaskMapper extends MapperImpl<
  ContractAction<DataEntityType, RefWorldsActionRawModel>,
  RefWorldsActionRawModel
> {
  public fromEntity(
    entity: ContractAction<DataEntityType, RefWorldsActionRawModel>
  ): RefWorldsActionRawModel {
    throw new Error('method not implemented');
  }

  public toEntity(
    rawModel: RefWorldsActionRawModel
  ): ContractAction<DataEntityType, RefWorldsActionRawModel> {
    let data;
    switch (rawModel.name) {
      case RefWorldsActionName.Cancel:
        data = new CancelRawMapper().toEntity(
          rawModel.data as CancelRawModel
        );
        break;
      case RefWorldsActionName.Clean:
        data = new CleanRawMapper().toEntity(
          rawModel.data as CleanRawModel
        );
        break;
      case RefWorldsActionName.Clearconfig:
        data = new ClearconfigRawMapper().toEntity(
          rawModel.data as ClearconfigRawModel
        );
        break;
      case RefWorldsActionName.Exec:
        data = new ExecRawMapper().toEntity(
          rawModel.data as ExecRawModel
        );
        break;
      case RefWorldsActionName.Propose:
        data = new ProposeRawMapper().toEntity(
          rawModel.data as ProposeRawModel
        );
        break;
      case RefWorldsActionName.Publresult:
        data = new PublresultRawMapper().toEntity(
          rawModel.data as PublresultRawModel
        );
        break;
      case RefWorldsActionName.Refund:
        data = new RefundRawMapper().toEntity(
          rawModel.data as RefundRawModel
        );
        break;
      case RefWorldsActionName.Rmvexpired:
        data = new RmvexpiredRawMapper().toEntity(
          rawModel.data as RmvexpiredRawModel
        );
        break;
      case RefWorldsActionName.Stakeobsv:
        data = new StakeobsvRawMapper().toEntity(
          rawModel.data as StakeobsvRawModel
        );
        break;
      case RefWorldsActionName.Updateconfig:
        data = new UpdateconfigRawMapper().toEntity(
          rawModel.data as UpdateconfigRawModel
        );
        break;
      case RefWorldsActionName.Updatestatus:
        data = new UpdatestatusRawMapper().toEntity(
          rawModel.data as UpdatestatusRawModel
        );
        break;
      case RefWorldsActionName.Vote:
        data = new VoteRawMapper().toEntity(
          rawModel.data as VoteRawModel
        );
        break;
    }

    const {
      account,
      name,
      block_timestamp,
      block_number,
      global_sequence,
      recv_sequence,
      transaction_id,
    } = rawModel;

    return new ContractAction<DataEntityType, RefWorldsActionRawModel>(
      '',
      block_timestamp,
      parseToBigInt(block_number),
      account,
      name,
      parseToBigInt(global_sequence),
      parseToBigInt(recv_sequence),
      transaction_id,
      data
    );
  }
}
