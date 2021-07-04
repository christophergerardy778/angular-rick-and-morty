interface ApiResponseInfo {
  count: number;
  next: string;
  pages: number;
  prev: string;
}

export interface ApiResponseModel<T> {
  info: ApiResponseInfo;
  results: T[];
}
