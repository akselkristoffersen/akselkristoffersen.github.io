<script>
    import 'modern-normalize/modern-normalize.css';
    import '../styles/main.scss';
</script>

<div id="main">
    <div id="content">
        <main id="main-content">
            <slot />
        </main>
    </div>
</div>



<style lang="scss">
    #main {
        #content {
            main#main-content {
                padding: 30px 20px 60px;
            }
        }
    }
</style>