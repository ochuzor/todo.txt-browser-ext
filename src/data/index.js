import {FuseJsTodoIndexer} from '@ochuzor/todo.txt-indexer';
import {
    TodoDb, 
    JsonEncoder, 
    LZCompressedStringEncoder, 
    LocalStorageTodoStore
} from '@ochuzor/todo.txt-store';

const LOCAL_STORAGE_KEY = 'LOCAL_STORAGE_KEY';
const DOCS_PER_PAGE = 10;

const indexer = new FuseJsTodoIndexer();
const encoder =  JsonEncoder.FromStringEcoder(new LZCompressedStringEncoder());
const store = new LocalStorageTodoStore(LOCAL_STORAGE_KEY, window.localStorage, encoder);

let ID = 0;
store.readData()
    .forEach(todoDoc => {
        const id = parseInt(todoDoc.id, 10);
        ID = !!id && (id < ID) ? ID : id;
        indexer.addDoc(todoDoc);
    });

const db = new TodoDb(indexer, store);

export function getTodos(options = {}) {
    const opts = Object.assign({},
        {searchTerm: '', page: 1, pageSize: DOCS_PER_PAGE},
        options);

    return new Promise(resolve => {
        const ls = !!opts.searchTerm ? db.search(opts.searchTerm) : db.getAll();
        const start = (opts.page - 1) * opts.pageSize;
        const end = start + opts.pageSize;
        const docs = ls.slice(start, end);

        resolve({
            docs,
            total: ls.length,
            page: opts.page
        });
    });
}

export function saveTodo(todo) {
    if (!todo.id) todo.id = ++ID;

    return new Promise(resolve => {
        db.addDoc(todo);
        resolve(todo);
    });
}

export function deleteTodo(id) {
    return new Promise(resolve => {
        db.deleteDoc(id);
        resolve(id);
    });
}

export default db;
