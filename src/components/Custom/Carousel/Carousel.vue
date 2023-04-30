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
                        <div class="wrapper d-flex align-items-center">
                            <img :src="slide.image" alt="Slide image" />
                            <div class="c-slide-info">
                                <h3>Bradley Lawlor</h3>
                                <p>Company, position</p>
                            </div>
                        </div>
                        <p class="text">{{ slide.desc }}</p>
                    </li>
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
            slides: [
                {
                    desc: '"What a great experience! This service is a great time saver. Our team managed to reduce the time needed for paperwork by a third. Highly recommend this service."',
                    image: "https://media.istockphoto.com/id/1082411378/photo/magical-fairytale-forest.jpg?s=612x612&w=0&k=20&c=3iw53YdeeFEqRuxcUL0UCQZUMJ3e2IRtUfvgSjAysjQ=",
                },
                {
                    desc: '"What a great experience! This service is a great time saver. Our team managed to reduce the time needed for paperwork by a third. Highly recommend this service."',
                    image: "https://media.istockphoto.com/id/1082411378/photo/magical-fairytale-forest.jpg?s=612x612&w=0&k=20&c=3iw53YdeeFEqRuxcUL0UCQZUMJ3e2IRtUfvgSjAysjQ=",
                },
                {
                    desc: '"What a great experience! This service is a great time saver. Our team managed to reduce the time needed for paperwork by a third. Highly recommend this service."',
                    image: "https://media.istockphoto.com/id/1082411378/photo/magical-fairytale-forest.jpg?s=612x612&w=0&k=20&c=3iw53YdeeFEqRuxcUL0UCQZUMJ3e2IRtUfvgSjAysjQ=",
                },
                {
                    desc: '"What a great experience! This service is a great time saver. Our team managed to reduce the time needed for paperwork by a third. Highly recommend this service."',
                    image: "https://media.istockphoto.com/id/1082411378/photo/magical-fairytale-forest.jpg?s=612x612&w=0&k=20&c=3iw53YdeeFEqRuxcUL0UCQZUMJ3e2IRtUfvgSjAysjQ=",
                },
                {
                    desc: '"What a great experience! This service is a great time saver. Our team managed to reduce the time needed for paperwork by a third. Highly recommend this service."',
                    image: "https://media.istockphoto.com/id/1082411378/photo/magical-fairytale-forest.jpg?s=612x612&w=0&k=20&c=3iw53YdeeFEqRuxcUL0UCQZUMJ3e2IRtUfvgSjAysjQ=",
                },
                {
                    desc: '"What a great experience! This service is a great time saver. Our team managed to reduce the time needed for paperwork by a third. Highly recommend this service."',
                    image: "https://media.istockphoto.com/id/1082411378/photo/magical-fairytale-forest.jpg?s=612x612&w=0&k=20&c=3iw53YdeeFEqRuxcUL0UCQZUMJ3e2IRtUfvgSjAysjQ=",
                },
            ],
            currentSlide: 0,
            slideWidth: 600,
            screenWidth: null,
        };
    },
    mounted() {
        this.getWidth();
    },
    methods: {
        getWidth() {
            this.screenWidth = this.$el.offsetWidth;
            if (this.screenWidth <= 576) {
                this.slideWidth = 200;
            } else if (this.screenWidth <= 768) {
                this.slideWidth = 280;
            } else if (this.screenWidth <= 992) {
                this.slideWidth = 500;
            }
            console.log(this.screenWidth);
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
@import "./Carousel.style.scss";
</style>
