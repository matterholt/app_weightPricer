import { marketPricesState } from './useMarketAveragePrice.svelte';
import type { LiveStockEntry, NewLiveStock } from '../daTypes/livestock';

import { pricePerWeight } from '../utils/livestockActions';

const livestockData: LiveStockEntry[] = [
	{
		tag_id: '20',
		weight: '63',
		visual_id: 'all white curly hair',
		gender: 'female',
		isSold: false
	},

	{
		tag_id: '25',
		weight: '40.5',
		visual_id: 'black with white marks on head',
		gender: 'female',
		isSold: false
	},
	{
		tag_id: '27',
		weight: '40',
		visual_id: 'black with white back feet',
		gender: 'male',
		isSold: false
	},
	{
		tag_id: '24',
		weight: '55.5',
		visual_id: 'white brown dot, currly hair',
		gender: 'male',
		isSold: false
	},
	{
		tag_id: '26',
		weight: '39',
		visual_id: 'all black wool like hair',
		gender: 'male',
		isSold: false
	},
	{
		tag_id: '21',
		weight: '50.5',
		visual_id: 'all white short hair',
		gender: 'female',
		isSold: false
	},
	{
		tag_id: '23',
		weight: '40',
		visual_id: 'Isaac',
		gender: 'female',
		isSold: true
	},
	{
		tag_id: '19',
		weight: '66',
		visual_id: 'holstein like pattern ',
		gender: 'female',
		isSold: false
	},
	{
		tag_id: '14',
		weight: '62.5',
		visual_id: 'brown spot curly hair',
		gender: 'male',
		isSold: false
	},
	{
		tag_id: '22',
		weight: '47',
		visual_id: 'mocha',
		gender: 'female',
		isSold: true
	},
	{
		tag_id: '20',
		weight: '48',
		visual_id: '',
		gender: 'female',
		isSold: true
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
		gender: 'female',
		isSold: true
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

export function storeLivestockID() {
	return livestockState.rollcall.map((x) => x.tag_id);
}

export function updateRollcall(newEntries: NewLiveStock[]) {
	const cleanup = newEntries.map((x) => ({
		gender: x.gender,
		tag_id: x.tag_id,
		visual_id: x.visual_id,
		weight: x.weight
	}));

	livestockState.rollcall = [...livestockState.rollcall, ...cleanup];
}
