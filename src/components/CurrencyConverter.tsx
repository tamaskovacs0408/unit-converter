/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import UnitSelector from "@/components/UnitSelector";
import Input from "@/UI/Input";
import { useCurrencyConverter } from "@/hooks/useCurrencyConverter";
import classes from "@/components/ConverterForm.module.scss";
import ConvertButton from "@/UI/ConvertButton";
import CurrencyLoadingIcon from "@/UI/CurrencyLoadingIcon";

export default function CurrencyConverter() {
  const {
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
  } = useCurrencyConverter();

  useEffect(() => {
    fetchCurrencies();
  }, [fetchCurrencies]);

  useEffect(() => {
    if (currencies.length > 0) {
      setSelectedFromCurrency(currencies[0].code);
      setSelectedToCurrency(currencies[0].code);
    }
  }, [currencies, setSelectedFromCurrency, setSelectedToCurrency]);

  const handleFromCurrencyChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedToCurrency(e.target.value);
  };

  if (isLoading) {
    return (
      <div className={classes["error-message"]}>
        <h2>The currencies are loading...</h2>
        <CurrencyLoadingIcon />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classes["error-message"]}>
        The currencies are not available. Please try again later.
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!currencies || currencies.length === 0) {
    return <div className={classes["error-message"]}>No currencies available.</div>;
  }

  return (
    <>
      <NavLink className='back-btn currency' to='/'>
        Select new unit
        </NavLink>
      <form className={classes.form} onSubmit={handleConvert}>
        <div className={classes["form-header currency"]}>
          <UnitSelector
            convertTitle='From'
            unitId='from-units'
            unitsArray={currencies.map(c => ({
              name: `${c.code} - ${c.name}`,
              value: c.code,
            }))}
            value={selectedFromCurrency}
            onChange={handleFromCurrencyChange}
          />
          <UnitSelector
            convertTitle='To'
            unitId='to-units'
            unitsArray={currencies.map(c => ({
              name: `${c.code} - ${c.name}`,
              value: c.code,
            }))}
            value={selectedToCurrency}
            onChange={handleToCurrencyChange}
          />
        </div>
        <Input
          unitId='currency-amount'
          type='number'
          step='0.01'
          min='0'
          placeholder="0"
          ref={inputAmount}
        />
        <ConvertButton halfWidth={true} />
        {isLoading && <div>Converting...</div>}
        {error && <div className={classes.error}>{error}</div>}
        {convertedAmount !== null && (
          <div className={classes.result}>
            {convertedAmount.toFixed(2)} {selectedToCurrency}
          </div>
        )}
      </form>
    </>
  );
}
