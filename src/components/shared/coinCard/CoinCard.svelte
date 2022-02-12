<script lang='ts'>

	import { selectedCountry, selectedCountryRate } from "../../../stores/countrySelect";

	export let name: string
	export let value: number

	const usdt = Intl.NumberFormat('en-US', {
		currency: 'USD',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});

	$: fiat = usdt.format(value * $selectedCountryRate)

</script>

<li>
	<div class='shadow-md w28 h12 p-8 container-sm'>
		<small>{name}/USDT</small>
		
		<p class='text-lg font-bold'>{value !== 'Loading...' ? usdt.format(value) : value}</p>
	</div>

	{#if $selectedCountry === null || fiat === NaN}
	<p>Loading...</p>
	{:else}
	<p class='text-semibold'>
		{typeof fiat === 'number' ? fiat : 'rate is unavailable'} {$selectedCountry?.node.currencies.edges[0].node.code}
	</p>
	{/if}

</li>
