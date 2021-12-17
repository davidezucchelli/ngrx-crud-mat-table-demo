import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ElementNote } from 'src/app/models/ElementNote';
import { PeriodicElement } from 'src/app/models/PeriodicElement';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private http: HttpClient) {}

  getElements(): Observable<PeriodicElement[]> {
    return this.http.get<PeriodicElement[]>('http://localhost:3000/element');
  }

  insertElement(
    element: Partial<PeriodicElement>
  ): Observable<PeriodicElement> {
    return this.http.post<PeriodicElement>(
      'http://localhost:3000/element',
      element
    );
  }

  updateElement(
    element: Partial<PeriodicElement>
  ): Observable<PeriodicElement> {
    return this.http.put<PeriodicElement>(
      `http://localhost:3000/element/${element.id}`,
      element
    );
  }

  deleteElement(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/element/${id}`);
  }

  getElementNotes(): Observable<ElementNote[]> {
    return this.http.get<ElementNote[]>('http://localhost:3000/notes');
  }

  insertElementNote(element: Partial<ElementNote>): Observable<ElementNote> {
    return this.http.post<ElementNote>('http://localhost:3000/notes', element);
  }

  updateElementNote(note: Partial<ElementNote>): Observable<ElementNote> {
    return this.http.put<ElementNote>(
      `http://localhost:3000/notes/${note.id}`,
      note
    );
  }

  deleteElementNote(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/notes/${id}`);
  }
}
