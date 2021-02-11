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

import { type } from "os";

 enum TemperatureUnit {
    CELSIUS = 'Celsius',
    FAHRENHEIT = 'Fahrenheit',
    KELVIN = 'Kelvin'
 };

 function temperatureConversion(value : number, baseUnit : TemperatureUnit) : Record<string, number> {
    let conversion : Record<string, number> = {
        'Celsius' : 0,
        'Fahrenheit' : 0,
        'Kelvin' : 0
    }
    
    switch (baseUnit) {
        case TemperatureUnit.CELSIUS :
            conversion.Celsius = +(value).toFixed(2);
            conversion.Fahrenheit = +(value / 5 * 9 + 32).toFixed(2);
            conversion.Kelvin = +(value + 273.15).toFixed(2);
            break;
        case TemperatureUnit.FAHRENHEIT : 
            conversion.Celsius = +(( value - 32 ) * 5 / 9).toFixed(2);
            conversion.Fahrenheit = +value.toFixed(2);
            conversion.Kelvin = +(( value + 459.67 ) * ( 5 / 9 )).toFixed(2);
            break;
        case TemperatureUnit.KELVIN :
                conversion.Celsius = +(value - 273.15).toFixed(2);
                conversion.Fahrenheit = +(value * ( 9 / 5 ) - 459.67).toFixed(2);
                conversion.Kelvin = +value.toFixed(2);
            break;
    }
    return conversion;
 }

 export { TemperatureUnit, temperatureConversion };