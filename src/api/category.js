import categoryStore from '../stores/categoryStore';

export const getCategories = () =>{
    let categories = [
            {
                id:1,
                name: 'Category1'
            },
            {
                id:2,
                name: 'Category2'
            },
            {
                id:3,
                name: 'Category3',
                parentId: 1
            }
        ];
    categoryStore.setCategories(categories);
}