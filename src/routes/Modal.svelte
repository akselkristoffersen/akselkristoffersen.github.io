<script>
    import { X } from 'lucide-svelte';

    export function showModal() {
        modal.showModal();
    }

    let modal;

    function closeOnOffClick(node) {
        const handleOffClick = event => {
            if (event.target === node) {
                    node.close();
                }
        }
        node.addEventListener('click', handleOffClick)
        return {
            destroy() {
                node.removeEventListener('click', handleOffClick)
            }
        }
    }
</script>

<dialog 
    bind:this={modal}
    use:closeOnOffClick>
    <button class="dialog-button" on:click={modal.close()}>
        <X strokeWidth={3} size={30} />
    </button>
    <div class="dialog-content">
        <slot />
    </div>
</dialog>

<style lang="scss">
    dialog {
        padding: 0;
        height: fit-content;
        width: fit-content;
        max-width: Min(90vw, 900px);
        color: inherit;
        background-color: var(--bg-color-dark);
        border-radius: 7px;
        border: none;
        position: fixed;
        top: calc(40vh - 50%);
        .dialog-button {
            all: unset;
            position: absolute;
            right: 0px;
            margin: 14px;
            z-index: 100;
            color: var(--semi-light-color);
            &:hover {
                cursor: pointer;
            }
        }
        .dialog-content {
            padding: 25px 30px 15px 30px;
            height: fit-content;
            width: fit-content;
        }
    }
    dialog::backdrop {
        backdrop-filter: blur(3.5px);
        -webkit-backdrop-filter: blur(3.5px);
    }
</style>