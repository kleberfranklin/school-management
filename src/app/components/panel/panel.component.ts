import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent  implements OnInit, OnChanges {
@Input()  update: number = 0 ;
@Output() evalutionEvent = new EventEmitter<number>();
    date?: Date;

ngOnInit(): void {
    
}
ngOnChanges(changes: SimpleChanges): void {
  
    if(this.update != 0 ){
        this.date = new Date();
        setTimeout(() => {
          this.evalutionEvent.emit(0);
        }, 50);
    }    
}

}
