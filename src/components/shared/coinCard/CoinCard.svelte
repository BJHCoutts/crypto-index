<script lang='ts'>

	import { selectedCountry, selectedCountryRate } from "../../../stores/countrySelect";

	export let name: string
	export let value: number

	$: fiat = (value * $selectedCountryRate)

</script>

<li class='shadow-md w12 h12 p-8'>
	<div>
		<h2>{name}/USDT</h2>
		
		<p>{value}</p>
	</div>

	{#if $selectedCountry === null || fiat === NaN}
	<p>Loading...</p>
	{:else}
	<p class='text-blue-70'>
		{typeof fiat === 'number' ? fiat : 'rate is unavailable'} {$selectedCountry?.node.currencies.edges[0].node.code}
	</p>
	{/if}

</li>
