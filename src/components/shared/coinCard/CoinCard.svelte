<script lang='ts'>

	import { selectedCountry } from "../../../stores/countrySelect";

	export let name: string
	export let value: number

	// rate = $selectedCountry?.node.currencies[0].node.code

	$: fiat = ((value * 2) * 100) / 100

</script>

<style>

	li {
		max-width: 20em;
		border: 2px red solid;
	}

</style>

<li>
	<div>
		<h2>{name}/USDT</h2>
		
		<p>{value}</p>
	</div>

	{#if $selectedCountry === null || fiat === NaN}
	<p>Loading...</p>
	{:else}
	<p>{fiat} {$selectedCountry?.node.currencies.edges[0].node.code}</p>
	{/if}

</li>
