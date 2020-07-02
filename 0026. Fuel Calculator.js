// In this kata you will have to write a function that takes litres and pricePerLiter as arguments. Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per liter cannot be more than 25 cents. round answer to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

function fuelPrice(litres, pricePerLiter) {
  if (litres >= 10) return Number((litres * (pricePerLiter - 0.25)).toFixed(2));
  if (litres >= 8) return Number((litres * (pricePerLiter - 0.2)).toFixed(2));
  if (litres >= 6) return Number((litres * (pricePerLiter - 0.15)).toFixed(2));
  if (litres >= 4) return Number((litres * (pricePerLiter - 0.1)).toFixed(2));
  if (litres >= 2) return Number((litres * (pricePerLiter - 0.5)).toFixed(2));
  return litres * pricePerLiter;
}
