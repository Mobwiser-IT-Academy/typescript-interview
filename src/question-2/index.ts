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
 *
 *
 */

export enum TemperatureUnit {
    CELSIUS = "Celsius",
    FAHRENHEIT = "Fahrenheit",
    KELVIN = "Kelvin",
}
export function temperatureConversion(
    value: number,
    baseUnit: TemperatureUnit
): Record<string, number> {
    let conversor = {
        Celsius: 0,
        Fahrenheit: 0,
        Kelvin: 0,
    };

    if (baseUnit === TemperatureUnit.CELSIUS) {
        conversor = {
            Celsius: Math.round(value * 100) / 100,
            Fahrenheit: Math.round((value * 1.8 + 32.0) * 100) / 100,
            Kelvin: Math.round((value + 273.15) * 100) / 100,
        };
    } else if (baseUnit === TemperatureUnit.FAHRENHEIT) {
        conversor = {
            Celsius: Math.round(((value - 32.0) / 1.8) * 100) / 100,
            Fahrenheit: Math.round(value * 100) / 100,
            Kelvin: Math.round((((value + 459.67) * 5) / 9) * 100) / 100,
        };
    } else if (baseUnit === TemperatureUnit.KELVIN) {
        conversor = {
            Celsius: Math.round((value - 273.15) * 100) / 100,
            Fahrenheit: Math.round(((value - 273.15) * 1.8 + 32) * 100) / 100,
            Kelvin: Math.round(value * 100) / 100,
        };
    }

    return conversor;
}
