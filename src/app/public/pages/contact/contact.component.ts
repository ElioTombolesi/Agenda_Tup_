import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/core/interface/contacts';
import { DemoService } from 'src/app/core/services/demo.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  constructor(private ar:ActivatedRoute, private contactService : DemoService) { }



  cartel =  false;

  contacto: Contact = {
    id: 0,
    first_name: "",
    userId: 0,
    dispositivos: []
  }
  contactos: Contact[]=[]


  ngOnInit(): void {
    
   this.getContacs()
    this.ar.params.subscribe(data =>{
      console.log(data)
      this.contactService.getContactById(1)
      .then(value =>{
        console.log(value)
       this.contacto = value
       console.log(this.contacto)
      });
    })
  }


  async getContacs (){
    this.contactos= await this.contactService.getContacs()
  }
}
