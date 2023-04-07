import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import LittleCard from '../components/catalog/LittleCard/LittleCard';
import Img100501Front from '../assets/images/product100501(side1).jpg';
import Img100501Back from '../assets/images/product100501(side2).jpg';
import Img100504Front from '../assets/images/product100504(side1).jpg';
import Img100504Back from '../assets/images/product100504(side2).jpg';
import Img100505Front from '../assets/images/product100505(side1).jpg';
import Img100505Back from '../assets/images/product100505(side2).jpg';
import Img100506Front from '../assets/images/product100506(side1).jpg';
import Img100506Back from '../assets/images/product100506(side2).jpg';
import CardsList from '../components/catalog/CardsList/CardsList';

const productExample = {
  brand: 'Nutrition',
  name: 'Nitro',
  specifications: '100 tablets',
  purpose: 'Health',
  images: [Img100501Front, Img100501Back],
  manufacturer: 'USA',
  category: 'supplements',
  price: 10,
  productCode: '100501',
  description:
    'It is an essential vitamin for many metabolic processes that help support the body. Vitamin D3 can help to regulate the absorption of calcium and phosphorus, both of which are needed for strong and healthy bones and teeth.',
  reviews: [
    {
      score: 4,
      opinion: 'slow delivery',
    },
  ],
};

const productsList = [
  {
    brand: 'Solgar',
    name: 'Omega 3, EPA & DHA, Triple Strength',
    specifications: '950 mg, 100 softgels',
    purpose: 'Supports heart and skin health.',
    images: [Img100504Front, Img100504Back],
    manufacturer: 'USA',
    category: 'supplements',
    price: 50,
    productCode: '100504',
    description:
      "Omega 3 950 mg is Solgar's highest concentration of the natural Omega 3 polyunsaturates EPA and DHA from cold-water fish. This formulation supports cardiovascular, joint, and skin health. It is molecularly distilled to remove mercury.",
    reviews: [
      {
        score: 5,
        opinion: 'the best vitamins',
      },
      {
        score: 5,
        opinion: 'My skin got better and my mood improved',
      },
      {
        score: 5,
        opinion: 'I bought it on the advice of my cardiologist',
      },
      {
        score: 5,
        opinion:
          'delivered very quickly, the price is lower than in the store, vitamins are very good',
      },
    ],
  },

  {
    brand: 'Solgar',
    name: 'Skin, Nails & Hair, Advanced MSM Formula',
    specifications: '60 tablets',
    purpose: 'Supports health of skin, hairs and nails.',
    images: [Img100505Front, Img100505Back],
    manufacturer: 'USA',
    category: 'supplements',
    price: 38,
    productCode: '100505',
    description:
      'Many nutrients cannot be delivered to the body externally. This formula is designed to help support collagen, a major component of skin, nails and hair that can decrease as we age. Delivering nutrients like Vitamin C and Copper internally may help support hair, nail and skin health.',
    reviews: [
      {
        score: 3,
        opinion: 'It is better to buy Omega 3 from this manufacturer',
      },
      {
        score: 4,
        opinion: 'the effect is not visible',
      },
      {
        score: 4,
        opinion: "My nails are stronger, otherwise I don't see any changes",
      },
    ],
  },

  {
    brand: 'Solgar',
    name: 'Chlorella (Broken Cell-Wall)',
    specifications: '100 vegetable capsules',
    purpose: 'Correct iodine deficiency',
    images: [Img100506Front, Img100506Back],
    manufacturer: 'USA',
    category: 'supplements',
    price: 29,
    productCode: '100506',
    description:
      "Solgar Broken Cell-Wall Chlorella offers exceptional digestibility for maximum absorption and utilization of the single-cell algae's constituents.",
    reviews: [
      {
        score: 3,
        opinion: 'terrible taste',
      },
    ],
  },
];

describe('LittleCard', () => {
  it('renders correct price', () => {
    render(<LittleCard product={productExample} key={productExample.productCode} />);
    expect(screen.getByTestId('test-price')).toHaveTextContent('10$');
  });
});

describe('CardsList', () => {
  it('renders all cards', () => {
    render(<CardsList productsData={productsList} />);
    expect(screen.getByTestId('test-cards-list')).not.toBeEmptyDOMElement();
  });
});
