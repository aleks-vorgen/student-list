<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Add Student"/>
    <Navigation @onFlag="isFlag"/>
    <AddForm  v-if="flag" @onAdd="addStudent"/>
    <StudentList v-else :student-list="studentList" @onRemove="removeStudent" @onEdit="Edit"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navigation from './components/Navigation.vue'
import AddForm from './components/AddForm.vue'
import StudentList from './components/StudentList.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navigation,
    AddForm,
    StudentList,
  },
  data() {
    return {
      flag: true,
      studentList: [
        {name: 'admin', surname: 'admin', course: '123'},
        {name: 'admin2', surname: 'admin2', course: '321'}
      ]
    }
  },
  methods: {
    addStudent(stud) {
      this.studentList.push(stud)
    },
    removeStudent(index) {
      this.studentList.splice(index, 1)
    },
    isFlag(flag) {
      this.flag = flag
    },
    Edit(index, stud) {
      this.studentList[index] = stud
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
