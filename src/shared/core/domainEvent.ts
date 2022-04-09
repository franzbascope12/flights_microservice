import { Guid } from 'guid-typescript';

export interface DomainEvent {
  name: string;
  createdAt: Date;
  id: Guid;
}
