import { Injectable } from '@angular/core';
import { Contact, contacts } from '../interface/contacts';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }

  async getContactById( id: number): Promise<any> {
    const res = await fetch("https://localhost:7113/api/Contact/GetOne/" + id)
    return await res.json();
  }

  async getContacs () 
  {
    const res = await fetch("https://localhost:7263/api/Contact")
    return res.json();
  
  }

  async DeleteUsers (id:number) 
  {
    console.log ("Devuelve un ok ")
  }
  async AddUsers (Contact : Contact) {


  }

}