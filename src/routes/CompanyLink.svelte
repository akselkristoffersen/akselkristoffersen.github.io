<script>
    export let data;
</script>

<div class="content">
    {#if data.productLink}
    <a href={data.productLink} target="_blank" rel="noopener noreferrer">
        <div class="company-logo">
            <img src={data.companyLogo} alt="Company logo"/>
            <div class="external-link-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            </div>
        </div>
    </a>
    {/if}
    {#if data.productImg}
    <img class="product-img" src={data.productImg} alt="Company product"/>
    {/if}
</div>

<style lang="scss">
    .content {
        position: relative;
        .product-img {
            position: relative;
            width: 100%;
        }
        a {
            display: flex;
            justify-content: center;
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 80;
            opacity: 0.4;
            .company-logo {
                position: relative;
                align-self: center; 
                height: 40%;
                img {
                    height: 100%;
                    filter: grayscale(0.4);
                }
                .external-link-icon {
                    position: absolute;
                    top: -45%;
                    right: -45%;
                    height: 30%;
                    opacity: 0;
                    svg {
                        height: 26px;
                        color: var(--tech-color);
                    }
                }
            }

            @media (hover: hover) {
                &:hover {
                    transition: 0.04s;
                    opacity: 0.7;
                    .external-link-icon {
                        transition: 0.04s;
                        opacity: 0.9;
                    }
                }
            }
        }
    }
</style>