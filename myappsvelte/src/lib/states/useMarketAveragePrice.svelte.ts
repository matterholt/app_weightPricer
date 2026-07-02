import { averagePrice } from '../utils/averagePrice';

export const averagePriceState = $state({
	average: '1100.11'
});

interface MarketPriceRange {
	lowValue: string;
	highValue: string;
}

export function updateAverage(auctionPrices: MarketPriceRange[]) {
	const priceList = auctionPrices.flatMap((x) => Object.values(x));
	averagePriceState.average = averagePrice(priceList);
}
