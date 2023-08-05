import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { ApiError } from '@core/types/api-error';
import { fetch, KEY, Sample } from '..';

export const useSample = <T = Sample>(options?: UseQueryOptions<Sample, ApiError, T>) => {
  return useQuery<Sample, ApiError, T>([KEY], () => fetch(), {
    ...options,
  });
};
