/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:19:51 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Clean` object.
 *
 * @class
 */
export class Clean implements Entity {
  /**
   * Constructs a new instance of the `Clean` class.
   *
   * @public
   * @constructor
   * @param string account
   * @param string dacId
   * @param string [id]
   * @returns `Clean` - An instance of the `Clean` class.
   */
  public constructor(
    public account: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Clean` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      account: this.account,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Clean` class.
   *
   * @static
   * @public
   * @param string account
   * @param string dacId
   * @returns `Clean` An instance of the `Clean` class.
   */
  public static create(
    account: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Clean {
    const entity = new Clean(
      account,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Clean {
    return new Clean(
      '',
      '',
    );
  }
}

