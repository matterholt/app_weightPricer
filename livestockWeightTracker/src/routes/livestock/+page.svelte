<script>
    import TitleBlock from "$lib/components/general/TitleBlock.svelte";
    let { data } = $props();
</script>

<TitleBlock>
    In Stock
</TitleBlock>

<div>
    <ul class="list bg-base-100 rounded-box shadow-md">
        <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">
            <h4>Add a new one</h4>
            <form class="flex gap-2" method="POST" action="?/addNew">
                <input
                    name="tag_id"
                    type="text"
                    class="input"
                    placeholder="Tag id"
                    required
                />
                <select name="gender" class="select" required>
                    <option disabled selected>select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="none">No nuts</option>
                </select>
                <input
                    name="latest_weight"
                    type="number"
                    min="5"
                    max="500"
                    class="input"
                    placeholder="weight"
                />
                <button class="btn">Submit</button>
            </form>
        </li>
        <li class="list-row text-xl bolder">
            {#each Object.keys(data.tempData[0]) as entry}
                <div>{entry}</div>
            {/each}
            <div>to sell</div>
            <div>did sell</div>
        </li>

        {#each data.tempData as entry, idx}
            <li class="list-row">
                <div>{entry.tag_id}</div>
                <div>{entry.gender}</div>
                <div>{entry.latest_weight} lbs</div>
                <button class="btn">Add TO Sell</button>
                <button class="btn">sell it</button>
            </li>
        {/each}
    </ul>
</div>
