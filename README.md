# README

Learn `javaScript` And Git

```javaScript
function changeStatus(event) {
    let indexFind = todoArr.findIndex(function (todo) {
        return todo.content == event.target.previousElementSibling.textContent
    })
    if (todoArr[indexFind].status == "completed") {
        todoArr[indexFind].status = "uncompleted"
    }else{
        todoArr[indexFind].status = "completed"
    }
    localStorage.setItem('todos',JSON.stringify(todoArr))
    localStorageUploud()

}

```
###  list

- js
- react
  - javascript