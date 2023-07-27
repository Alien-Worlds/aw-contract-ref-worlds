/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:05:56 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";

/**
 * Represents a `Clearconfig` object.
 *
 * @class
 */
export class Clearconfig implements Entity {
  /**
   * Constructs a new instance of the `Clearconfig` class.
   *
   * @public
   * @constructor
   * @param string dacId
   * @param string [id]
   * @returns `Clearconfig` - An instance of the `Clearconfig` class.
   */
  public constructor(
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Clearconfig` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Clearconfig` class.
   *
   * @static
   * @public
   * @param string dacId
   * @returns `Clearconfig` An instance of the `Clearconfig` class.
   */
  public static create(
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Clearconfig {
    const entity = new Clearconfig(
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Clearconfig {
    return new Clearconfig(
      '',
    );
  }
}

