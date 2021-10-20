// Seu código aqui!




// Declare sua funçao aqui. Nao se esqueça de invocar a função para conseguir testar!
const products = [
  {
    id: 1,
    name: 'Iphone 11',
    tags: ['smartphone', 'tech', 'apple']
  },
  {
    id: 2,
    name: 'Macbook Pro',
    tags: ['laptop', 'tech', 'apple']
  },
  {
    id: 3,
    name: 'JBL Headphones',
    tags: ['headphone', 'tech', 'jbl']
  },
  {
    id: 4,
    name: 'Nike Shorts',
    tags: ['shorts', 'clothing', 'nike']
  },
]
// Declare sua funçao aqui. Nao se esqueça de invocar a função para conseguir testar!


function filterProducts(category) {
  let includeProducts = []
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products[i].tags.length; j++) {
      if (products[i].tags[j] === category) {
        includeProducts.push(products[i])
      }

    }
  }
  console.log(includeProducts)
}

filterProducts('apple')
