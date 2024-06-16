<script>
    export let fontSize = "14px";
</script>

<div style:font-size={fontSize}>
    <slot>
    </slot>
</div>

<style lang="scss">
    div {
        background-color: var(--normal-color);
        border-radius: 18px;
        width: fit-content;
        padding: 0.21rem 0.58rem 0.21rem 0.58rem;
        margin: 7px 7px 0px 2px;
        color: var(--tech-color);
        font-weight: 500;
        opacity: 0.95;
    }
</style>