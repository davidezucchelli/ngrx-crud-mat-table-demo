export class ElementNote {
  id?: number;
  idElement?: number;
  description?: string;
  date?: Date;

  constructor(data: Partial<ElementNote> = {}) {
    Object.assign(this, data);
  }
}
