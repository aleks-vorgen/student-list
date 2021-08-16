<template>
    <form @submit.prevent="onEdit">
    <label for="name"><b>Имя</b></label>
    <input v-model="name" placeholder="Введите имя студента">

    <label for="surname"><b>Фамилия</b></label>
    <input v-model="surname" placeholder="Введите фамилию студента">

    <label for="course"><b>Курс</b></label>
    <input v-model="course" placeholder="Введите курс">

    <button class="save-button" type="submit">Сохранить</button>
</form>
</template>

<script>
    export default {
        name: "EditForm",
        data() {
            return {
                name: '',
                surname: '',
                course: null
            }
        },
        props: ['editData'],
        watch: {
            // эта функция запускается при любом изменении
            editData: function () {
                this.name = this.editData.name;
                this.surname = this.editData.surname;
                this.course = this.editData.course;
            },
        },
        mounted() {
            this.name = this.editData.name;
            this.surname = this.editData.surname;
            this.course = this.editData.course;
        },
        methods: {
            onEdit() {
                this.editData.name = this.name
                this.editData.surname = this.surname
                this.editData.course = this.course
                this.$emit('onEdit', {
                    name: this.editData.name,
                    surname: this.editData.surname,
                    course: this.editData.course
                })
            }
        }
    }
</script>

<style scoped>
    form {
        padding: 20px;
        text-align: left;
    }
    input {
        box-shadow: 0 0 10px lightgray;
        display: inline-block;
        padding: 10px;
        margin: 5px 0 20px 0;
        border: none;
        background: #f1f1f1;
        width: 100%;
        box-sizing: border-box;
    }

    input:focus {
        box-shadow: 2px 0 20px lightgray;
        outline: none;
    }

    .save-button {
        border-radius: 3px;
        box-shadow: 0 0 10px #999999;
        background-color: #ffc800;
        color: black;
        padding: 15px 20px;
        margin: 5px 0;
        border: none;
        cursor: pointer;
        width: 100%;
        opacity: 0.9;
    }
</style>