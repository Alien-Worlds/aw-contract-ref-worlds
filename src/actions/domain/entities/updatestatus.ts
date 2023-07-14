/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:07:05 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Updatestatus` object.
 *
 * @class
 */
export class Updatestatus implements Entity {
  /**
   * Constructs a new instance of the `Updatestatus` class.
   *
   * @public
   * @constructor
   * @param number referendumId
   * @param string dacId
   * @param string [id]
   * @returns `Updatestatus` - An instance of the `Updatestatus` class.
   */
  public constructor(
    public referendumId: number,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Updatestatus` class to a JSON object.
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
   * Creates an instance of the `Updatestatus` class.
   *
   * @static
   * @public
   * @param number referendumId
   * @param string dacId
   * @returns `Updatestatus` An instance of the `Updatestatus` class.
   */
  public static create(
    referendumId: number,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Updatestatus {
    const entity = new Updatestatus(
      referendumId,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Updatestatus {
    return new Updatestatus(
      0,
      '',
    );
  }
}

