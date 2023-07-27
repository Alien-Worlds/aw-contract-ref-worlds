/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:05:56 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { ExtendedAsset, ExtendedAssetMongoMapper, ExtendedAssetRawMapper } from '@alien-worlds/aw-antelope';
import { Deposits  } from "../../domain/entities";
import { DepositsMongoModel, DepositsRawModel  } from "../dtos/deposits.dto";

// Mongo Mappers
export class DepositsMongoMapper
  extends MongoMapper<Deposits, DepositsMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('account', { 
      key: 'account', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('deposit', { 
      key: 'deposit', 
      mapper: (value: ExtendedAsset) => new ExtendedAssetMongoMapper().fromEntity(value),
    });

  }

  public toEntity(mongoModel: DepositsMongoModel): Deposits {
    const { 
      account,
      deposit,
      _id,
      ...rest
    } = mongoModel;

    return Deposits.create(
      account || '',
      deposit ? new ExtendedAssetMongoMapper().toEntity(deposit) : ExtendedAsset.getDefault(),
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class DepositsRawMapper
  extends MapperImpl<Deposits, DepositsRawModel>
{
  public fromEntity(entity: Deposits): DepositsRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: DepositsRawModel): Deposits {
    const { 
      account,
      deposit,
      ...rest
    } = rawModel;

    return Deposits.create(
      account || '',
      deposit ? new ExtendedAssetRawMapper().toEntity(deposit) : ExtendedAsset.getDefault(),
      undefined,
      rest
    );
  }
}

