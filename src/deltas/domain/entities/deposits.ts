/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 07:08:16 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { ExtendedAsset } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Deposits` object.
 *
 * @class
 */
export class Deposits implements Entity {
  /**
   * Constructs a new instance of the `Deposits` class.
   *
   * @public
   * @constructor
   * @param string account
   * @param ExtendedAsset deposit
   * @param string [id]
   * @returns `Deposits` - An instance of the `Deposits` class.
   */
  public constructor(
    public account: string,
    public deposit: ExtendedAsset,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Deposits` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      account: this.account,
      deposit: this.deposit,
    };
  }

  /**
   * Creates an instance of the `Deposits` class.
   *
   * @static
   * @public
   * @param string account
   * @param ExtendedAsset deposit
   * @returns `Deposits` An instance of the `Deposits` class.
   */
  public static create(
    account: string,
    deposit: ExtendedAsset,
    id?: string,
    rest?: UnknownObject
  ): Deposits {
    const entity = new Deposits(
      account,
      deposit,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Deposits {
    return new Deposits(
      '',
      ExtendedAsset.getDefault(),
    );
  }
}

