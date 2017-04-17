import { observable, computed, action } from 'mobx'
import categoryStore from './categoryStore';
import taskStore from './taskStore';

class UiStore {
    @observable deletedTask ={
        title: 'asda'
     };
    @observable editTaskId = null;
    @computed get currentTasks() {
        return taskStore.tasks.filter(category => category.id === categoryStore.selected);
    };
    @action setDeletedTask(id) {
       this.deletedTask =  categoryStore.localCategories.filter(category => category.id === id);
        this.deletedTask = this.deletedTask[0];
    };
 
    @computed get currentCategory() {
        console.log(categoryStore.localCategories.filter(category => category.id === categoryStore.selected))
        return categoryStore.localCategories.filter(category => category.id === categoryStore.selected);
    };
    @action setEditTask = (id) => this.editTaskId = id;
}

const uiStore = new UiStore();

export default uiStore;