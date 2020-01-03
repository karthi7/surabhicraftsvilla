import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Category } from 'src/app/app.model';
@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class Filter implements OnInit {
   @Input() filterData:any; 
   @Output() onFilter = new EventEmitter();
   filterOpt = new FormControl();
   constructor(){}
   ngOnInit(){
       this.setPreSelectOptions();
   }

   setPreSelectOptions() {
        this.filterOpt.setValue(this.filterData.current);
   }

   onSelectionChange(data) {
       this.onFilter.emit(data.value)
   }
}