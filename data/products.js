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
  { id: 425396199, name: "But my shirt is",    price: 25.00, thumbnail: "https://files.cdn.printful.com/files/8f2/8f2b09e79f9977d581938334c6b9df63_preview.png", sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425396176, name: "$50 is $50",         price: 25.00, thumbnail: "https://files.cdn.printful.com/files/930/9306e298cfbd79598a7eb48765ed82fe_preview.png", sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425396123, name: "Ol GAS",             price: 25.00, thumbnail: "https://files.cdn.printful.com/files/b31/b31fcba8f344b1fb7210555b1d074350_preview.png", sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425396093, name: "IT MY GAS",          price: 25.00, thumbnail: "https://files.cdn.printful.com/files/3c0/3c0d05e8101dae6f8e003901afa21e69_preview.png", sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425396032, name: "GAS LOGO",           price: 25.00, thumbnail: "https://files.cdn.printful.com/files/78a/78a0ad3547ebb7bee0f74449c9ca6aa2_preview.png", sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425396021, name: "SCHOOLHOUSE ROCK",   price: 25.00, thumbnail: "https://files.cdn.printful.com/files/93c/93cb3bc6c763749b3d9daf9d4d17e892_preview.png", sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425395854, name: "TRIPPY",             price: 25.00, thumbnail: "https://files.cdn.printful.com/files/acb/acbc1ed9b23a7a80b50c9d79e4706fc1_preview.png", sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425395846, name: "SASSY",              price: 25.00, thumbnail: "https://files.cdn.printful.com/files/afc/afce51eb79161cc517ed851ccebcf55e_preview.png", sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425395840, name: "BODAK YELLOW",       price: 25.00, thumbnail: "https://files.cdn.printful.com/files/79c/79c3f5e3343f1111e81beb8b53a78827_preview.png", sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425395831, name: "Pscyhedelic",        price: 25.00, thumbnail: "https://files.cdn.printful.com/files/753/753abb7f8bc6ae15d5e57aafd7479c20_preview.png", sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425395828, name: "TOO GAY TO FUNCTION",price: 25.00, thumbnail: "https://files.cdn.printful.com/files/5b6/5b6a8e94e4fbe0f8225dbcdd781a1840_preview.png", sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425395823, name: "ITS MY GAS",         price: 25.00, thumbnail: "https://files.cdn.printful.com/files/284/2846f6e7b87cb44a527f338ea12589cd_preview.png", sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425395820, name: "NEON",               price: 25.00, thumbnail: "https://files.cdn.printful.com/files/89e/89eba5d44d814aa9cec2d60afcc6973f_preview.png", sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425395817, name: "STAMPED",            price: 25.00, thumbnail: "https://files.cdn.printful.com/files/0e5/0e5394167c594f3fd26c45409013c5b1_preview.png", sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
  { id: 425395815, name: "SHIRTS",             price: 25.00, thumbnail: "https://files.cdn.printful.com/files/093/0938fa5612611959aff5ce72c0e8fa23_preview.png", sizes: ["S","M","L","XL","2XL"], colors: ["White","Black","Navy"], collection: "GAY BUBBLE" },
];
