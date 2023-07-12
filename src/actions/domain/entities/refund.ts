/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 07:08:16 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Refund` object.
 *
 * @class
 */
export class Refund implements Entity {
  /**
   * Constructs a new instance of the `Refund` class.
   *
   * @public
   * @constructor
   * @param string account
   * @param string [id]
   * @returns `Refund` - An instance of the `Refund` class.
   */
  public constructor(
    public account: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Refund` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      account: this.account,
    };
  }

  /**
   * Creates an instance of the `Refund` class.
   *
   * @static
   * @public
   * @param string account
   * @returns `Refund` An instance of the `Refund` class.
   */
  public static create(
    account: string,
    id?: string,
    rest?: UnknownObject
  ): Refund {
    const entity = new Refund(
      account,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Refund {
    return new Refund(
      '',
    );
  }
}

