<template>
    <section>
        <base-card>
            <div
                class="footer px-2 d-flex align-items-start justify-content-between"
            >
                <div
                    class="footer__l d-flex align-items-start justify-content-between"
                >
                    <ul class="footer__info">
                        <li
                            class="d-flex flex-column align-items-start justify-content-between"
                        >
                            <a href="#">
                                <img
                                    role="button"
                                    src="@/assets/Icons/Footer-logo.svg"
                                    alt="Logo"
                                />
                            </a>
                            <p class="mt-3 text-white">
                                Академия для подготовки ведущих IT-специалистов
                            </p>
                        </li>
                    </ul>
                    <ul class="footer__company text-white">
                        <h3 class="mb-4">Компания</h3>
                        <li
                            class="mb-3"
                            v-for="company in companies"
                            :key="company"
                        >
                            <a class="text-white" href="">
                                {{ company }}
                            </a>
                        </li>
                    </ul>
                </div>
                <div
                    class="footer__r d-flex align-items-start justify-content-between"
                >
                    <ul class="footer__course text-white">
                        <h3 class="mb-4">Курсы</h3>
                        <li
                            class="mb-3"
                            v-for="course in courses"
                            :key="course"
                        >
                            <router-link
                                :to="`/${course.link}#header`"
                                class="text-white"
                                href=""
                            >
                                {{ course.name }}
                            </router-link>
                        </li>
                    </ul>
                    <ul class="footer__contact text-white">
                        <h3 class="mb-4">Контакты</h3>
                        <li>
                            <a
                                class="text-white"
                                :href="`tel:+${contact.phoneNumber}`"
                                >{{ contact.phoneNumber }}</a
                            >
                            <p class="mt-3">{{ contact.address }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </base-card>
    </section>
</template>

<script>
export default {
    data() {
        return {
            companies: [
                "Курсы",
                "Обучение",
                "Условия",
                "Наши преимущества",
                "Команда",
                "О нас",
                "Отзывы",
                "Галлерея",
                "Вопрос-ответы",
            ],
            courses: [
                { name: "Android и IOS разработчик", link: "android" },
                { name: "Разработчик на Platon", link: "platon" },
                { name: "Flutter разработчик", link: "flutter" },
                { name: "Java / Java Script разработчик", link: "java" },
                { name: "UI / UX Дизайн", link: "design" },
                { name: "Графический дизайн", link: "graphics" },
                { name: "Motion дизайн", link: "motion" },
                { name: "Тестирование ПО (QA)", link: "testing" },
                { name: "Project management", link: "management" },
            ],
            contact: {
                phoneNumber: "+998 71 205 84 84",
                address:
                    "100084, Республика Узбекистан, г. Ташкент, пр. Амира Темура, 107Б",
            },
        };
    },
};
</script>

<style lang="scss" scoped>
@import "./TheFooter.style.scss";
</style>
