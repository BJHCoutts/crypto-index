<script lang='ts'>

	import { selectedCountry, selectedCountryRate } from "../../../stores/countrySelect";

	export let name: string
	export let value: number | string

	const usdt = Intl.NumberFormat('en-US', {
		currency: 'USD',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
	
	const currencyFormatter = (currency:string, amount: number) => {

		let formatter

		if (currency) {
			
			formatter = Intl.NumberFormat('en-US', {
				style: 'currency',
				currency,
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			});
			
		} else {
			
			formatter = Intl.NumberFormat('en-US', {
				currency,
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			});
		}
		
			let result = formatter.format(amount)
	
			if (formatter.format(amount).slice(0,3) === currency) {
				result = result.substring(3)
			}
	
			return result
		
	}
	
	$: fiat = currencyFormatter($selectedCountry?.node.currencies.edges[0].node.code, (value * $selectedCountryRate))

</script>

<li>
	<div class='shadow-md w28 h12 p-8 container-sm mb-2.5'>
		<small>{name}/USDT</small>
		
		<p class='text-lg font-bold'>{value !== 'Loading...' ? usdt.format(value) : value}</p>
	</div>

	{#if $selectedCountry === null}
		<p>Loading...</p>
	{:else}
		<p class='text-semibold'>
			{fiat === 'Loading...' ? 'Loading...' : fiat === 'NaN' ? 'This currency rate is unavailable' : fiat} {fiat === 'NaN' ? '' : $selectedCountry?.node.currencies.edges[0].node.code}
		</p>
	{/if}

</li>
