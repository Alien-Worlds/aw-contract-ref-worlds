/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:05:56 GMT
 */

import { 
  ContractAction, 
  ContractActionModel, 
  Repository, 
  injectable, 
} from '@alien-worlds/aw-core';

import { DataDocumentType } from '../../data/dtos/ref-worlds-action.dto';
import { DataEntityType } from '../../domain/entities/ref-worlds-action';

/**
 * @description This abstract class represents a repository for `ref.worlds` contract actions.
 */
@injectable()
export abstract class RefWorldsActionRepository extends Repository<
  ContractAction<DataEntityType, DataDocumentType>,
  ContractActionModel
> {
  public static Token = 'REF_WORLDS_ACTION_REPOSITORY';
}
