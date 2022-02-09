import { writable, Writable } from 'svelte/store'

export const countries = ['Germany', 'United States of America', 'Ukraine', 'Hungary']

export const selectedCountry: Writable<string> = writable(countries[0])