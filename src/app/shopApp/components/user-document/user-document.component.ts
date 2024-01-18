import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'shopApp-user-document',
  templateUrl: './user-document.component.html',
  styleUrl: './user-document.component.css'
})
export class UserDocumentComponent implements OnInit {

  myForm!: FormGroup;

  constructor(
    private rootFormGroup: FormGroupDirective,
   ){}

  ngOnInit(): void {
    this.myForm = this.rootFormGroup.control;
  }

  inputValue(){
    console.log(this.myForm.get('userDocument')!.value);
  }

}
