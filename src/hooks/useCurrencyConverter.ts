/* eslint-disable no-undef */
import React, { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  getAvailableCurrencies,
  convertCurrency,
} from "@/utils/currencyConverter";
import type { CurrencyData } from "@/types/types";

interface ExchangeRateApiResponse {
  result: string;
  conversion_rates: Record<string, number>;
}

export const useCurrencyConverter = () => {
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [convertError, setConvertError] = useState<string | null>(null);
  const inputAmount = useRef<HTMLInputElement>(null);
  const [selectedFromCurrency, setSelectedFromCurrency] = useState<string>("");
  const [selectedToCurrency, setSelectedToCurrency] = useState<string>("");

  // useQuery kezeli a fetch-et, a cache-t és a loading/error state-et.
  // A staleTime/gcTime a main.tsx-ben van beállítva globálisan (24h).
  // Ha a localStorage-ban van érvényes cache, a queryFn nem fut le — nincs API hívás.
  const {
    data,
    isLoading,
    error: fetchError,
  } = useQuery<ExchangeRateApiResponse>({
    queryKey: ["exchangeRates"],
    queryFn: () =>
      fetch("/api/rates").then(res => {
        if (!res.ok) throw new Error(`Failed to fetch rates: ${res.status}`);
        return res.json();
      }),
  });

  // A currencies lista a cached rates-ből generálódik — nincs külön API hívás
  const currencies: CurrencyData[] = data?.conversion_rates
    ? getAvailableCurrencies(data.conversion_rates)
    : [];

  // Alapértelmezett valuták beállítása az első betöltéskor
  if (currencies.length > 0 && !selectedFromCurrency) {
    setSelectedFromCurrency(currencies[44].code);
    setSelectedToCurrency(currencies[61].code);
  }

  // Szinkron konverzió — nincs fetch, nincs async, azonnal megvan az eredmény
  const handleConvert = (event: React.FormEvent) => {
    event.preventDefault();

    const amount = Number(inputAmount.current?.value);

    if (!selectedFromCurrency || !selectedToCurrency || !amount) {
      setConvertError("Please fill in all fields");
      return;
    }

    if (!data?.conversion_rates) {
      setConvertError("Exchange rates not available");
      return;
    }

    try {
      setConvertError(null);
      const result = convertCurrency(
        selectedFromCurrency,
        selectedToCurrency,
        amount,
        data.conversion_rates
      );
      setConvertedAmount(result);
    } catch (err) {
      setConvertError(err instanceof Error ? err.message : "Conversion failed");
      setConvertedAmount(null);
    }
  };

  return {
    currencies,
    convertedAmount,
    isLoading,
    error: fetchError
      ? fetchError instanceof Error
        ? fetchError.message
        : "Failed to load currencies"
      : convertError,
    inputAmount,
    handleConvert,
    selectedFromCurrency,
    selectedToCurrency,
    setSelectedFromCurrency,
    setSelectedToCurrency,
  };
};
