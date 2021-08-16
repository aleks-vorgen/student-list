<template>
    <div class="nav">
        <button v-if="flag" @click="onFlag(false)" class="student-list-button">
            Список студентов
        </button>
        <button v-else @click="onFlag(true)" class="add-student-list-button">
            Добавить студента
        </button>
    </div>
</template>

<script>
    export default {
        name: "Navigation",
        data() {
            return {
                flag: true
            }
        },
        methods: {
            onFlag(_flag) {
                this.flag = _flag;
                this.$emit('onFlag', this.flag)
            }
        }
    }
</script>

<style scoped>
    .nav {
        text-align: left;
    }
    div button {
        border: none;
        padding: 10px 15px;
        margin: 10px;
        border-radius: 15px;
    }


    .student-list-button {
        background: #edba00;
    }
    .student-list-button:hover {
        box-shadow: 0 0 10px #edba00;
    }
    .student-list-button:active {
        box-shadow: 0 0 10px #d5a800, 0 0 10px #d5a800;
    }

    .add-student-list-button {
        background: lightseagreen;
    }
    .add-student-list-button:hover {
        box-shadow: 0 0 10px lightseagreen;
    }
    .add-student-list-button:active {
        box-shadow: 0 0 10px #0bb3aa, 0 0 10px #0bb3aa;
    }
</style>