<template>
    <base-card>
        <div class="timeline-okno px-2">
            <div
                class="heading d-flex w-100 flex-column justify-content-center"
            >
                <h1 class="w-100 mb-2">Процесс обучения</h1>
                <p class="w-100">
                    Наша цель - обучить 1 000 000 опытных специалистов.
                    Охватывает все регионы нашей страны. Предоставление
                    международно-признанных сертификатов. Достижение статуса
                    самой требовательной IT-академии за рубежом.
                </p>
            </div>
            <section class="timeline">
                <ul>
                    <li>
                        <div>
                            <time>Сдача теста на обучение</time> Short text
                            describing a feature of your product/service. Think
                            how it can benefit your potential customer.
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>Сдача теста на обучение</time> Short text
                            describing a feature of your product/service. Think
                            how it can benefit your potential customer.
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>Сдача теста на обучение</time> Short text
                            describing a feature of your product/service. Think
                            how it can benefit your potential customer.
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>Сдача теста на обучение</time> Short text
                            describing a feature of your product/service. Think
                            how it can benefit your potential customer.
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>Сдача теста на обучение</time> Short text
                            describing a feature of your product/service. Think
                            how it can benefit your potential customer.
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    </base-card>
</template>

<script>
export default {
    mounted() {
        (function () {
            var items = document.querySelectorAll(".timeline li");
            function isElementInViewport(el) {
                var rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <=
                        (window.innerHeight ||
                            document.documentElement.clientHeight) &&
                    rect.right <=
                        (window.innerWidth ||
                            document.documentElement.clientWidth)
                );
            }
            function callbackFunc() {
                for (var i = 0; i < items.length; i++) {
                    if (isElementInViewport(items[i])) {
                        items[i].classList.add("in-view");
                    }
                }
            }
            window.addEventListener("load", callbackFunc);
            window.addEventListener("resize", callbackFunc);
            window.addEventListener("scroll", callbackFunc);
        })();
    },
};
</script>

<style lang="scss" scoped>
@import "./Timeline.style.scss";
</style>
