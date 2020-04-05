export function getTodos(options = {searchTerm: '', page: 1}) {
    return Promise.resolve({
		docs: [],
        total: 0,
        page: options.page
	});
}

let id = 1;
export function saveTodo(todo) {
    if (!todo.id) todo.id = id++;
    return Promise.resolve(todo);
}

export function deleteTodo(id) {
    return Promise.resolve(id);
}
