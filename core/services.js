export function loadTodos(dispatch) {
    console.log('loadTodos')
  fetch("http://192.168.1.13:3000/todos")
    .then((resp) => resp.json())
    .then((todos) => dispatch({ type: "LOAD_TODO", payload: todos }));
}

export function addTodo(dispatch, form) {
  const url = "http://192.168.1.13:3000/todos";
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  }).then(() => loadTodos(dispatch) );

}







