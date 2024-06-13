<script>
    export let bgColor = "#273870";
    export let fontSize = "14px";
</script>

<div 
    style:font-size={fontSize}
    style:background-color={bgColor}>
    <slot>
    </slot>
</div>

<style lang="scss">
    div {
        border-radius: 18px;
        width: fit-content;
        padding: 0.21rem 0.58rem 0.21rem 0.58rem;
        margin: 7px 7px 0px 2px;
        color: var(--tech-color);
        font-weight: 500;
        opacity: 0.95;
    }
</style>