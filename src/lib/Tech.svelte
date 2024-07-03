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
        padding: 0.19rem 0.54rem 0.19rem 0.54rem;
        margin: 7px 9px 0px 0px;
        color: var(--tech-color);
        font-weight: 500;
        opacity: 0.9;
    }
</style>