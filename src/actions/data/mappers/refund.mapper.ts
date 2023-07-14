/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:19:51 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB, MongoMapper } from '@alien-worlds/storage-mongodb';
import { Refund  } from "../../domain/entities";
import { RefundMongoModel, RefundRawModel  } from "../dtos/refund.dto";

// Mongo Mappers
export class RefundMongoMapper
  extends MongoMapper<Refund, RefundMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('account', { 
      key: 'account', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: RefundMongoModel): Refund {
    const { 
      account,
      _id,
      ...rest
    } = mongoModel;

    return Refund.create(
      account || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class RefundRawMapper
  extends MapperImpl<Refund, RefundRawModel>
{
  public fromEntity(entity: Refund): RefundRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: RefundRawModel): Refund {
    const { 
      account,
      ...rest
    } = rawModel;

    return Refund.create(
      account || '',
      undefined,
      rest
    );
  }
}

