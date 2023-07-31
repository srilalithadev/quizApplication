import { Component,OnInit,ViewChild,ElementRef } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
 @ViewChild('name') nameKey!:ElementRef;
  constructor()
  {

  }
 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  startQuiz()
  {
    localStorage.setItem("name",this.nameKey.nativeElement.value);
  }

}
