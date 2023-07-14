/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:56:02 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { Pair } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Votes` object.
 *
 * @class
 */
export class Votes implements Entity {
  /**
   * Constructs a new instance of the `Votes` class.
   *
   * @public
   * @constructor
   * @param string voter
   * @param Pair[] votes
   * @param string [id]
   * @returns `Votes` - An instance of the `Votes` class.
   */
  public constructor(
    public voter: string,
    public votes: Pair[],
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Votes` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      voter: this.voter,
      votes: this.votes,
    };
  }

  /**
   * Creates an instance of the `Votes` class.
   *
   * @static
   * @public
   * @param string voter
   * @param Pair[] votes
   * @returns `Votes` An instance of the `Votes` class.
   */
  public static create(
    voter: string,
    votes: Pair[],
    id?: string,
    rest?: UnknownObject
  ): Votes {
    const entity = new Votes(
      voter,
      votes,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Votes {
    return new Votes(
      '',
        []
,
    );
  }
}

