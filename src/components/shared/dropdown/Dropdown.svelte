<script lang='ts'>
import { rateRestApi } from "../../../constants/apiUrl";

	
	import { selectedCountry, selectedCountryRate } from "../../../stores/countrySelect";
	import type { Countries } from "../../../types";
	export let title: string
	export let options: Countries

	const randomCountryNumber = Math.floor(Math.random() * (options.edges.length-5))

	selectedCountry.set(options.edges[randomCountryNumber])


	const getRate = async (fiat: string) => {
		const res = await fetch(rateRestApi+fiat)
		const results = await res.json()
		selectedCountryRate.set(results[fiat])
	}

	getRate($selectedCountry?.node.currencies.edges[0].node.code as string)
	
	const handleChange = (option: number) => {
		selectedCountry.set(options.edges[option])
		
		getRate($selectedCountry?.node.currencies.edges[0].node.code as string)

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

<section class='mx-auto mb-8 w-fit'>
	<h2><img src={$selectedCountry?.node.flag} alt={`${$selectedCountry?.node.name}'s flag`} />{$selectedCountry?.node.name}</h2>
	<label for={title}>Select your <span>{title}</span>:</label>
	<select id={title} name={title} on:change={(e) => handleChange(parseInt(e.currentTarget.value))}>
	
		{#each options.edges.slice(randomCountryNumber, (randomCountryNumber+5)) as option, i}
			<option value={randomCountryNumber + i}>
				{option.node.name}
			</option>
		{/each}
	</select>
	
</section>