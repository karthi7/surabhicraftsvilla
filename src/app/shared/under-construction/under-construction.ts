import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
    selector: 'app-under-construction',
    templateUrl: './under-construction.html',
    styleUrls: ['./under-construction.scss']
})
export class UnderConstruction implements OnInit {
   constructor(){}
   imagePrefix = "../../../assets/images/";
   extension = '.jpg';
   videoElement;
   showcase_image = {
       portion1: {
           overlay_colors:['#54546400', '#82822800'],
           images:['category1_img7','category1_img2']
       },
       portion2: {
           overlay_colors:['#11223300', '#22332200'],
           images:['category1_img5','category1_img8'],
       } 
   }
   ngOnInit(){
   }

   ngAfterViewInit() {
    console.log('Starting video !!');
    setTimeout(time => {
        this.videoElement = document.getElementById('heroVideo');
        this.videoElement.muted = true;
        this.videoElement.play();
    },500);
   }
}