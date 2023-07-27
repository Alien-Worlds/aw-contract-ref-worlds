/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:05:56 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Clearconfig  } from "../../domain/entities";
import { ClearconfigMongoModel, ClearconfigRawModel  } from "../dtos/clearconfig.dto";

// Mongo Mappers
export class ClearconfigMongoMapper
  extends MongoMapper<Clearconfig, ClearconfigMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: ClearconfigMongoModel): Clearconfig {
    const { 
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Clearconfig.create(
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class ClearconfigRawMapper
  extends MapperImpl<Clearconfig, ClearconfigRawModel>
{
  public fromEntity(entity: Clearconfig): ClearconfigRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ClearconfigRawModel): Clearconfig {
    const { 
      dac_id,
      ...rest
    } = rawModel;

    return Clearconfig.create(
      dac_id || '',
      undefined,
      rest
    );
  }
}

