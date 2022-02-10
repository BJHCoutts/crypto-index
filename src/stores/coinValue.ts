import { writable, Writable } from "svelte/store"

export const bitcoinStore: Writable<number|string> = writable('loading...')

export const ethereumStore: Writable<number|string> = writable('loading...')

export const moneroStore: Writable<number|string> = writable('loading...')

export const getCoinValues = () => {

	const socket = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero')

	socket.addEventListener('message', (e) => {
		if (JSON.parse(e.data).bitcoin !== undefined) {
			bitcoinStore.set(JSON.parse(e.data).bitcoin)
		}
		if (JSON.parse(e.data).ethereum !== undefined) {
			ethereumStore.set(JSON.parse(e.data).ethereum)
		}
		if (JSON.parse(e.data).monero !== undefined) {
			moneroStore.set(JSON.parse(e.data).monero)
		}
	})
}