import api from '@core/api/api';
import { Sample } from './types';

// fetch users
export async function fetch(): Promise<Sample[]> {
  const { data } = await api({
    url: `${import.meta.env.BASE_URL}/api`,
    method: 'get',
  });
  return data;
}

export async function post(): Promise<void> {
  const { data } = await api({
    url: `${import.meta.env.BASE_URL}/api/users`,
    method: 'post',
  });
  return data;
}
