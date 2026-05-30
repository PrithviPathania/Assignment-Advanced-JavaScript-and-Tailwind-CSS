# Assignment: Advanced JavaScript and Tailwind CSS

Group project for CPRG 306 B. A small static site that converts between metric and imperial units &mdash; kilograms and pounds, kilometres and miles, Celsius and Fahrenheit. Built with Tailwind CSS (Play CDN) and one JS file.

Four pages: a landing page (`index.html`) plus one each for weight, distance, and temperature. Each converter is the same shape: a dropdown to pick the direction (lb to kg or kg to lb, etc.) and an input that takes either a single number or a comma/space-separated list.

The math lives in `js/Script.js`. `makeConverter(fromUnit, toUnit)` is the higher-order function and it returns an arrow function. That arrow function takes either a single value or an array.

## Who did what

Prithvi Pathania set up the HTML across all four pages, built the Tailwind navbar, and did the first pass of the weight conversion layout.

Krish Choudhary wrote the first version of the JS conversion functions for weight, distance, and temperature.

Ricky Mormor handled the final integration on the `finalTouches` branch: rewrote the JS into the higher-order pattern the rubric asks for, added array support and reverse-direction conversions, swapped the weight page from two forms to a single dropdown, built out distance and temperature to match, fixed a navbar bug that was breaking the responsive layout, and got the project ready to deploy.
