export interface MarketReport {
	head: number;
	auction_id: number;
	wt_light: number;
	wt_heavy: number;
	wt_avg: number;
	price_high: number;
	price_low: number;
	price_avg: string;
	dressing: string;
	auction_date: string
}

export interface MarketReportAPI {
		target_weight: number;
		report: MarketReport[];
}
