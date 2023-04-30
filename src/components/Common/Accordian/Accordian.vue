<template>
    <section class="p-5">
        <base-card>
            <div class="accordian">
                <div class="px-2">
                    <h1 class="accordian--heading text-center">
                        Найдите <span>ответы</span> на интересующие вас
                        <span>вопросы</span>
                    </h1>
                    <div
                        class="accordian__btns w-100 my-4 d-flex justify-content-center align-items-center"
                    >
                        <div class="me-2">
                            <button class="rounded-pill px-4 py-3 me-2">
                                Обучение
                            </button>
                            <button class="rounded-pill px-4 py-3">
                                Условия
                            </button>
                        </div>
                        <div class="">
                            <button class="rounded-pill me-2 px-4 py-3">
                                Трудрустройство
                            </button>
                            <button class="rounded-pill px-4 py-3">
                                Гарантии
                            </button>
                        </div>
                    </div>
                    <div
                        v-for="course in courses"
                        :key="course.id"
                        class="accordion"
                        id="myAccordion"
                    >
                        <div class="wrapper accordion-item mb-2 border-0">
                            <h2 class="accordion-header p-4" id="headingOne">
                                <button
                                    type="button"
                                    class="accordion-button collapsed text-white"
                                    data-bs-toggle="collapse"
                                    :data-bs-target="`#toggle${course.id}`"
                                >
                                    {{ course.title }}
                                </button>
                            </h2>
                            <div
                                :id="`toggle${course.id}`"
                                class="accordion-collapse collapse bg-white"
                                data-bs-parent="#myAccordion"
                            >
                                <div class="card-body">
                                    <h5 class="mb-3">
                                        {{ course.title }}
                                    </h5>
                                    <p>
                                        {{ course.desc }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </base-card>
    </section>
</template>

<script>
export default {
    data() {
        return {
            courses: [
                {
                    id: "1",
                    title: "Как можно получить бесплатное обучение?",
                    desc: "Наша миссия - Практическое развитие специалистов с теоретическими знаниями. Увеличивайте опыт работы с реальными проектами. Помощь в трудоустройстве тем, у кого есть соответствующие навыки.",
                },
                {
                    id: "2",
                    title: "Как можно получить бесплатное обучение?",
                    desc: "Наша миссия - Практическое развитие специалистов с теоретическими знаниями. Увеличивайте опыт работы с реальными проектами. Помощь в трудоустройстве тем, у кого есть соответствующие навыки.",
                },
                {
                    id: "3",
                    title: "Как можно получить бесплатное обучение?",
                    desc: "Наша миссия - Практическое развитие специалистов с теоретическими знаниями. Увеличивайте опыт работы с реальными проектами. Помощь в трудоустройстве тем, у кого есть соответствующие навыки.",
                },
                {
                    id: "4",
                    title: "Как можно получить бесплатное обучение?",
                    desc: "Наша миссия - Практическое развитие специалистов с теоретическими знаниями. Увеличивайте опыт работы с реальными проектами. Помощь в трудоустройстве тем, у кого есть соответствующие навыки.",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
@import "./Accordian.style.scss";
</style>
