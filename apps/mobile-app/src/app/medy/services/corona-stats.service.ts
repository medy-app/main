import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { StatsDto, CountryStatsDto } from './dto';
import { environment } from '../../../environments/environment';

@Injectable()
export class CoronaStatsService {
  constructor(private http: HttpClient) {}

  getGlobal(): Observable<StatsDto> {
    return this.http.get<StatsDto>(environment.coronaApi.global);
  }

  getCountry(): Observable<CountryStatsDto> {
    return this.http.get<CountryStatsDto>(environment.coronaApi.country);
  }
}
