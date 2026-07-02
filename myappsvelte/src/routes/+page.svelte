<script module>
	import MarketReport from '../components/MarketReport.svelte';
	import LivestockTable from '../components/LivestockTable.svelte';

	let temp = [
		{
			tag_id: '21',
			weight: '38',
			visual_id: 'Petes',
			gender: 'male'
		},
		{
			tag_id: '23',
			weight: '40',
			visual_id: 'Isaac',
			gender: 'female'
		},
		{
			tag_id: '19',
			weight: '42',
			visual_id: 'cow',
			gender: 'female'
		},
		{
			tag_id: '14',
			weight: '47',
			visual_id: 'Isaac',
			gender: 'male'
		},
		{
			tag_id: '22',
			weight: '47',
			visual_id: 'mocha',
			gender: 'female'
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
			gender: 'female'
		},
		{
			tag_id: '17',
			weight: '51',
			visual_id: '',
			gender: 'female'
		},
		{
			tag_id: '15',
			weight: '55',
			visual_id: '',
			gender: 'female'
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
			gender: 'male'
		},
		{
			tag_id: '01',
			weight: '65',
			visual_id: '',
			gender: 'female'
		}
	];
</script>

<h1>Estimated prices for lambs</h1>

<div>
	<MarketReport />
	<LivestockTable livestockEntry={temp} />
</div>
