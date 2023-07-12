/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 07:08:16 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Vote  } from "../../domain/entities";
import { VoteMongoModel, VoteRawModel  } from "../dtos/vote.dto";

// Mongo Mappers
export class VoteMongoMapper
  extends MapperImpl<Vote, VoteMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('voter', { 
      key: 'voter', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('referendumId', { 
      key: 'referendum_id', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('vote', { 
      key: 'vote', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: VoteMongoModel): Vote {
    const { 
      voter,
      referendum_id,
      vote,
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Vote.create(
      voter || '',
      referendum_id || 0,
      vote || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class VoteRawMapper
  extends MapperImpl<Vote, VoteRawModel>
{
  public fromEntity(entity: Vote): VoteRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: VoteRawModel): Vote {
    const { 
      voter,
      referendum_id,
      vote,
      dac_id,
      ...rest
    } = rawModel;

    return Vote.create(
      voter || '',
      referendum_id || 0,
      vote || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

