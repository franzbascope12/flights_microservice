import { Guid } from 'guid-typescript';

export interface DomainEvent {
  createdAt: Date;
  id: Guid;
}
