export interface GenericResponse<T> {
  value: T;
}

export interface Page<T> {
  contents: T[];
  totalElements: number;
  page: number;
  size: number;
}
