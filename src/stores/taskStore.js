import { observable, action } from 'mobx';
import Task from './entities/Task';

class TaskStore {
    constructor(tasks) {
        this.tasks = tasks.map(task => new Task(task.id, task.categoryId, task.title, task.description, task.isDone));
    }
    id = 4;
    @observable tasks = [];
    @action create = (title, categoryId, description = null, isDone = false) => {
        this.tasks.push(new Task(this._createId(), categoryId, title, description, isDone));
    }
    getTasks = (categoryId) => this.tasks.filter(task => task.categoryId === +categoryId);
    @action remove = (id) => this.tasks = this.tasks.filter(task => task.id === +id);
    @action update = ({id, title, description, isDone, complitionDate}) => {
        let task = this.tasks.find(task => task.id === +id);
        task.title = title ? title : task.title;
        task.description = description ? description : task.description;
        task.isDone = isDone ? isDone : false;
        task.complitionDate = complitionDate ? complitionDate : null;
    };
    getById = (id) => this.tasks.filter(task => task.id === +id)[0];
    _createId = () => ++this.id;
}

const taskStore = new TaskStore([{
    id: 1,
    title: 'buy coffee',
    description: 'aidshaioghfoeryfhwgfwefwefwff',
    isDone: false,
    categoryId: 2
},
{
    id: 2,
    title: 'more coffee',
    description: 'aidshaioghfoeryfhwgfwefwefwff',
    isDone: true,
    categoryId: 2
},
{
    id: 3,
    title: 'more more coffee',
    description: 'aidshaioghfoeryfhwgfwefwefwff',
    isDone: false,
    categoryId: 1
},
{
    id: 4,
    title: 'AAAAAAAAAAAAAa',
    description: 'aidshaioghfoeryfhwgfwefwefwff',
    isDone: true,
    categoryId: 1
}
]);

export default taskStore;