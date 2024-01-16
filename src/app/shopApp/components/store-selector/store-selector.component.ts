import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'shopApp-store-selector',
  templateUrl: './store-selector.component.html',
  styleUrl: './store-selector.component.css'
})
export class StoreSelectorComponent implements OnInit{

  myForm!: FormGroup;

  constructor(
    private rootFormGroup: FormGroupDirective,
   ){}

  ngOnInit(): void {
    this.myForm = this.rootFormGroup.control;
  }

}
