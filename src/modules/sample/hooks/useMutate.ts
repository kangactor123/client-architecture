import { ApiError } from '@core/types/api-error';
import { MutationOptions } from '@core/types/react-query-types';
import { useMutation } from '@tanstack/react-query';
import { post } from '..';

export const useMutateUser = (options: MutationOptions<void, ApiError, void> = {}) => {
  return useMutation<void, ApiError, void>(post, {
    ...options,
    onSuccess: (...args) => {
      if (options?.onSuccess instanceof Function) {
        options.onSuccess(...args);
      }
    },
  });
};
