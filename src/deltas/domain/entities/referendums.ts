/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:56:02 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { Pair, Action } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Referendums` object.
 *
 * @class
 */
export class Referendums implements Entity {
  /**
   * Constructs a new instance of the `Referendums` class.
   *
   * @public
   * @constructor
   * @param number referendumId
   * @param string proposer
   * @param string type
   * @param string votingType
   * @param string status
   * @param string title
   * @param string contentRef
   * @param Pair[] tokenVotes
   * @param Pair[] accountVotes
   * @param Date expires
   * @param Action[] acts
   * @param string [id]
   * @returns `Referendums` - An instance of the `Referendums` class.
   */
  public constructor(
    public referendumId: number,
    public proposer: string,
    public type: string,
    public votingType: string,
    public status: string,
    public title: string,
    public contentRef: string,
    public tokenVotes: Pair[],
    public accountVotes: Pair[],
    public expires: Date,
    public acts: Action[],
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Referendums` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      referendumId: this.referendumId,
      proposer: this.proposer,
      type: this.type,
      votingType: this.votingType,
      status: this.status,
      title: this.title,
      contentRef: this.contentRef,
      tokenVotes: this.tokenVotes,
      accountVotes: this.accountVotes,
      expires: this.expires,
      acts: this.acts,
    };
  }

  /**
   * Creates an instance of the `Referendums` class.
   *
   * @static
   * @public
   * @param number referendumId
   * @param string proposer
   * @param string type
   * @param string votingType
   * @param string status
   * @param string title
   * @param string contentRef
   * @param Pair[] tokenVotes
   * @param Pair[] accountVotes
   * @param Date expires
   * @param Action[] acts
   * @returns `Referendums` An instance of the `Referendums` class.
   */
  public static create(
    referendumId: number,
    proposer: string,
    type: string,
    votingType: string,
    status: string,
    title: string,
    contentRef: string,
    tokenVotes: Pair[],
    accountVotes: Pair[],
    expires: Date,
    acts: Action[],
    id?: string,
    rest?: UnknownObject
  ): Referendums {
    const entity = new Referendums(
      referendumId,
      proposer,
      type,
      votingType,
      status,
      title,
      contentRef,
      tokenVotes,
      accountVotes,
      expires,
      acts,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Referendums {
    return new Referendums(
      0,
      '',
      '',
      '',
      '',
      '',
      '',
        []
,
        []
,
      new Date(0),
        []
,
    );
  }
}

