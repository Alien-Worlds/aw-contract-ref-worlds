/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:19:52 GMT
 */


import { 
  Config,
  Deposits,
  Referendums,
  Votes,
} from '../../domain/entities';
import { ContractDelta, MapperImpl, parseToBigInt } from '@alien-worlds/api-core';
import { MongoDB, MongoMapper } from '@alien-worlds/storage-mongodb';
import { DataEntityType } from '../../domain/entities/ref-worlds-delta';
import { RefWorldsDeltaMongoModel, RefWorldsDeltaRawModel } from '../dtos';
import { RefWorldsTableName } from '../../domain/enums';
import { ConfigMongoMapper, ConfigRawMapper } from "./config.mapper";
import { DepositsMongoMapper, DepositsRawMapper } from "./deposits.mapper";
import { ReferendumsMongoMapper, ReferendumsRawMapper } from "./referendums.mapper";
import { VotesMongoMapper, VotesRawMapper } from "./votes.mapper";

// Mongo Mapper
export class RefWorldsDeltaMongoMapper
  extends MongoMapper<ContractDelta<DataEntityType>, RefWorldsDeltaMongoModel>
{
  public fromEntity(
    entity: ContractDelta<DataEntityType>
  ): RefWorldsDeltaMongoModel {
    let entityData;
    switch (entity.table) {
      case RefWorldsTableName.Config:
        entityData = new ConfigMongoMapper().fromEntity(
          entity.data as Config
        );
        break;
      case RefWorldsTableName.Deposits:
        entityData = new DepositsMongoMapper().fromEntity(
          entity.data as Deposits
        );
        break;
      case RefWorldsTableName.Referendums:
        entityData = new ReferendumsMongoMapper().fromEntity(
          entity.data as Referendums
        );
        break;
      case RefWorldsTableName.Votes:
        entityData = new VotesMongoMapper().fromEntity(
          entity.data as Votes
        );
        break;
    }

    const model: RefWorldsDeltaMongoModel = {
      block_timestamp: entity.blockTimestamp,
      block_number: new MongoDB.Long(entity.blockNumber),
      code: entity.code,
      scope: entity.scope,
      table: entity.table,
      data: entityData,
      payer: entity.payer,
      primary_key: new MongoDB.Long(entity.primaryKey),
      present: entity.present,
    };

    if (entity.id && MongoDB.ObjectId.isValid(entity.id)) {
      model._id =  new MongoDB.ObjectId(entity.id);
    }
    
    return model;
  }

  public toEntity(
    mongoModel: RefWorldsDeltaMongoModel
  ): ContractDelta<DataEntityType> {
    let data;
    switch (mongoModel.table) {
      case RefWorldsTableName.Config:
        data = new ConfigMongoMapper().toEntity(mongoModel.data);
        break;
      case RefWorldsTableName.Deposits:
        data = new DepositsMongoMapper().toEntity(mongoModel.data);
        break;
      case RefWorldsTableName.Referendums:
        data = new ReferendumsMongoMapper().toEntity(mongoModel.data);
        break;
      case RefWorldsTableName.Votes:
        data = new VotesMongoMapper().toEntity(mongoModel.data);
        break;
    }

    const {
      _id,
      block_number,
      code,
      scope,
      table,
      payer,
      primary_key,
      present,
      block_timestamp,
    } = mongoModel;

    return new ContractDelta<DataEntityType>(
      _id.toString(),
      parseToBigInt(block_number),
      code,
      scope,
      table,
      data,
      payer,
      parseToBigInt(primary_key),
      present,
      block_timestamp
    );
  }
}

// Processor Task Mapper
export class RefWorldsDeltaProcessorTaskMapper extends MapperImpl<
  ContractDelta<DataEntityType, RefWorldsDeltaRawModel>, 
    RefWorldsDeltaRawModel
> {
  public fromEntity(
    entity: ContractDelta<DataEntityType, RefWorldsDeltaRawModel>
  ): RefWorldsDeltaRawModel {
    throw new Error('method not implemented');
  }

  public toEntity(
    rawModel: RefWorldsDeltaRawModel
  ): ContractDelta<DataEntityType, RefWorldsDeltaRawModel> {
    let data;
    switch (rawModel.table) {
      case RefWorldsTableName.Config:
        data = new ConfigRawMapper().toEntity(rawModel.data);
        break;
      case RefWorldsTableName.Deposits:
        data = new DepositsRawMapper().toEntity(rawModel.data);
        break;
      case RefWorldsTableName.Referendums:
        data = new ReferendumsRawMapper().toEntity(rawModel.data);
        break;
      case RefWorldsTableName.Votes:
        data = new VotesRawMapper().toEntity(rawModel.data);
        break;
    }

    const {
      block_number,
      code,
      scope,
      table,
      payer,
      primary_key,
      present,
      block_timestamp,
    } = rawModel;

    return new ContractDelta<DataEntityType, RefWorldsDeltaRawModel>(
      '',
      parseToBigInt(block_number),
      code,
      scope,
      table,
      data,
      payer,
      parseToBigInt(primary_key),
      present,
      block_timestamp,
    );
  }
}