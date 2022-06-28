
    //array de productos
    const PRODUCTS = [
        {id:1,name:'Producto 1',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget.',pictureUrl:'https://i.postimg.cc/8PJnc39f/converse-tiny.png',stock:5,price:2000},
        {id:2,name:'Producto 2',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget.',pictureUrl:'https://i.postimg.cc/8PJnc39f/converse-tiny.png',stock:10,price:5000},
        {id:3,name:'Producto 3',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget.',pictureUrl:'https://i.postimg.cc/8PJnc39f/converse-tiny.png',stock:3,price:3000},
        {id:4,name:'Producto 4',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget.',pictureUrl:'https://i.postimg.cc/8PJnc39f/converse-tiny.png',stock:4,price:3500},
        {id:5,name:'Producto 5',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget.',pictureUrl:'https://i.postimg.cc/8PJnc39f/converse-tiny.png',stock:7,price:1000},
        {id:6,name:'Producto 6',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget.',pictureUrl:'https://i.postimg.cc/8PJnc39f/converse-tiny.png',stock:20,price:10000}
    ];

    //Se crea mock de promesa para desafio de clase 5
    export const getData = new Promise ((resolve,reject) => {
        let condition=true;
        setTimeout(()=> {
            condition ? resolve(PRODUCTS) : reject ('Hubo un error')
        },2000);    
    });