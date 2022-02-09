<script lang='ts'>

	import CountryCard from "../components/shared/countryCard/CountryCard.svelte";
	import Dropdown from "../components/shared/dropdown/Dropdown.svelte";

	import { countries, selectedCountry } from '../stores/country'

</script>

<style>

	.card-container {
		grid-template-columns: repeat(3, 1fr);
		max-width: fit-content;
		margin: 0 auto;
	}

</style>

<Dropdown title='country' options={countries} store={selectedCountry} />

<ul class='card-container' >

	<CountryCard name={'BTC'} change={''} volume={''} value={''} />
	<CountryCard name={'ETH'} change={''} volume={''} value={''} />
	<CountryCard name={'ADA'} change={''} volume={''} value={''} />

</ul>
