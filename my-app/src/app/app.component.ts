import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  ngOnInit() {
console.log('ngOnInit');
  }
  promoCodes = [
    {
      code: 'AUTUMN',
      discountPercent: 10
    },
    {
      code: 'WINTER',
      discountPercent: 20
    }
  ];
  products = [
    {
      id: '1',
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      price : 5.99,
      image : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACWCAMAAACsAjcrAAAAM1BMVEWo2Gv////U7LW+4pD6/fat2nTq9drv+OSz3X7Z7r/D5Jnf8MjO6az0+u3k89G434fJ56NF8FahAAACGklEQVR4nO3W23KrMAxAUd/A3MP/f+2RZDuEpGn7UjJnZq+ZNC6JWgkkg3MAAAAAAAAAAAAAAAAAAAAAAADAV7oY41DXsuzq8nYcfeOrz3+O+jMheTFaFqsud112+X70nd0H+6avfhf1Zxbvc9jsv3dSxyivSQ5LRrO8lveBMZVCok+9+VXU31n97Kwc/bHeXDf77NzkU3Ru9OldWK/XsRbSt4Mtar0g72eD97fyFl1vp1JaZXBz6Y8kR03p/O6YIL9ufStka3/sOeoDJq2nJpCtJu2vWprY/NrZFXqY5FAKkbehTvhz1AfM2kTedyWP4HypaS65yrVIcrJjGZ/mXkjZLTr3EnW9mw2obTynQsI9JblkMR9N9PBh8H4bpZbNvUZdbUo28d8Vom1l7XWoH469fnXRiE8Xsnur4/tC9BZxnuFzvvmIGj9UyFz30ZaHjmxuy6OQdJ6Q50I2+W19ibrSXO/lelItU93AtpLLeuS+SWul09NHKWQIwRpOb4+vUReS3r/dlzrMu25gi8+d7QFtKhapoj9ufapekXI9dTN4jbpSkicUM+hdMcfREpNGWqdQZ0cMesKHdOqZWojs3MsgD2z9a9SVpvbIp+292yIfx3M7tdmOhvIYUNVCyoNi+epT1JViaLT/49jPdWCG0G9Ly0gGwSoIYXoMrbvYPh9R40MUAAAAAAAAAAAAAAAAAAAAAAAAAAD/u3/2FgtLph7PKgAAAABJRU5ErkJggg==',
      quantity : 2,
    },
    {
      id : '2',
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      price : 9.99,
      image : 'https://camo.githubusercontent.com/495be94b69d4e617adfeeb77fec4be5221dafed4cf784898cedea27014b7a615/687474703a2f2f686f6c6465722e6e696e6a612f323030783135302e737667',
      quantity : 1,
    },
    {
      id : '3',
      name: 'PRODUCT ITEM NUMBER 3',
      description: 'Description for product item number 3',
      price : 1.99,
      image : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACWCAMAAACsAjcrAAAAM1BMVEWo2Gv////U7LW+4pD6/fat2nTq9drv+OSz3X7Z7r/D5Jnf8MjO6az0+u3k89G434fJ56NF8FahAAACGklEQVR4nO3W23KrMAxAUd/A3MP/f+2RZDuEpGn7UjJnZq+ZNC6JWgkkg3MAAAAAAAAAAAAAAAAAAAAAAADAV7oY41DXsuzq8nYcfeOrz3+O+jMheTFaFqsud112+X70nd0H+6avfhf1Zxbvc9jsv3dSxyivSQ5LRrO8lveBMZVCok+9+VXU31n97Kwc/bHeXDf77NzkU3Ru9OldWK/XsRbSt4Mtar0g72eD97fyFl1vp1JaZXBz6Y8kR03p/O6YIL9ufStka3/sOeoDJq2nJpCtJu2vWprY/NrZFXqY5FAKkbehTvhz1AfM2kTedyWP4HypaS65yrVIcrJjGZ/mXkjZLTr3EnW9mw2obTynQsI9JblkMR9N9PBh8H4bpZbNvUZdbUo28d8Vom1l7XWoH469fnXRiE8Xsnur4/tC9BZxnuFzvvmIGj9UyFz30ZaHjmxuy6OQdJ6Q50I2+W19ibrSXO/lelItU93AtpLLeuS+SWul09NHKWQIwRpOb4+vUReS3r/dlzrMu25gi8+d7QFtKhapoj9ufapekXI9dTN4jbpSkicUM+hdMcfREpNGWqdQZ0cMesKHdOqZWojs3MsgD2z9a9SVpvbIp+292yIfx3M7tdmOhvIYUNVCyoNi+epT1JViaLT/49jPdWCG0G9Ly0gGwSoIYXoMrbvYPh9R40MUAAAAAAAAAAAAAAAAAAAAAAAAAAD/u3/2FgtLph7PKgAAAABJRU5ErkJggg==',
      quantity : 4,
    }
    ]

  inputType = 'text';
  user = {
    name: 'John',
    age: 30,
  }

  handler() {
    console.log('click');
  }
users  =[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]
tag = ['angular','react','vue'];
numberItems: number = 0;
subTotal: number = 0;
discountPercent: number = 0;
discount: number = 0;
taxPercent: number = 10;
tax: number = 0;
removeProduct(param:string){
alert('removeProduct' + param);
const index = this.products.findIndex((pro : any) => pro.id === param); // tim vi tri cua id trong mang
if(index !== -1){ // neu tim thay
this.products.splice(index, 1);
}
}


handleUpdateQuantity(p : { id:String, quantity:number}){

alert('handleUpdateQuantity' + p.quantity + ' ' + p.id);
const product = this.products.find(product => product.id === p.id);
if (product) {
  product.quantity = p.quantity || 0;
}
}

ngDoCheck() {
  this.numberItems = 0;
  this.subTotal = 0;

  for (const product of this.products) {
    this.numberItems += product.quantity;
    this.subTotal += product.price * product.quantity;
  }



}
handleApplyPromoCode(code: string) {
  const promoCode = this.promoCodes.find(
    promoCode => promoCode.code === code
  );
  this.discountPercent = promoCode ? promoCode.discountPercent : 0;
  this.discount = (this.subTotal * this.discountPercent) / 100;

  if (this.discount > 0) {
    alert(`The promotional code was applied.`);
  } else {
    alert(
      'Sorry, the promotional code you entered is not valid! Try code "AUTUMN" (discount 10% to all cart items) or "WINTER" (discount 20% to all cart items).'
    );
  }
}
}


