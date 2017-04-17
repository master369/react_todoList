import { observable } from 'mobx';

export default class Category {
    id
    @observable title
    @observable parentId
    child = [];
    constructor(id, title, parentId, child = []) {
        this.id = id;
        this.title = title;
        this.parentId = parentId;
        this.child = child;
    }
}