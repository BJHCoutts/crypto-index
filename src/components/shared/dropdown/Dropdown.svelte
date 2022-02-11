<script lang='ts'>
	
	import { selectedCountry } from "../../../stores/countrySelect";
	import type { Countries, Country } from "../../../types";
	export let title: string
	export let options: Countries

	selectedCountry.set(options.edges[0])
	$: selectedFiat = $selectedCountry?.node.currencies.edges[0].node.code

	// const getRate = async (fiat: string) => {
	// 	const res = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=${fiat}`)
	// 	console.log(rate)
	// }

	// getRate(selectedFiat)

	const handleChange = (option: number) => {
		selectedCountry.set(options.edges[option])


	}

</script>

<style>

img {
	max-width: 50px;
	display: inline;
}

span {
	text-transform: capitalize;
}

</style>
<h2><img src={$selectedCountry?.node.flag} alt={`${$selectedCountry?.node.name}'s flag`} />{$selectedCountry?.node.name}</h2>
<label for={title}>Select your <span>{title}</span>:</label>
<select id={title} name={title} value={$selectedCountry?.node.name} on:change={(e) => handleChange(parseInt(e.currentTarget.value))}>

	{#each options.edges.slice(0,5) as option, i}
		<option value={i}>
			{option.node.name}
		</option>
	{/each}

</select>