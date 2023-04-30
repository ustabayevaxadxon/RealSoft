<template>
    <base-card>
        <nav id="header" class="navbar px-2 navbar-expand-lg navbar-light">
            <div class="container-fluid py-2">
                <div class="header__logo">
                    <img
                        src="@/assets/Icons/Logo.svg"
                        alt="Logo"
                        width="124"
                        height="65"
                    />
                    <div>
                        <p class="text-center">Академия для подготовки</p>
                        <p class="text-center">ведущих IT-специалистов</p>
                    </div>
                </div>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse ms-3 justify-content-between navbar-collapse hamburger"
                    id="navbarTogglerDemo01"
                >
                    <ul class="header__lang">
                        <li>
                            <img
                                src="@/assets/Icons/Flag-ru.svg"
                                alt="Language"
                                width="40"
                                height="28"
                            />
                        </li>
                    </ul>
                    <ul class="header__panel">
                        <li>Курсы</li>
                        <li>Обучение</li>
                        <li>Условия</li>
                    </ul>
                    <ul class="header__contact align-items-center">
                        <li>
                            <a href="#">(71) 205 84 84</a>
                        </li>
                        <li>
                            <button class="apply border-0 rounded-pill">
                                Подать заявку
                            </button>
                        </li>
                        <li>
                            <button class="login border-0 rounded-pill">
                                Вход/Авторизация
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </base-card>
</template>

<style lang="scss" scoped>
@import "./TheHeader.style.scss";
</style>
