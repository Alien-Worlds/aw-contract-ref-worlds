/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:56:02 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Rmvexpired` object.
 *
 * @class
 */
export class Rmvexpired implements Entity {
  /**
   * Constructs a new instance of the `Rmvexpired` class.
   *
   * @public
   * @constructor
   * @param number referendumId
   * @param string dacId
   * @param string [id]
   * @returns `Rmvexpired` - An instance of the `Rmvexpired` class.
   */
  public constructor(
    public referendumId: number,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Rmvexpired` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      referendumId: this.referendumId,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Rmvexpired` class.
   *
   * @static
   * @public
   * @param number referendumId
   * @param string dacId
   * @returns `Rmvexpired` An instance of the `Rmvexpired` class.
   */
  public static create(
    referendumId: number,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Rmvexpired {
    const entity = new Rmvexpired(
      referendumId,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Rmvexpired {
    return new Rmvexpired(
      0,
      '',
    );
  }
}

