<template>
    <section>
        <base-card>
            <div class="error">
                <h3 class="text-white text-center">
                    404 | This page could not be found.
                </h3>
                <router-link class="text-white text-center" to="/"
                    >Please click me to back homege</router-link
                >
            </div>
        </base-card>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
    background: #000;
    .error {
        background: #000;
        margin: 40rem auto;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        inset: 40rem;

        h3 {
            font-size: 40px;
            background: 20px;
        }

        a {
            font-size: 30px;
            text-decoration: underline;
        }

        a:hover {
            opacity: 0.5;
        }
    }
}
</style>
