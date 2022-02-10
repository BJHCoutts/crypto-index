<script lang='ts'>

	import { onMount } from 'svelte'
	import CoinCard from "../components/shared/coinCard/CoinCard.svelte";
	import Dropdown from "../components/shared/dropdown/Dropdown.svelte";
	import { post } from '../graphQl/post';
	import { countriesQuery } from '../graphQl/queries/coutriesQuery';
	import { bitcoinStore, ethereumStore, getCoinValues, moneroStore } from '../stores/coinValue';

	const coutriesPromise = post(countriesQuery)

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

{#await coutriesPromise}
	<p>Loading Countries...</p>
{:then countries} 
	<Dropdown title='country' options={countries.countries} />
{:catch error}
	<p>Error: {error.message}</p>
{/await}

<ul class='card-container' >

	<CoinCard name={'BTC'} value={$bitcoinStore} />
	<CoinCard name={'ETH'} value={$ethereumStore} />
	<CoinCard name={'XMR'} value={$moneroStore} />

</ul>
