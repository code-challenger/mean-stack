import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Dojo Mail';

  emails: Object = [
    {
      email: "bill@gates.com",
      importance: true,
      subject: "New Windows",
      content: "windows XI will launch in year 2100."
    },
    {
      email: "ada@lovelace.com",
      importance: "true",
      subject: "Programming",
      content: "Enchantres of Numbers",
    },
    {
      email: "john@carmac.com",
      importance: false,
      subject: "Updated Algo",
      content: "New algorithm for shadow volumes",
    },
    {
      email: "gabe@newel.com",
      importance: false,
      subject: "HL3!",
      content: "Just kidding..."
    }
  ]
}
