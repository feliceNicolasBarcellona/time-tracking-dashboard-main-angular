import { Injectable } from '@angular/core';
import { Data } from 'src/model/data';
import { DATA } from '../mock-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): Observable<Data[]> {
    const data = of(DATA);
    return data
  }
}
