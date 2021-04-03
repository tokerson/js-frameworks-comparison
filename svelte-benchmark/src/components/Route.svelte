<script>
    import { Route } from "svelte-routing";
    import '../shared/styles/layout.css';

    export let path;
    export let component;
</script>

<Route {path} let:params >
    <div class="layout">
        {#if component}
            <svelte:component this="{component}"/>
        {:else}
            <slot {params}></slot>
        {/if}
    </div>
</Route>