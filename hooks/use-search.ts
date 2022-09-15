import { MS_PER_HOUR } from '@/constants';
import { ApiResponseData, FilterType, Product } from '@/models';
import { constants } from 'perf_hooks';
import * as React from 'react';
import useSWR from 'swr';
import { productApi } from '@/services/products';
import _get from 'lodash/get';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export interface useSearchProps {
  filters: any;
}

export function useSearch({ filters }: useSearchProps) {
  const [searchData, setSearchData] = React.useState<any>(undefined);
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const searchQueryParams = convertQueryParams(filters);

  // const {
  //   data: searchData,
  //   error,
  //   mutate,
  //   isValidating,
  // } = useSWR(`/products/filter/search?${searchQueryParams}`, {
  //   dedupingInterval: MS_PER_HOUR,
  //   revalidateOnFocus: true,
  // });

  React.useEffect(() => {
    (async () => {
      if (router.query?._page) {
        setIsLoading(true);

        try {
          const result = await productApi.searchProduct(searchQueryParams);
          setSearchData(result);
        } catch (error) {
          toast.error((error as Error).message);
        }

        setIsLoading(false);
      }
    })();
  }, [router]);

  function convertQueryParams(filters: any) {
    const newFilters = { ...filters };
    delete newFilters.sortType;

    if (filters.pet === '') delete newFilters.pet;

    const searchQueryParams = new URLSearchParams();

    for (const key in newFilters) {
      searchQueryParams.append(key, newFilters[key]);
    }

    return searchQueryParams;
  }

  return {
    searchData,
    isLoading,
  };
}
