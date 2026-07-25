export function converToPenies(floatPrice) {
	const [dollar, cents] = floatPrice.split('.');
	const temp = Number(dollar);
	const dollarCents = temp * 100;

	return dollarCents + Number(cents);
}

export function dollarAmount(pennyAmount: string) {
	const numberConvert = Number(pennyAmount);
	const cents = numberConvert % 100;
	const dollars = Math.floor(numberConvert / 100);
	return `${dollars}.${cents}`;
}

export function addUpPrices(prices) {
	const initialValue = 0;
	return prices
		.map((x) => converToPenies(x))
		.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
}

export function averagePrice(prices) {
	const addedPrices = addUpPrices(prices);
	return dollarAmount(Math.floor(addedPrices / prices.length));
}

export function totaledAmountSold(gross) {
	const soldPrices = gross?.flatMap((x) => x.profitedCash);
	const howManyPennies = addUpPrices(soldPrices);
	return dollarAmount(howManyPennies);
}
