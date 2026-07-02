export function pricePerWeight(animalWeight: string, costPerPount: string) {
	return (Number(animalWeight) * Number(costPerPount)).toFixed(2);
}
