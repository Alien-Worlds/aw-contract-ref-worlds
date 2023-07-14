/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:07:05 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Rmvexpired  } from "../../domain/entities";
import { RmvexpiredMongoModel, RmvexpiredRawModel  } from "../dtos/rmvexpired.dto";

// Mongo Mappers
export class RmvexpiredMongoMapper
  extends MapperImpl<Rmvexpired, RmvexpiredMongoModel>
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

  public toEntity(mongoModel: RmvexpiredMongoModel): Rmvexpired {
    const { 
      referendum_id,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Rmvexpired.create(
      referendum_id || 0,
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class RmvexpiredRawMapper
  extends MapperImpl<Rmvexpired, RmvexpiredRawModel>
{
  public fromEntity(entity: Rmvexpired): RmvexpiredRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: RmvexpiredRawModel): Rmvexpired {
    const { 
      referendum_id,
      dac_id,
      ...rest
    } = rawModel;

    return Rmvexpired.create(
      referendum_id || 0,
      dac_id || '',
      undefined,
      rest
    );
  }
}

