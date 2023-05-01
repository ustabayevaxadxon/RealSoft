<template>
    <the-header></the-header>
    <the-hero></the-hero>
    <category></category>
    <courses></courses>
    <statistic></statistic>
    <coaches></coaches>
    <timeline></timeline>
    <card mode="blue"></card>
    <carousel></carousel>
    <gallery></gallery>
    <accordian></accordian>
    <the-footer></the-footer>
</template>

<script>
import TheHero from "@/components/Custom/Hero/TheHero.vue";
import Category from "@/components/Custom/Category/Category.vue";
import Courses from "@/components/Common/Courses/Courses.vue";
import Statistic from "@/components/Custom/Statistic/Statistic.vue";
import Coaches from "@/components/Custom/Coaches/Coaches.vue";
import Card from "@/components/Common/Card/Card.vue";
import TheFooter from "@/components/Common/TheFooter/TheFooter.vue";
import Accordian from "@/components/Common/Accordian/Accordian.vue";
import Learning from "@/components/Custom/Learning/Learning.vue";
import Gallery from "@/components/Custom/Gallery/Gallery.vue";
import TheHeader from "@/components/Common/TheHeader/TheHeader.vue";
import Carousel from "@/components/Custom/Carousel/Carousel.vue";
import Timeline from "@/components/Custom/Timeline/Timeline.vue";

export default {
    components: {
        TheHero,
        Category,
        Courses,
        Statistic,
        Coaches,
        Card,
        TheFooter,
        Accordian,
        Learning,
        Gallery,
        TheHeader,
        Carousel,
        Timeline,
    },
};
</script>
