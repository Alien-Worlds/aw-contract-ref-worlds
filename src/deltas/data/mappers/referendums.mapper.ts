/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:07:05 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Pair, PairMongoMapper, PairRawMapper, Action, ActionMongoMapper, ActionRawMapper } from '@alien-worlds/eosio-contract-types';
import { Referendums  } from "../../domain/entities";
import { ReferendumsMongoModel, ReferendumsRawModel  } from "../dtos/referendums.dto";

// Mongo Mappers
export class ReferendumsMongoMapper
  extends MapperImpl<Referendums, ReferendumsMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('referendumId', { 
      key: 'referendum_id', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('proposer', { 
      key: 'proposer', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('type', { 
      key: 'type', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('votingType', { 
      key: 'voting_type', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('status', { 
      key: 'status', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('title', { 
      key: 'title', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('contentRef', { 
      key: 'content_ref', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('tokenVotes', { 
      key: 'token_votes', 
      mapper: (values: Pair[]) => values.map(value => new PairMongoMapper().fromEntity(value)),
    });

    this.mappingFromEntity.set('accountVotes', { 
      key: 'account_votes', 
      mapper: (values: Pair[]) => values.map(value => new PairMongoMapper().fromEntity(value)),
    });

    this.mappingFromEntity.set('expires', { 
      key: 'expires', 
      mapper: (value: Date) => value,
    });

    this.mappingFromEntity.set('acts', { 
      key: 'acts', 
      mapper: (values: Action[]) => values.map(value => new ActionMongoMapper().fromEntity(value)),
    });

  }

  public toEntity(mongoModel: ReferendumsMongoModel): Referendums {
    const { 
      referendum_id,
      proposer,
      type,
      voting_type,
      status,
      title,
      content_ref,
      token_votes,
      account_votes,
      expires,
      acts,
      _id,
      ...rest
    } = mongoModel;

    return Referendums.create(
      referendum_id || 0,
      proposer || '',
      type || '',
      voting_type || '',
      status || '',
      title || '',
      content_ref || '',
      token_votes?.map(value => new PairMongoMapper().toEntity(value)) || [],
      account_votes?.map(value => new PairMongoMapper().toEntity(value)) || [],
      expires || new Date(0),
      acts?.map(value => new ActionMongoMapper().toEntity(value)) || [],
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class ReferendumsRawMapper
  extends MapperImpl<Referendums, ReferendumsRawModel>
{
  public fromEntity(entity: Referendums): ReferendumsRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ReferendumsRawModel): Referendums {
    const { 
      referendum_id,
      proposer,
      type,
      voting_type,
      status,
      title,
      content_ref,
      token_votes,
      account_votes,
      expires,
      acts,
      ...rest
    } = rawModel;

    return Referendums.create(
      referendum_id || 0,
      proposer || '',
      type || '',
      voting_type || '',
      status || '',
      title || '',
      content_ref || '',
      token_votes?.map(value => new PairRawMapper().toEntity(value)) || [],
      account_votes?.map(value => new PairRawMapper().toEntity(value)) || [],
      expires || new Date(0),
      acts?.map(value => new ActionRawMapper().toEntity(value)) || [],
      undefined,
      rest
    );
  }
}

