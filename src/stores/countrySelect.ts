import { writable, Writable } from 'svelte/store'
import type { Country } from '../types'

export const countries: Country[] = [
	{
		countryName: 'Germany',
		flag: 'de',
	},
	{
		countryName:'United States of America',
		flag: 'us',
	},
	{
		countryName: 'Ukraine',
		flag: 'ua',
	},
	{
		countryName: 'Hungary',
		flag: 'hu',
	},
]

export const selectedCountry: Writable<string> = writable(countries[0].countryName)