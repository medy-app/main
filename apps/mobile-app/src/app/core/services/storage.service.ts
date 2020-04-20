import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

const { Storage } = Plugins;

@Injectable()
export class StorageService {
  setItem(key: string, value: unknown): Observable<unknown> {
    return from(Storage.set({ key, value: JSON.stringify(value) })).pipe(switchMap(() => this.getItem(key)));
  }

  getItem(key: string): Observable<unknown> {
    return from(Storage.get({ key })).pipe(map((stuff: any) => JSON.parse(stuff.value)));
  }

  removeItem(key: string): Observable<void> {
    return from(Storage.remove({ key }));
  }

  clear(): Observable<void> {
    return from(Storage.clear());
  }
}
