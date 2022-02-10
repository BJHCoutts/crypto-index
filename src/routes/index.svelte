<script lang='ts'>

	import { onMount } from 'svelte'
	import CountryCard from "../components/shared/countryCard/CountryCard.svelte";
	import Dropdown from "../components/shared/dropdown/Dropdown.svelte";
	import { getData } from "../graphQl/post";
	import { testQuery } from "../graphQl/queries/testQuery";
	import { countries, selectedCountry } from '../stores/country'

	// getData(testQuery)

	let socket

	onMount(() => {
		socket = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,tether')

		socket.addEventListener('message', (e) => {
			console.log(JSON.parse(e.data).bitcoin)
		})
	})


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
