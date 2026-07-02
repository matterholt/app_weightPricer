function converToPenies(floatPrice) {
	const [dollar, cents] = floatPrice.split('.');
	const temp = Number(dollar);
	console.log(temp);
	const dollarCents = temp * 100;
	return dollarCents + Number(cents);
}

function dollarAmount(pennyAmount) {
	const cents = pennyAmount % 100;
	const dollars = Math.floor(pennyAmount / 100);
	return `${dollars}.${cents}`;
}

function averagePrice(prices) {
	const initialValue = 0;
	const addedPrices = prices
		.map((x) => converToPenies(x))
		.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

	return dollarAmount(Math.floor(addedPrices / prices.length));
}

export { averagePrice };
