import { ApiErrorCodes } from "./error.codes";

export type ApiSuccessResponse<T> = {
  success: true;
  data: T;
};

export type ApiErrorResponse<T> = {
  success: false;
  code: ApiErrorCodes;
  messages?: T[];
};

export type ApiResponse<Res, Err> = ApiSuccessResponse<Res> | ApiErrorResponse<Err>;
