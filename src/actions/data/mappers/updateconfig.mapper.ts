/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 07:08:16 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Pair, PairMongoMapper, PairRawMapper } from '@alien-worlds/eosio-contract-types';
import { Updateconfig,  SetConfigItem  } from "../../domain/entities";
import { UpdateconfigMongoModel, UpdateconfigRawModel,  SetConfigItemMongoModel, SetConfigItemRawModel  } from "../dtos/updateconfig.dto";

// Mongo Mappers
export class UpdateconfigMongoMapper
  extends MapperImpl<Updateconfig, UpdateconfigMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('config', { 
      key: 'config', 
      mapper: (value: SetConfigItem) => new SetConfigItemMongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: UpdateconfigMongoModel): Updateconfig {
    const { 
      config,
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Updateconfig.create(
      new SetConfigItemMongoMapper().toEntity(config),
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}

export class SetConfigItemMongoMapper
  extends MapperImpl<SetConfigItem, SetConfigItemMongoModel>
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

  }

  public toEntity(mongoModel: SetConfigItemMongoModel): SetConfigItem {
    const { 
      duration,
      fee,
      pass,
      quorum_token,
      quorum_account,
      allow_per_account_voting,
      allow_vote_type,
      _id, 
      ...rest
    } = mongoModel;

    return SetConfigItem.create(
      duration || 0,
      fee?.map(value => new PairMongoMapper().toEntity(value)) || [],
      pass?.map(value => new PairMongoMapper().toEntity(value)) || [],
      quorum_token?.map(value => new PairMongoMapper().toEntity(value)) || [],
      quorum_account?.map(value => new PairMongoMapper().toEntity(value)) || [],
      allow_per_account_voting?.map(value => new PairMongoMapper().toEntity(value)) || [],
      allow_vote_type?.map(value => new PairMongoMapper().toEntity(value)) || [],
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class UpdateconfigRawMapper
  extends MapperImpl<Updateconfig, UpdateconfigRawModel>
{
  public fromEntity(entity: Updateconfig): UpdateconfigRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: UpdateconfigRawModel): Updateconfig {
    const { 
      config,
      dac_id,
      ...rest
    } = rawModel;

    return Updateconfig.create(
      new SetConfigItemRawMapper().toEntity(config),
      dac_id || '',
      undefined,
      rest
    );
  }
}

export class SetConfigItemRawMapper
  extends MapperImpl<SetConfigItem, SetConfigItemRawModel>
{
  public fromEntity(entity: SetConfigItem): SetConfigItemRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: SetConfigItemRawModel): SetConfigItem {
    const { 
      duration,
      fee,
      pass,
      quorum_token,
      quorum_account,
      allow_per_account_voting,
      allow_vote_type,
      ...rest
    } = rawModel;

    return SetConfigItem.create(
      duration || 0,
      fee?.map(value => new PairRawMapper().toEntity(value)) || [],
      pass?.map(value => new PairRawMapper().toEntity(value)) || [],
      quorum_token?.map(value => new PairRawMapper().toEntity(value)) || [],
      quorum_account?.map(value => new PairRawMapper().toEntity(value)) || [],
      allow_per_account_voting?.map(value => new PairRawMapper().toEntity(value)) || [],
      allow_vote_type?.map(value => new PairRawMapper().toEntity(value)) || [],
      undefined,
      rest
    );
  }
}

