<script lang='ts'>
	
	import type { Writable } from "svelte/store";
	export let title: string
	export let options: string[]
	export let store: Writable<string>

	const handleChange = (option: string) => {
		store.update(() => option)
	}

</script>

<style>

span {
	text-transform: capitalize;
}

</style>

<p>{$store}</p>

<label for={title}>Select your <span>{title}</span>:</label>
<select id={title} name={title} value={$store} on:change={(e) => handleChange(e.currentTarget.value)}>

	{#each options as option}
		<option value={option}>{option}</option>
	{/each}

</select>