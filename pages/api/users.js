export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify([
    {
      category: "Espresso Based",
      items: [
        {
          name: "Kefi Signature",
          image: "https://imgur.com/AJ4j2lN",
          price: 21000
        },
        {
          name: "Almond Coffee W/Aren",
          price: 25000
        },
        {
          name: "Avocado Coffe/W",
          price:15000
        },
        {
          name: "Avocado Coffee Ice Cream",
          price: 23000
        },
        {
          name: "Americano Hot",
          price: 15000
        },
        {
          name: "Americano Iced",
          price: 23000
        },
        {
          name: "Cappuccino Hot",
          price: 23000
        },
        {
          name: "Cappuccino Iced",
          price: 25000
        },
        {
          name: "Caramel Machiato Hot",
          price: 231000
        },
        {
          name: "Caramel Machiato Iced",
          price: 25410
        },
        {
          name: "Coffee Latte Hot",
          price: 15500
        },
        {
          name: "Coffee Latte Iced",
          price: 21300
        },
        {
          name: "Espresso",
          price: 13860
        },
        {
          name: "Magic",
          price: 23100
        },
        {
          name: "Moccachino Hot",
          price: 23100
        },
        {
          name: "Moccachino Iced",
          price: 27720
        },
        {
          name: "Piccolo",
          price: 23100
        },
        {
          name: "Sanger Hot",
          price: 15015
        },
        {
          name: "Sanger Iced",
          price: 17325
        },
        {
          name: "Vanilla Latte Hot",
          price: 23100
        },
        {
          name: "Vanilla Latte Iced",
          price: 26565
        }
      ]
    },

    {
      category: "main course",
      items: [
        {
          name: "Ricebowl Ayam Andaliman",
          price: 27000
        },
        {
          name: "Ricebowl Ayam Rica-Rica",
          price: 27000
        },
        {
          name: "Ricebowl Ayam Teriyaki",
          price: 27000
        },
        {
          name: "ricebowl ayam lada hitam",
          price: 27000
        },
        {
          name: "ricebowl ayam sambal matah",
          price:27000
        },
        {
          name: "ricebowl beef teriyaki",
          price: 31185
        },
        {
          name: "ricebowl lada hitam",
          price: 31185
        },
        {
          name: "spaghetti aglio eolio",
          price: 31185
        },
        {
          name: "spaghetti carbonara",
          price: 34560
        },
        {
          name: "spaghetti bolognese",
          price: 30261
        },
        {
          name: "indomi kuah original",
          price: 17325
        },
        {
          name: "indomi kuah spicy",
          price: 19365
        },
        {
          name: "indomi goreng original",
          price: 17325
        },
        {
          name: "indomi goreng spicy",
          price: 19365
        }
      ]
    },

    {
      category: "manual brew",
      items: [
        {
          name: "v60",
          price: 28875
        },
        {
          name: "japanese",
          price: 28875
        }
      ]
    },

    {
      category: "mocktail",
      items: [
        {
          name: "apple cider coffee",
          price: 28642
        },
        {
          name: "creamy cinnamon",
          price: 28642
        },
        {
          name: "fresh lime coffee",
          price: 25641
        },
        {
          name: "summer breeze",
          price: 25410
        }
      ]
    },

    {
      category: "non coffee",
      items: [
        {
          name: "chocolate hot",
          price: 23100
        },
        {
          name: "chocolate iced",
          price: 26565
        },
        {
          name: "matcha latte hot",
          price: 23100
        },
        {
          name: "matcha latte iced",
          price: 26565
        },
        {
          name: "red velvet hot",
          price: 23100
        },
        {
          name: "red velvet iced",
          price: 26565
        },
        {
          name: "taro latte hot",
          price: 23100
        },
        {
          name: "taro latte iced",
          price: 26565
        }
      ]
    },

    {
      category: "refreshing drink",
      items: [
        {
          name: "virgin mojito",
          price: 25410
        },
        {
          name: "sunset kiss mojito",
          price: 25410
        },
        {
          name: "sparkling mint mojito",
          price: 25410
        },
        {
          name: "happy pink milkshake",
          price: 26565
        }
      ]
    },

    {
      category: "snacks",
      items: [
        {
          name: "bakwan",
          price: 11550
        },
        {
          name: "chicken wings bbq",
          price: 34560
        },
        {
          name: "chicken pop",
          price: 19635
        },
        {
          name: "enoki mushroom",
          price: 17325
        },
        {
          name: "french fries",
          price: 19635
        },
        {
          name: "fried beef sausage",
          price: 17325
        },
        {
          name: "pisang goreng kampung",
          price: 17325
        },
        {
          name: "roti mantao goreng",
          price: 19635
        },
        {
          name: "tahu malik",
          price: 23100
        },
        {
          name: "tempe goreng",
          price: 17325
        },
        {
          name: "onion ring",
          price: 17325
        },
        {
          name: "toast",
          price: 17325
        }
      ]
    },

    {
      category: "special breakfast",
      items: [
        {
          name: "kefi breakfast",
          price: 28875
        },
        {
          name: "beef burger",
          price: 28115
        },
        {
          name: "chicken katsu w potato wedges",
          price: 27951
        },
        {
          name: "french toast",
          price: 26565
        },
        {
          name: "hotdog",
          price: 23100
        },
        {
          name: "pancake",
          price: 28875
        },
        {
          name: "quesadillas chicken w mushroom",
          price: 30839
        }
      ]
    },

    {
      category: "tea",
      items: [
        {
          name: "honey black tea hot",
          price: 23100
        },
        {
          name: "honey black tea iced",
          price: 25410
        },
        {
          name: "lemonade tea hot",
          price: 17100
        },
        {
          name: "lemonade tea iced",
          price: 19635
        },
        {
          name: "lychee tea",
          price: 25410
        },
        {
          name: "lychee yakult tea",
          price: 26565
        },
        {
          name: "strawberry tea",
          price: 25410
        }
      ]
    }
  ]))
}
