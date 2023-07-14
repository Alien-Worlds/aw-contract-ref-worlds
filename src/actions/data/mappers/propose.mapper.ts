/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:56:02 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB, MongoMapper } from '@alien-worlds/storage-mongodb';
import { Action, ActionMongoMapper, ActionRawMapper } from '@alien-worlds/eosio-contract-types';
import { Propose  } from "../../domain/entities";
import { ProposeMongoModel, ProposeRawModel  } from "../dtos/propose.dto";

// Mongo Mappers
export class ProposeMongoMapper
  extends MongoMapper<Propose, ProposeMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('proposer', { 
      key: 'proposer', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('type', { 
      key: 'type', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('votingTypeName', { 
      key: 'voting_type_name', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('title', { 
      key: 'title', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('content', { 
      key: 'content', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('acts', { 
      key: 'acts', 
      mapper: (values: Action[]) => values.map(value => new ActionMongoMapper().fromEntity(value)),
    });

  }

  public toEntity(mongoModel: ProposeMongoModel): Propose {
    const { 
      proposer,
      type,
      voting_type_name,
      title,
      content,
      dac_id,
      acts,
      _id,
      ...rest
    } = mongoModel;

    return Propose.create(
      proposer || '',
      type || '',
      voting_type_name || '',
      title || '',
      content || '',
      dac_id || '',
      acts?.map(value => new ActionMongoMapper().toEntity(value)) || [],
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class ProposeRawMapper
  extends MapperImpl<Propose, ProposeRawModel>
{
  public fromEntity(entity: Propose): ProposeRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ProposeRawModel): Propose {
    const { 
      proposer,
      type,
      voting_type_name,
      title,
      content,
      dac_id,
      acts,
      ...rest
    } = rawModel;

    return Propose.create(
      proposer || '',
      type || '',
      voting_type_name || '',
      title || '',
      content || '',
      dac_id || '',
      acts?.map(value => new ActionRawMapper().toEntity(value)) || [],
      undefined,
      rest
    );
  }
}

