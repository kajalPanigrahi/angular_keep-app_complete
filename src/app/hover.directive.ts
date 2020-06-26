import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  currentColor : string;
  constructor(private element : ElementRef) {
    // element.nativeElement.style.backgroundColor = "white";
  
  }

   ngOnInit(){
    
   }

   @HostListener('mouseover')
  //  @HostListener('click')
   mouseHover(){
    this.currentColor = this.element.nativeElement.style.backgroundColor;
    this.element.nativeElement.style.backgroundColor = "grey";
   }

   @HostListener('mouseout')
   mouseHoverExit(){
    this.element.nativeElement.style.backgroundColor = this.currentColor;
   }


}
