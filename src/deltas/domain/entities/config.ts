/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 07:08:16 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { Pair } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Config` object.
 *
 * @class
 */
export class Config implements Entity {
  /**
   * Constructs a new instance of the `Config` class.
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
   * @param number nextReferendumId
   * @param string [id]
   * @returns `Config` - An instance of the `Config` class.
   */
  public constructor(
    public duration: number,
    public fee: Pair[],
    public pass: Pair[],
    public quorumToken: Pair[],
    public quorumAccount: Pair[],
    public allowPerAccountVoting: Pair[],
    public allowVoteType: Pair[],
    public nextReferendumId: number,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Config` class to a JSON object.
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
      nextReferendumId: this.nextReferendumId,
    };
  }

  /**
   * Creates an instance of the `Config` class.
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
   * @param number nextReferendumId
   * @returns `Config` An instance of the `Config` class.
   */
  public static create(
    duration: number,
    fee: Pair[],
    pass: Pair[],
    quorumToken: Pair[],
    quorumAccount: Pair[],
    allowPerAccountVoting: Pair[],
    allowVoteType: Pair[],
    nextReferendumId: number,
    id?: string,
    rest?: UnknownObject
  ): Config {
    const entity = new Config(
      duration,
      fee,
      pass,
      quorumToken,
      quorumAccount,
      allowPerAccountVoting,
      allowVoteType,
      nextReferendumId,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Config {
    return new Config(
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
      0,
    );
  }
}

