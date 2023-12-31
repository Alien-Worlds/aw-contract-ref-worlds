/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:05:56 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Pair, PairMongoMapper, PairRawMapper } from '@alien-worlds/aw-antelope';
import { Votes  } from "../../domain/entities";
import { VotesMongoModel, VotesRawModel  } from "../dtos/votes.dto";

// Mongo Mappers
export class VotesMongoMapper
  extends MongoMapper<Votes, VotesMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('voter', { 
      key: 'voter', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('votes', { 
      key: 'votes', 
      mapper: (values: Pair[]) => values.map(value => new PairMongoMapper().fromEntity(value)),
    });

  }

  public toEntity(mongoModel: VotesMongoModel): Votes {
    const { 
      voter,
      votes,
      _id,
      ...rest
    } = mongoModel;

    return Votes.create(
      voter || '',
      votes?.map(value => new PairMongoMapper().toEntity(value)) || [],
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class VotesRawMapper
  extends MapperImpl<Votes, VotesRawModel>
{
  public fromEntity(entity: Votes): VotesRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: VotesRawModel): Votes {
    const { 
      voter,
      votes,
      ...rest
    } = rawModel;

    return Votes.create(
      voter || '',
      votes?.map(value => new PairRawMapper().toEntity(value)) || [],
      undefined,
      rest
    );
  }
}

