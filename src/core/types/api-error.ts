export interface ApiError {
  errorCode: string;
  defaultMessage: string;
  stackTrace: string;
  status: number;
}
