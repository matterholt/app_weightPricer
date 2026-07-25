export interface LiveStockEntry {
	tag_id: string;
	visual_id?: string;
	gender: string;
	weight?: string;
	profitedCash?: string;
	isSold?: boolean;
}
export interface NewLiveStock extends LiveStockEntry {
	headCount: number;
}
