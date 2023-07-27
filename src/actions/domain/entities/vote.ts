/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:05:56 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";

/**
 * Represents a `Vote` object.
 *
 * @class
 */
export class Vote implements Entity {
  /**
   * Constructs a new instance of the `Vote` class.
   *
   * @public
   * @constructor
   * @param string voter
   * @param number referendumId
   * @param string vote
   * @param string dacId
   * @param string [id]
   * @returns `Vote` - An instance of the `Vote` class.
   */
  public constructor(
    public voter: string,
    public referendumId: number,
    public vote: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Vote` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      voter: this.voter,
      referendumId: this.referendumId,
      vote: this.vote,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Vote` class.
   *
   * @static
   * @public
   * @param string voter
   * @param number referendumId
   * @param string vote
   * @param string dacId
   * @returns `Vote` An instance of the `Vote` class.
   */
  public static create(
    voter: string,
    referendumId: number,
    vote: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Vote {
    const entity = new Vote(
      voter,
      referendumId,
      vote,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Vote {
    return new Vote(
      '',
      0,
      '',
      '',
    );
  }
}

