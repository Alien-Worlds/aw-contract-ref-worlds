/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:19:51 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB, MongoMapper } from '@alien-worlds/storage-mongodb';
import { Clean  } from "../../domain/entities";
import { CleanMongoModel, CleanRawModel  } from "../dtos/clean.dto";

// Mongo Mappers
export class CleanMongoMapper
  extends MongoMapper<Clean, CleanMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('account', { 
      key: 'account', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: CleanMongoModel): Clean {
    const { 
      account,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Clean.create(
      account || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class CleanRawMapper
  extends MapperImpl<Clean, CleanRawModel>
{
  public fromEntity(entity: Clean): CleanRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: CleanRawModel): Clean {
    const { 
      account,
      dac_id,
      ...rest
    } = rawModel;

    return Clean.create(
      account || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

