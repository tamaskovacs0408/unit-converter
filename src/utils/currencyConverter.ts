import type { CurrencyData } from '@/types/types'

const BASE_CURRENCY = 'EUR'

export function getAvailableCurrencies(rates: Record<string, number>): CurrencyData[] {
  const displayNames = new Intl.DisplayNames(['en'], { type: 'currency' })

  return Object.keys(rates)
    .filter(code => /^[A-Z]{3}$/.test(code))
    .map(code => ({
      code,
      name: displayNames.of(code) ?? code,
    }))
    .sort((a, b) => a.code.localeCompare(b.code))
}

export function convertCurrency(
  from: string,
  to: string,
  amount: number,
  rates: Record<string, number>
): number {
  if (!rates[from] || !rates[to]) {
    throw new Error(`Unknown currency code: ${!rates[from] ? from : to}`)
  }

  let result: number

  if (from === BASE_CURRENCY) {
    result = amount * rates[to]
  } else if (to === BASE_CURRENCY) {
    result = amount / rates[from]
  } else {
    const amountInBase = amount / rates[from]
    result = amountInBase * rates[to]
  }

  return Number(result.toFixed(6))
}