import { Component } from '@angular/core';

interface IproductData {
  status:string,
  productName:string,
  lastUpdated: string,
  lessions:Number,
  minutes:number,
  category:string[],
  productUrl:string,
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  
})
export class DashboardComponent {

  data:IproductData[]=[
    {
      status:'DRAFT',
      productName:'xyz',
      lastUpdated:'4/09/2022',
      lessions:1,
      minutes:13,
      category:['Marketing'],
      productUrl:'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
      status:'ARCHIEVED',
      productName:'Sales vs marketing',
      lastUpdated:'4/08/2022',
      lessions:3,
      minutes:25,
      category:['Marketing','Sales'],
      productUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTw26V8v6AfD0j9eO1VfNOw2QXAQCQtaesAg&usqp=CAU'
    },
    {
      status:'LIVE',
      productName:'How to Unclog a Sink',
      lastUpdated:'4/08/2022',
      lessions:6,
      minutes:5,
      category:['Sales'],
      productUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7NILzRDGRU18By1yb5Fi91RXfitrZjhtUXA&usqp=CAU'
    },
    {
      status:'LIVE',
      productName:'How Google Analytics Ruined Marketing',
      lastUpdated:'4/08/2022',
      lessions:3,
      minutes:25,
      category:['Sales'],
      productUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaTWbSRXArrIZtsB3CKh1vqk3lMeytWiJfUA&usqp=CAU'
    },
    {
      status:'LIVE',
      productName:'Social Media Marketing 101',
      lastUpdated:'4/08/2022',
      lessions:3,
      minutes:25,
      category:['Marketing','Sales'],
      productUrl:'https://www.postbeyond.com/wp-content/uploads/2021/02/social-media-importance-min.png'
    },
    {
      status:'LIVE',
      productName:'Compliance Training',
      lastUpdated:'4/08/2022',
      lessions:2,
      minutes:15,
      category:['Sales', 'Marketing'],
      productUrl:'https://res.cloudinary.com/everfi/images/f_auto,q_auto/v1622740706/pexels-fauxels-3183150/pexels-fauxels-3183150.jpg?_i=AA'
    },
    {
      status:'LIVE',
      productName:'Top tricks to Bargaining',
      lastUpdated:'4/08/2022',
      lessions:2,
      minutes:45,
      category:['Sales', 'Marketing'],
      productUrl:'https://www.wikihow.com/images/thumb/0/05/Bargain-Step-8.jpg/v4-460px-Bargain-Step-8.jpg.webp'
    },
  ]
}
