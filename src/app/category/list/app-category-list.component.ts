import { Component, OnInit, Input } from '@angular/core';
import { zoomAnimations } from '../../app.animations';
import { RippleConfig } from '../../app.constants';
import { Category } from 'src/app/app.model';
import { Router, ActivatedRoute } from '@angular/router';
import { DataStoreService } from '../data-store.service';
@Component({
    selector: 'app-category-list',
    templateUrl: './app-category-list.component.html',
    styleUrls: ['./app-category-list.component.scss'],
    animations: zoomAnimations
})
export class CategoryListComponent implements OnInit {
    @Input() categories:Category[];
    rippleConfig = RippleConfig;
    constructor(private router:Router, private route: ActivatedRoute, private dataStore: DataStoreService) {}
    ngOnInit() {
    }
    launchDetail(category:Category) {
        this.dataStore.setCurrentCategory(category);
        this.router.navigate(['category',category.id,'detail']);
    }
}