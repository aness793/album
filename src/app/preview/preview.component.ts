import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { setInterval } from 'timers';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewComponent implements OnInit {
image =[
'../../../../../photo_5886513843700613019_y.jpg',
'../../../../../photo_5893389686909551107_y.jpg',
'../../../../../photo_5895220648647703593_y.jpg',
'../../../../../photo_5947286037506145952_y.jpg',
'../../../../../photo_5947286037506145953_y.jpg',
]
i=0
next(){
  this.i++
  if(this.i>this.image.length-1){
    this.i=0
  }
  console.log(this.i)
}
previous(){
 if(this.i==0){
  this.i=this.image.length-1
 }
 else {
  this.i--
 }
  console.log(this.i)

}
ngOnInit():void {

  }
}
