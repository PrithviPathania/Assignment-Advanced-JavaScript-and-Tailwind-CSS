/*
    Authors:      Krish Choudhary, Prithvi Pathania, Ricky Mormor
    Date:         2026-05-29
    Course:       CPRG 306 B - Advanced JavaScript and Tailwind CSS

    Program description:
    This script powers a static unit-conversion website that converts between
    metric and imperial units (kilograms/pounds, kilometres/miles, Celsius/Fahrenheit).
    A single higher-order function, makeConverter(fromUnit, toUnit), returns an
    arrow-notation conversion function for the requested pair. The returned
    converter accepts either a single numeric value or an array of numeric
    values and returns the converted value or array of converted values.

    Inputs:      User-entered number(s) from a text input on the Weight,
                 Distance, or Temperature page, and a dropdown selection
                 describing which direction to convert.
    Processing:  makeConverter looks up the correct math for the chosen unit
                 pair and returns an arrow function. handleConvert reads the
                 form, splits comma- or space-separated input into an array
                 when needed, calls the converter, and formats the result.
    Outputs:     The converted value(s) are written into the result div on
                 the page, rounded to two decimal places.
*/


// Conversion math lookup table
const conversionFormulas = {
    "lb-kg":  (value) => value * 0.45359237,
    "kg-lb":  (value) => value * 2.20462262,
    "mi-km":  (value) => value * 1.609344,
    "km-mi":  (value) => value * 0.62137119,
    "c-f":    (value) => (value * 9 / 5) + 32,
    "f-c":    (value) => (value - 32) * 5 / 9,
};


// Takes the unit to convert FROM and the unit to convert TO.
// Returns an arrow function that converts either a single value or an array.
function makeConverter(fromUnit, toUnit) {
    const key = `${fromUnit}-${toUnit}`;
    const formula = conversionFormulas[key];

    if (!formula) {
        throw new Error(`No conversion available from ${fromUnit} to ${toUnit}`);
    }

    return (input) => Array.isArray(input)
        ? input.map((value) => formula(value))
        : formula(input);
}


// Splits a string on commas or whitespace and returns an array of numbers.
// Returns null if any token is not a valid number.
function parseValues(rawText) {
    const tokens = rawText
        .split(/[\s,]+/)
        .map((token) => token.trim())
        .filter((token) => token.length > 0);

    if (tokens.length === 0) {
        return null;
    }

    const numbers = tokens.map((token) => parseFloat(token));
    if (numbers.some((number) => isNaN(number))) {
        return null;
    }

    return numbers;
}


// Rounds each number to 2 decimals and joins a list with commas.
function formatResult(values, unitLabel) {
    const rounded = values.map((value) => value.toFixed(2));
    return `${rounded.join(", ")} ${unitLabel}`;
}


// pageConfig describes the dropdown options for this page so one handler
// can drive Weight, Distance, and Temperature.
function handleConvert(pageConfig) {
    const direction = document.getElementById("direction").value;
    const rawInput  = document.getElementById("values").value;
    const resultBox = document.getElementById("result");

    const option = pageConfig.options[direction];
    if (!option) {
        resultBox.innerText = "Please choose a conversion.";
        return;
    }

    const numbers = parseValues(rawInput);
    if (numbers === null) {
        resultBox.innerText = "Please enter one or more valid numbers (separated by commas or spaces).";
        return;
    }

    const converter = makeConverter(option.from, option.to);
    const converted = converter(numbers);
    resultBox.innerText = formatResult(converted, option.toLabel);
}


// Each page wires up its own dropdown options when the DOM is ready.
const pageConfigs = {
    weight: {
        options: {
            "lb-kg": { from: "lb", to: "kg", toLabel: "kg" },
            "kg-lb": { from: "kg", to: "lb", toLabel: "lb" },
        },
    },
    distance: {
        options: {
            "mi-km": { from: "mi", to: "km", toLabel: "km" },
            "km-mi": { from: "km", to: "mi", toLabel: "mi" },
        },
    },
    temperature: {
        options: {
            "c-f": { from: "c", to: "f", toLabel: "°F" },
            "f-c": { from: "f", to: "c", toLabel: "°C" },
        },
    },
};


document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page;
    const config = pageConfigs[page];
    if (!config) {
        return; // index.html or any page without a converter form
    }

    const button = document.getElementById("convert");
    if (button) {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            handleConvert(config);
        });
    }
});
