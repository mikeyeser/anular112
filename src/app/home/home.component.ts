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
title2 = ""
title3 = ""
title4 = ""
title5 = ""
title6 = ""
title7 = ""

delete(ind : number){
 this.array.splice(ind,1)
}
showeror = false
showlist = false

save(){

  
  this.title != ""? this.array.push(this.title): this.showeror = true
  this.title2 != ""? this.array.push(this.title2): this.showeror = true
  this.title3 != ""? this.array.push(this.title3): this.showeror = true
  this.title4 != ""? this.array.push(this.title4): this.showeror = true
  this.title5 != ""? this.array.push(this.title5): this.showeror = true
  this.title6 != ""? this.array.push(this.title6): this.showeror = true
  this.title7 != ""? this.array.push(this.title7): this.showeror = true
  // if( this.title !="" ){
  //   this.array.push(this.title)
  //   this.showeror = false
  // }
  // else{

  // }
//  for(let el of this.array)(
//   console.log(el)ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggdc sxe
//  )
console.log(this.array)
this.title = ""
this.title2 = ""
}

del(){
  this.array = []
}











hello = ""
gooodbyye = ""




}
