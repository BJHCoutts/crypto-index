<script lang='ts'>

	import { selectedCountry, selectedCountryRate } from "../../../stores/countrySelect";

	export let name: string
	export let value: number

	const usdt = Intl.NumberFormat('en-US', {
		currency: 'USD',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
	
	const currencyFormatter = (currency:string, amount: number) => {

		const format = Intl.NumberFormat('en-US', {
			currency,
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		});

		return format.format(amount)
		
	}
	
	$: fiat = currencyFormatter($selectedCountry?.node.currencies.edges[0].node.code, (value * $selectedCountryRate))

</script>

<li>
	<div class='shadow-md w28 h12 p-8 container-sm mb-2.5'>
		<small>{name}/USDT</small>
		
		<p class='text-lg font-bold'>{value !== 'Loading...' ? usdt.format(value) : value}</p>
	</div>

	{#if $selectedCountry === null || typeof fiat === NaN}
	<p>Loading...</p>
	{:else}
	<p class='text-semibold'>
		{fiat === 'Loading...' ? 'Loading...' : fiat === 'NaN' ? 'This currency rate is unavailable' : fiat} {fiat === 'NaN' ? '' : $selectedCountry?.node.currencies.edges[0].node.code}
	</p>
	{/if}

</li>
