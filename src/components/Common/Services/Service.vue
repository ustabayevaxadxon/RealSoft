<template>
    <section>
        <base-card>
            <div class="service px-2">
                <ul class="service__list d-flex justify-content-between">
                    <li class="p-3" v-for="res in data" :key="res.id">
                        <div
                            class="mb-4 service__info d-flex align-items-center"
                        >
                            <img
                                :src="require(`@/assets/Icons/${res.icon}`)"
                                alt="Android-img"
                                width="38"
                                height="38"
                            />
                            <p class="ms-2">{{ res.title }}</p>
                        </div>
                        <h3>{{ res.overall }}</h3>
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
            data: [
                {
                    id: 1,
                    overall: 4,
                    title: "Количество модулей",
                    icon: "Dots.svg",
                },
                {
                    id: 2,
                    overall: 25,
                    title: "Количество тем курса",
                    icon: "list_i.svg",
                },
                {
                    id: 3,
                    overall: 126,
                    title: "Количество уроков",
                    icon: "laptop-s.svg",
                },
                {
                    id: 4,
                    overall: 19,
                    title: "Длительность курса",
                    icon: "Calendar.svg",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
@import "./Service.style.scss";
</style>
