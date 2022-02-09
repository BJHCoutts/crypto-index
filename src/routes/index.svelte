<script lang='ts'>

	import Dropdown from "../components/shared/dropdown/Dropdown.svelte";

	import { countries, selectedCountry } from '../stores/country'

</script>

<Dropdown title='country' options={countries} store={selectedCountry} />