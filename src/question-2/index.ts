/**
 * Temperature conversion
 *
 * Write a function with the following signature
 *  > temperatureConversion(value: number, baseUnit: TemperatureUnit): Record<string, number>
 *
 * As you can see in the signature, the function should receive a value and the base unit (Celsius, Fahrenheit, Kelvin).
 * Then the function should return an object with the three units and the values of the given temperature in all units.
 *
 * Examples:
 *  > temperatureConversion(30, 'Celsius') => {'Celsius': 30, 'Fahrenheit': 86, 'Kelvin': 303.15}
 *  > temperatureConversion(10, 'Fahrenheit') => {'Celsius': -12.22, 'Fahrenheit': 10, 'Kelvin': 260.93}
 *
 * Notes:
 *  1 - Round all numbers to a 2 decimal places number.
 *  2 - You should create and export an enumerator called TemperatureUnit with three possible values: CELSIUS='Celsius', FAHRENHEIT='Fahrenheit', KELVIN='Kelvin'
 */
export enum TemperatureUnit {
  CELSIUS = "Celsius",
  FAHRENHEIT = "Fahrenheit",
  KELVIN = "Kelvin",
}
const conversions: Record<
  string,
  (value) => Record<TemperatureUnit, number>
> = {
  [TemperatureUnit.CELSIUS]: (value) =>
    <Record<string, number>>{
      [TemperatureUnit.FAHRENHEIT]: celsiusToFahrenheitConversion(value),
      [TemperatureUnit.KELVIN]: celsiusToKelvinConversion(value),
    },
  [TemperatureUnit.FAHRENHEIT]: (value) =>
    <Record<string, number>>{
      [TemperatureUnit.CELSIUS]: fahrenheitToCelsiusConversion(value),
      [TemperatureUnit.KELVIN]: fahrenheitToKelvinConversion(value),
    },
  [TemperatureUnit.KELVIN]: (value) =>
    <Record<string, number>>{
      [TemperatureUnit.CELSIUS]: kelvinToCelsiusConversion(value),
      [TemperatureUnit.FAHRENHEIT]: kelvinToFahrenheitConversion(value),
    },
};

export function temperatureConversion(
  value: number,
  baseUnit: TemperatureUnit
): Record<TemperatureUnit, number> {
  return {
    [baseUnit]: value,
    ...conversions[baseUnit](value),
  };
}

const precision = 100;
function celsiusToFahrenheitConversion(value: number): number {
  return Math.round(((value * 9) / 5 + 32) * precision) / precision;
}

function celsiusToKelvinConversion(value: number): number {
  return Math.round((value + 273.15) * precision) / precision;
}

function fahrenheitToCelsiusConversion(value: number): number {
  return Math.round((((value - 32) * 5) / 9) * precision) / precision;
}

function fahrenheitToKelvinConversion(value: number): number {
  return Math.round((((value - 32) * 5) / 9 + 273.15) * precision) / precision;
}

function kelvinToCelsiusConversion(value: number): number {
  return Math.round((value - 273.15) * precision) / precision;
}

function kelvinToFahrenheitConversion(value: number): number {
  return Math.round((((value - 273.15) * 9) / 5 + 32) * precision) / precision;
}
