<template>
    <section>
        <base-card>
            <div class="gallery px-2 d-flex justify-content-between">
                <div
                    class="gallery__l w-50 d-flex justify-content-between flex-column"
                >
                    <div class="gallery__info text-white">
                        <h4 class="mb-4">Наша галлерея</h4>
                        <p class="mb-4">
                            A short paragraph describing how you benefit your
                            actual customers and how you value their time and
                            loyalty.
                        </p>
                    </div>
                    <ul
                        class="gallery__l__list d-flex justify-content-between align-items-center"
                    >
                        <li
                            class="d-flex flex-column justify-content-between me-1"
                        >
                            <div class="mb-1">
                                <img
                                    class="w-100"
                                    src="@/assets/Images/G-Image1.png"
                                    alt="Gallery image"
                                />
                            </div>
                            <div>
                                <img
                                    class="w-100"
                                    src="@/assets/Images/G-Image2.png"
                                    alt="Gallery image"
                                />
                            </div>
                        </li>
                        <li>
                            <img
                                class="w-100"
                                src="@/assets/Images/G_Image3.png"
                                alt="Gallery image"
                            />
                        </li>
                    </ul>
                </div>
                <div class="gallery__r w-50 ms-1"></div>
            </div>
        </base-card>
    </section>
</template>

<style lang="scss" scoped>
@import "./Gallery.style.scss";
</style>
