"use client";

import { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface FetchResult<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  mutate: () => Promise<void>;
}

export function useFetch<T>(url: string): FetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();

      if (result.success) {
        setData(result.data);
        setError(null);
      } else {
        throw new Error(result.error || 'An error occurred');
      }
    } catch (err) {
      setError(err as Error);
      toast.error('Failed to fetch data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const mutate = async () => {
    setIsLoading(true);
    await fetchData();
  };

  return { data, isLoading, error, mutate };
}
