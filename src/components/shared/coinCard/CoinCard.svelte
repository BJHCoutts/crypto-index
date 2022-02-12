<script lang='ts'>

	import { selectedCountry, selectedCountryRate } from "../../../stores/countrySelect";

	export let name: string
	export let value: number

	let dollarUS = Intl.NumberFormat('en-US');

	$: fiat = dollarUS.format(value * $selectedCountryRate)

</script>

<li>
	<div class='shadow-md w28 h12 p-8 container-sm'>
		<h2>{name}/USDT</h2>
		
		<p class='text-lg font-bold'>{value !== 'Loading...' ? dollarUS.format(value) : value}</p>
	</div>

	{#if $selectedCountry === null || fiat === NaN}
	<p>Loading...</p>
	{:else}
	<p class='text-semibold'>
		{typeof fiat === 'number' ? fiat : 'rate is unavailable'} {$selectedCountry?.node.currencies.edges[0].node.code}
	</p>
	{/if}

</li>
