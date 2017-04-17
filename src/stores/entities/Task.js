import { observable } from 'mobx';

export default class Task {
    id;
    creationDate;
    @observable categoryId;
    @observable title;
    @observable description;
    @observable isDone;
    @observable complitionDate;

    constructor(id, categoryId, title, description, isDone) {
        this.id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.description = description;
        this.isDone = isDone;
    }
}