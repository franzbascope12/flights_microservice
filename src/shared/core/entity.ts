import { DomainEvent } from './domainEvent';

export abstract class Entity<TId> {
  public id: TId;

  private readonly domainEvents: DomainEvent[];

  constructor(domainEvents: DomainEvent[]) {
    this.domainEvents = domainEvents;
  }

  addDomainEvent(domainEvent: DomainEvent) {
    this.domainEvents.push(domainEvent);
  }

  clearDomainEvents() {
    this.domainEvents.splice(0);
  }
}
