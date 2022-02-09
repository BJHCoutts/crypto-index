<script lang='ts'>

	export let name: string
	export let change: string
	export let value: string
	export let volume: string

</script>

<style>

	li {
		max-width: 20em;
		border: 2px red solid;
	}

</style>

<li>

	<h2>{name}</h2>
	
	<p>{change}</p>
	
	<p>{volume}</p>
	
	<p>{value}</p>

</li>
