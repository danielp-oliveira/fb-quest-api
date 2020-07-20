import { ResultDto } from '../dtos';

export const MakeOkResultDto = (message: string, data: any): ResultDto => {
  return new ResultDto(message, true, data, null);
};

export const MakeErrorResultDto = (
  message: string,
  errors: any,
): ResultDto => {
  return new ResultDto(message, true, null, errors);
};
