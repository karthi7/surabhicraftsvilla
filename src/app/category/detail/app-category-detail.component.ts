import { Component, OnInit, Input } from '@angular/core';
import { zoomAnimations } from '../../app.animations';
import { Category } from '../../app.model';
import { RippleConfig } from '../../app.constants';
import { DataStoreService } from '../data-store.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-category-detail',
    templateUrl: './app-category-detail.component.html',
    styleUrls: ['./app-category-detail.component.scss'],
    animations: zoomAnimations
})
export class CategoryDetailComponent implements OnInit {
    category:Category;
    customizedCategory = [[],[],[]];
    rippleConfig = RippleConfig;
    allCategories:Category[];
    constructor(private activatedRoute:ActivatedRoute, private dataStore:DataStoreService) {}
    ngOnInit() {
        this.scrollTop();
        this.allCategories = this.dataStore.getAllCategories();
        this.activatedRoute.params.forEach((params: Params) => {
            this.category = this.dataStore.getCategoryById(params['id']);
            this.prepareData();
        });
    }
    prepareData() {
        let count = 0;
        this.category.details.forEach(category => {
            this.customizedCategory[count++%3].push(category);
        })
    }
    scrollTop() {
        window.scrollTo(0,0)
    }
}