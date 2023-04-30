<template>
    <section>
        <base-card>
            <div class="s-wrapper px-2">
                <div class="s-wrapper__info d-flex justify-content-between">
                    <h2 class="s-wrapper__info--heading">
                        Почему стоит учится в RealSoft Academy
                    </h2>
                    <p class="s-wrapper__info--text">
                        {{ description }}
                    </p>
                </div>
                <ul
                    class="s-wrapper__list d-flex align-items-center justify-content-between"
                >
                    <li
                        class="s-wrapper__item"
                        v-for="statistic in statistics"
                        :key="statistic.id"
                    >
                        <h3 class="pb-4 s-wrapper__item--heading">
                            {{ statistic.number }}+
                        </h3>
                        <p>
                            {{ statistic.text }}
                        </p>
                    </li>
                </ul>
            </div>
        </base-card>
    </section>
</template>

<script>
export default {
    data() {
        return {
            title: "Почему стоит учится в RealSoft Academy",
            description:
                "Наша цель - обучить 1 000 000 опытных специалистов. Охватывает все регионы нашей страны. Предоставление международно-признанных сертификатов. Достижение статуса самой требовательной IT-академии за рубежом.",
            statistics: [
                {
                    id: 1,
                    number: 100,
                    text: "Description of the number. People always pay attention to ",
                },
                {
                    id: 2,
                    number: 70,
                    text: "Description of the number. People always pay attention to ",
                },
                {
                    id: 3,
                    number: 40,
                    text: "Description of the number. People always pay attention to ",
                },
                {
                    id: 4,
                    number: 20,
                    text: "Description of the number. People always pay attention to ",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
@import "./Statistic.style.scss";
</style>
