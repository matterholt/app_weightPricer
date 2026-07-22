import type { MarketReportAPI } from '$lib/daTypes/markets';

const sample = [
	{
		target_weight: 55,
		report: [
			{
				wt_heavy: 59,
				wt_light: 50,
				wt_avg: 53,
				price_low: 300,
				price_high: 325,
				price_avg: '314.64',
				auction_id: 100,
				head: 59,
				dressing: 'average',
				auction_date: '2026-07-16'
			},
			{
				wt_heavy: 61,
				wt_light: 80,
				wt_avg: 65,
				price_low: 200,
				price_high: 320,
				price_avg: '300.40',
				auction_id: 200,
				head: 100,
				dressing: 'average',
				auction_date: '2026-07-21'
			}
		]
	}
];

export const marketReports: MarketReportAPI[] = $state(sample);
