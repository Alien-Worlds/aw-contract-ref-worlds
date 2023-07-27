/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:05:56 GMT
 */

import { 
  ConfigRawModel,
  DepositsRawModel,
  ReferendumsRawModel,
  VotesRawModel,
} from '../deltas/data/dtos';
import { 
  AntelopeRpcSourceImpl,
  AntelopeSmartContractServiceImpl,
} from '@alien-worlds/aw-antelope';

import { RefWorldsContractService } from './ref-worlds-contract.service';
import { GetTableRowsOptions, Result } from '@alien-worlds/aw-core';

/**
 * A service class for interacting with the ref.worlds smart contract.
 * 
 * @class RefWorldsContractServiceImpl
 * @extends {AntelopeSmartContractServiceImpl}
 * @implements { RefWorldsContractService}
*/
export class RefWorldsContractServiceImpl
  extends AntelopeSmartContractServiceImpl
  implements RefWorldsContractService 
{
  /**
   * Creates an instance of RefWorldsContractServiceImpl.
   * 
   * @constructor
   * @param {AntelopeRpcSourceImpl} antelopeRpcSourceImpl - The Antelope RPC source to use for interactions.
   * @param {string} serviceUrl - Service Url
   */
  constructor(antelopeRpcSourceImpl: AntelopeRpcSourceImpl, serviceUrl: string) {
    super(antelopeRpcSourceImpl, serviceUrl, 'ref.worlds');
  }

  /**
   * An AntelopeSmartContractServiceImpl for the config table.
   * 
   * @type {AntelopeSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchConfig (
    options?: GetTableRowsOptions
  ): Promise<Result<ConfigRawModel[], Error>> {
    const table_key = '';
    const tableRowOptions = {
      ...options,
      code: 'ref.worlds',
      table: 'config',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<ConfigRawModel>(tableRowOptions)
      : await this.getAll<ConfigRawModel>(table_key, tableRowOptions);
  }
  /**
   * An AntelopeSmartContractServiceImpl for the deposits table.
   * 
   * @type {AntelopeSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchDeposits (
    options?: GetTableRowsOptions
  ): Promise<Result<DepositsRawModel[], Error>> {
    const table_key = 'account';
    const tableRowOptions = {
      ...options,
      code: 'ref.worlds',
      table: 'deposits',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<DepositsRawModel>(tableRowOptions)
      : await this.getAll<DepositsRawModel>(table_key, tableRowOptions);
  }
  /**
   * An AntelopeSmartContractServiceImpl for the referendums table.
   * 
   * @type {AntelopeSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchReferendums (
    options?: GetTableRowsOptions
  ): Promise<Result<ReferendumsRawModel[], Error>> {
    const table_key = 'referendum_id';
    const tableRowOptions = {
      ...options,
      code: 'ref.worlds',
      table: 'referendums',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<ReferendumsRawModel>(tableRowOptions)
      : await this.getAll<ReferendumsRawModel>(table_key, tableRowOptions);
  }
  /**
   * An AntelopeSmartContractServiceImpl for the votes table.
   * 
   * @type {AntelopeSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchVotes (
    options?: GetTableRowsOptions
  ): Promise<Result<VotesRawModel[], Error>> {
    const table_key = 'voter';
    const tableRowOptions = {
      ...options,
      code: 'ref.worlds',
      table: 'votes',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<VotesRawModel>(tableRowOptions)
      : await this.getAll<VotesRawModel>(table_key, tableRowOptions);
  }
}
