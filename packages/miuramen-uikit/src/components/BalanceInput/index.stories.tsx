import React, { useState } from "react";
import Box from "../Box/Box";
import BalanceInput from "./BalanceInput";
import TextFieldComp from "./TextField";

export default {
  title: "Components/BalanceInput",
  component: BalanceInput,
  argTypes: {},
};

export const Default: React.FC = () => {
  const [decimalValue, setDecimalValue] = useState(1.43333);
  const [numericValue, setNumericValue] = useState(5);

  const currencyValue = (input: number) => {
    return `~${(input * 1.3).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })} USD`;
  };

  const handleDecimalChange = (input) => {
    setDecimalValue(input);
  };

  const handleNumericChange = (input) => {
    setNumericValue(input);
  };

  return (
    <Box width="300px">
      <BalanceInput
        onUserInput={handleDecimalChange}
        value={decimalValue}
        currencyValue={currencyValue(decimalValue)}
        placeholder="0.0"
        mb="32px"
      />
      <BalanceInput
        value={decimalValue * 1.5}
        onUserInput={handleDecimalChange}
        currencyValue={currencyValue(decimalValue * 1.5)}
        placeholder="1.5"
        isWarning
        mb="32px"
      />
      <BalanceInput
        value={numericValue}
        onUserInput={handleNumericChange}
        inputProps={{ inputMode: "numeric" }}
        currencyValue={currencyValue(numericValue)}
        placeholder="0"
        mb="32px"
      />
    </Box>
  );
};

export const UnitDisplay: React.FC = () => {
  const MIUX_PRICE = 69;
  const [miuramenValue, setMiuRamenValue] = useState("1006.086956");

  const miuramenToUSD = (input: string) => {
    const convertedToUSD = parseFloat(input) * MIUX_PRICE;
    return `~${convertedToUSD.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })} USD`;
  };

  const handleMiuRamenChange = (input: string) => {
    setMiuRamenValue(input);
  };

  return (
    <>
      <Box width="300px" mb="24px">
        <BalanceInput
          onUserInput={handleMiuRamenChange}
          value={miuramenValue}
          currencyValue={miuramenToUSD(miuramenValue)}
          placeholder="0.0"
          unit="MIUX"
        />
      </Box>
      {/* Long token names with spaces */}
      <Box width="300px">
        <BalanceInput
          onUserInput={handleMiuRamenChange}
          value={miuramenValue}
          currencyValue="2854.66 BADGER-HOTCROSS LP"
          placeholder="0.0"
          unit="MIUX-BNB LP"
        />
      </Box>
    </>
  );
};

export const SiwtchUnits: React.FC = () => {
  const MIUX_PRICE = 69;
  const [editingUnit, setEditingUnit] = useState<"MIUX" | "USD">("MIUX");
  const conversionUnit = editingUnit === "MIUX" ? "USD" : "MIUX";
  const [values, setValues] = useState({
    MIUX: "1006.086957",
    USD: `${1006.086957 * MIUX_PRICE}`,
  });

  const currencyValue = !Number.isNaN(parseFloat(values[conversionUnit]))
    ? parseFloat(values[conversionUnit]).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : "0.00";

  const switchEditingUnits = () => {
    const editingUnitAfterChange = editingUnit === "MIUX" ? "USD" : "MIUX";
    // This is needed to persist same value as shown for currencyValue after switching
    // otherwise user will see lots of decimals
    const valuesAfterChange = { ...values };
    valuesAfterChange[editingUnitAfterChange] = !Number.isNaN(parseFloat(values[conversionUnit]))
      ? parseFloat(values[conversionUnit]).toFixed(2)
      : "0.00";
    setValues(valuesAfterChange);
    setEditingUnit(editingUnitAfterChange);
  };

  const handleMiuRamenChange = (input: string) => {
    const inputAsFloat = parseFloat(input);
    if (editingUnit === "MIUX") {
      setValues({
        MIUX: input,
        USD: Number.isNaN(inputAsFloat) ? "" : `${inputAsFloat * MIUX_PRICE}`,
      });
    } else {
      setValues({
        MIUX: Number.isNaN(inputAsFloat) ? "" : `${inputAsFloat / MIUX_PRICE}`,
        USD: input,
      });
    }
  };

  return (
    <Box width="300px">
      <BalanceInput
        onUserInput={handleMiuRamenChange}
        value={values[editingUnit]}
        currencyValue={`~${currencyValue} ${conversionUnit}`}
        placeholder="0.0"
        unit={editingUnit}
        isWarning={!values[editingUnit] || parseFloat(values[editingUnit]) <= 0}
        switchEditingUnits={switchEditingUnits}
      />
    </Box>
  );
};

export const Textfield: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <Box width="300px">
      <TextFieldComp label="Label" value={value} placeholder="Placeholder" onUserInput={setValue} />
    </Box>
  );
};
