import React, {useState} from 'react';
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

const Calculator = props => {
    const [temperature, setTemperature] = useState('')
    const [scale, setScale] = useState('c')

    const handleCelsiusChange = temperature => {
        setTemperature(temperature)
        setScale('c')
    }

    const handleFahrenheitChange = temperature => {
        setTemperature(temperature)
        setScale('f')
    }

    const celsius = sacle
    const toCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9
    const toFahrenheit = celsius => (celsius * 9 / 5) + 32
    const tryConvert = (temperature, convert) => {
        const input = parseFloat(temperature)
        if(Number.isNaN(input))
            return ''

        const output = convert(input)
        const rounded = Math.round(output * 1000) / 1000
        return rounded.toString()
    }
    return (
        <>
            <TemperatureInput scale={"c"} />
            <TemperatureInput scale={"f"} />
        </>
    );
};

export default Calculator;