/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:07:05 GMT
 */

import { 
  ConfigRawModel,
  DepositsRawModel,
  ReferendumsRawModel,
  VotesRawModel,
} from '../deltas/data/dtos';
import { 
  EosRpcSourceImpl,
  EosSmartContractServiceImpl,
} from '@alien-worlds/eos';

import { RefWorldsContractService } from './ref-worlds-contract.service';
import { GetTableRowsOptions, Result } from '@alien-worlds/api-core';

/**
 * A service class for interacting with the ref.worlds smart contract.
 * 
 * @class RefWorldsContractServiceImpl
 * @extends {EosSmartContractServiceImpl}
 * @implements { RefWorldsContractService}
*/
export class RefWorldsContractServiceImpl
  extends EosSmartContractServiceImpl
  implements RefWorldsContractService 
{
  /**
   * Creates an instance of RefWorldsContractServiceImpl.
   * 
   * @constructor
   * @param {EosRpcSourceImpl} eosRpcSourceImpl - The EOS RPC source to use for interactions.
   * @param {string} serviceUrl - Service Url
   */
  constructor(eosRpcSourceImpl: EosRpcSourceImpl, serviceUrl: string) {
    super(eosRpcSourceImpl, serviceUrl, 'ref.worlds');
  }

  /**
   * A EosSmartContractServiceImpl for the config table.
   * 
   * @type {EosSmartContractServiceImpl}
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
   * A EosSmartContractServiceImpl for the deposits table.
   * 
   * @type {EosSmartContractServiceImpl}
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
   * A EosSmartContractServiceImpl for the referendums table.
   * 
   * @type {EosSmartContractServiceImpl}
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
   * A EosSmartContractServiceImpl for the votes table.
   * 
   * @type {EosSmartContractServiceImpl}
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
