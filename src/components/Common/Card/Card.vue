<template>
    <section>
        <base-card>
            <div class="px-2">
                <div class="main__card" :class="mode">
                    <h3 class="main__card--heading mb-4">
                        Подайте заявку на обучение
                    </h3>
                    <p class="main__card--text">
                        Наша цель - обучить 1 000 000 опытных специалистов.
                        Охватывает все регионы нашей страны. Предоставление
                        международно-признанных сертификатов. Достижение статуса
                        самой требовательной IT-академии за рубежом.
                    </p>
                    <div
                        class="mt-5 d-flex align-items-center justify-content-between btns"
                    >
                        <div class="btn-main">
                            <select
                                class="form-select w-100 rounded-pill border-0"
                                v-model.trim="selectedCourse"
                            >
                                <option selected>Выберите направление</option>
                                <option>Android</option>
                                <option>Java</option>
                                <option>Flutter</option>
                                <option>Graphics</option>
                            </select>
                        </div>
                        <router-link
                            :to="`/${selectedCourse.toLowerCase()}`"
                            class="bg-white text-dark btn-main link btn-primary border-0 rounded-pill"
                        >
                            Пройти тестирование
                        </router-link>
                    </div>
                </div>
            </div>
        </base-card>
    </section>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            selectedCourse: "Выберите направление",
        };
    },
    created() {
        console.log(this.$refs);
    },
};
</script>

<style lang="scss" scoped>
@import "./Card.style.scss";
</style>
