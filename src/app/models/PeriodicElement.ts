export class PeriodicElement {
  id?: number;
  name?: string;
  weight?: number;
  symbol?: string;
  position?: number;
  isExpanded?: boolean;

  constructor(data: Partial<PeriodicElement> = {}) {
    Object.assign(this, data);
  }
}
