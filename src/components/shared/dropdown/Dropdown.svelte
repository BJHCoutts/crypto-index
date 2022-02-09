<script lang='ts'>
	
	import type { Writable } from "svelte/store";
	import type { Country } from "../../../types";
	export let title: string
	export let options: Country[]
	export let store: Writable<string>

	const handleChange = (option: string) => {
		store.update(() => option)
	}

	$: flag = options.find((country: Country) => country.countryName === $store).flag

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

<p><img src={`/icons/${flag}.svg`} alt={`${$store} flag`} />{$store}</p>


<label for={title}>Select your <span>{title}</span>:</label>
<select id={title} name={title} value={$store} on:change={(e) => handleChange(e.currentTarget.value)}>

	{#each options as option}
		<option value={option.countryName}>
			{option.countryName}
		</option>
	{/each}

</select>