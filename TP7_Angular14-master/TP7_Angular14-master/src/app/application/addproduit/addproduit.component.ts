import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {
  lesCategories: string[] = [
    'Fourniture', 'Vêtements', 'Accessoires', 'Informatique', 'Meubles'];
    productForm: FormGroup = new FormGroup({
      reference:new FormControl(0),
      libelle: new FormControl(''),
      madeIn: new FormControl('Tunisie'),
      categorie: new FormControl('Accessoires'),
      nouveau : new FormControl(true)
      });
      onSubmitForm(){
        console.log(this.productForm.value);
        console.log(this.productForm.value.reference);
        console.log(this.productForm.value['libelle']);
        console.log(this.productForm.get('madeIn')?.value);
        console.log(this.productForm.controls['categorie'].value);
       }
       onReset(){
        this.productForm.reset();
        }
        
       
  constructor() { }

  ngOnInit(): void {
  }

}
