import { Component, OnInit, Inject, HostListener } from '@angular/core';
@Component({
    selector: 'app-scroll-top',
    templateUrl: './scroll-top.component.html',
    styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements OnInit {
    windowScrolled: boolean;
    constructor() {}
    @HostListener("window:mousewheel", [])
    onWindowScroll() {
        if (window.pageYOffset || window.document.documentElement.scrollTop || window.document.body.scrollTop > 100) {
            this.windowScrolled = true;
        } 
       else if (this.windowScrolled && window.pageYOffset || window.document.documentElement.scrollTop || window.document.body.scrollTop < 10) {
            this.windowScrolled = false;
        }
    }
    scrollToTop($event) {
        /*(function smoothscroll() {
            var currentScroll = window.document.documentElement.scrollTop || window.document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
        })();*/
        (function smoothscroll() {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0,0);
            $event.preventDefault();
        })();
    }    
    ngOnInit() {}
}