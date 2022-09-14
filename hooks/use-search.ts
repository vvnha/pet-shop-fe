import { MS_PER_HOUR } from '@/constants';
import { FilterType } from '@/models';
import { constants } from 'perf_hooks';
import * as React from 'react';
import useSWR from 'swr';

export interface useSearchProps {
  filters: any;
}

export function useSearch({ filters }: useSearchProps) {
  const searchQueryParams = convertQueryParamsToString(filters);

  const {
    data: searchData,
    error,
    mutate,
    isValidating,
  } = useSWR(`/products/filter/search?${searchQueryParams}`, {
    dedupingInterval: MS_PER_HOUR,
    revalidateOnFocus: false,
  });

  const isLoading = searchData === undefined;

  function convertQueryParamsToString(filters: any) {
    const newFilters = { ...filters };
    delete newFilters.sortType;

    if (filters.pet === '') delete newFilters.pet;

    const searchQueryParams = new URLSearchParams();

    for (const key in newFilters) {
      searchQueryParams.append(key, newFilters[key]);
    }

    return searchQueryParams.toString();
  }

  return {
    searchData,
    isLoading,
  };
}
