/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:07:05 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { Action } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Propose` object.
 *
 * @class
 */
export class Propose implements Entity {
  /**
   * Constructs a new instance of the `Propose` class.
   *
   * @public
   * @constructor
   * @param string proposer
   * @param string type
   * @param string votingTypeName
   * @param string title
   * @param string content
   * @param string dacId
   * @param Action[] acts
   * @param string [id]
   * @returns `Propose` - An instance of the `Propose` class.
   */
  public constructor(
    public proposer: string,
    public type: string,
    public votingTypeName: string,
    public title: string,
    public content: string,
    public dacId: string,
    public acts: Action[],
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Propose` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      proposer: this.proposer,
      type: this.type,
      votingTypeName: this.votingTypeName,
      title: this.title,
      content: this.content,
      dacId: this.dacId,
      acts: this.acts,
    };
  }

  /**
   * Creates an instance of the `Propose` class.
   *
   * @static
   * @public
   * @param string proposer
   * @param string type
   * @param string votingTypeName
   * @param string title
   * @param string content
   * @param string dacId
   * @param Action[] acts
   * @returns `Propose` An instance of the `Propose` class.
   */
  public static create(
    proposer: string,
    type: string,
    votingTypeName: string,
    title: string,
    content: string,
    dacId: string,
    acts: Action[],
    id?: string,
    rest?: UnknownObject
  ): Propose {
    const entity = new Propose(
      proposer,
      type,
      votingTypeName,
      title,
      content,
      dacId,
      acts,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Propose {
    return new Propose(
      '',
      '',
      '',
      '',
      '',
      '',
        []
,
    );
  }
}

