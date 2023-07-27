/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:05:56 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Pair, PairMongoMapper, PairRawMapper } from '@alien-worlds/aw-antelope';
import { Config  } from "../../domain/entities";
import { ConfigMongoModel, ConfigRawModel  } from "../dtos/config.dto";

// Mongo Mappers
export class ConfigMongoMapper
  extends MongoMapper<Config, ConfigMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('duration', { 
      key: 'duration', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('fee', { 
      key: 'fee', 
      mapper: (values: Pair[]) => values.map(value => new PairMongoMapper().fromEntity(value)),
    });

    this.mappingFromEntity.set('pass', { 
      key: 'pass', 
      mapper: (values: Pair[]) => values.map(value => new PairMongoMapper().fromEntity(value)),
    });

    this.mappingFromEntity.set('quorumToken', { 
      key: 'quorum_token', 
      mapper: (values: Pair[]) => values.map(value => new PairMongoMapper().fromEntity(value)),
    });

    this.mappingFromEntity.set('quorumAccount', { 
      key: 'quorum_account', 
      mapper: (values: Pair[]) => values.map(value => new PairMongoMapper().fromEntity(value)),
    });

    this.mappingFromEntity.set('allowPerAccountVoting', { 
      key: 'allow_per_account_voting', 
      mapper: (values: Pair[]) => values.map(value => new PairMongoMapper().fromEntity(value)),
    });

    this.mappingFromEntity.set('allowVoteType', { 
      key: 'allow_vote_type', 
      mapper: (values: Pair[]) => values.map(value => new PairMongoMapper().fromEntity(value)),
    });

    this.mappingFromEntity.set('nextReferendumId', { 
      key: 'next_referendum_id', 
      mapper: (value: number) => value,
    });

  }

  public toEntity(mongoModel: ConfigMongoModel): Config {
    const { 
      duration,
      fee,
      pass,
      quorum_token,
      quorum_account,
      allow_per_account_voting,
      allow_vote_type,
      next_referendum_id,
      _id,
      ...rest
    } = mongoModel;

    return Config.create(
      duration || 0,
      fee?.map(value => new PairMongoMapper().toEntity(value)) || [],
      pass?.map(value => new PairMongoMapper().toEntity(value)) || [],
      quorum_token?.map(value => new PairMongoMapper().toEntity(value)) || [],
      quorum_account?.map(value => new PairMongoMapper().toEntity(value)) || [],
      allow_per_account_voting?.map(value => new PairMongoMapper().toEntity(value)) || [],
      allow_vote_type?.map(value => new PairMongoMapper().toEntity(value)) || [],
      next_referendum_id || 0,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class ConfigRawMapper
  extends MapperImpl<Config, ConfigRawModel>
{
  public fromEntity(entity: Config): ConfigRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ConfigRawModel): Config {
    const { 
      duration,
      fee,
      pass,
      quorum_token,
      quorum_account,
      allow_per_account_voting,
      allow_vote_type,
      next_referendum_id,
      ...rest
    } = rawModel;

    return Config.create(
      duration || 0,
      fee?.map(value => new PairRawMapper().toEntity(value)) || [],
      pass?.map(value => new PairRawMapper().toEntity(value)) || [],
      quorum_token?.map(value => new PairRawMapper().toEntity(value)) || [],
      quorum_account?.map(value => new PairRawMapper().toEntity(value)) || [],
      allow_per_account_voting?.map(value => new PairRawMapper().toEntity(value)) || [],
      allow_vote_type?.map(value => new PairRawMapper().toEntity(value)) || [],
      next_referendum_id || 0,
      undefined,
      rest
    );
  }
}

