/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:19:51 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Exec` object.
 *
 * @class
 */
export class Exec implements Entity {
  /**
   * Constructs a new instance of the `Exec` class.
   *
   * @public
   * @constructor
   * @param number referendumId
   * @param string dacId
   * @param string [id]
   * @returns `Exec` - An instance of the `Exec` class.
   */
  public constructor(
    public referendumId: number,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Exec` class to a JSON object.
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
   * Creates an instance of the `Exec` class.
   *
   * @static
   * @public
   * @param number referendumId
   * @param string dacId
   * @returns `Exec` An instance of the `Exec` class.
   */
  public static create(
    referendumId: number,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Exec {
    const entity = new Exec(
      referendumId,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Exec {
    return new Exec(
      0,
      '',
    );
  }
}

