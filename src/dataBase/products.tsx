import { ProductInterface } from './dataBaseTypes';
import Img100501Front from '../assets/images/product100501(side1).jpg';
import Img100501Back from '../assets/images/product100501(side2).jpg';
import Img100502Front from '../assets/images/product100502(side1).jpg';
import Img100502Back from '../assets/images/product100502(side2).jpg';
import Img100503Front from '../assets/images/product100503(side1).jpg';
import Img100503Back from '../assets/images/product100503(side2).jpg';
import Img100504Front from '../assets/images/product100504(side1).jpg';
import Img100504Back from '../assets/images/product100504(side2).jpg';
import Img100505Front from '../assets/images/product100505(side1).jpg';
import Img100505Back from '../assets/images/product100505(side2).jpg';
import Img100506Front from '../assets/images/product100506(side1).jpg';
import Img100506Back from '../assets/images/product100506(side2).jpg';
import Img100507Front from '../assets/images/product100507(side1).jpg';
import Img100507Back from '../assets/images/product100507(side2).jpg';

import Img200501Front from '../assets/images/product200501(side1).jpg';
import Img200501Back from '../assets/images/product200501(side2).jpg';
import Img200502Front from '../assets/images/product200502(side1).jpg';
import Img200502Back from '../assets/images/product200502(side2).jpg';
import Img200503Front from '../assets/images/product200503(side1).jpg';
import Img200503Back from '../assets/images/product200503(side2).jpg';
import Img200504Front from '../assets/images/product200504(side1).jpg';
import Img200504Back from '../assets/images/product200504(side2).jpg';
import Img200505Front from '../assets/images/product200505(side1).jpg';
import Img200505Back from '../assets/images/product200505(side2).jpg';
import Img200506Front from '../assets/images/product200506(side1).jpg';
import Img200506Back from '../assets/images/product200506(side2).jpg';
import Img200507Front from '../assets/images/product200507(side1).jpg';
import Img200507Back from '../assets/images/product200507(side2).jpg';

import Img300501Front from '../assets/images/product300501(side1).jpg';
import Img300501Back from '../assets/images/product300501(side2).jpg';
import Img300502Front from '../assets/images/product300502(side1).jpg';
import Img300502Back from '../assets/images/product300502(side2).jpg';
import Img300503Front from '../assets/images/product300503(side1).jpg';
import Img300503Back from '../assets/images/product300503(side2).jpg';
import Img300504Front from '../assets/images/product300504(side1).jpg';
import Img300504Back from '../assets/images/product300504(side2).jpg';
import Img300505Front from '../assets/images/product300505(side1).jpg';
import Img300505Back from '../assets/images/product300505(side2).jpg';
import Img300506Front from '../assets/images/product300506(side1).jpg';
import Img300506Back from '../assets/images/product300506(side2).jpg';
import Img300507Front from '../assets/images/product300507(side1).jpg';
import Img300507Back from '../assets/images/product300507(side2).jpg';

const products: Array<ProductInterface> = [
  {
    brand: 'California Gold Nutrition',
    name: 'Vitamin D3',
    specifications: '125 mcg (5,000 IU), 360 fish gelatin softgels',
    purpose: 'Supports healthy bones and teeth immune system function.',
    images: [Img100501Front, Img100501Back],
    manufacturer: 'USA',
    category: 'supplements',
    price: 25,
    productCode: '100501',
    description:
      'Vitamin D is often referred to as the “sunshine vitamin” because it is produced in the skin in response to sunlight. It is an essential vitamin for many metabolic processes that help support the body. Vitamin D3 can help to regulate the absorption of calcium and phosphorus, both of which are needed for strong and healthy bones and teeth. In addition it can help support healthy immune system function.',
    reviews: [
      {
        score: 4,
        opinion: 'slow delivery',
      },
      {
        score: 2,
        opinion: 'no effect',
      },
    ],
  },

  {
    brand: 'NOW Foods',
    name: 'Zinc',
    specifications: '50 mg, 250 tablets',
    purpose: 'Supports immune system function and enzyme functions.',
    images: [Img100502Front, Img100502Back],
    manufacturer: 'USA',
    category: 'supplements',
    price: 25,
    productCode: '100502',
    description:
      "Zinc is essential to the normal function of many organs and systems within the body including the skeletal, immune, neurological, and endocrine systems. Zinc is a necessary mineral co-factor for hundreds of enzymatic reactions related to protein and carbohydrate metabolism, RNA/DNA synthesis, and intercellular signaling. It is also known to play a critical role in the body's free radical neutralizing activities and is especially helpful for maintenance of healthy aging.",
    reviews: [
      {
        score: 5,
        opinion: 'perfect',
      },
      {
        score: 5,
        opinion: 'excellent effect',
      },
      {
        score: 5,
        opinion: 'I liked',
      },
    ],
  },

  {
    brand: "Nature's Bounty",
    name: 'Calcium Magnesium Zinc with Vitamin D3',
    specifications: '100 coated caplets',
    purpose: 'Reduce the risk of osteoporosis',
    images: [Img100503Front, Img100503Back],
    manufacturer: 'USA',
    category: 'supplements',
    price: 40,
    productCode: '100503',
    description:
      'Adequate Calcium and Vitamin D throughout life, as part of a well-balanced diet, may reduce the risk of osteoporosis.',
    reviews: [
      {
        score: 4,
        opinion: 'I bought other vitamins, its were better',
      },
    ],
  },

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

  {
    brand: 'NOW Foods',
    name: 'Apple Cider Vinegar, Extra Strength',
    specifications: '750 mg, 180 tablets',
    purpose: 'Maintaining youth',
    images: [Img100507Front, Img100507Back],
    manufacturer: 'USA',
    category: 'supplements',
    price: 15,
    productCode: '100507',
    description:
      'NOW Apple Cider Vinegar is derived from the natural fermentation of sweet apple cider. Vinegar has been used worldwide for more than 2000 years for various culinary purposes. More recently, it has been recognized for its acidic properties.',
    reviews: [
      {
        score: 5,
        opinion:
          'I don’t know. I only know that it has helped or at least appears to have helped in lowering/stabilizing my blood sugar. I’m a diabetic so, stabilizing my blood sugars is a VERY good thing.',
      },
      {
        score: 5,
        opinion: 'very good quality and come with nice package',
      },
      {
        score: 4,
        opinion:
          'Apple cider vinegar is a good vitamin the size and quality fit you , and the taste is absolutely amazing, it’s has a lot of benefit is good for your health , And ingredient apple in it , and you have to take an organized dosage',
      },
    ],
  },

  {
    brand: 'Mariani Dried Fruit Family',
    name: 'Probiotic Prunes',
    specifications: '198 g',
    purpose: 'Healthy food. Supports heart and bones.',
    images: [Img200501Front, Img200501Back],
    manufacturer: 'USA',
    category: 'food',
    price: 3,
    productCode: '200501',
    description:
      'A healthy digestive system is one of the keys overall wellness and feeling great!\n' +
      '\n' +
      'Good source of the Vitamins E, B6, B12 & Iron.\n' +
      '\n' +
      'California prunes support healthy bones and heart.',
    reviews: [
      {
        score: 5,
        opinion: 'delicious and healthy snack',
      },
      {
        score: 2,
        opinion: 'the packaging is broken, the goods have deteriorated',
      },
      {
        score: 4,
        opinion: 'too expensive, but delicious',
      },
    ],
  },

  {
    brand: 'Finn Crisp',
    name: 'Sourdough Rye Thins',
    specifications: '200 g',
    purpose: 'Healthy food.',
    images: [Img200502Front, Img200502Back],
    manufacturer: 'Finland',
    category: 'food',
    price: 5,
    productCode: '200502',
    description:
      'Finn Crisp Caraway is tangy sourdough, rich mellow rye and distinct caraway. Simply made for all things sizzled, chopped and sprinkled.',
    reviews: [
      {
        score: 5,
        opinion: 'very tasty',
      },
      {
        score: 5,
        opinion: 'you can make many different snacks',
      },
      {
        score: 5,
        opinion: 'fresh and crispy, I’ll buy it again',
      },
    ],
  },

  {
    brand: 'Brothers-All-Natural',
    name: 'Freeze Dried Fruit Crisps, Strawberry ',
    specifications: '12 single-serve bags, 7.5 g each',
    purpose: 'Healthy food.',
    images: [Img200503Front, Img200503Back],
    manufacturer: 'China',
    category: 'food',
    price: 30,
    productCode: '200503',
    description:
      'Our fruit crisps are an easy, convenient and fun way to eat your fruit. The perfect anytime snack!\n' +
      '\n' +
      'We start with delicious fruit, straight from the best growing regions of the world. It is then sent directly through our state-of-the-art Freeze-Dried process that gently removes the water from the fresh fruit, transforming it into a delightfully light, and flavorful Fruit Crisp. Nothing artificial, just fruit.',
    reviews: [
      {
        score: 4,
        opinion: 'my child didn’t like it',
      },
      {
        score: 5,
        opinion: 'I really love it’s snacks',
      },
      {
        score: 5,
        opinion: 'rich in vitamins and minerals, very tasty',
      },
    ],
  },

  {
    brand: 'Eden Foods',
    name: 'Organic Dried Cranberries',
    specifications: '113 g',
    purpose: 'Healthy food.',
    images: [Img200504Front, Img200504Back],
    manufacturer: 'Canada',
    category: 'food',
    price: 8,
    productCode: '200504',
    description:
      'Whole, dried, infused with organic apple juice concentrate, and misted with organic sunflower oil to prevent clumping. Grown in Québec. Exceptional purity and taste!',
    reviews: [
      {
        score: 5,
        opinion: 'good for a snack',
      },
      {
        score: 3,
        opinion: 'Bought as a gift, the packaging was wrinkled',
      },
    ],
  },

  {
    brand: 'Made in Nature',
    name: 'Organic Toasted Coconut Chips, Maple Vanilla Supersnacks',
    specifications: '85 g',
    purpose: 'Healthy food.',
    images: [Img200505Front, Img200505Back],
    manufacturer: 'USA',
    category: 'food',
    price: 11,
    productCode: '200505',
    description:
      'Our organic Maple Vanilla Coconut Chips are, without a doubt, one of the finest couplings of flavor in all the snacks in all the countries in all the world. Ever.',
    reviews: [
      {
        score: 3,
        opinion: 'tasteless, i didn’t like it',
      },
    ],
  },

  {
    brand: 'Barnana',
    name: 'Organic Banana Bites',
    specifications: '100 g',
    purpose: 'Healthy food.',
    images: [Img200506Front, Img200506Back],
    manufacturer: 'USA',
    category: 'food',
    price: 2,
    productCode: '200506',
    description:
      'Scuffed up, too ripe, oddly shaped - bananas are delicious in all their shapes and sizes.',
    reviews: [
      {
        score: 5,
        opinion: 'tasty and healthy',
      },
    ],
  },

  {
    brand: 'Noka',
    name: 'Superfood Smoothie + Prebiotic Fiber, Blueberry Beet',
    specifications: '120 g',
    purpose: 'Healthy food.',
    images: [Img200507Front, Img200507Back],
    manufacturer: 'USA',
    category: 'food',
    price: 1,
    productCode: '200507',
    description:
      'Purple colored foods pack powerful plant compounds, so we teamed up nutrient-dense blueberries, stamina-boosting beets and anti-aging Maqui Berry, a deep purple berry from South America, with plant protein and flax for a blend that’s as good for you as it is vibrant.',
    reviews: [
      {
        score: 5,
        opinion:
          'Yumm yummy Delicious taste and super convenient packaging. Size is perfect for a mid day pick me up snack. Still prefer to eat fresh fruits, but if you cant or are travelling about in your day. It’s great to keep in your bag and to add fruit in another way to your diet.',
      },
      {
        score: 5,
        opinion:
          'I love this as a post bike ride and post gym recovery snack. Great flavour and the perfect size fits perfectly in my cycling jersey and gym bag.',
      },
      {
        score: 5,
        opinion:
          'Excellent taste. Reminds me a high quality organic baby food from my childhood. Good nutrition facts, suitable for my meal plan to maintain higher intake of potassium.',
      },
    ],
  },

  {
    brand: 'Cetaphil',
    name: 'Daily Facial Cleanser',
    specifications: '237 ml',
    purpose: 'Facial care',
    images: [Img300501Front, Img300501Back],
    manufacturer: 'Canada',
    category: 'beauty',
    price: 12,
    productCode: '300501',
    description:
      "This deep cleansing, gentle foaming formula now with hydrating glycerin and B5 & B3, reinforces the skin's moisture barrier, balances skin and is clinically tested to remove dirt, excess oils and makeup without leaving skin dry or tight.",
    reviews: [
      {
        score: 5,
        opinion:
          'Wonderful product. Delivery speed is excellent. Really quality goods. The packaging is good. I love ordering here.',
      },
      {
        score: 5,
        opinion: 'It’s amazing, it works perfectly on my skin.',
      },
      {
        score: 3,
        opinion:
          'I’ve been using this for months but I wasnt happy with the quality of recent purchase! It look fine and all good but when i opened the bottle there are some brown weird I don’t know.',
      },
      {
        score: 2,
        opinion:
          'Its a good cleanser, but I was surprised to discover it has a scent and added fragrance!',
      },
      {
        score: 4,
        opinion:
          'I have a combination skin type and it’s amazing without drying off my face. I bought twice and would definitely buy it again. ',
      },
    ],
  },
  {
    brand: 'Cetaphil',
    name: 'Soothing Gel Cream with Aloe',
    specifications: '85 g',
    purpose: 'Body care',
    images: [Img300502Front, Img300502Back],
    manufacturer: 'USA',
    category: 'beauty',
    price: 11,
    productCode: '300502',
    description:
      'Cetaphil Soothing Gel-Cream with Aloe instantly soothes, hydrates and protects dry, irritated skin with Skin Protect Allantoin. This clinically proven formula with soothing aloe vera and a unique blend of moisturizers hydrates dry skin for a full 24 hours, while restorative allantoin protects sensitive skin from environmental aggressors like wind, cold and sun. This unique, gel-cream texture absorbs quickly to provide soothing relief from dryness that leaves skin feeling hydrated and healthy.',
    reviews: [
      {
        score: 5,
        opinion:
          'Good quality Good ingredient Scent good Good smell High care Good scent that easy use with high quality and full size 18 age no package with wow benefit and composition low sensitive and gentle low frequency concern High ingredient dosage',
      },
      {
        score: 5,
        opinion:
          'I live in a warm, sunny country so tend to have a lot of sunburns. this product helps my skin and has a gentle effect and refreshed my overall look.',
      },
      {
        score: 4,
        opinion: 'great quality product. it really works as intended',
      },
    ],
  },
  {
    brand: 'Cetaphil',
    name: 'Deep Hydration, Refreshing Eye Serum',
    specifications: '15 ml',
    purpose: 'Facial care',
    images: [Img300503Front, Img300503Back],
    manufacturer: 'Canada',
    category: 'beauty',
    price: 9,
    productCode: '300503',
    description:
      "Nourishes to deeply replenish skin's hydration around the eye area for 48 hours and improve the overall quality of sensitive skin. With over 70 years of sensitive skincare expertise, Cetaphil understands there is a dynamic hydration process within the skin which keeps it properly hydrated.",
    reviews: [
      {
        score: 4,
        opinion: 'this eye serum is good. hydrates well but very-veryyy expensive.',
      },
      {
        score: 5,
        opinion:
          'The cost it condiser too high but i think this brand soo good and gentle for skin',
      },
      {
        score: 4,
        opinion: 'it is very good for the eyes it mositurizes ur eyes keeping soft n bright',
      },
    ],
  },
  {
    brand: 'Bioderma',
    name: 'Atoderm, Ultra-Soothing Balm',
    specifications: '500 ml',
    purpose: 'Body care',
    images: [Img300504Front, Img300504Back],
    manufacturer: 'France',
    category: 'beauty',
    price: 40,
    productCode: '300504',
    description:
      'Specially formulated for skin prone to atopy, Atoderm Intensive baume (balm) rapidly soothes feelings of itching and reduces the urge to scratch with its anti-itching active ingredient PEA. Enriched with soothing agents, it calms irritations. Atoderm Intensive baume lastingly re-establishes an effective skin barrier with the exclusive LIPGENIUM™ technology. The patented SKIN BARRIER THERAPY™ complex limits adhesion of certain bacteria (Staphylococcus aureus) to the skin surface, which can aggravate skin dryness. Immediate adsorption to get dressed quickly. Very good tolerance. Tested under dermatological supervision. Clinically-proven efficacy on irritated to atopic skin.',
    reviews: [
      {
        score: 5,
        opinion:
          'This balm is so good for my atopic dermatitis. It helps very much with the itching.',
      },
      {
        score: 5,
        opinion: 'Send I use it every day. The quality is very nice',
      },
      {
        score: 5,
        opinion: 'it is very good for the eyes it mositurizes ur eyes keeping soft n bright',
      },
      {
        score: 4,
        opinion:
          'If you have extremely dry skin like I do, it is simply not emollient enough to give long lasting relief. But I think it is a well formulated cream for someone with normal to dry skin.',
      },
      {
        score: 5,
        opinion:
          'The product is perfect for all ages I use it everyday at morning and night the package is amazing it scented the size it is big the quality is good benefits and composition and no season for it is moisturize and texture and sensitivity',
      },
      {
        score: 5,
        opinion:
          'My wife have dry and sensitive skin. This was suggested by our dermatologist. This is a very good moisturizer. On regular apply on the skin heals the dry skin and itchiness.',
      },
    ],
  },
  {
    brand: 'Bioderma',
    name: 'Atoderm, Restorative Lip Balm',
    specifications: '15 ml',
    purpose: 'Lip care',
    images: [Img300505Front, Img300505Back],
    manufacturer: 'France',
    category: 'beauty',
    price: 10,
    productCode: '300505',
    description:
      " Atoderm Baume Levres (lip balm) durably moisturizes lips and isolates them from external stress. Enriched with nourishing active ingredients that replenish lipids, it instantly repairs and soothes damaged lips. The balm's rich texture provides extreme comfort. The applicator tip facilitates usage. Very good tolerance. Tested under dermatological supervision.",
    reviews: [
      {
        score: 5,
        opinion:
          'I am happy with the size and type of package. It is a nice product to have in my purse to keep my lips moisturized and hydrated.',
      },
      {
        score: 5,
        opinion:
          'Minimal the application, quick results, soothing feel and relief from dry chapped skin',
      },
      {
        score: 5,
        opinion:
          'I have very sensitive, very dry lips. I have tried so many products. My lips either break out or the product just doesn’t work. This Bioderma lip balm is wonderful.',
      },
    ],
  },
  {
    brand: 'Garnier',
    name: 'SkinActive, All-in-1 Micellar Cleansing Water, All Skin Types',
    specifications: '400 ml',
    purpose: 'Face care',
    images: [Img300506Front, Img300506Back],
    manufacturer: 'USA',
    category: 'beauty',
    price: 4,
    productCode: '300506',
    description:
      "Atoderm Baume Levres (lip balm) durably moisturizes lips and isolates them from external stress. Enriched with nourishing active ingredients that replenish lipids, it instantly repairs and soothes damaged lips. The balm's rich texture provides extreme comfort. The applicator tip facilitates usage. Very good tolerance. Tested under dermatological supervision.",
    reviews: [
      {
        score: 3,
        opinion:
          'I have oily acne-prone skin so I tried this but it makes my skin too dry. Not sure why but I can say that it is not good for my skin. So I stopped using it. I haven’t even used half of the bottle.',
      },
      {
        score: 5,
        opinion:
          'It cleanses very well! A nice and gentle make-up remover, easy to use and large in size. I use it every day in the evening to remove make-up',
      },
    ],
  },
  {
    brand: 'Eucerin',
    name: 'Skin Calming Itch Soothing Cream, Dry, Itchy Skin, Fragrance Free',
    specifications: '226 g',
    purpose: 'Body care',
    images: [Img300507Front, Img300507Back],
    manufacturer: 'Mexico',
    category: 'beauty',
    price: 7,
    productCode: '300507',
    description:
      "Eucerin with over 100 years of skin science innovation, offers a complete range of clinically proven solutions for specific skin needs, backed by a uncompromising commitment to quality. That's why Eucerin is recommended by Dermatologists worldwide.",
    reviews: [
      {
        score: 4,
        opinion: 'Pleasant smell and consistency, but not enough moisture for dry skin',
      },
      {
        score: 4,
        opinion: 'Good cream, but I had a better one',
      },
    ],
  },
];

export default products;
