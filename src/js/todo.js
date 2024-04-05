/**
 * @typedef {{title: String, isCompleted: Boolean, icon: String, category: String, author: Object}} Todo
 *
 * @param {object} data
 * 
 */

export function createTodo(data) {
 return {
    title: data.todoTitle, 
    isCompleted: data.completed,
    icon: data?.completed ?  '✅' : '⏳',
    category: data.chosenCategory,
    author: {
      firstName: data.user.first,
      lastName: data.user.last
    }
  }
}


// создаем масив обьектов с задачами через push 
/**
 * @param {Todo[]} todos
 * @param {Todo} todo
 */
export function addTodo(todos, todo) {
  todos.push(todo)
  return todos
}

// получаем длину масива обьектов
/**
 * @param {Todo[]} todos
 */
export function countTodos(todos) {
  return todos?.length
}

//получаем имя первой задачи
/**
 * @param {Todo[]} todos
 */
export function firstTodoTitle(todos) {
  return todos[0].title
}

// получаем имя последней задачи
/**
 * @param {Todo[]} todos
 */
export function lastTodoTitle(todos) {
  return todos.at(-1).title
}

// 
/**
 * @param {Todo[]} todos
 */
export function exportTitles(todos) {
  const rezult = []
  todos.forEach((todo) => rezult.push(todo.title))
  return rezult
}
