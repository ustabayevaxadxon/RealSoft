<template>
    <base-card>
        <div class="c-carousel px-2">
            <div
                class="slides-container"
                :style="{
                    transform: `translateX(-${currentSlide * slideWidth}px)`,
                }"
            >
                <ul
                    v-for="(slide, index) in slides"
                    :key="index"
                    class="c-slide"
                >
                    <li class="me-2">
                        <router-link to="/">
                            <img
                                :src="require(`@/assets/Images/${slide.img}`)"
                                alt=""
                            />
                        </router-link>
                    </li>
                    <div class="mt-4">
                        <h4 class="mb-2 text-center">{{ slide.name }}</h4>
                        <p class="text-center">{{ slide.position }}</p>
                    </div>
                </ul>
            </div>
            <div class="c-controls">
                <button
                    :disabled="this.currentSlide === 0 ? true : false"
                    @click="prevSlide"
                >
                    Prev
                </button>
                <button @click="nextSlide">Next</button>
            </div>
        </div>
    </base-card>
</template>

<script>
export default {
    data() {
        return {
            currentSlide: 0,
            slideWidth: 300,
            screenWidth: null,
            slides: [
                {
                    id: 1,
                    name: "Katie Sims",
                    position: "Position",
                    img: "K-Sims.jpg",
                },
                {
                    id: 2,
                    name: "Daniel Hamilton",
                    position: "Position",
                    img: "D-Hamilton.png",
                },
                {
                    id: 3,
                    name: "Alex Buckmaster",
                    position: "Position",
                    img: "D-Alex.png",
                },
                {
                    id: 4,
                    name: "Kimberly Mastrangelo",
                    position: "Position",
                    img: "M-Kimbeng.png",
                },
            ],
        };
    },
    mounted() {
        this.getWidth();
    },
    methods: {
        getWidth() {
            this.screenWidth = this.$el.offsetWidth;
            if (this.screenWidth <= 576) {
                this.slideWidth = 240;
            } else if (this.screenWidth <= 768) {
                this.slideWidth = 280;
            } else if (this.screenWidth <= 992) {
                this.slideWidth = 300;
            }
        },
        prevSlide() {
            this.currentSlide =
                (this.currentSlide - 1 + this.slides.length) %
                this.slides.length;
        },
        nextSlide() {
            this.currentSlide =
                (this.currentSlide + 1) % (this.slides.length - 1);
        },
    },
};
</script>

<style lang="scss" scoped>
@import "./Learning.style.scss";
</style>
