/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:05:56 GMT
 */

import {
  GetTableRowsOptions,
  Result,
  SmartContractService,
} from '@alien-worlds/aw-core';

import { 
  ConfigRawModel,
  DepositsRawModel,
  ReferendumsRawModel,
  VotesRawModel,
} from '../deltas/data/dtos';

export abstract class RefWorldsContractService extends SmartContractService {
  public static Token = 'REF_WORLDS_CONTRACT_SERVICE';

  public abstract fetchConfig(
    options?: GetTableRowsOptions
  ): Promise<Result<ConfigRawModel[], Error>>;
  public abstract fetchDeposits(
    options?: GetTableRowsOptions
  ): Promise<Result<DepositsRawModel[], Error>>;
  public abstract fetchReferendums(
    options?: GetTableRowsOptions
  ): Promise<Result<ReferendumsRawModel[], Error>>;
  public abstract fetchVotes(
    options?: GetTableRowsOptions
  ): Promise<Result<VotesRawModel[], Error>>;
}
