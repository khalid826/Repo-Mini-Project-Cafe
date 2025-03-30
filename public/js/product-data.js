const products = [
  {
    name: "Espresso",
    description: "Strong and concentrated Italian-style coffee served in small shots. Perfect for a quick energy boost.",
    variants: ["Single", "Double", "Hot", "Iced"],
    price: 30000,
    imageUrl: "product-img1.jpg"
  },
  {
    name: "Americano",
    description: "Smooth coffee made by diluting espresso with hot water, originating from American soldiers in WWII.",
    variants: ["Small", "Medium", "Large", "Hot", "Iced"],
    price: 25000,
    imageUrl: "product-img2.jpg"
  },
  {
    name: "Vietnam Drip",
    description: "Traditional Vietnamese coffee brewed slowly through a metal phin filter, often served with sweetened condensed milk.",
    variants: ["Small", "Large", "Hot", "Iced"],
    price: 31000,
    imageUrl: "product-img3.jpg"
  },
  {
    name: "Tubruk Indonesia",
    description: "Authentic Indonesian coffee where grounds are boiled with water, creating a strong and aromatic brew with sediment.",
    variants: ["Regular", "Strong", "Hot", "Iced"],
    price: 25000,
    imageUrl: "product-img4.jpg"
  },
  {
    name: "Latte",
    description: "Creamy espresso with steamed milk and a light layer of foam. Our most popular milk-based coffee.",
    variants: ["Small", "Medium", "Large", "Hot", "Iced"],
    price: 31000,
    imageUrl: "product-img5.jpg"
  },
  {
    name: "Cappuccino",
    description: "Classic Italian drink with equal parts espresso, steamed milk, and thick foam, often dusted with cocoa.",
    variants: ["Small", "Large", "Hot", "Iced"],
    price: 30000,
    imageUrl: "product-img6.jpg"
  },
  {
    name: "Hazelnut",
    description: "Smooth coffee blended with rich hazelnut syrup, topped with whipped cream and crushed hazelnuts.",
    variants: ["Medium", "Large", "Hot", "Iced"],
    price: 31000,
    imageUrl: "product-img7.jpg"
  },
  {
    name: "Vanilla Mojito",
    description: "Refreshing cold brew coffee with vanilla syrup, fresh mint, and a splash of soda - a coffee cocktail experience.",
    variants: ["Regular", "Extra Mint", "Hot", "Iced"],
    price: 31000,
    imageUrl: "product-img8.jpg"
  },
  {
    name: "SOE Rum Latte",
    description: "Special single-origin espresso with hints of natural rum flavor, combined with velvety steamed milk.",
    variants: ["Small", "Medium", "Large", "Hot", "Iced"],
    price: 31000,
    imageUrl: "product-img9.jpg"
  },
  {
    name: "Caramel Macchiato",
    description: "Layered drink with vanilla syrup, steamed milk, espresso, and caramel drizzle - our signature sweet coffee.",
    variants: ["Small", "Medium", "Large", "Hot", "Iced"],
    price: 35000,
    imageUrl: "product-img10.jpg"
  }
];

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  renderProductCards(products, "product-list-container");
});
