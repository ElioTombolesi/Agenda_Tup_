import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/core/interface/contacts';
import { DemoService } from 'src/app/core/services/demo.service';


import {name_contacts, Name_Contact} from 'src/app/core/interface/contacts'

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit {

  name_contacts:Name_Contact[] = name_contacts;
  constructor(private contactService : DemoService) { 

  }
contactos: Contact[]=[]

  ngOnInit(): void {
    this.getContacs()
  }

  async getContacs (){
    this.contactos= await this.contactService.getContacs()
}
}