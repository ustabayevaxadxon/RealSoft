<template>
    <base-card>
        <div class="mt-4 text-dark px-2">
            <span class="home">Главная > <slot name="path"></slot> </span>
        </div>
        <div
            class="hero px-2 d-flex justify-content-between align-items-center"
        >
            <div class="hero__info">
                <h1 class="hero__info--heading">
                    <span>Курс</span>
                    <slot name="heading"></slot>
                </h1>
                <p class="hero__info--text">
                    {{ desc }}
                </p>
                <div class="btns-wrapper">
                    <div class="btn-box d-flex">
                        <base-button
                            class="d-flex justify-content-center me-3"
                            mode="flat"
                            >Записаться на курс</base-button
                        >
                        <router-link
                            :to="link"
                            class="text-decoration-underline d-flex justify-content-start align-items-center"
                            >Программа курса
                        </router-link>
                    </div>
                    <p class="ms-3 mt-3">Запись до {{ getDate }}</p>
                </div>
            </div>
            <div class="hero__img">
                <img
                    :src="require(`@/assets/Images/${img}`)"
                    alt="Android-img"
                />
            </div>
        </div>
    </base-card>
</template>

<script>
export default {
    props: ["desc", "date", "img", "link"],
    computed: {
        getDate() {
            return `${this.date.getDay()}.${
                this.date.getMonth() + 1
            }.${this.date.getFullYear()}`;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "./CourseBase.style.scss";
</style>
