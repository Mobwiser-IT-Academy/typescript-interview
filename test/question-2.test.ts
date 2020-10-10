import { temperatureConversion, TemperatureUnit } from "../src/question-2";

test("validate question 2", () => {
  const test1: Record<TemperatureUnit, number> = temperatureConversion(
    30,
    TemperatureUnit.CELSIUS
  );
  expect(test1[TemperatureUnit.CELSIUS]).toBe(30);
  expect(test1[TemperatureUnit.FAHRENHEIT]).toBe(86);
  expect(test1[TemperatureUnit.KELVIN]).toBe(303.15);

  const test2 = temperatureConversion(10, TemperatureUnit.FAHRENHEIT);
  expect(test2[TemperatureUnit.CELSIUS]).toBe(-12.22);
  expect(test2[TemperatureUnit.FAHRENHEIT]).toBe(10);
  expect(test2[TemperatureUnit.KELVIN]).toBe(260.93);

  const test3 = temperatureConversion(280, TemperatureUnit.KELVIN);
  expect(test3[TemperatureUnit.CELSIUS]).toBe(6.85);
  expect(test3[TemperatureUnit.FAHRENHEIT]).toBe(44.33);
  expect(test3[TemperatureUnit.KELVIN]).toBe(280);
});
