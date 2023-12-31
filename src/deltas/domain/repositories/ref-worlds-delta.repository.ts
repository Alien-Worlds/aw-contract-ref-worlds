/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:05:56 GMT
 */

import { 
  ContractDelta, 
  ContractDeltaModel, 
  Repository, 
  injectable, 
} from '@alien-worlds/aw-core';

import { DataDocumentType } from '../../data/dtos/ref-worlds-delta.dto';
import { DataEntityType } from '../../domain/entities/ref-worlds-delta';

/**
 * @description This abstract class represents a repository for `ref.worlds` contract deltas.
 */
@injectable()
export abstract class RefWorldsDeltaRepository extends Repository<
  ContractDelta<DataEntityType, DataDocumentType>,
  ContractDeltaModel
> {
  public static Token = 'REF_WORLDS_DELTA_REPOSITORY';
}
