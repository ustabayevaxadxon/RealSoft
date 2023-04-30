<template>
    <li>
        <div class="info mb-4">
            <img :src="require(`@/assets/Icons/${img}`)" alt="Android-img" />
            <h3>
                {{ title }}
            </h3>
        </div>
        <p>
            {{ description }}
        </p>
        <div class="d-flex justify-content-end align-items-center btns">
            <router-link :to="`/${link}#header`">Подробно о курсе</router-link>

            <base-button class="ms-4" mode="flat">
                Записаться на курс
            </base-button>
        </div>
    </li>
</template>

<script>
export default {
    props: ["title", "description", "img", "link"],
};
</script>
<style lang="scss" scoped>
@import "./CourseItem.style.scss";
</style>
