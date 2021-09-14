import { Plan } from './../enums/plan.enum';

export class Contact {

  public shortName: string = '';
  public name: string = '';
  public description: string = '';
  public image: string = '';
  public template: string = '';
  public created: Date = new Date();
  public updated: Date = new Date();
  public plan: Plan = Plan.STANDARD;
  public culture: string = '';

  constructor() {

  }
}
