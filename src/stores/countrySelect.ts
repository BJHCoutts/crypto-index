import { writable, Writable } from 'svelte/store'
import type { Country } from '../types'

export const countries: Country[] = [
	{
		countryName: 'Germany',
		flag: 'de',
		rate: 2,
	},
	{
		countryName:'United States of America',
		flag: 'us',
		rate: 3,
	},
	{
		countryName: 'Ukraine',
		flag: 'ua',
		rate: 4,
	},
	{
		countryName: 'Hungary',
		flag: 'hu',
		rate: 5,
	},
]

export const selectedCountry: Writable<string> = writable(countries[0].countryName)