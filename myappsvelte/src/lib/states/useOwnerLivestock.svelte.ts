import { marketPricesState } from './useMarketAveragePrice.svelte';
import type { LiveStockEntry } from '../daTypes/livestock';

import { pricePerWeight } from '../utils/livestockActions';

const livestockData: LiveStockEntry[] = [
	{
		tag_id: '21',
		weight: '38',
		visual_id: 'Petes',
		gender: 'male',
		isSold: true
	},
	{
		tag_id: '23',
		weight: '40',
		visual_id: 'Isaac',
		gender: 'female',
		isSold: false
	},
	{
		tag_id: '19',
		weight: '42',
		visual_id: 'cow',
		gender: 'female',
		isSold: false
	},
	{
		tag_id: '14',
		weight: '47',
		visual_id: 'Isaac',
		gender: 'male',
		isSold: false
	},
	{
		tag_id: '22',
		weight: '47',
		visual_id: 'mocha',
		gender: 'female',
		isSold: false
	},
	{
		tag_id: '20',
		weight: '48',
		visual_id: '',
		gender: 'female'
	},
	{
		tag_id: '16',
		weight: '49',
		visual_id: '',
		gender: 'female',
		isSold: true
	},
	{
		tag_id: '17',
		weight: '51',
		visual_id: '',
		gender: 'female',
		isSold: true
	},
	{
		tag_id: '15',
		weight: '55',
		visual_id: '',
		gender: 'female',
		isSold: true
	},
	{
		tag_id: '13',
		weight: '57',
		visual_id: '',
		gender: 'female'
	},
	{
		tag_id: '18',
		weight: '63',
		visual_id: 'blackie',
		gender: 'male',
		isSold: true
	},
	{
		tag_id: '01',
		weight: '65',
		visual_id: '',
		gender: 'female',
		isSold: true
	}
];

const initialSetup = livestockData.map((x) => {
	return { ...x, profitedCash: pricePerWeight(x.weight, marketPricesState.average) };
});

export const livestockState: {
	rollcall: LiveStockEntry[];
} = $state({
	rollcall: initialSetup
});
