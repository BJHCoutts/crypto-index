<script lang='ts'>

	import { onMount } from 'svelte'
	import CoinCard from "../components/shared/coinCard/CoinCard.svelte";
	import Dropdown from "../components/shared/dropdown/Dropdown.svelte";
	import { getData } from "../graphQl/post";
	import { testQuery } from "../graphQl/queries/testQuery";
import { bitcoinStore, ethereumStore, getCoinValues } from '../stores/coinValue';
	import { countries, selectedCountry } from '../stores/countrySelect'

	// getData(testQuery)

	// let socket
	// let bitcoin: number
	// let ethereum: number
	$: bitcoinVal = $bitcoinStore

	onMount(() => {

		const getCoinValues = () => {

			const socket = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum')

			socket.addEventListener('message', (e) => {
				if (JSON.parse(e.data).bitcoin !== undefined) {
					bitcoinStore.set(JSON.parse(e.data).bitcoin)
				}
				// ethereumStore.set(JSON.parse(e.data.ethereum))
				// console.log(JSON.parse(e.data).bitcoin)
			})
		}

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

	<CoinCard name={'BTC'} change={''} volume={''} value={bitcoinVal} />
	<!-- <CoinCard name={'ETH'} change={''} volume={''} value={$ethereumStore} /> -->

</ul>
