# Assignment: Advanced JavaScript and Tailwind CSS

A responsive static website that converts between metric and imperial units
(kilograms &harr; pounds, kilometres &harr; miles, Celsius &harr; Fahrenheit)
using a single higher-order JavaScript function and Tailwind CSS (Play CDN).

**Course:** CPRG 306 B

## Pages

- `index.html` &mdash; landing page with links to each converter
- `weight.html` &mdash; pounds &harr; kilograms
- `distance.html` &mdash; miles &harr; kilometres
- `temperature.html` &mdash; Celsius &harr; Fahrenheit

Each converter page uses one form with a dropdown to choose the conversion
direction and a single input that accepts either one number or a list of
numbers separated by commas or spaces.

## JavaScript

All conversion logic lives in `js/Script.js`. The core is a higher-order
function `makeConverter(fromUnit, toUnit)` that returns an arrow-notation
conversion function. The returned function accepts either a single value
or an array of values and returns the converted value or array.

## Contributors

- **Prithvi Pathania** &mdash; HTML structure, responsive Tailwind navbar,
  initial page scaffolding for index/weight/distance/temperature, and the
  initial weight conversion layout.
- **Krish Choudhary** &mdash; Initial JavaScript conversion functions for
  weight, distance, and temperature.
- **Ricky Mormor** &mdash; Final integration: rewrote the JavaScript as a
  higher-order function with array support and bidirectional conversions,
  rebuilt each page into a single dropdown form, fixed the navbar markup,
  and prepared the project for deployment.
