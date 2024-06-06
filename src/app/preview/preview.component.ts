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
'../../../dist/gallery/browser/photo_6037245849802751350_y.jpg',
'photo6037245849802751349y.jpg',
'photo6037245849802751348y.jpg',
'photo5886513843700613019y.jpg',
'photo5893389686909551107y.jpg',
'photo5895220648647703593y.jpg',
'photo5895457614878326090y.jpg',
'photo5947286037506145952y.jpg',
'photo5947286037506145953y.jpg',
'photo5947286037506145955y.jpg',
'photo5947286037506145957y.jpg',
'\image1.jpg',
' \image2.jpg',
'\image3.jpg',
'\image4.jpg',
'\image5.jpg',
'\image6.jpg',
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
