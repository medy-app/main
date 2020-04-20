import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { StorageService } from 'apps/mobile-app/src/app/core/services/storage.service';

@Injectable()
export class PreventionPointsService {
  private preventionPointsKey = 'preventionPoints';
  private readonly preventionPointsSubject$ = new ReplaySubject<number>(1);
  preventionPoints$: Observable<number> = this.preventionPointsSubject$.asObservable();
  constructor(private readonly storageService: StorageService) {}

  getPointsCount(): Observable<number> {
    return this.storageService.getItem(this.preventionPointsKey);
  }

  initializePoints(): Observable<number> {
    return this.storageService.setItem(this.preventionPointsKey, 0);
  }

  fetchPoints(): Observable<number> {
    return this.storageService.getItem(this.preventionPointsKey).pipe(
      switchMap(value => {
        return value === null ? this.initializePoints() : of(value);
      }),
      tap((points: number) => {
        this.preventionPointsSubject$.next(points);
      })
    );
  }

  addPoints(pointsToAdd: number): Observable<number> {
    return this.getPointsCount().pipe(
      switchMap((currentPoints: number) =>
        this.storageService.setItem(this.preventionPointsKey, currentPoints + pointsToAdd)
      ),
      tap((updatedPoints: number) => {
        this.preventionPointsSubject$.next(updatedPoints);
      })
    );
  }
}
