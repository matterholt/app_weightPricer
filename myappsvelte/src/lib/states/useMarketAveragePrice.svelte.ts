import { averagePrice } from '../utils/averagePrice';

interface MarketPriceRange {
	lowValue: string;
	highValue: string;
}

export const marketPricesState = $state({
	average: '2.00',
	lowValue: '1.01',
	highValue: '10.10'
});

function setLowHigh(priceRanges: string[]) {
	marketPricesState.highValue = priceRanges.reduce((min, value) => {
		return Number(value) > Number(min) ? value : min;
	});
	marketPricesState.lowValue = priceRanges.reduce((min, value) => {
		return Number(value) < Number(min) ? value : min;
	});
}

export function updateAverage(auctionPrices: MarketPriceRange[]) {
	const priceList = auctionPrices.flatMap((x) => Object.values(x));
	setLowHigh(priceList);
	marketPricesState.average = averagePrice(priceList);
}
