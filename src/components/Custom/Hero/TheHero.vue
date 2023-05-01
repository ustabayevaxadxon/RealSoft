<template>
    <base-card>
        <div
            class="hero px-2 d-flex justify-content-between align-items-center"
        >
            <div class="hero__info">
                <h1 class="hero__info--heading">
                    Обучаем <span class="text-break">IT</span> профессиям с
                    <span class="text-break">трудоустройством</span>
                </h1>
                <p class="hero__info--text">
                    Наша миссия - Практическое развитие специалистов с
                    теоретическими знаниями. Увеличивайте опыт работы с
                    реальными проектами. Помощь в трудоустройстве тем, у кого
                    есть соответствующие навыки.
                </p>
                <div class="w-50 wrapper">
                    <button class="a w-100 flat">Оставить заявку</button>
                </div>
            </div>
            <div class="hero__img">
                <img src="@/assets/Images/Hero-img.png" alt="Hero_image" />
            </div>
        </div>
    </base-card>
</template>

<style lang="scss" scoped>
@import "./TheHero.style.scss";
</style>
