<template>
    <section>
        <base-card>
            <div class="coaches px-2">
                <div class="coaches__info">
                    <h1 class="coaches__info--heading mb-4">
                        Наша
                        <span>команда</span>
                        профессионалов
                    </h1>
                    <p class="coaches__info--desc mb-4">
                        A short paragraph describing your team. may want to
                        describe what they
                    </p>
                    <div
                        class="mb-5 d-flex justify-content-center align-items-center"
                    >
                        <button class="leaders rounded-pill px-4 py-2 me-3">
                            Руководители
                        </button>
                        <button class="mentors rounded-pill px-4 py-2">
                            Менторы
                        </button>
                    </div>
                    <learning></learning>
                </div>
            </div>
        </base-card>
    </section>
</template>

<script>
import Learning from "../Learning/Learning.vue";
export default {
    components: { Learning },
};
</script>
<style lang="scss" scoped>
@import "./Coaches.style.scss";
</style>
