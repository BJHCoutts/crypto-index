<script lang='ts'>

	import { onMount } from 'svelte'
	import CoinCard from "../components/shared/coinCard/CoinCard.svelte";
	import Dropdown from "../components/shared/dropdown/Dropdown.svelte";
	import { getData } from "../graphQl/post";
	import { testQuery } from "../graphQl/queries/testQuery";
import { bitcoinStore, ethereumStore, getCoinValues, moneroStore } from '../stores/coinValue';
	import { countries, selectedCountry } from '../stores/countrySelect'

	// getData(testQuery)

	onMount(() => {

		getCoinValues()

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

	<CoinCard name={'BTC'} change={''} volume={''} value={$bitcoinStore} />
	<CoinCard name={'ETH'} change={''} volume={''} value={$ethereumStore} />
	<CoinCard name={'XMR'} change={''} volume={''} value={$moneroStore} />

</ul>
