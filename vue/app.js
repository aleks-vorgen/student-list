let StudentLiComponent = {
    props: ['studentList'],
    template: "<div><ol v-for='(item, index) in studentList' :name='item.name' :surname='item.surname' :course='item.course'><li>{{name}} {{surname}}: {{course}} курс<button>X</button></li></ol></div>",
}

var app = new Vue({
    el: '#student-list',
    data() {
        return{
            editing: true,
            studentList: []
        }
    },
    props: {
        name: String,
        surname: String,
        course: Number
    },
    methods: {
        push(name, surname, course) {
            this.studentList.push({name, surname, course})
        },
        doEdit(editing) {
            this.editing = editing
        },
        remove(index) {
            app.studentList.splice(index, 1)
        }
    },
    components: {
        'student-li': StudentLiComponent,
    }
})
