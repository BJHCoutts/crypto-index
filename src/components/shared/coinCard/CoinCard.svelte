<script lang='ts'>

	export let name: string
	export let value: number | string

</script>

<style>

	li {
		max-width: 20em;
		border: 2px red solid;
	}

</style>

<li>
	<div>
		<h2>{name}/USDT</h2>
		
		<p>{value}</p>
	</div>

</li>
