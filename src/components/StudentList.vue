<template>
    <div>
        <h2 v-if="studentList.length === 0">Список студентов пуст!</h2>
        <table v-else>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Course</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in studentList" :key="index">
                <td>{{index}}</td>
                <td>{{item.name}}</td>
                <td>{{item.surname}}</td>
                <td>{{item.course}}</td>
                <td>
                    <button class="student-delete-button" @click="onRemove(index)">Delete</button>
                    <button class="student-edit-button" @click="Edit(true, item)">Edit</button>
                </td>
            </tr>
            </tbody>
        </table>
        <EditForm v-if="editing" :edit-data="editData" @onEdit="onEdit"/>
    </div>
</template>

<script>
    import EditForm from "@/components/EditForm";
    export default {
        name: "StudentList",
        components: {EditForm},
        props: ['studentList'],
        data() {
            return {
                editing: false,
                editData: {}
            }
        },
        methods: {
            onRemove(index) {
                this.$emit('onRemove', index)
            },
            onEdit(editData) {
                this.editing = false
                this.$emit('onEdit', editData)
            },
            Edit(editing, item) {
                this.editData = item;
                this.editing = editing;
            }
        }
    }
</script>

<style scoped>
    div {
        padding: 0 25%;
    }
    table {
        box-sizing: border-box;
        background: black;
        width: 100%;
    }
    table thead {
        background: #90d2d2;
    }
    table tbody {
        background: white;
    }
    table button {
        padding: 5px;
        margin: 2px 3px;
        min-width: 50px;
        border: none;
        border-radius: 10px;
    }

    .student-delete-button {
        background: #ffb9b9;
    }
    .student-delete-button:hover {
        box-shadow: 0 0 10px #ffb9b9;
    }
    .student-delete-button:active {
        box-shadow: 0 0 10px #fc9797, 0 0 10px #fc9797;
    }

    .student-edit-button {
        background: #81cbe8;
    }
    .student-edit-button:hover {
        box-shadow: 0 0 10px #81cbe8;
    }
    .student-edit-button:active {
        box-shadow: 0 0 10px #66c1e5, 0 0 10px #66c1e5;
    }
</style>