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
'photo_6037245849802751350_y.jpg',
'photo_6037245849802751349_y.jpg',
'photo_6037245849802751348_y.jpg',
'photo_5886513843700613019_y.jpg',
'photo_5893389686909551107_y.jpg',
'photo_5895220648647703593_y.jpg',
'photo_5895457614878326090_y.jpg',
'photo_5947286037506145952_y.jpg',
'photo_5947286037506145953_y.jpg',
'photo_5947286037506145955_y.jpg',
'photo_5947286037506145957_y.jpg',
'image1.jpg',
'image2.jpg',
'image3.jpg',
'image4.jpg',
'image5.jpg',
'image6.jpg',
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
