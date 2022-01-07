import { EntityInterface } from "./EntityInterface";
import { DomainEventInterface } from "./DomainEventInterface";

export abstract class Aggregate implements EntityInterface {
  private events: DomainEventInterface[];

  public abstract getId(): number | string;

  public popEvents(): DomainEventInterface[] {
    const events = this.events;
    this.events = [];

    return events;
  }

  protected raise(event: DomainEventInterface): void {
    this.events.push(event);
  }
}
