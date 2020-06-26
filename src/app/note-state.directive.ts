import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNoteState]'
})
export class NoteStateDirective {

  @Input()
  appNoteState : string;

  constructor(private element:ElementRef) {
    
   }

  ngOnInit(){
    if(this.appNoteState==="not-started"){
      this.element.nativeElement.style.backgroundColor = "lightpink";
    }
    else if(this.appNoteState==="started"){
      this.element.nativeElement.style.backgroundColor="lightblue";
    }
    else if(this.appNoteState==="completed")
      this.element.nativeElement.style.backgroundColor="lightgreen";
  }

}
