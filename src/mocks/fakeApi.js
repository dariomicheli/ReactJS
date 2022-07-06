
    //array de productos
    const PRODUCTS = [
        {
            id:1,
            name:'Llave Negro',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget.',
            category:'zapatos',
            pictureUrl:'https://viamo.vteximg.com.br/arquivos/ids/256560-526-672/VC07484CD001.jpg?v=637916027983170000',
            stock:0,
            price:2000},
        {
            id:2,
            name:'Llave Gris',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget.',
            category:'zapatos',
            pictureUrl:'https://viamo.vteximg.com.br/arquivos/ids/256572-526-672/VC07484CD022.jpg?v=637916042782530000',
            stock:10,
            price:5000},
        {
            id:3,
            name:'Misterio Negro',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget.',
            category:'zapatillas',
            pictureUrl:'https://viamo.vteximg.com.br/arquivos/ids/256534-526-672/VC07459CV001.jpg?v=637915936950300000',
            stock:3,
            price:3000},
        {
            id:4,
            name:'Misterio Blanco',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget.',
            category:'zapatillas',
            pictureUrl:'https://viamo.vteximg.com.br/arquivos/ids/256538-526-672/VC07459CV002.jpg?v=637915946946730000',
            stock:4,
            price:3500},
        {
            id:5,
            name:'Portal Suela',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget.',
            category:'botas',
            pictureUrl:'https://viamo.vteximg.com.br/arquivos/ids/256700-1800-2300/VC07508CV006.jpg?v=637916839968030000',
            stock:7,
            price:1000},
        {
            id:6,
            name:'Rubina Negro',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget.',
            category:'botas',
            pictureUrl:'https://viamo.vteximg.com.br/arquivos/ids/251704-1800-2300/VC07491SS001.jpg?v=637804432761800000',
            stock:20,
            price:10000}
    ];

    //Se crea mock de promesa para desafio de clase 5
    export const getProducts = (categoryId) => {
        return new Promise ((resolve,reject) => {
            setTimeout(()=> {
                categoryId 
                ? resolve(PRODUCTS.filter( (product) => product.category === categoryId)) 
                : resolve(PRODUCTS)
            },2000);    
        });
    };

    export const getProduct = (detalleId) => {
        return new Promise ((resolve,reject) => {
            setTimeout(()=> {
                resolve(PRODUCTS.find((product) => product.id === Number(detalleId))) 
            },2000);    
        });
    };


