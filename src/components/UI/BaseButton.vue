<template>
    <div>
        <button v-if="!link" :class="mode"><slot></slot></button>
        <router-link v-else :to="to" :class="mode">
            <slot></slot>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        link: {
            type: Boolean,
            required: false,
            default: false,
        },
        to: {
            type: String,
            required: false,
            default: "/",
        },
        mode: {
            type: String,
            required: false,
            default: null,
        },
    },
};
</script>

<style lang="scss" scoped>
button,
a {
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font: inherit;
    background-color: #3a0061;
    border: 1px solid #3a0061;
    color: white;
    cursor: pointer;
    border-radius: 30px;
    margin-right: 0.5rem;
    display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
    background-color: #270041;
    border-color: #270041;
}

.flat {
    padding: 10px 20px !important;
    background: #057ef6;
    border-radius: 200px;
    color: #ffffff;
    border: none;
}

.outline {
    background-color: transparent;
    border-color: #270041;
    color: #270041;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
    background-color: #057ef6;
    opacity: 0.5;
}
</style>
