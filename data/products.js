// Price logic: S/M/L/XL = $25 · 2XL = $27 · 3XL/4XL/5XL = $29
export const PRICE_BY_SIZE = {
  XS: 25, S: 25, M: 25, L: 25, XL: 25,
  '2XL': 27,
  '3XL': 29, '4XL': 29, '5XL': 29,
};

export const PRODUCTS = [
  // ── GAS Collection ──────────────────────────────────────────────────────────
  { id: 425407958, name: "Navy Gas",   price: 25.00, thumbnail: "https://files.cdn.printful.com/files/54b/54ba2ff4144c620ad5694a3a32887a77_preview.png", sizes: ["S","M","L","XL","2XL","3XL","4XL"],         colors: ["Navy","Yellow"],  collection: "GAS" },
  { id: 425407946, name: "Neon Gas",   price: 25.00, thumbnail: "https://files.cdn.printful.com/files/f81/f8140447726ee49fe26641205dd54ca9_preview.png", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL"],     colors: ["Black","Natural"], collection: "GAS" },
  { id: 425407941, name: "Red Gas",    price: 25.00, thumbnail: "https://files.cdn.printful.com/files/df3/df3a596a0bbf042fbc71578a00862773_preview.png", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL","5XL"], colors: ["Default"],       collection: "GAS" },
  { id: 425407936, name: "Cream Gas",  price: 25.00, thumbnail: "https://files.cdn.printful.com/files/05f/05f1142f447b36d28be2592d4a53440f_preview.png", sizes: ["XS","S","M","L","XL","2XL","3XL"],          colors: ["Default"],        collection: "GAS" },
  { id: 425407930, name: "Purple Gas", price: 25.00, thumbnail: "https://files.cdn.printful.com/files/c9e/c9e78708ddb1cfe030d0d941f477bebe_preview.png", sizes: ["S","M","L","XL","2XL"],                     colors: ["Default"],        collection: "GAS" },
  { id: 425407929, name: "Pink Gas",   price: 25.00, thumbnail: "https://files.cdn.printful.com/files/155/155fd48ff03df1f57c9a250ccb816309_preview.png", sizes: ["XS","S","M","L","XL","2XL"],                 colors: ["Default"],        collection: "GAS" },
  { id: 425407928, name: "White Gas",  price: 25.00, thumbnail: "https://files.cdn.printful.com/files/452/452779e7f50546e00b8a385494bf47f6_preview.png", sizes: ["XS","S","M","L","XL","2XL"],                 colors: ["Default"],        collection: "GAS" },
  { id: 425407926, name: "Gold Gas",   price: 25.00, thumbnail: "https://files.cdn.printful.com/files/1b4/1b447d806096ae827abcc6eaa3d7273f_preview.png", sizes: ["S","M","L","XL","2XL"],                     colors: ["Default"],        collection: "GAS" },
  { id: 425407925, name: "Green Gas",  price: 25.00, thumbnail: "https://files.cdn.printful.com/files/b13/b1345ec853004a48935b7f7abbc5d830_preview.png", sizes: ["XS","S","M","L","XL","2XL","3XL"],          colors: ["Default"],        collection: "GAS" },
  { id: 425407923, name: "Maroon GAS", price: 25.00, thumbnail: "https://files.cdn.printful.com/files/ddc/ddc68d8b4edf3d3fd6a473f7b7129ca0_preview.png", sizes: ["S","M","L","XL","2XL"],                     colors: ["Default"],        collection: "GAS" },

  // ── Gay Bubble Collection ────────────────────────────────────────────────────
  { id: 425396199, name: "But my shirt is",    price: 25.00, thumbnail: "/images/gay-bubble/but-my-shirt-is.jpg",    sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425396176, name: "$50 is $50",         price: 25.00, thumbnail: "/images/gay-bubble/50-is-50.jpg",           sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425396123, name: "Ol GAS",             price: 25.00, thumbnail: "/images/gay-bubble/ol-gas.jpg",             sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425396093, name: "IT MY GAS",          price: 25.00, thumbnail: "/images/gay-bubble/it-my-gas.jpg",          sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425396032, name: "GAS LOGO",           price: 25.00, thumbnail: "/images/gay-bubble/gas-logo.jpg",           sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425396021, name: "SCHOOLHOUSE ROCK",   price: 25.00, thumbnail: "/images/gay-bubble/schoolhouse-rock.jpg",   sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425395854, name: "TRIPPY",             price: 25.00, thumbnail: "/images/gay-bubble/trippy.jpg",             sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425395846, name: "SASSY",              price: 25.00, thumbnail: "/images/gay-bubble/sassy.jpg",              sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425395840, name: "BODAK YELLOW",       price: 25.00, thumbnail: "/images/gay-bubble/bodak-yellow.jpg",       sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425395831, name: "Pscyhedelic",        price: 25.00, thumbnail: "/images/gay-bubble/pscyhedelic.jpg",        sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425395828, name: "TOO GAY TO FUNCTION",price: 25.00, thumbnail: "/images/gay-bubble/too-gay-to-function.jpg",sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425395823, name: "ITS MY GAS",         price: 25.00, thumbnail: "/images/gay-bubble/its-my-gas.jpg",         sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425395820, name: "NEON",               price: 25.00, thumbnail: "/images/gay-bubble/neon.jpg",               sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425395817, name: "STAMPED",            price: 25.00, thumbnail: "/images/gay-bubble/stamped.jpg",            sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425395815, name: "SHIRTS",             price: 25.00, thumbnail: "/images/gay-bubble/shirts.jpg",             sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
];
