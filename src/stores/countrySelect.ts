import { writable, Writable } from 'svelte/store'
import type { Country } from '../types'

export const selectedCountry: Writable<null | Country> = writable(null)