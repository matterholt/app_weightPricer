export function pricePerWeight(animalWeight: string, costPerPount: string) {
	return (Number(animalWeight) * Number(costPerPount)).toFixed(2);
}
export function sortedByWeight(livestock) {
	return livestock.sort((a, b) => Number(a.weight) - Number(b.weight));
}
