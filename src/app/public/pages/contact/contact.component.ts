import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact, contacts } from 'src/app/core/interface/contacts';
import { DemoService } from 'src/app/core/services/demo.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  constructor(private ar:ActivatedRoute, private contactService : DemoService) { }

  contact: Contact = contacts[0];

  contacto: Contact = {
    id: 0,
  first_name: "",
  last_name: "",
  phone1: "",
  phone2: "",
  city: "",
  email:""
  }

  ngOnInit(): void {
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
}
