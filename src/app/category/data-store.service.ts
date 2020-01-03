import { Injectable } from '@angular/core';
import { Category } from '../app.model';
import { CategoryListSource } from '../app.constants';

@Injectable({
    providedIn: 'root',
})
export class DataStoreService {
    currentCategory:Category;
    setCurrentCategory(category:Category) {
        this.currentCategory = category;
    }
    getCurrentCategory(): Category {
        return this.currentCategory;
    }
    getCategoryById(id:string): Category {
        return CategoryListSource.find(category => category.id === id) || {} as Category;
    }
    getAllCategories(): Category[] {
        return CategoryListSource;
    }
}

