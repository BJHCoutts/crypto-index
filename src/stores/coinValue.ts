import { writable, Writable } from "svelte/store"
import { cryptoWebsocket } from "../constants/apiUrl"

export const bitcoinStore: Writable<number|string> = writable('Loading...')

export const ethereumStore: Writable<number|string> = writable('Loading...')

export const moneroStore: Writable<number|string> = writable('Loading...')

export const getCoinValues = () => {

	const socket = new WebSocket(cryptoWebsocket)

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