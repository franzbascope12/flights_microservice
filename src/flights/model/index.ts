import { Guid } from 'guid-typescript';
import { AggregateRoot } from 'src/shared/core/aggregateRoot';
import { DomainEvent } from 'src/shared/core/domainEvent';

export class Flight extends AggregateRoot<Guid> {
  aircraftId;
  destinyId: Guid;
  originId: Guid;
  code: string; // should be a value object of flight number
  crew; // should be a class
  departTime: Date;
  arrivalTime: Date;

  constructor(
    destinyId: Guid,
    originId: Guid,
    code: string,
    crew,
    aircraftId,
    departTime: Date,
    arrivalTime: Date,
  ) {
    super();
    this.destinyId = destinyId;
    this.originId = originId;
    this.code = code;
    this.crew = crew;
    this.aircraftId = aircraftId;
    this.arrivalTime = arrivalTime;
    this.departTime = departTime;
    this.id = Guid.create();
  }

  public beforeCreate() {
    // validate aircraft is free
    // validate origin and destiny
    // create lista (report)
  }

  public afterCreate() {
    const event: DomainEvent = {
      name: 'after_create_flight',
      createdAt: new Date(),
      id: Guid.create(),
    };
    this.addDomainEvent(event);
  }
}
