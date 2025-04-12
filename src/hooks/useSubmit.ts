"use client";

import { useState } from 'react';
import { toast } from 'sonner';

interface SubmitResult<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  submit: (formData: any, method?: string) => Promise<T | null>;
}

export function useSubmit<T>(url: string): SubmitResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const submit = async (formData: any, method = 'POST'): Promise<T | null> => {
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || `HTTP error! Status: ${response.status}`);
      }

      if (!result.success) {
        throw new Error(result.error || 'An error occurred');
      }

      setData(result.data);
      toast.success(
        method === 'POST' ? 'Created successfully' : 'Updated successfully'
      );

      return result.data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(err as Error);
      toast.error(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, submit };
}
