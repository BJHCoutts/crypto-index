import { writable, Writable } from "svelte/store"

export const bitcoinStore: Writable<number> = writable(0)

export const ethereumStore: Writable<number> = writable(0)
