const BASE_URL = 'https://api.coingecko.com/api/v3/simple/price';

document.getElementById('buscar-cripto-btn').addEventListener('click', async () => {
    const selectedCripto = document.getElementById('cripto-select').value;
    const ids = selectedCripto;
    const vs_currencies = 'usd';
    const include_24hr_change = 'true';
    const include_market_cap = 'true';

    const url = `${BASE_URL}?ids=${ids}&vs_currencies=${vs_currencies}&include_24hr_change=${include_24hr_change}&include_market_cap=${include_market_cap}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data && data[ids]) {
            const criptoData = data[ids];
            const precioUSD = criptoData.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
            const cambio24h = criptoData.usd_24h_change.toFixed(2);
            const marketCap = criptoData.usd_market_cap.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

            document.getElementById('cripto-moneda').textContent = ids.charAt(0).toUpperCase() + ids.slice(1);
            document.getElementById('cripto-precio').textContent = precioUSD;
            document.getElementById('cripto-cambio-24h').textContent = `${cambio24h}%`;
            document.getElementById('cripto-market-cap').textContent = marketCap;

        } else {
            alert(`No se pudo obtener datos para la moneda seleccionada.`);
        }
    } catch (error) {
        console.error('Error fetching crypto data:', error);
        alert("Hubo un error al conectar con el servicio de criptomonedas.");
    }
});