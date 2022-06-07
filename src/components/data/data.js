export const products = [
    {
      name: 'Alice Mug',
      price: 1000,
      img: require ('../styles/img/Alice.png'),
      description: 'Taza de Alicia en el Pais de las Maravillas, exclusivo diseño',
      category: "tazas",
      id: '1',
    },
    {
      name: 'Minnie Mug',
      price: 700,
      img: require ('../styles/img/Minnie.png'),
      description: 'Taza con la imagen de Minnie, apta para microondas y lavavajillas',
      category: "tazas",
      id: '2',
    },
    {
      name: 'Jack',
      price: 400,
      img: require ('../styles/img/jack.png'),
      description: 'Cuaderno de Jack',
      category: "cuadernos",
      id: '3',
    },
    {
      name: 'Beauty and the Beast',
      price: 400,
      img: require ('../styles/img/beauty.png'),
      description: 'Cuaderno de La Bella y La Bestia',
      category: "cuadernos",
      id: '4',
    },
    {
      name: 'Stitch',
      price: 2500,
      img: require ('../styles/img/stitch.png'),
      description: 'Peluche de Stitch',
      category: "peluches",
      id: '5',
    },
    {
      name: 'Cheshire',
      price: 2500,
      img: require ('../styles/img/cheshire.png'),
      description: 'Peluche de Cheshire',
      category: "peluches",
      id: '6',
    },
  ];

  export const getData = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
                const idProd = id ? products.find(product => product.id === id ) : products                                  
                resolve( idProd )                           
            }, 2000)
        })            
    
  }