import { Component } from '@angular/core';
import AOS from 'aos';
import { aosConfig } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})

export class RootComponent {
  ngOnInit() {
    this.initializeAOS()
  }
  initializeAOS() {
    console.log('Initializing AOS');
    AOS.init(aosConfig);
  }
}

