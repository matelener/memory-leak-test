import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  loadText() {
    return of('elo').pipe(delay(5000));
  }
}
