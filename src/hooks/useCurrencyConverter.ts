import { useRef, useState, useCallback } from 'react';
import { CurrencyData } from '@/types/types';

const API_BASE_URL = 'http://localhost:3000';

export const useCurrencyConverter = () => {
  const [currencies, setCurrencies] = useState<CurrencyData[]>([]);
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputAmount = useRef<HTMLInputElement>(null);
  const [selectedFromCurrency, setSelectedFromCurrency] = useState<string>('');
  const [selectedToCurrency, setSelectedToCurrency] = useState<string>('');

  const fetchCurrencies = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(`${API_BASE_URL}/currencies`);
      console.log('Fetching currencies response:', response);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch currencies: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Currencies data:', data);
      
      if (!data.currencies || !Array.isArray(data.currencies)) {
        throw new Error('Invalid response format');
      }
      
      setCurrencies(data.currencies);
      if (data.currencies.length > 0) {
        setSelectedFromCurrency(data.currencies[0].code);
        setSelectedToCurrency(data.currencies[0].code);
      }
    } catch (err) {
      console.error('Error in fetchCurrencies:', err);
      setError(err instanceof Error ? err.message : 'Failed to load currencies');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleConvert = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const amount = inputAmount.current?.value;

    if (!selectedFromCurrency || !selectedToCurrency || !amount) {
      setError('Please fill in all fields');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(
        `${API_BASE_URL}/convert?from=${selectedFromCurrency}&to=${selectedToCurrency}&amount=${amount}`
      );
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Conversion failed: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Conversion result:', data);
      
      if (typeof data.result !== 'number') {
        throw new Error('Invalid conversion result');
      }
      
      setConvertedAmount(data.result);
    } catch (err) {
      console.error('Error in handleConvert:', err);
      setError(err instanceof Error ? err.message : 'Conversion failed');
      setConvertedAmount(null);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    currencies,
    convertedAmount,
    isLoading,
    error,
    inputAmount,
    fetchCurrencies,
    handleConvert,
    selectedFromCurrency,
    selectedToCurrency,
    setSelectedFromCurrency,
    setSelectedToCurrency,
  };
};
