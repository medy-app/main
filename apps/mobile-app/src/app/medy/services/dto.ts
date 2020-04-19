export interface StatsDto {
  updated: string;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  continent: string;
  affectedCountries: number;
}

export interface CountryStatsDto extends StatsDto {
  countryInfo: object;
}
