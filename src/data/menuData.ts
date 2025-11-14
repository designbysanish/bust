import dashimakiPremium from '@/assets/menu/dashimaki-premium.jpg';
import teriyakiChicken from '@/assets/menu/teriyaki-chicken.jpg';
import threeColorDonburi from '@/assets/menu/three-color-donburi.jpg';
import mushroomUdon from '@/assets/menu/mushroom-udon.jpg';
import matchaPudding from '@/assets/menu/matcha-pudding.jpg';
import matchaLatte from '@/assets/menu/matcha-latte.jpg';
import takoyaki from '@/assets/menu/takoyaki.jpg';
import karaage from '@/assets/menu/karaage.jpg';
import edamame from '@/assets/menu/edamame.jpg';
import kimchi from '@/assets/menu/kimchi.jpg';
import onsenEggSalad from '@/assets/menu/onsen-egg-salad.jpg';
import tofuSalad from '@/assets/menu/tofu-salad.jpg';
import misoSoup from '@/assets/menu/miso-soup.jpg';
import seaBream from '@/assets/menu/sea-bream.jpg';
import chickenNanban from '@/assets/menu/chicken-nanban.jpg';
import gingerBeef from '@/assets/menu/ginger-beef.jpg';
import nikujaga from '@/assets/menu/nikujaga.jpg';
import misoMackerel from '@/assets/menu/miso-mackerel.jpg';
import seafoodDonburi from '@/assets/menu/seafood-donburi.jpg';
import oyakodon from '@/assets/menu/oyakodon.jpg';
import katsuCurry from '@/assets/menu/katsu-curry.jpg';
import inariSushi from '@/assets/menu/inari-sushi.jpg';
import onigiri from '@/assets/menu/onigiri.jpg';
import matchaSoba from '@/assets/menu/matcha-soba.jpg';
import shoyuRamen from '@/assets/menu/shoyu-ramen.jpg';
import kimpira from '@/assets/menu/kimpira.jpg';
import mochiIceCream from '@/assets/menu/mochi-ice-cream.jpg';
import taiyaki from '@/assets/menu/taiyaki.jpg';
import hojichaLatte from '@/assets/menu/hojicha-latte.jpg';

export interface MenuItem {
  id: string;
  nameJp: string;
  nameEn: string;
  description: string;
  price: string;
  category: string;
  image?: string;
  detailedDescription?: string;
}

export const menuItems: MenuItem[] = [
  // Chef's Special
  { id: 'dashimaki-premium', nameJp: 'シェフの出汁巻き卵', nameEn: 'Premium Dashimaki Omelette', description: "Chef's signature Japanese rolled omelette made with premium dashi broth, creating layers of delicate, savory perfection.", price: '69', category: "Chef's Special", image: dashimakiPremium, detailedDescription: "Our premium dashimaki is a masterpiece of Japanese culinary art. Chef Takumi uses a secret dashi blend passed down through generations, combining bonito, kombu, and shiitake to create an umami-rich broth that's folded into each layer of this silky omelette." },
  { id: 'teriyaki-chicken-special', nameJp: '鶏の照り焼き', nameEn: 'Teriyaki Roasted Chicken', description: 'Succulent roasted chicken glazed with our house-made teriyaki sauce. Add rice +5 AED, miso soup +5 AED', price: '69', category: "Chef's Special", image: teriyakiChicken, detailedDescription: "Tender chicken thighs marinated for 24 hours in our signature teriyaki blend of soy sauce, mirin, sake, and ginger. Roasted to perfection with a glossy caramelized glaze." },
  { id: 'three-color-donburi-special', nameJp: '三色丼', nameEn: 'Three-Color Donburi Rice Bowl', description: 'A vibrant bowl featuring three distinct flavors and colors. Add rice +5 AED, miso soup +5 AED', price: '79', category: "Chef's Special", image: threeColorDonburi, detailedDescription: "A beautiful harmony of seasoned ground chicken, scrambled eggs with sweet soy, and fresh green vegetables over perfectly steamed rice. Each color represents a unique flavor profile." },
  { id: 'mushroom-udon-special', nameJp: '茸うどん', nameEn: 'Mushroom Udon with Yuzu Citrus', description: 'Hearty udon noodles in a rich mushroom broth, finished with aromatic yuzu citrus.', price: '69', category: "Chef's Special", image: mushroomUdon, detailedDescription: "Five varieties of premium mushrooms simmered in a delicate dashi broth, served with thick, chewy udon noodles. The bright yuzu zest adds a refreshing citrus note." },
  { id: 'matcha-pudding-special', nameJp: 'シェフの本気の抹茶プリン', nameEn: "Chef's Signature Matcha Pudding", description: "Our chef's most serious dessert creation - velvety matcha pudding with layers of flavor.", price: '49', category: "Chef's Special", image: matchaPudding, detailedDescription: "Made with ceremonial-grade matcha from Uji, Kyoto. This isn't just a dessert - it's Chef Takumi's meditation on the perfect balance of bitter, sweet, and creamy." },
  { id: 'matcha-latte-special', nameJp: 'プレミアム抹茶ラテ', nameEn: 'Premium Matcha Latte by Matcha Oasis', description: 'Premium matcha latte crafted with authentic Japanese matcha powder.', price: '45', category: "Chef's Special", image: matchaLatte, detailedDescription: "Using premium matcha from Matcha Oasis, this latte features stone-ground ceremonial matcha whisked to perfection with steamed milk." },
  
  // Starters
  { id: 'takoyaki', nameJp: 'たこ焼き', nameEn: 'Takoyaki Octopus Bowl', description: 'Crispy outside, creamy inside - traditional Osaka street food with tender octopus.', price: '39', category: 'Starters', image: takoyaki, detailedDescription: "Authentic takoyaki made with a special batter, real octopus chunks, and topped with takoyaki sauce, Japanese mayo, bonito flakes, and aonori seaweed." },
  { id: 'dashimaki-standard', nameJp: 'だし巻き卵', nameEn: 'Dashimaki Japanese Omelette', description: 'Traditional Japanese rolled omelette with dashi broth.', price: '49', category: 'Starters', image: dashimakiPremium, detailedDescription: "A lighter version of our premium dashimaki, still featuring the perfect balance of eggs and dashi in every fluffy bite." },
  { id: 'karaage', nameJp: '鶏の唐揚げ', nameEn: 'Karaage Japanese Fried Chicken', description: 'Crispy, juicy Japanese-style fried chicken. Add rice +5 AED, miso soup +5 AED', price: '69', category: 'Starters', image: karaage, detailedDescription: "Double-fried chicken marinated in soy sauce, sake, ginger, and garlic. Crispy on the outside, incredibly juicy inside." },
  { id: 'edamame', nameJp: '枝豆', nameEn: 'Edamame Beans with Premium Salt', description: 'Steamed young soybeans with premium sea salt - simple, healthy, delicious.', price: '35', category: 'Starters', image: edamame, detailedDescription: "Fresh edamame steamed to perfection and finished with flaky sea salt. A perfect light starter." },
  { id: 'kimchi', nameJp: '手作りキムチ', nameEn: 'Authentic Korean Kimchi', description: 'House-made fermented Korean kimchi. Add rice +5 AED, miso soup +5 AED', price: '35', category: 'Starters', image: kimchi, detailedDescription: "Our kimchi is fermented in-house using traditional methods. Spicy, tangy, and full of probiotics." },
  
  // Salads
  { id: 'onsen-egg-salad', nameJp: '温泉卵のサラダ', nameEn: 'Onsen Egg Salad', description: 'Fresh greens topped with a perfectly soft-cooked onsen egg.', price: '59', category: 'Salads', image: onsenEggSalad, detailedDescription: "Crisp mixed greens with our house sesame dressing, topped with a 63-degree onsen egg that oozes golden yolk when broken." },
  { id: 'tofu-salad', nameJp: '豆腐のサラダ', nameEn: 'Tofu Salad', description: 'Silken tofu on a bed of fresh vegetables with Japanese dressing.', price: '59', category: 'Salads', image: tofuSalad, detailedDescription: "Creamy silken tofu paired with crisp vegetables and our signature wafu dressing made with soy, rice vinegar, and sesame oil." },
  
  // Soups
  { id: 'miso-soup', nameJp: '豆腐とわかめのお味噌汁', nameEn: 'Miso Soup with Tofu & Seaweed', description: 'Traditional miso soup with tofu and wakame. Add rice +5 AED', price: '29', category: 'Soups', image: misoSoup, detailedDescription: "Our miso soup is made fresh daily with white miso, dashi, silken tofu, and nutrient-rich wakame seaweed." },
  
  // Main Dishes
  { id: 'sea-bream', nameJp: '鯛の煮付け', nameEn: 'Nitsuke Simmered Sea Bream in Soy Sauce', description: 'Tender sea bream simmered in a sweet soy glaze. Add rice +5 AED, miso soup +5 AED', price: '79', category: 'Main', image: seaBream, detailedDescription: "Fresh sea bream simmered in our special nitsuke sauce made with soy, mirin, sake, and ginger until the fish is tender and the sauce is rich." },
  { id: 'chicken-nanban', nameJp: '自家製タルタルのチキン南蛮', nameEn: 'Chicken Nanban with Homemade Tartar Sauce', description: 'Crispy fried chicken with tangy sauce and creamy house-made tartar. Add rice +5 AED, miso soup +5 AED', price: '85', category: 'Main', image: chickenNanban, detailedDescription: "Tender chicken fried to golden perfection, dipped in sweet vinegar sauce, and topped with our rich homemade tartar sauce." },
  { id: 'ginger-beef', nameJp: '牛肉生姜焼き', nameEn: 'Stir Fried Ginger Beef', description: 'Tender beef stir-fried with fresh ginger and soy. Add rice +5 AED, miso soup +5 AED', price: '79', category: 'Main', image: gingerBeef, detailedDescription: "Thinly sliced beef quickly stir-fried with fresh grated ginger, soy sauce, and mirin. A classic Japanese home-style dish." },
  { id: 'teriyaki-chicken', nameJp: '鶏の照り焼き', nameEn: 'Teriyaki Roasted Chicken', description: 'Juicy roasted chicken with glossy teriyaki glaze. Add rice +5 AED, miso soup +5 AED', price: '69', category: 'Main', image: teriyakiChicken, detailedDescription: "Succulent chicken thighs roasted and glazed with our signature teriyaki sauce." },
  { id: 'nikujaga', nameJp: '肉じゃが', nameEn: 'Nikujaga Simmered Beef & Potato Stew', description: 'Hearty Japanese comfort food - beef and potatoes in sweet soy. Add rice +5 AED, miso soup +5 AED', price: '89', category: 'Main', image: nikujaga, detailedDescription: "A beloved Japanese home-style dish of thinly sliced beef, potatoes, onions, and carrots simmered in a sweet-savory broth." },
  { id: 'miso-mackerel', nameJp: '鯖の味噌煮', nameEn: 'Miso Simmered Mackerel', description: 'Fresh mackerel simmered in rich miso sauce. Add rice +5 AED, miso soup +5 AED', price: '79', category: 'Main', image: misoMackerel, detailedDescription: "Fatty mackerel simmered in a thick miso-based sauce with ginger to balance the richness of the fish." },
  
  // Rice Bowls
  { id: 'seafood-donburi', nameJp: '本日の海鮮丼', nameEn: "Today's Fresh Seafood Rice Bowl", description: 'Daily selection of the freshest seafood over sushi rice. Limited to 5 servings. Add miso soup +5 AED', price: '129', category: 'Rice', image: seafoodDonburi, detailedDescription: "Our chef selects the best catches of the day - typically featuring premium tuna, salmon, sweet shrimp, scallops, and ikura over seasoned sushi rice." },
  { id: 'oyakodon', nameJp: '親子丼', nameEn: 'Oyakodon Chicken & Egg Rice Bowl', description: 'The classic "parent and child" bowl - chicken and egg over rice. Add miso soup +5 AED', price: '69', category: 'Rice', image: oyakodon, detailedDescription: "Tender chicken and onions simmered in dashi and soy, then bound with fluffy beaten eggs and served over steaming rice." },
  { id: 'three-color-donburi', nameJp: '三色丼', nameEn: 'Tri-Color Donburi Rice Bowl', description: 'Three distinct flavors in one beautiful bowl. Add miso soup +5 AED', price: '79', category: 'Rice', image: threeColorDonburi, detailedDescription: "Seasoned ground chicken, sweet scrambled eggs, and vibrant green vegetables create a visually stunning and delicious bowl." },
  { id: 'katsu-curry', nameJp: 'カツカレー', nameEn: 'Curry Rice with Beef Cutlet', description: 'Crispy beef cutlet over rice with rich Japanese curry. Add miso soup +5 AED', price: '89', category: 'Rice', image: katsuCurry, detailedDescription: "Panko-crusted beef cutlet served with our rich, slightly sweet Japanese curry sauce over rice." },
  { id: 'inari-sushi', nameJp: '稲荷寿司', nameEn: 'Inari Sushi Sweet Tofu Pouch', description: 'Sushi rice in sweet fried tofu pouches. Add miso soup +5 AED', price: '59', category: 'Rice', image: inariSushi, detailedDescription: "Seasoned sushi rice nestled in sweet and savory fried tofu pouches - a beloved traditional snack." },
  
  // Onigiri
  { id: 'onigiri-ume', nameJp: 'おにぎり 梅', nameEn: 'Onigiri Rice Bowl Ume Plum', description: 'Rice ball with pickled plum center. Add miso soup +5 AED', price: '29', category: 'Onigiri Rice Bowl', image: onigiri, detailedDescription: "Hand-formed rice ball with a tangy umeboshi center, wrapped in crisp nori seaweed." },
  { id: 'onigiri-kombu', nameJp: 'おにぎり 昆布', nameEn: 'Onigiri Rice Bowl Kombu Seaweed', description: 'Rice ball with seasoned kelp. Add miso soup +5 AED', price: '29', category: 'Onigiri Rice Bowl', image: onigiri, detailedDescription: "Rice ball filled with savory kombu kelp simmered in soy sauce." },
  { id: 'onigiri-wakame', nameJp: 'おにぎり 若芽', nameEn: 'Onigiri Rice Bowl Wakame Seaweed', description: 'Rice ball with seasoned wakame. Add miso soup +5 AED', price: '29', category: 'Onigiri Rice Bowl', image: onigiri, detailedDescription: "Light and fresh rice ball with seasoned wakame seaweed mixed into the rice." },
  { id: 'onigiri-tarako', nameJp: 'おにぎり 明太子', nameEn: 'Onigiri Rice Bowl Japanese Tarako Caviar', description: 'Rice ball with spicy cod roe. Add miso soup +5 AED', price: '29', category: 'Onigiri Rice Bowl', image: onigiri, detailedDescription: "Rice ball with creamy, spicy mentaiko (cod roe) for an umami explosion." },
  
  // Noodles
  { id: 'mushroom-udon', nameJp: '茸うどん・そば', nameEn: 'Traditional Vegetable Noodle', description: 'Choice of udon or soba with vegetables. Soba +5 AED', price: '69', category: 'Noodles', image: mushroomUdon, detailedDescription: "Thick udon or buckwheat soba noodles in a light dashi broth with seasonal vegetables." },
  { id: 'matcha-soba', nameJp: '抹茶そば', nameEn: 'Matcha Soba Noodle', description: 'Buckwheat noodles infused with matcha green tea.', price: '69', category: 'Noodles', image: matchaSoba, detailedDescription: "Handmade buckwheat noodles colored and flavored with premium matcha powder, served chilled or hot." },
  { id: 'shoyu-ramen', nameJp: '醤油ラーメン', nameEn: 'Shoyu Ramen Soy Sauce & Beef Broth', description: 'Classic soy sauce ramen with rich beef broth.', price: '79', category: 'Noodles', image: shoyuRamen, detailedDescription: "Springy ramen noodles in a clear soy-based broth made from beef bones, topped with chashu, menma, and negi." },
  
  // Sides
  { id: 'kimpira', nameJp: '蓮根の金平', nameEn: 'Kimpira Stir-Fried Lotus Root with Carrot', description: 'Crispy lotus root and carrots stir-fried with sesame.', price: '45', category: 'Side', image: kimpira, detailedDescription: "Crunchy lotus root and carrots stir-fried in soy sauce, mirin, and sesame oil - a classic Japanese side dish." },
  
  // Desserts
  { id: 'mochi-ice-cream', nameJp: 'アイスクリーム大福', nameEn: 'Mochi Ice Cream Daifuku', description: 'Ice cream wrapped in soft mochi. Choice of Matcha, Raspberry, or Tiramisu.', price: '39', category: 'Dessert', image: mochiIceCream, detailedDescription: "Creamy ice cream encased in soft, pillowy mochi rice cake. Choose from matcha, raspberry, or tiramisu flavors." },
  { id: 'taiyaki', nameJp: 'ミニたい焼き', nameEn: 'Taiyaki Fish-Shaped Small Pancake', description: 'Cute fish-shaped pancakes filled with sweet red bean. 3 pieces.', price: '45', category: 'Dessert', image: taiyaki, detailedDescription: "Adorable fish-shaped pancakes with crispy exteriors and sweet anko (red bean paste) filling." },
  { id: 'matcha-pudding', nameJp: 'シェフの本気の抹茶プリン', nameEn: "Chef's Signature Matcha Pudding", description: 'Silky matcha pudding - the chef takes this seriously.', price: '49', category: 'Dessert', image: matchaPudding, detailedDescription: "Made with ceremonial-grade matcha from Uji. Layers of matcha pudding, sweet cream, and black sugar syrup." },
  
  // Beverages
  { id: 'matcha-latte', nameJp: 'プレミアム抹茶ラテ', nameEn: 'Matcha Latte Premium by Matcha Oasis', description: 'Premium matcha latte, served hot or iced.', price: '45', category: 'Beverages', image: matchaLatte, detailedDescription: "Stone-ground ceremonial matcha whisked with steamed milk for a perfectly balanced, vibrant green latte." },
  { id: 'hojicha-latte', nameJp: 'プレミアム焙じ茶ラテ', nameEn: 'Hojicha Latte Premium by Matcha Oasis', description: 'Roasted green tea latte, served hot or iced.', price: '39', category: 'Beverages', image: hojichaLatte, detailedDescription: "Roasted hojicha tea creates a naturally sweet, caramel-like flavor when combined with steamed milk." },
];

export const getMenuItemById = (id: string): MenuItem | undefined => {
  return menuItems.find(item => item.id === id);
};

export const getMenuItemsByCategory = (category: string): MenuItem[] => {
  return menuItems.filter(item => item.category === category);
};

export const getAllCategories = (): string[] => {
  const categories = new Set(menuItems.map(item => item.category));
  return Array.from(categories);
};