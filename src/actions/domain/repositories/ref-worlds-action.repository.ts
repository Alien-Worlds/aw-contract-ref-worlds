/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:19:51 GMT
 */

import { 
  ContractAction, 
  ContractActionModel, 
  Repository, 
  injectable, 
} from '@alien-worlds/api-core';

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
