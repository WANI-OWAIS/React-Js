import { useState, useEffect } from "react";

const useCurrencyInfo = (baseCurrency) => {
  const [currencyData, setCurrencyData] = useState({});

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
        const data = await response.json();
        setCurrencyData(data.rates);
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    fetchCurrencyData();
  }, [baseCurrency]);

  return currencyData;
};

export default useCurrencyInfo;
