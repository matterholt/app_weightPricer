
<script module>
    import * as d3 from "d3";

    import TitleBlock from "$lib/components/general/TitleBlock.svelte";
    import DataPointShow from "$lib/components/feature/Dashboard/DataPointShow.svelte";
    import Currency from "$lib/components/general/Currency.svelte";

        let width = 640,
        height = 400,
        marginTop = 20,
        marginRight = 20,
        marginBottom = 20,
        marginLeft = 20;

    const summary = {
        spent: "100.00",
        gross: "90.00",
        numberOfLamabs: 20,
        marketReport: [
            { week: "23", price: 300 },
            { week: "24", price: 203 },
            { week: "25", price: 342 },
            { week: "26", price: 352 },
            { week: "27", price: 324 },
        ],
    };

    const data = [1,2,3,4,5]
    const x = $derived(
        d3.scaleLinear([0, data.length - 1], [marginLeft, width - marginRight]),
    );

    const y = $derived(
        d3.scaleLinear(d3.extent(data), [height - marginBottom, marginTop]),
    );

    const line = $derived(d3.line((d, i) => x(i), y));
</script>

<div>
    <TitleBlock>DASHBOARD</TitleBlock>
    <ul>
        <li>
            <DataPointShow title="Lambs this year">
                <p>{summary.numberOfLamabs}</p>
            </DataPointShow>
        </li>
        <li>
            <DataPointShow title="how much spent">
                <Currency amount={summary.spent} />
            </DataPointShow>
        </li>
        <li>
            <DataPointShow title="how much made">
                <Currency amount={summary.gross} />
            </DataPointShow>
        </li>
    </ul>
    <div>
        <svg {width} {height}>
            <path
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                d={line(data)}
            />

            <g fill="white" stroke="currentColor" stroke-width="1.5">
                {#each data as d, i}
                    <circle cx={x(i)} cy={y(d)} r="2.5" />
                {/each}
            </g>
        </svg>
    </div>

    <div>
        <button class="btn"> Add new livestock</button>
        <button class="btn">Add Expense</button>
    </div>
</div>
