import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {



  showHidelist(){
    this.showlist ? this.showlist = false : this.showlist = true
  }


array :(string | number)[] = []
title = ""  

delete(ind : number){
 this.array.splice(ind,1)
}
showeror = false
showlist = false

save(){

  
  this.title != ""? this.array.push(this.title): this.showeror = true

  if( this.title !="" ){
    this.array.push(this.title)
    this.showeror = false
  }
  else{

  }
//  for(let el of this.array)(
//   console.log(el)ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggdc sxe
//  )
console.log(this.array)
this.title = ""
}

del(){
  this.array = []
}
}
