/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:07:05 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Updatestatus  } from "../../domain/entities";
import { UpdatestatusMongoModel, UpdatestatusRawModel  } from "../dtos/updatestatus.dto";

// Mongo Mappers
export class UpdatestatusMongoMapper
  extends MapperImpl<Updatestatus, UpdatestatusMongoModel>
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

  public toEntity(mongoModel: UpdatestatusMongoModel): Updatestatus {
    const { 
      referendum_id,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Updatestatus.create(
      referendum_id || 0,
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class UpdatestatusRawMapper
  extends MapperImpl<Updatestatus, UpdatestatusRawModel>
{
  public fromEntity(entity: Updatestatus): UpdatestatusRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: UpdatestatusRawModel): Updatestatus {
    const { 
      referendum_id,
      dac_id,
      ...rest
    } = rawModel;

    return Updatestatus.create(
      referendum_id || 0,
      dac_id || '',
      undefined,
      rest
    );
  }
}

