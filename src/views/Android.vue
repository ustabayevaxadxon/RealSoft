<template>
    <the-header></the-header>
    <course-base
        :desc="courseData.desc"
        :date="courseData.date"
        :img="courseData.img"
        :link="courseData.link"
    >
        <template #path> Android и IOS разработчик </template>
        <template #heading> Android и IOS разработчик</template>
    </course-base>
    <service></service>
    <accordian></accordian>
    <card mode="purple"></card>
    <courses></courses>
    <the-footer></the-footer>
</template>

<script>
import Courses from "@/components/Common/Courses/Courses.vue";
import Card from "@/components/Common/Card/Card.vue";
import TheFooter from "@/components/Common/TheFooter/TheFooter.vue";
import Accordian from "@/components/Common/Accordian/Accordian.vue";
import TheHeader from "@/components/Common/TheHeader/TheHeader.vue";
import CourseBase from "@/components/Common/Course/CourseBase.vue";
import Service from "@/components/Common/Services/Service.vue";

export default {
    components: {
        Accordian,
        Card,
        Courses,
        TheFooter,
        TheHeader,
        CourseBase,
        Service,
    },
    data() {
        return {
            courseData: {
                desc: "Наша миссия - Практическое развитие специалистов с теоретическими знаниями. Увеличивайте опыт работы с реальными проектами. Помощь в трудоустройстве тем, у кого есть соответствующие навыки.",
                date: new Date(),
                img: "Android.png",
                link: "android",
            },
        };
    },
};
</script>

<style lang="scss" scoped></style>
