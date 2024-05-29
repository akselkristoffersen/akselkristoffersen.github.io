<script>
    import { base } from '$app/paths';
    import 'modern-normalize/modern-normalize.css';
    import '../styles/main.scss';
</script>

<div id="main">
    <div id="content">
        <main id="main-content">
            <nav>
                <a href="{base}/">Home</a>
                <a href="{base}/tutorials/">Tutorials</a>
            </nav>
            <slot />
        </main>
    </div>
</div>



<style lang="scss">
    #main {
        #content {
            main#main-content {
                padding: 30px 15px 60px;
                @include breakpoint.up('md') {
                    padding: 30px 30px 60px;
                }
            }
        }
    }
</style>