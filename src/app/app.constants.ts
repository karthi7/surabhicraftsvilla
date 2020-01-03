import { OptionType, Category } from './app.model';

export const OccastionTypes:OptionType[] = [
    { label:'Wedding', value:'Wedding'},
    { label:'Baby Shower', value:'Baby Shower'},
    { label:'Sangeeth', value:'Sangeeth'},
    { label:'House Warming', value:'House Warming'},
    { label:'Birthday Parties', value:'Birthday Parties'},
    { label:'Gettogether', value:'Gettogether'},
    { label:'Customer Gifting', value:'Customer Gifting'},
    { label:'Other', value:'Other'},
];

export const BudgetList:OptionType[] =[
    { label:'18 - 299', value:'18-299'},
    { label:'299 - 999', value:'299-999'},
    { label:'Above 999', value:'Above 999'},
]

export const catgory_detail = ['../assets/images/category1_img5.jpg','../assets/images/category1_img2.jpg','../assets/images/category1_img3.jpg',
                        '../assets/images/category1_img1.jpg','../assets/images/category1_img7.jpg','../assets/images/category1_img8.jpg',
                        '../assets/images/category1_img10.jpg','../assets/images/category1_img9.jpg','../assets/images/category1_img6.jpg'];

export const CategoryListSource: Category[] = [
    {id:'home_decor', name: 'Home Decor', avatar:'../assets/images/category1.jpg', details: catgory_detail },
    {id:'Paper_mache_torans', name: 'Paper Mache Torans', avatar:'../assets/images/category2.jpg', details: catgory_detail },
    {id:'mirror', name: 'Mirror', avatar:'../assets/images/category3.jpg', details: catgory_detail },
    {id:'jewellery_box', name: 'Jewellery Box', avatar:'../assets/images/category4.jpg', details: catgory_detail },
    {id:'key_holder', name: 'Key Holder', avatar:'../assets/images/category5.jpg', details: catgory_detail },
    {id:'stationary', name: 'Stationary', avatar:'../assets/images/category6.jpg', details: catgory_detail },
    {id:'key_ring', name: 'Key Ring"', avatar:'../assets/images/category7.jpg', details: catgory_detail },
    {id:'license_holder', name: 'Lincense Holder', avatar:'../assets/images/category8.jpg', details: catgory_detail },
    {id:'stylish_and_compact_bag', name: 'Stylish And Compact Bag', avatar:'../assets/images/category9.jpg', details: catgory_detail },
    {id:'tamboolam_bag', name: 'Tamboolam Bag', avatar:'../assets/images/category10.jpg', details: catgory_detail },
    {id:'kids_utilities', name: 'Kids Utilities', avatar:'../assets/images/category11.jpg', details: catgory_detail },
    {id:'candle_holder', name: 'Candle Holder', avatar:'../assets/images/category12.jpg', details: catgory_detail },
    {id:'mobile_utilities', name: 'Mobile Utilities', avatar:'../assets/images/category13.jpg', details: catgory_detail },
    {id:'multipurpose_box', name: 'Multipurpose Box', avatar:'../assets/images/category14.jpg', details: catgory_detail },
    {id:'varanasi_wood_toys', name: 'Varanasi Wood Toys', avatar:'../assets/images/category15.jpg', details: catgory_detail }
]

export const Categories: String[] = [
    "Home Decor",
    "Paper Mache Torans",
    "Mirror",
    "Jewellery Box",
    "Key Holder",
    "Stationary",
    "Key Ring",
    "Lincense Holder",
    "Stylish And Compact Bag",
    "Tamboolam Bag",
    "Kids Utilities",
    "Hand Purse",
    "Candle Holder",
    "Mobile Utilities",
    "Multipurpose Box",
    "Varanasi Wood Toys"
  ]

  export const RippleConfig = {
    centered: true,
    unbounded: false,
    disabled: false
}

export const Purpose = ['../assets/images/purpose1.jpg','../assets/images/purpose2.jpg'];
export const Vision = ['../assets/images/vision1.jpg','../assets/images/vision2.jpg','../assets/images/vision3.jpg','../assets/images/vision4.jpg'];
export const ReturnGift = ['../assets/images/return_gift1.jpg','../assets/images/return_gift2.jpg'];
export const aosConfig = {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
};