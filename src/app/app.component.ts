import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { OptionType } from './app.model';
import { BudgetList, OccastionTypes, CategoryListSource } from './app.constants';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { zoomAnimations } from './app.animations';
import { Purpose, Vision, ReturnGift, RippleConfig } from './app.constants';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: zoomAnimations
})


export class AppComponent {
  scrollConfig = {
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    navigation: true,
    controlArrows: true,
    keyboardScrolling: true,
    verticalCentered:true,
    slideNavPosition: 'bottom',
    parallax:true,
    parallaxOptions: {type:'cover'},
    fadingEffect:true
  }
  canAddFullPageScroll: boolean = true;
  homeImages = ['../assets/images/yadvik_image_4.jpg','../assets/images/yadvik_image_1.jpg','../assets/images/yadvik_image_2.jpg']
  purposeImages = Purpose;
  visionImages = Vision;
  returnGiftImages = ReturnGift;
  category_data = {
    original: CategoryListSource,
    current: []
  }
  categories_filter = {
    original: [...CategoryListSource],
    current: []
  }
  rippleConfig = RippleConfig;

  constructor(private breakpointObserver: BreakpointObserver) {

  }

  @ViewChild('heroVideo', {static: false})
  heroVideo: ElementRef;

  
  occastions:OptionType[] = OccastionTypes;
  budgetList:OptionType[] = BudgetList;
  selectedOccation:string;
  date = {
    min : new Date(1950, 0, 1),
    max : new Date(2050, 0, 1)
  }
  userDetails = new FormGroup({
    name: new FormControl('', [Validators.required]),
    mobilenumber: new FormControl('', [Validators.required,  Validators.pattern("^[0-9]*$"), Validators.minLength(10)]),
    email:new FormControl('', [Validators.required, Validators.email]),
    location:new FormControl(''),
    occasionType: new FormControl('', [Validators.required]),
    date: new FormControl(new Date()),
    budget: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    specs: new FormControl('')
  });
     

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          /**Non Mobile Mode */
          this.canAddFullPageScroll = true;
        } else {
          /**Mobile Mode */
          this.canAddFullPageScroll = false;
        }
      });
      this.setCategories();
  }

  setCategories() {
    this.category_data.current=[]
    this.category_data.current = [...this.category_data.original];
  }

  startBgVideo() {
    this.heroVideo.nativeElement.play();
    this.heroVideo.nativeElement.playbackRate = 0.5;
  }

  moveToTarget(target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  onFilterEvt($event) {
    this.categories_filter.current = $event;
    this.category_data.current.length = 0;
    this.category_data.current = this.categories_filter.current.map(optionId => this.category_data.original.find(category => category.id === optionId));
  }

  getErrorMessage(fieldName:string) {
    return this.userDetails.controls[fieldName].hasError('required') ? 'You must enter a value' :
           this.userDetails.controls[fieldName].hasError('email') ? 'Not a valid email' :
            '';
  }

  onSubmit() {
      console.log(this.userDetails.value)
  }
}

