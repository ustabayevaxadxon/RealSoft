<template>
    <base-card>
        <div class="courses px-2">
            <h1>
                <span>Направления </span>
                обучения
            </h1>

            <ul
                class="d-flex justify-content-between align-items-center flex-wrap"
            >
                <li class="t-item" v-for="crs in visibleCourses" :key="crs">
                    <div class="info mb-4">
                        <img
                            :src="require(`@/assets/Icons/${crs.img}`)"
                            alt="Android-img"
                        />
                        <h3>
                            {{ crs.title }}
                        </h3>
                    </div>
                    <p>
                        {{ crs.description }}
                    </p>
                    <div
                        class="d-flex justify-content-end align-items-center btns"
                    >
                        <router-link :to="`/${crs.link}#header`"
                            >Подробно о курсе</router-link
                        >
                        <base-button class="ms-4" mode="flat">
                            Записаться на курс
                        </base-button>
                    </div>
                </li>
                <transition name="list">
                    <div
                        class="d-flex justify-content-between align-items-center flex-wrap"
                        v-if="isVisible"
                    >
                        <course-item
                            v-for="course in courses"
                            :key="course"
                            :title="course.title"
                            :description="course.description"
                            :img="course.img"
                            :link="course.link"
                        ></course-item>
                    </div>
                </transition>
            </ul>
            <div class="mb-5 d-flex justify-content-center">
                <button
                    @click="isVisible = !isVisible"
                    class="visible text-white py-2 px-3"
                >
                    {{ isVisible ? "Скрывать" : "Смотреть все" }}
                </button>
            </div>
        </div>
    </base-card>
</template>

<script>
import CourseItem from "./CourseItem/CourseItem.vue";

export default {
    components: {
        CourseItem,
    },
    data() {
        return {
            isVisible: false,
            visibleCourses: [
                {
                    title: "Android и IOS разработчик",
                    description:
                        "Short text describing a feature of your product/service. Think how it can benefit your potential customer.",
                    img: "Android.svg",
                    link: "android",
                },
                {
                    title: "Android и IOS разработчик",
                    description:
                        "Short text describing a feature of your product/service. Think how it can benefit your potential customer.",
                    img: "Android.svg",
                    link: "android",
                },
                {
                    title: "Flutter разработчик",
                    description:
                        "Short text describing a feature of your product/service. Think how it can benefit your potential customer.",
                    img: "Flutter.svg",
                    link: "flutter",
                },
                {
                    title: "Java / Java Script разработчик",
                    description:
                        "Short text describing a feature of your product/service. Think how it can benefit your potential customer.",
                    img: "JS.svg",
                    link: "java",
                },
            ],
            courses: [
                {
                    title: "UI / UX Дизайн",
                    description:
                        "Short text describing a feature of your product/service. Think how it can benefit your potential customer.",
                    img: "Figma.svg",
                    link: "graphics",
                },
                {
                    title: "Графический дизайн",
                    description:
                        "Short text describing a feature of your product/service. Think how it can benefit your potential customer.",
                    img: "Ps.svg",
                    link: "",
                },
                {
                    title: "Motion дизайн",
                    description:
                        "Short text describing a feature of your product/service. Think how it can benefit your potential customer.",
                    img: "Motion.svg",
                    link: "",
                },
                {
                    title: "Тестирование ПО (QA)",
                    description:
                        "Short text describing a feature of your product/service. Think how it can benefit your potential customer.",
                    img: "QA.svg",
                    link: "",
                },
                {
                    title: "IT - English",
                    description:
                        "Short text describing a feature of your product/service. Think how it can benefit your potential customer.",
                    img: "Book-IT.svg",
                    link: "",
                },
                {
                    title: "Project management",
                    description:
                        "Short text describing a feature of your product/service. Think how it can benefit your potential customer.",
                    img: "HR.svg",
                    link: "",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
@import "./Courses.style.scss";
</style>
