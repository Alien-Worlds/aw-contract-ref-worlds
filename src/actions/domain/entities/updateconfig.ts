/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 07:08:16 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { Pair } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Updateconfig` object.
 *
 * @class
 */
export class Updateconfig implements Entity {
  /**
   * Constructs a new instance of the `Updateconfig` class.
   *
   * @public
   * @constructor
   * @param SetConfigItem config
   * @param string dacId
   * @param string [id]
   * @returns `Updateconfig` - An instance of the `Updateconfig` class.
   */
  public constructor(
    public config: SetConfigItem,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Updateconfig` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      config: this.config,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Updateconfig` class.
   *
   * @static
   * @public
   * @param SetConfigItem config
   * @param string dacId
   * @returns `Updateconfig` An instance of the `Updateconfig` class.
   */
  public static create(
    config: SetConfigItem,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Updateconfig {
    const entity = new Updateconfig(
      config,
      dacId,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Updateconfig {
    return new Updateconfig(
      SetConfigItem.getDefault(),
      '',
    );
  }
}

/**
 * Represents a `SetConfigItem` object.
 *
 * @class
 */
export class SetConfigItem implements Entity {
  /**
   * Constructs a new instance of the `SetConfigItem` class.
   *
   * @public
   * @constructor
   * @param number duration
   * @param Pair[] fee
   * @param Pair[] pass
   * @param Pair[] quorumToken
   * @param Pair[] quorumAccount
   * @param Pair[] allowPerAccountVoting
   * @param Pair[] allowVoteType
   * @param string [id]
   * @returns `SetConfigItem` - An instance of the `SetConfigItem` class.
   */
  public constructor(
    public duration: number,
    public fee: Pair[],
    public pass: Pair[],
    public quorumToken: Pair[],
    public quorumAccount: Pair[],
    public allowPerAccountVoting: Pair[],
    public allowVoteType: Pair[],
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `SetConfigItem` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      duration: this.duration,
      fee: this.fee,
      pass: this.pass,
      quorumToken: this.quorumToken,
      quorumAccount: this.quorumAccount,
      allowPerAccountVoting: this.allowPerAccountVoting,
      allowVoteType: this.allowVoteType,
    };
  }

  /**
   * Creates an instance of the `SetConfigItem` class.
   *
   * @static
   * @public
   * @param number duration
   * @param Pair[] fee
   * @param Pair[] pass
   * @param Pair[] quorumToken
   * @param Pair[] quorumAccount
   * @param Pair[] allowPerAccountVoting
   * @param Pair[] allowVoteType
   * @returns `SetConfigItem` An instance of the `SetConfigItem` class.
   */
  public static create(
    duration: number,
    fee: Pair[],
    pass: Pair[],
    quorumToken: Pair[],
    quorumAccount: Pair[],
    allowPerAccountVoting: Pair[],
    allowVoteType: Pair[],
    id?: string,
    rest?: UnknownObject
  ): SetConfigItem {
    const entity = new SetConfigItem(
      duration,
      fee,
      pass,
      quorumToken,
      quorumAccount,
      allowPerAccountVoting,
      allowVoteType,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): SetConfigItem {
    return new SetConfigItem(
      0,
        []
,
        []
,
        []
,
        []
,
        []
,
        []
,
    );
  }
}

