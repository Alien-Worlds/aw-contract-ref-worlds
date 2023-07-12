/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 07:08:16 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Cancel  } from "../../domain/entities";
import { CancelMongoModel, CancelRawModel  } from "../dtos/cancel.dto";

// Mongo Mappers
export class CancelMongoMapper
  extends MapperImpl<Cancel, CancelMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('referendumId', { 
      key: 'referendum_id', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: CancelMongoModel): Cancel {
    const { 
      referendum_id,
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Cancel.create(
      referendum_id || 0,
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class CancelRawMapper
  extends MapperImpl<Cancel, CancelRawModel>
{
  public fromEntity(entity: Cancel): CancelRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: CancelRawModel): Cancel {
    const { 
      referendum_id,
      dac_id,
      ...rest
    } = rawModel;

    return Cancel.create(
      referendum_id || 0,
      dac_id || '',
      undefined,
      rest
    );
  }
}

