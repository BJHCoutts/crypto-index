<script lang='ts'>

	import { selectedCountry, selectedCountryRate } from "../../../stores/countrySelect"
	import { currencyFormatter, usdt } from "../../../utils/currencyHelpers"

	export let name: string
	export let value: number | string

	$: fiat = currencyFormatter($selectedCountry?.node.currencies.edges[0].node.code as string, (value as number * $selectedCountryRate))

</script>

<li>
	<div class='shadow-md w28 h12 p-8 container-sm mb-2.5'>
		<small>{name}/USDT</small>
		
		<p class='text-lg font-bold'>{typeof value === 'number' ? usdt.format(value) : value}</p>
	</div>

	{#if $selectedCountry === null}
		<p>Loading...</p>
	{:else}
		<p class='font-semibold'>
			{fiat === 'NaN' ? 'This currency rate is unavailable' : fiat} {fiat === 'NaN' ? '' : $selectedCountry?.node.currencies.edges[0].node.code}
		</p>
	{/if}

</li>
