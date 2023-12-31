/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:05:56 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Pair, PairMongoMapper, PairRawMapper, Action, ActionMongoMapper, ActionRawMapper } from '@alien-worlds/aw-antelope';
import { Publresult,  ReferendumData  } from "../../domain/entities";
import { PublresultMongoModel, PublresultRawModel,  ReferendumDataMongoModel, ReferendumDataRawModel  } from "../dtos/publresult.dto";

// Mongo Mappers
export class PublresultMongoMapper
  extends MongoMapper<Publresult, PublresultMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('ref', { 
      key: 'ref', 
      mapper: (value: ReferendumData) => new ReferendumDataMongoMapper().fromEntity(value),
    });

  }

  public toEntity(mongoModel: PublresultMongoModel): Publresult {
    const { 
      ref,
      _id,
      ...rest
    } = mongoModel;

    return Publresult.create(
      ref ? new ReferendumDataMongoMapper().toEntity(ref) : ReferendumData.getDefault(),
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}

export class ReferendumDataMongoMapper
  extends MongoMapper<ReferendumData, ReferendumDataMongoModel>
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

  public toEntity(mongoModel: ReferendumDataMongoModel): ReferendumData {
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

    return ReferendumData.create(
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
export class PublresultRawMapper
  extends MapperImpl<Publresult, PublresultRawModel>
{
  public fromEntity(entity: Publresult): PublresultRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: PublresultRawModel): Publresult {
    const { 
      ref,
      ...rest
    } = rawModel;

    return Publresult.create(
      ref ? new ReferendumDataRawMapper().toEntity(ref) : ReferendumData.getDefault(),
      undefined,
      rest
    );
  }
}

export class ReferendumDataRawMapper
  extends MapperImpl<ReferendumData, ReferendumDataRawModel>
{
  public fromEntity(entity: ReferendumData): ReferendumDataRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ReferendumDataRawModel): ReferendumData {
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

    return ReferendumData.create(
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

