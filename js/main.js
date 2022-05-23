const app = new Vue({
    el: "#app",
    data: {
        todos: [
            {
                text: "fare la spesa",
                isDone: false
            },
            {
                text: "fare palestra",
                isDone: false
            },
            {
                text: "fare il bucato",
                isDone: false
            },
            
        ],
        newTodo: "" 
    },
    methods: {
        addTodo() {
            if (this.newTodo !== " ") {
                this.todos.push({
                    text: this.newTodo,
                    isDone: false
                });
            }
            this.newTodo = ""; 
        },
        removeTodo(index) {
            this.todos.splice(index, 1)
        }
    }
});