import { observable, action, computed } from 'mobx';
import Category from './entities/Category';


class TodoCategory {
    id = 0;
    @observable localCategories = [];
    @observable selected = null;
    @action create = (title, parentId, child) => {
        let category = new Category(this._createId(), title, parentId);
        if (category.parentId) {
            this._addChild(category.parentId, category, this.categories);
        } else {
            this.localCategories.push(category);
        }
    };
    @action update = (id, title) => this.localCategories.find(category => category.id === id).title = title;
    @action remove = (id) => this.localCategories = this.localCategories.filter(category => category.id !== id);
    _createId = () => ++this.id;
    _addChild = (parentId, childCategory) => this.localCategories.push(childCategory);
    @action setSelected = (id) => { console.log('setSelected', id); this.selected = id; }
    addCategory = (title, parentId) => this.create(title, parentId);
    @action setCategories = (categories) => {
        this.localCategories = categories.map(c => new Category(c.id, c.name, c.parentId));
        this.id = categories.length;
    }
    @action deleteCategory = (categoryId) => {
        this.localCategories = this.localCategories.filter(c => c.id !== +categoryId);
        this.selected = this.selected===categoryId? null: this.selected;
    }
    @computed get categories() {
        const list = this.localCategories.filter(c => !c.parentId);
        list.forEach(c => this._formChilds(c, this.localCategories));
        return list;
    }

    _formChilds = (category, list) => {
        category.child = list.filter(c => c.parentId === category.id);
        category.child.forEach(c => this._formChilds(c, list));
    }
}

const categoryStore = new TodoCategory();

export default categoryStore;
