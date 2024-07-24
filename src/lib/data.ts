export const paints: Paint[] = [
  {
    colour: 'Green',
    imageUrl:
      'https://backdrop-accentuate.imgix.net/https%3A%2F%2Foriginal.accentuate.io%2F270606237794%2F1687975957833%2FIRISH-GREEN---Blob2_Web_grid.png%3Fv%3D1687975957835?ixlib=js-3.8.0&q=80&s=cd977815cbd7171c0768d281dc53c8fb',
    price: 100,
  },
  {
    colour: 'Red',
    imageUrl: 'https://milkpaint.com/wp-content/uploads/2020/04/scarlet.png',
    price: 100,
  },
  {
    colour: 'Brown',
    imageUrl:
      'https://c2paint.com/cdn/shop/products/c2-518-raj_grande.png?v=1620813887',
    price: 100,
  },
  {
    colour: 'Blue',
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod/images/dynamic-blue-1593458851.png?crop=0.9230769230769231xw:1xh;center,top&resize=980:*',
    price: 100,
  },
];

export interface Paint {
  colour: string;
  imageUrl: string;
  price: number;
}
