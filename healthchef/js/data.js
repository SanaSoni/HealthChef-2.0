/**
 * HealthChef Clinical Nutrition Database & Knowledge Base
 * Authentic Indian Culinary, Ayurvedic Nuske, Disease Adaptations & Micronutrient references
 */

// 1. Common Indian Dishes Nutritional Database (for instant auto-recalculation when meal names are edited)
const FOOD_NUTRITION_DATABASE = {
  // Breakfast items
  "oats porridge with chia": { calories: 260, protein: 9, carbs: 42, fat: 5, fiber: 7, iron: 3.2, calcium: 120, sodium: 80 },
  "ragi dosa with mint chutney": { calories: 210, protein: 6, carbs: 38, fat: 4, fiber: 6, iron: 4.5, calcium: 340, sodium: 180 },
  "oats & vegetable upma": { calories: 230, protein: 7, carbs: 36, fat: 6, fiber: 5, iron: 2.8, calcium: 65, sodium: 220 },
  "sprouted moong chilla": { calories: 195, protein: 12, carbs: 28, fat: 3, fiber: 7, iron: 3.8, calcium: 80, sodium: 190 },
  "poha with peas and peanuts": { calories: 280, protein: 7, carbs: 48, fat: 8, fiber: 4, iron: 2.9, calcium: 50, sodium: 240 },
  "steamed idli with sambar": { calories: 240, protein: 8, carbs: 46, fat: 3, fiber: 5, iron: 2.1, calcium: 90, sodium: 260 },
  "besan chilla with paneer": { calories: 270, protein: 14, carbs: 26, fat: 10, fiber: 5, iron: 2.5, calcium: 180, sodium: 230 },
  "methi thepla with curd": { calories: 250, protein: 8, carbs: 35, fat: 8, fiber: 4, iron: 3.1, calcium: 160, sodium: 210 },
  "masala omelette with whole wheat toast": { calories: 310, protein: 18, carbs: 24, fat: 14, fiber: 4, iron: 3.0, calcium: 110, sodium: 320 },
  "egg white bhurji with multigrain roti": { calories: 230, protein: 17, carbs: 28, fat: 5, fiber: 5, iron: 2.4, calcium: 70, sodium: 250 },
  "paneer paratha with dahi": { calories: 380, protein: 16, carbs: 44, fat: 16, fiber: 4, iron: 2.2, calcium: 290, sodium: 310 },
  "aloo paratha with butter": { calories: 420, protein: 8, carbs: 58, fat: 18, fiber: 5, iron: 2.4, calcium: 60, sodium: 380 },
  "protein pesarattu with ginger chutney": { calories: 240, protein: 14, carbs: 34, fat: 4, fiber: 8, iron: 4.1, calcium: 95, sodium: 200 },

  // Lunch items
  "dal tadka with brown rice": { calories: 420, protein: 16, carbs: 68, fat: 8, fiber: 9, iron: 4.6, calcium: 110, sodium: 340 },
  "palak paneer with missi roti": { calories: 440, protein: 20, carbs: 46, fat: 18, fiber: 8, iron: 6.2, calcium: 420, sodium: 360 },
  "lauki moong dal with bajra roti": { calories: 360, protein: 15, carbs: 54, fat: 7, fiber: 11, iron: 5.4, calcium: 140, sodium: 240 },
  "rajma masala with steamed quinoa": { calories: 430, protein: 19, carbs: 66, fat: 8, fiber: 13, iron: 5.8, calcium: 130, sodium: 320 },
  "chole with brown rice": { calories: 460, protein: 18, carbs: 72, fat: 9, fiber: 12, iron: 5.2, calcium: 150, sodium: 370 },
  "grilled chicken breast with sautéed veggies": { calories: 390, protein: 36, carbs: 16, fat: 12, fiber: 5, iron: 2.7, calcium: 85, sodium: 290 },
  "fish curry with steamed brown rice": { calories: 410, protein: 30, carbs: 50, fat: 10, fiber: 4, iron: 2.9, calcium: 140, sodium: 330 },
  "south indian curd rice with pomegranate": { calories: 320, protein: 8, carbs: 52, fat: 7, fiber: 3, iron: 1.2, calcium: 220, sodium: 210 },
  "tomato rasam with foxtail millet": { calories: 290, protein: 8, carbs: 54, fat: 4, fiber: 7, iron: 3.8, calcium: 75, sodium: 280 },
  "air-fried methi puri with kala chana": { calories: 420, protein: 17, carbs: 62, fat: 9, fiber: 12, iron: 6.1, calcium: 160, sodium: 290 },
  "tofu tikka masala with multigrain phulka": { calories: 380, protein: 22, carbs: 42, fat: 12, fiber: 9, iron: 5.9, calcium: 380, sodium: 310 },
  "dal makhani with brown rice": { calories: 490, protein: 17, carbs: 64, fat: 16, fiber: 10, iron: 4.8, calcium: 190, sodium: 410 },

  // Evening Snack items
  "roasted makhana with turmeric": { calories: 140, protein: 4, carbs: 24, fat: 3, fiber: 3, iron: 1.9, calcium: 60, sodium: 95 },
  "boiled chana chaat": { calories: 180, protein: 9, carbs: 28, fat: 3, fiber: 7, iron: 3.4, calcium: 70, sodium: 160 },
  "sprout salad with lemon and seeds": { calories: 150, protein: 8, carbs: 22, fat: 3, fiber: 6, iron: 2.8, calcium: 65, sodium: 110 },
  "masala roasted paneer cubes": { calories: 190, protein: 12, carbs: 4, fat: 14, fiber: 1, iron: 0.9, calcium: 280, sodium: 180 },
  "steamed dhokla with green chutney": { calories: 170, protein: 6, carbs: 28, fat: 4, fiber: 3, iron: 1.6, calcium: 40, sodium: 290 },
  "green tea with walnuts and almonds": { calories: 160, protein: 5, carbs: 6, fat: 14, fiber: 3, iron: 1.4, calcium: 75, sodium: 10 },
  "cucumber and tomato sandwich (brown bread)": { calories: 180, protein: 6, carbs: 32, fat: 3, fiber: 5, iron: 2.1, calcium: 60, sodium: 230 },

  // Dinner items
  "khichdi with moong dal and ghee (1 tsp)": { calories: 340, protein: 13, carbs: 56, fat: 6, fiber: 7, iron: 3.8, calcium: 85, sodium: 250 },
  "mixed vegetable soup with tofu": { calories: 220, protein: 14, carbs: 18, fat: 8, fiber: 6, iron: 4.2, calcium: 240, sodium: 280 },
  "grilled paneer salad with pumpkin seeds": { calories: 310, protein: 18, carbs: 14, fat: 19, fiber: 4, iron: 2.6, calcium: 360, sodium: 220 },
  "palak soup with roasted chickpeas": { calories: 230, protein: 11, carbs: 30, fat: 5, fiber: 8, iron: 5.5, calcium: 190, sodium: 240 },
  "baked fish tikka with steamed broccoli": { calories: 290, protein: 32, carbs: 10, fat: 9, fiber: 4, iron: 2.1, calcium: 95, sodium: 270 },
  "bottle gourd (lauki) sabzi with 2 phulkas": { calories: 280, protein: 8, carbs: 48, fat: 5, fiber: 7, iron: 3.2, calcium: 90, sodium: 210 },
  "methi dal with jowar roti": { calories: 350, protein: 14, carbs: 58, fat: 5, fiber: 10, iron: 5.8, calcium: 180, sodium: 230 },
  "egg curry (light gravy) with 2 rotis": { calories: 360, protein: 18, carbs: 38, fat: 14, fiber: 5, iron: 3.4, calcium: 110, sodium: 330 }
};

// 2. Smart Ingredient Substitutions Database
const INGREDIENT_SUBSTITUTIONS = {
  "paneer": [
    { replacement: "Organic Firm Tofu", benefit: "Zero cholesterol, lower saturated fats, 40% fewer calories, high plant protein", condition: "High Cholesterol, Weight Loss" },
    { replacement: "Sprouted Moong Mash", benefit: "Rich in enzymes, high fiber, very low glycemic index", condition: "Diabetes, Fatty Liver" }
  ],
  "white rice": [
    { replacement: "Foxtail Millet (Kangni)", benefit: "Low GI (54 vs 78), rich in B vitamins and magnesium, slower glucose release", condition: "Diabetes, PCOS" },
    { replacement: "Brown Rice", benefit: "Retains bran and germ layer, 3x dietary fiber, promotes bowel motility", condition: "High Cholesterol, Weight Loss" },
    { replacement: "Cauliflower Rice", benefit: "Ultra low carb (<5g per serving), ideal for aggressive weight loss", condition: "Weight Loss, Diabetes" }
  ],
  "maida": [
    { replacement: "Rolled Oats Flour + Besan (1:1)", benefit: "Eliminates refined spikes, soluble beta-glucan binds to cholesterol", condition: "High Cholesterol, Diabetes" },
    { replacement: "Multigrain Sprouted Atta", benefit: "High resistant starch, rich in dietary fiber and B-complex vitamins", condition: "General Health, PCOS" }
  ],
  "deep frying / oil": [
    { replacement: "Air Fryer Crisp (200°C, 10 min)", benefit: "Reduces fat content by 80-85%, zero trans fats formation", condition: "High Cholesterol, Hypertension, Weight Loss" },
    { replacement: "Cast-Iron Tawa Roasting with 1 tsp Cold-Pressed Mustard Oil", benefit: "Retains MUFA & PUFA ratio without lipid peroxidation", condition: "Cardiac Health" }
  ],
  "table salt": [
    { replacement: "Sendha Namak (Himalayan Pink Salt)", benefit: "Rich in trace minerals (84+ minerals), gentle on kidney electrolyte balance", condition: "Hypertension, Water Retention" },
    { replacement: "Lemon Juice & Roasted Cumin Seasoning", benefit: "Provides zesty flavor naturally without raising vascular sodium tension", condition: "Severe Hypertension, Kidney Health" }
  ],
  "sugar": [
    { replacement: "Stevia Leaves Extract / Cinnamon Powder", benefit: "Zero caloric impact, cinnamon helps improve insulin sensitivity", condition: "Diabetes, PCOS, Weight Loss" },
    { replacement: "Soaked Anjeer (Fig) Paste", benefit: "Natural sweetness with high fiber and natural iron boost", condition: "Anemia, Sweet Cravings" }
  ],
  "whole milk": [
    { replacement: "Unsweetened Almond Milk", benefit: "70% fewer calories, zero cholesterol, enriched with natural Vitamin E", condition: "High Cholesterol, Lactose Sensitivity" },
    { replacement: "A2 Desi Cow Double-Toned Milk", benefit: "Easier beta-casein digestion, reduced digestive bloating", condition: "GERD, Digestive Health" }
  ],
  "potatoes": [
    { replacement: "Boiled Sweet Potato (Shakarkandi)", benefit: "Complex carbohydrates, rich in Vitamin A (beta-carotene), low GI", condition: "Diabetes, Weight Loss" },
    { replacement: "Green Raw Banana (Kaccha Kela)", benefit: "Resistant starch nourishes gut microbiome, zero sugar spike", condition: "Diabetes, PCOS, Gut Health" }
  ],
  "spinach": [
    { replacement: "Methi Leaves (Fenugreek)", benefit: "Trigonelline & galactomannan slow carbohydrate absorption significantly", condition: "Diabetes, High Cholesterol" },
    { replacement: "Moringa / Drumstick Leaves", benefit: "7x more Vitamin C than oranges, 3x iron than spinach, powerful anti-inflammatory", condition: "Anemia, PCOS, Immunity" }
  ]
};

// 3. Clinical AI Recipe Catalog (Multi-Option, Disease-Aware, Cuisines & Meal Types)
const CLINICAL_RECIPE_CATALOG = [
  // --- SOUTH INDIAN BREAKFAST ---
  {
    id: "sib-1",
    name: "Crispy Ragi & Methi Dosa with Coconut-Flaxseed Chutney",
    mealType: "breakfast",
    cuisine: "south indian",
    calorieCategory: "low",
    calories: 220,
    protein: 7,
    carbs: 38,
    fat: 4,
    fiber: 8,
    iron: 4.8,
    calcium: 360,
    sodium: 160,
    cookingTime: 20,
    tags: ["Diabetes Safe", "High Calcium", "Cholesterol Friendly", "Gluten Free"],
    conditionsSafe: ["Diabetes", "High Cholesterol", "Anemia", "PCOS", "Hypertension"],
    dietType: ["Vegetarian", "Vegan", "Jain"],
    ingredients: [
      { name: "Finger Millet (Ragi) Flour", qty: "1/2 cup", swapKey: "maida" },
      { name: "Fresh Fenugreek (Methi) Leaves", qty: "1/4 cup chopped", swapKey: "spinach" },
      { name: "Flaxseed Powder", qty: "1 tbsp", swapKey: null },
      { name: "Fresh Coconut & Green Chili", qty: "2 tbsp", swapKey: null },
      { name: "Sendha Namak", qty: "1/4 tsp", swapKey: "table salt" },
      { name: "Cold Pressed Sesame Oil", qty: "1/2 tsp", swapKey: "deep frying / oil" }
    ],
    diseaseAdaptation: "Ragi provides slow-release complex carbs with phenomenal calcium. Methi leaves control postprandial glucose spike; flaxseeds provide plant omega-3 for arterial health.",
    stepsEnglish: [
      "Whisk ragi flour with water, rock salt, and chopped methi leaves into a smooth pouring batter of crepe consistency.",
      "Heat a cast-iron tawa on medium flame and wipe with a drop of sesame oil.",
      "Pour a ladleful of batter and spread gently in concentric circles from inside out.",
      "Cover and cook for 2 minutes on low flame until edges naturally crisp up; flip for 30 seconds.",
      "Blend grated fresh coconut, roasted chana, flaxseed powder, and green chili with water for a heart-healthy chutney.",
      "Serve warm with fresh mint and enjoy your low-glycemic, calcium-packed breakfast."
    ],
    stepsHinglish: [
      "Ek bowl me ragi aata, sendha namak, aur bareek kati methi ko paani ke saath acche se ghol kar patla dosa batter banayein.",
      "Cast-iron tawa ko medium aanch par garam karein aur adha chammach sesame oil lagakar wipe karein.",
      "Ek karchi batter tawa ke beech me daalein aur gol-gol ghumate hue crispy dosa banayein.",
      "Dhakkar 2 minute pakne dein jab tak kinaare tawa na chhodne lagein, fir halka sa palat dein.",
      "Nariyal, roasted chana, flaxseed powder aur hari mirch ko blend karke dil ke liye healthy chutney banayein.",
      "Garma-garam ragi dosa ko chutney ke saath bina kisi guilt ke serve karein."
    ]
  },
  {
    id: "sib-2",
    name: "Protein Pesarattu (Whole Green Moong Dosa) with Ginger Allam",
    mealType: "breakfast",
    cuisine: "south indian",
    calorieCategory: "balanced",
    calories: 250,
    protein: 15,
    carbs: 34,
    fat: 5,
    fiber: 9,
    iron: 4.1,
    calcium: 90,
    sodium: 170,
    cookingTime: 25,
    tags: ["High Protein", "PCOS Friendly", "Diabetes Safe", "Gut Health"],
    conditionsSafe: ["Diabetes", "PCOS", "High Cholesterol", "Fatty Liver"],
    dietType: ["Vegetarian", "Vegan", "Jain"],
    ingredients: [
      { name: "Soaked Green Moong Dal", qty: "1 cup", swapKey: "white rice" },
      { name: "Fresh Ginger & Cumin Seeds", qty: "1 inch + 1 tsp", swapKey: null },
      { name: "Green Chilies & Hing", qty: "1 pinch", swapKey: null },
      { name: "Sendha Namak", qty: "1/4 tsp", swapKey: "table salt" },
      { name: "Cold-Pressed Peanut Oil", qty: "1/2 tsp", swapKey: "deep frying / oil" }
    ],
    diseaseAdaptation: "Zero fermented white rice. Whole green moong provides 15g clean vegan protein, high resistant fiber, and low glycemic load ideal for insulin resistance.",
    stepsEnglish: [
      "Grind soaked green gram with fresh ginger, green chilies, cumin seeds, and a pinch of hing into a thick, smooth batter.",
      "Season with rock salt and allow batter to rest for 5 minutes.",
      "Grease a hot skillet lightly and spread a ladle of batter thinly.",
      "Sprinkle finely chopped shallots or ginger on top and press gently with spatula.",
      "Drizzle 1/2 tsp oil around edges and roast until golden brown and crisp.",
      "Fold and serve hot with digestive ginger-tamarind allam chutney."
    ],
    stepsHinglish: [
      "Bheege hue sabut moong ko adrak, hari mirch, jeera aur ek chutki hing ke saath grinder me pees lein.",
      "Sendha namak milayein aur 5 minute ke liye batter ko rest karne dein.",
      "Tawa garam karein aur adha chammach tel laga kar patla pesarattu failayein.",
      "Upar se thoda bareek kata adrak ya pyaz daalkar halka dabayein.",
      "Dono taraf se sunhera aur kurkura sek lein.",
      "Garma-garam pesarattu ko adrak wali swadisht allam chutney ke saath enjoy karein."
    ]
  },
  {
    id: "sib-3",
    name: "Steamed Vegetable Oats Idli with Drumstick Sambar",
    mealType: "breakfast",
    cuisine: "south indian",
    calorieCategory: "low",
    calories: 210,
    protein: 8,
    carbs: 36,
    fat: 3,
    fiber: 7,
    iron: 2.8,
    calcium: 110,
    sodium: 210,
    cookingTime: 20,
    tags: ["Heart Healthy", "High Fiber", "Zero Oil Steamed", "Low Sodium"],
    conditionsSafe: ["High Cholesterol", "Hypertension", "Diabetes", "GERD"],
    dietType: ["Vegetarian", "Jain"],
    ingredients: [
      { name: "Roasted Rolled Oats Flour", qty: "3/4 cup", swapKey: "maida" },
      { name: "Low-fat Curd", qty: "1/2 cup", swapKey: "whole milk" },
      { name: "Grated Carrots & French Beans", qty: "1/3 cup", swapKey: null },
      { name: "Mustard Seeds & Curry Leaves", qty: "1 tsp", swapKey: null },
      { name: "Eno / Fruit Salt", qty: "1/4 tsp", swapKey: null }
    ],
    diseaseAdaptation: "100% steamed zero-oil breakfast. Rolled oats provide beta-glucan fiber to scrub LDL cholesterol, and drumsticks provide potassium to counter hypertension.",
    stepsEnglish: [
      "Dry roast oats until fragrant, cool, and blend into a coarse powder.",
      "Mix powdered oats with low-fat curd, grated carrots, beans, and fresh curry leaves.",
      "Let the batter sit for 8 minutes to absorb moisture; stir in fruit salt just before steaming.",
      "Pour into lightly greased idli molds and steam on high for 10-12 minutes.",
      "Check with a toothpick; when it emerges clean, unmold gently with a wet spoon.",
      "Serve hot with antioxidant-rich, low-salt drumstick sambar."
    ],
    stepsHinglish: [
      "Oats ko bina tel ke 3 minute dry roast karein aur thanda karke dardara pees lein.",
      "Pise hue oats me dahi, gajar, beans aur curry patta milakar 8 minute ke liye rakh dein.",
      "Steaming se pehle ek chutki fruit salt milakar halka sa hilayein.",
      "Idli stand me batter daalkar 10-12 minute tak steam karein.",
      "Toothpick se check karein aur garma-garam idli nikal lein.",
      "Drumstick aur tamatar ke healthy sambar ke saath serve karein."
    ]
  },
  {
    id: "sib-4",
    name: "Foxtail Millet (Thinai) Vegetable Pongal with Cumin-Pepper Tadka",
    mealType: "breakfast",
    cuisine: "south indian",
    calorieCategory: "balanced",
    calories: 270,
    protein: 10,
    carbs: 45,
    fat: 6,
    fiber: 8,
    iron: 4.5,
    calcium: 85,
    sodium: 180,
    cookingTime: 25,
    tags: ["Ancient Grain", "Low Glycemic", "PCOS Friendly", "Warm Digestion"],
    conditionsSafe: ["Diabetes", "PCOS", "Thyroid concerns", "High Cholesterol"],
    dietType: ["Vegetarian", "Jain"],
    ingredients: [
      { name: "Foxtail Millet (Thinai)", qty: "1/2 cup", swapKey: "white rice" },
      { name: "Yellow Moong Dal", qty: "1/4 cup", swapKey: null },
      { name: "Crushed Black Peppercorns & Jeera", qty: "1 tsp each", swapKey: null },
      { name: "Desi Gir Cow Ghee", qty: "1 tsp", swapKey: "deep frying / oil" },
      { name: "Ginger & Curry Leaves", qty: "1 tbsp", swapKey: null }
    ],
    diseaseAdaptation: "Replaces traditional white rice with mineral-dense foxtail millet. Black pepper enhances piperine absorption, stimulating metabolism and digestive fire.",
    stepsEnglish: [
      "Dry roast yellow moong dal for 2 minutes until aromatic, then wash together with foxtail millet.",
      "Pressure cook millet and dal in 3 cups water for 3 whistles until soft and meltingly tender.",
      "Heat 1 tsp pure desi ghee in a small pan, crackle cumin seeds, crushed black pepper, and curry leaves.",
      "Add grated ginger and hing, pour sizzling tempering directly over cooked millet pongal.",
      "Mix gently with a ladle, adjusting consistency with warm water if needed.",
      "Serve warm with roasted flaxseed podi or mild coconut chutney."
    ],
    stepsHinglish: [
      "Moong dal ko bina tel ke 2 minute bhunein aur foxtail millet ke saath dho lein.",
      "Pressure cooker me 3 cup paani ke saath 3 seeti aane tak paka lein.",
      "Chhote pan me 1 chammach desi ghee garam karein, jeera, kali mirch aur curry patta ka tadka lagayein.",
      "Adrak aur hing daalkar khushboo aane par cooker ke pongal me daal dein.",
      "Sabhi cheezon ko mix karein aur naram consistency banayein.",
      "Garma-garam pongal ko healthy podi ya dahi ke saath enjoy karein."
    ]
  },
  {
    id: "sib-5",
    name: "Sprouted Horse Gram (Kollu) Dosa with Tangy Tomato Rasam",
    mealType: "breakfast",
    cuisine: "south indian",
    calorieCategory: "balanced",
    calories: 260,
    protein: 16,
    carbs: 40,
    fat: 4,
    fiber: 11,
    iron: 6.8,
    calcium: 290,
    sodium: 190,
    cookingTime: 30,
    tags: ["Fat Burning", "High Iron", "Thyroid Support", "Anemia Safe"],
    conditionsSafe: ["Anemia", "High Cholesterol", "Thyroid concerns", "Weight Loss"],
    dietType: ["Vegetarian", "Vegan"],
    ingredients: [
      { name: "Sprouted Horse Gram (Kollu)", qty: "3/4 cup", swapKey: "white rice" },
      { name: "Brown Rice Flour", qty: "1/4 cup", swapKey: "maida" },
      { name: "Fresh Tomatoes & Tamarind", qty: "2 medium", swapKey: null },
      { name: "Rasam Powder & Garlic Pods", qty: "1 tbsp + 4 cloves", swapKey: null },
      { name: "Cold-Pressed Coconut Oil", qty: "1/2 tsp", swapKey: "deep frying / oil" }
    ],
    diseaseAdaptation: "Horse gram is clinical Ayurveda's most potent fat-burning and iron-rich legume. It breaks down sluggish kapha, boosts hemoglobin, and supports thyroid metabolism.",
    stepsEnglish: [
      "Grind sprouted horse gram and brown rice flour into a smooth, slightly coarse dosa batter.",
      "Simmer mashed tomatoes, crushed garlic cloves, rasam powder, and curry leaves in water for 10 minutes to create an invigorating rasam.",
      "Heat a cast-iron skillet and spread horse gram batter into a thin crepe.",
      "Drizzle minimal oil and cook until crisp and deep mahogany brown.",
      "Fold the dosa and serve with a steaming bowl of hot garlic-tomato rasam for drinking."
    ],
    stepsHinglish: [
      "Ankurit kulthi (horse gram) aur brown rice ke aate ko pees kar dosa batter banayein.",
      "Tamatar, lehsan, curry patta aur rasam powder ko ubaal kar immunity boosting rasam tayar karein.",
      "Garam tawa par batter daal kar crispy dosa sek lein.",
      "Kam se kam tel me dono taraf se kurkura hone tak pakayein.",
      "Garma-garam kollu dosa ko tangy garlic rasam ke saath dip karke khayein."
    ]
  },

  // --- NORTH INDIAN BREAKFAST ---
  {
    id: "nib-1",
    name: "Air-Fried Kasuri Methi Puri with Protein Kala Chana",
    mealType: "breakfast",
    cuisine: "north indian",
    calorieCategory: "balanced",
    calories: 340,
    protein: 16,
    carbs: 52,
    fat: 6,
    fiber: 12,
    iron: 5.9,
    calcium: 150,
    sodium: 240,
    cookingTime: 25,
    tags: ["Air-Fried", "Zero Oil Spikes", "Heart Healthy", "High Protein"],
    conditionsSafe: ["High Cholesterol", "Diabetes", "Hypertension", "Anemia"],
    dietType: ["Vegetarian", "Vegan", "Jain"],
    ingredients: [
      { name: "Whole Wheat & Oats Flour Mix", qty: "1/2 cup", swapKey: "maida" },
      { name: "Boiled Black Chickpeas (Kala Chana)", qty: "3/4 cup", swapKey: null },
      { name: "Kasuri Methi & Ajwain", qty: "1 tbsp + 1/2 tsp", swapKey: null },
      { name: "Amchur (Dry Mango) & Roasted Jeera", qty: "1 tsp each", swapKey: null },
      { name: "Sendha Namak", qty: "1/4 tsp", swapKey: "table salt" },
      { name: "Air Fryer Oil Brush", qty: "1/2 tsp", swapKey: "deep frying / oil" }
    ],
    diseaseAdaptation: "Revolutionary air-fried desi puri! Uses whole grain oats mix and zero deep frying, cutting oil by 85%. Kala chana delivers massive soluble fiber, iron, and slow-burn protein.",
    stepsEnglish: [
      "Knead whole wheat flour, oats flour, ajwain, and crushed kasuri methi into a firm puri dough with warm water.",
      "Roll into 3-inch discs. Lightly mist or brush with 2 drops of mustard oil.",
      "Place puris into preheated air fryer at 190°C (375°F) for 4-5 minutes until puffed and golden crisp.",
      "In a pan, toss boiled kala chana with roasted cumin, amchur powder, green chilies, and rock salt.",
      "Garnish kala chana with freshly chopped coriander and ginger juliennes.",
      "Serve the crispy air-fried puris immediately alongside the protein-packed chana."
    ],
    stepsHinglish: [
      "Gehun ke aate aur oats ke aate me ajwain aur kasuri methi milakar thoda sakht aata goondhein.",
      "Chhoti-chhoti puris belein aur halka sa sarson ka tel brush karein.",
      "Preheated air fryer me 190°C par 4 se 5 minute bake karein jab tak puris phool kar kurkuri na ho jayein.",
      "Uble hue kala chana ko bhune jeere, amchur, hari mirch aur sendha namak ke saath toss karein.",
      "Hara dhaniya aur adrak ke lachhe daalkar garnish karein.",
      "Bina tel me tale, sehatmand crispy methi puris aur kala chana ka lutf uthayein."
    ]
  },
  {
    id: "nib-2",
    name: "Sprouted Moong & Paneer Bhurji Stuffed Multigrain Paratha",
    mealType: "breakfast",
    cuisine: "north indian",
    calorieCategory: "balanced",
    calories: 320,
    protein: 18,
    carbs: 42,
    fat: 9,
    fiber: 9,
    iron: 4.1,
    calcium: 290,
    sodium: 220,
    cookingTime: 25,
    tags: ["High Protein", "Muscle Building", "Bone Health"],
    conditionsSafe: ["Weight Loss", "PCOS", "Anemia"],
    dietType: ["Vegetarian"],
    ingredients: [
      { name: "Crumbled Low-Fat Paneer / Tofu", qty: "1/2 cup", swapKey: "paneer" },
      { name: "Steamed Sprouted Moong", qty: "1/4 cup", swapKey: null },
      { name: "Multigrain Atta (Wheat, Ragi, Chana)", qty: "1/2 cup", swapKey: "maida" },
      { name: "Green Chili, Onion & Coriander", qty: "2 tbsp", swapKey: null },
      { name: "Desi Ghee", qty: "1 tsp", swapKey: "deep frying / oil" }
    ],
    diseaseAdaptation: "Blends crumbled paneer/tofu with sprouted moong for double the protein with minimal saturated fats. Cooked on iron tawa with dry roast technique.",
    stepsEnglish: [
      "Mash low-fat paneer with steamed sprouted moong, chopped onion, green chilies, and fresh coriander.",
      "Season filling with rock salt, garam masala, and roasted cumin.",
      "Roll dough portion into circle, place protein filling in center, seal edges, and gently roll out.",
      "Roast on a hot iron tawa until brown specks appear on both sides.",
      "Brush just 1/2 tsp pure ghee and toast until golden and fragrant.",
      "Serve warm with probiotic homemade curd."
    ],
    stepsHinglish: [
      "Low-fat paneer ko uble hue moong sprouts, pyaz, hari mirch aur dhaniye ke saath mix karein.",
      "Sendha namak aur bhuna jeera milakar healthy stuffing banayein.",
      "Aate ke pede me stuffing bhar kar dhire-dhire bel lein.",
      "Garam tawa par dono taraf se acche se roast karein.",
      "Bas aadha chammach desi ghee laga kar kurkura sek lein.",
      "Taaza dahi ke saath garma-garam paratha serve karein."
    ]
  },
  {
    id: "nib-3",
    name: "Lauki (Bottle Gourd) & Mint Thepla with Probiotic Curd",
    mealType: "breakfast",
    cuisine: "north indian",
    calorieCategory: "low",
    calories: 220,
    protein: 7,
    carbs: 34,
    fat: 6,
    fiber: 6,
    iron: 3.2,
    calcium: 170,
    sodium: 180,
    cookingTime: 20,
    tags: ["Liver Detox", "Cooling Gut", "Hypertension Safe", "Low Sodium"],
    conditionsSafe: ["Hypertension", "Fatty Liver", "GERD", "High Cholesterol"],
    dietType: ["Vegetarian", "Jain"],
    ingredients: [
      { name: "Grated Fresh Lauki (Bottle Gourd)", qty: "1/2 cup", swapKey: "potatoes" },
      { name: "Whole Wheat + Besan Flour", qty: "1/2 cup", swapKey: "maida" },
      { name: "Fresh Mint & Coriander Leaves", qty: "2 tbsp chopped", swapKey: null },
      { name: "Turmeric, Ajwain & White Sesame Seeds", qty: "1 tsp", swapKey: null },
      { name: "Mustard Oil", qty: "1/2 tsp", swapKey: "deep frying / oil" }
    ],
    diseaseAdaptation: "Bottle gourd juice softens the dough without extra water, infusing potent electrolytes, potassium, and liver detoxifying antioxidants.",
    stepsEnglish: [
      "Combine grated bottle gourd, whole wheat flour, besan, ajwain, turmeric, and chopped mint leaves.",
      "Knead into a soft dough without adding extra water (lauki releases its own moisture).",
      "Roll into thin, translucent theplas dusting lightly with dry flour.",
      "Cook on a medium hot tawa for 45 seconds each side with a drop of cold-pressed oil.",
      "Stack wrapped in a soft cotton cloth to keep tender and soft.",
      "Serve with 3 tablespoons of fresh homemade set curd."
    ],
    stepsHinglish: [
      "Kaddookas ki hui lauki, gehun ka aata, besan, ajwain aur pudina ko mix karein.",
      "Bina alag se paani daale lauki ke ras se hi naram aata goondh lein.",
      "Patle theple belein aur garam tawa par dalein.",
      "Dono taraf se aadha chammach sarson ka tel lagakar halka sek lein.",
      "Kapde me lapet kar rakhein taaki theple bilkul naram rahein.",
      "Taaze dahi ke saath subah ke naashte me parosein."
    ]
  },
  {
    id: "nib-4",
    name: "Steamed Vegetable Dhokla with Flaxseed-Mustard Tadka",
    mealType: "breakfast",
    cuisine: "north indian",
    calorieCategory: "low",
    calories: 190,
    protein: 9,
    carbs: 29,
    fat: 4,
    fiber: 5,
    iron: 2.6,
    calcium: 60,
    sodium: 230,
    cookingTime: 20,
    tags: ["Zero Sugar", "Fermented Gut Support", "Diabetes Safe"],
    conditionsSafe: ["Diabetes", "High Cholesterol", "Weight Loss"],
    dietType: ["Vegetarian", "Jain"],
    ingredients: [
      { name: "Besan (Gram Flour)", qty: "3/4 cup", swapKey: "maida" },
      { name: "Curd & Ginger Paste", qty: "1/4 cup + 1 tsp", swapKey: null },
      { name: "Turmeric & Pinch of Hing", qty: "1/4 tsp", swapKey: null },
      { name: "Mustard Seeds, Green Chili & Flaxseeds", qty: "1 tsp each", swapKey: null },
      { name: "Fruit Salt / Baking Soda", qty: "1/2 tsp", swapKey: null }
    ],
    diseaseAdaptation: "Traditional dhokla adapted without added white sugar syrup. Uses roasted flaxseeds in tempering to add anti-inflammatory omega-3 and lowering blood sugar impact.",
    stepsEnglish: [
      "Whisk besan, ginger paste, turmeric, curd, and water into a lump-free ribbon consistency batter.",
      "Stir in fruit salt gently and immediately pour into a greased thali.",
      "Steam on vigorous heat for 12-15 minutes until a knife inserted comes out clean.",
      "In a small pan, crackle mustard seeds, curry leaves, green chilies, and flaxseeds in 1/2 tsp oil with 3 tbsp warm water (no sugar).",
      "Pour tempering over warm sliced dhokla squares.",
      "Garnish with chopped green coriander and serve warm."
    ],
    stepsHinglish: [
      "Besan, adrak, haldi, dahi aur paani ko milakar smooth batter banayein.",
      "Fruit salt milakar turant greased plate me daalein aur 15 minute ke liye steam karein.",
      "Chhote pan me rai, curry patta, hari mirch aur alsi (flaxseeds) ka tadka paani ke saath banayein (cheeni na daalein).",
      "Dhokla ke tukdon par yeh tadka failayein.",
      "Hara dhaniya daalkar garma-garam serve karein."
    ]
  },
  {
    id: "nib-5",
    name: "Masala Oats & Sprouted Kala Chana Khichdi with Mint Chaas",
    mealType: "breakfast",
    cuisine: "north indian",
    calorieCategory: "balanced",
    calories: 270,
    protein: 12,
    carbs: 44,
    fat: 5,
    fiber: 10,
    iron: 4.9,
    calcium: 120,
    sodium: 190,
    cookingTime: 20,
    tags: ["High Fiber", "Satiety Booster", "Thyroid Friendly"],
    conditionsSafe: ["Thyroid concerns", "Diabetes", "PCOS", "High Cholesterol"],
    dietType: ["Vegetarian", "Jain"],
    ingredients: [
      { name: "Rolled Oats", qty: "1/2 cup", swapKey: "white rice" },
      { name: "Boiled Kala Chana / Moong", qty: "1/4 cup", swapKey: null },
      { name: "Chopped Tomatoes & Spinach", qty: "1/2 cup", swapKey: "spinach" },
      { name: "Jeera, Haldi & Dalchini Powder", qty: "1/2 tsp each", swapKey: null },
      { name: "Desi Ghee", qty: "1/2 tsp", swapKey: "deep frying / oil" }
    ],
    diseaseAdaptation: "Cinnamon enhances insulin receptor sensitivity, while zinc and selenium in kala chana support T3/T4 thyroid hormone conversion.",
    stepsEnglish: [
      "Heat 1/2 tsp ghee in a skillet, splutter cumin seeds, and sauté tomatoes with turmeric and cinnamon.",
      "Add finely chopped spinach and boiled kala chana, tossing for 2 minutes.",
      "Add rolled oats and 1.5 cups of boiling water, stirring continuously.",
      "Simmer for 5 minutes until creamy and fragrant porridge consistency is achieved.",
      "Serve hot with a chilled glass of cumin-spiced mint buttermilk (chaas)."
    ],
    stepsHinglish: [
      "Kadai me adha chammach ghee garam karein, jeera, tamatar, haldi aur dalchini bhunein.",
      "Palak aur boiled kala chana daal kar 2 minute chalayein.",
      "Oats aur 1.5 cup ubalta paani daalkar naram khichdi banayein.",
      "5 minute paka kar garma-garam bowl me nikalein.",
      "Pudina aur jeera wali thandi chaas ke saath enjoy karein."
    ]
  },

  // --- SOUTH INDIAN LUNCH ---
  {
    id: "sil-1",
    name: "Tomato & Garlic Rasam with Steamed Foxtail Millet & Bhindi Poriyal",
    mealType: "lunch",
    cuisine: "south indian",
    calorieCategory: "balanced",
    calories: 380,
    protein: 13,
    carbs: 62,
    fat: 8,
    fiber: 12,
    iron: 5.6,
    calcium: 210,
    sodium: 260,
    cookingTime: 30,
    tags: ["Low Glycemic", "Heart Healing", "Anti-Inflammatory", "Hypertension Safe"],
    conditionsSafe: ["Hypertension", "Diabetes", "High Cholesterol", "Fatty Liver"],
    dietType: ["Vegetarian", "Vegan"],
    ingredients: [
      { name: "Steamed Foxtail Millet", qty: "3/4 cup cooked", swapKey: "white rice" },
      { name: "Vine Tomatoes & Tamarind Pulp", qty: "2 ripe + 1 tsp", swapKey: null },
      { name: "Crushed Garlic Pods", qty: "6 cloves", swapKey: null },
      { name: "Black Pepper & Cumin Podi", qty: "1 tbsp", swapKey: null },
      { name: "Okra (Bhindi) Sautéed with Coconut", qty: "1 cup", swapKey: null },
      { name: "Cold-Pressed Sesame Oil", qty: "1 tsp", swapKey: "deep frying / oil" }
    ],
    diseaseAdaptation: "Allicin in crushed garlic acts as a natural ACE inhibitor to reduce blood pressure. Okra mucilage binds bile acids to flush excess blood cholesterol.",
    stepsEnglish: [
      "Cook foxtail millet in boiling water (1:2 ratio) until grains are fluffy and separate.",
      "Boil mashed tomatoes, crushed garlic cloves, pepper, cumin, curry leaves, and a pinch of turmeric for 10 minutes until frothy rasam develops.",
      "In another pan, sauté finely diced okra (bhindi) with mustard seeds and 1 tsp grated coconut until tender and non-sticky.",
      "Plate the fluffy steamed foxtail millet, pour generous piping hot garlic rasam on top, and serve with crisp bhindi poriyal."
    ],
    stepsHinglish: [
      "Foxtail millet ko 2 guna paani me ubaal kar khila-khila paka lein.",
      "Tamatar, khoob saara lehsan, kali mirch, jeera aur curry patta ko 10 minute ubaal kar healthy rasam banayein.",
      "Dusri kadai me bhindi ko sarson ke daane aur thode nariyal ke saath kurkura sauté karein.",
      "Millet ke upar garma-garam garlic rasam daalein aur bhindi poriyal ke saath serve karein."
    ]
  },
  {
    id: "sil-2",
    name: "Brown Rice Kootu with Ash Gourd & Chana Dal + Beetroot Poriyal",
    mealType: "lunch",
    cuisine: "south indian",
    calorieCategory: "balanced",
    calories: 420,
    protein: 16,
    carbs: 68,
    fat: 9,
    fiber: 14,
    iron: 6.4,
    calcium: 180,
    sodium: 240,
    cookingTime: 35,
    tags: ["High Iron", "Alkaline Gut", "Kidney Friendly"],
    conditionsSafe: ["Anemia", "High Cholesterol", "Hypertension"],
    dietType: ["Vegetarian", "Vegan", "Jain"],
    ingredients: [
      { name: "Brown Basmati Rice", qty: "3/4 cup cooked", swapKey: "white rice" },
      { name: "Ash Gourd (Petha) & Chana Dal", qty: "1 cup diced + 1/3 cup dal", swapKey: null },
      { name: "Grated Beetroot", qty: "1 cup", swapKey: null },
      { name: "Fresh Coconut & Cumin Paste", qty: "2 tbsp", swapKey: null },
      { name: "Curry Leaves & Mustard Seeds", qty: "1 tsp", swapKey: null }
    ],
    diseaseAdaptation: "Ash gourd is exceptionally alkaline, neutralizing stomach acidity and promoting kidney filtration. Beetroot and chana dal provide rich bioavailable non-heme iron for hemoglobin restoration.",
    stepsEnglish: [
      "Pressure cook chana dal and diced ash gourd with turmeric until soft.",
      "Stir in ground coconut-cumin paste and simmer for 4 minutes with rock salt.",
      "Temper with mustard seeds and fresh curry leaves in 1/2 tsp coconut oil.",
      "Grate beetroot and stir-fry in a cast-iron skillet with green chilies for natural iron retention.",
      "Serve warm with steamed brown basmati rice for a wholesome, comforting midday meal."
    ],
    stepsHinglish: [
      "Chana dal aur safed petha (ash gourd) ko haldi ke saath naram ubaal lein.",
      "Nariyal aur jeera ka paste milakar 4 minute dhimi aanch par pakayein.",
      "Curry patta aur rai ka tadka lagayein.",
      "Chukandar (beetroot) ko iron kadai me sauté karein jisse iron retention badhe.",
      "Brown rice ke saath yeh healthy lunch plate serve karein."
    ]
  },
  {
    id: "sil-3",
    name: "Kerala Style Fish Moilee (Low Coconut Milk) with Red Rice",
    mealType: "lunch",
    cuisine: "south indian",
    calorieCategory: "balanced",
    calories: 440,
    protein: 34,
    carbs: 52,
    fat: 11,
    fiber: 6,
    iron: 3.8,
    calcium: 160,
    sodium: 290,
    cookingTime: 30,
    tags: ["Omega-3 Rich", "Cardio Protective", "High Protein"],
    conditionsSafe: ["High Cholesterol", "Hypertension", "PCOS"],
    dietType: ["Non-vegetarian"],
    ingredients: [
      { name: "Fresh White Fish Fillet (Rohu/Seer)", qty: "150g", swapKey: "paneer" },
      { name: "Kerala Matta Red Rice", qty: "3/4 cup cooked", swapKey: "white rice" },
      { name: "Thin Coconut Milk (Diluted)", qty: "1/2 cup", swapKey: "whole milk" },
      { name: "Green Chilies, Ginger Juliennes & Turmeric", qty: "2 tbsp", swapKey: null },
      { name: "Cold-Pressed Coconut Oil", qty: "1 tsp", swapKey: "deep frying / oil" }
    ],
    diseaseAdaptation: "Fish delivers high doses of EPA and DHA omega-3 fatty acids, lowering plasma triglycerides and reducing arterial stiffness. Matta red rice provides high magnesium for glycemic control.",
    stepsEnglish: [
      "Marinate fish lightly with turmeric, lemon juice, and rock salt for 10 minutes.",
      "Sauté ginger, garlic, green chilies, and onions in 1 tsp coconut oil until translucent.",
      "Add thin coconut milk and slit tomatoes, gently placing fish fillets into simmering broth.",
      "Cook covered for 6-8 minutes until fish flakes tenderly.",
      "Serve with steamed antioxidant-rich Kerala red rice."
    ],
    stepsHinglish: [
      "Fish ko haldi, nimbu aur sendha namak laga kar 10 minute rakhein.",
      "Adrak, lehsan, hari mirch aur pyaz ko halka sauté karein.",
      "Patla nariyal doodh aur tamatar daal kar fish ke tukde dhimi aanch par pakayein.",
      "6-8 minute me fish naram aur juicy ho jayegi.",
      "Kerala red matta rice ke saath garam serve karein."
    ]
  },
  {
    id: "sil-4",
    name: "Sprouted Moong & Drumstick Sambar with Brown Rice & Cabbage Thoran",
    mealType: "lunch",
    cuisine: "south indian",
    calorieCategory: "balanced",
    calories: 410,
    protein: 17,
    carbs: 66,
    fat: 8,
    fiber: 13,
    iron: 5.1,
    calcium: 220,
    sodium: 270,
    cookingTime: 35,
    tags: ["High Fiber", "Metabolism Rev", "Low Glycemic"],
    conditionsSafe: ["Diabetes", "Weight Loss", "Fatty Liver"],
    dietType: ["Vegetarian", "Vegan", "Jain"],
    ingredients: [
      { name: "Sprouted Green Moong & Toor Dal", qty: "1/2 cup each", swapKey: null },
      { name: "Drumstick & Shallots (Sambar Onions)", qty: "1 cup", swapKey: null },
      { name: "Brown Rice", qty: "3/4 cup cooked", swapKey: "white rice" },
      { name: "Cabbage & Fresh Coconut", qty: "1 cup shredded + 1 tbsp", swapKey: null },
      { name: "Sambar Masala & Tamarind", qty: "1 tbsp each", swapKey: null }
    ],
    diseaseAdaptation: "Drumstick (Moringa oleifera) pods actively normalize blood sugar and flush fatty liver deposits. Cabbage thoran adds sulfur compounds that stimulate glutathione production.",
    stepsEnglish: [
      "Cook toor dal and sprouted moong in water with turmeric until tender.",
      "Add drumstick pieces and sambar onions; simmer with tamarind water and sambar spice blend.",
      "Stir-fry shredded cabbage with mustard seeds and curry leaves for 4 minutes, finishing with fresh grated coconut.",
      "Serve sambar with steamed brown rice and crunchy cabbage thoran."
    ],
    stepsHinglish: [
      "Toor dal aur sprouted moong ko haldi ke saath paka lein.",
      "Drumstick aur chhote sambar pyaz daal kar sambar masala aur imli ke ras ke saath ubaalein.",
      "Patta gobhi (cabbage) ko rai aur curry patta me 4 minute sauté karein aur nariyal daalein.",
      "Brown rice ke saath drumstick sambar aur thoran plate karein."
    ]
  },
  {
    id: "sil-5",
    name: "Hydrating Mor Kuzhambu (Buttermilk Stew) with Pumpkin & Quinoa",
    mealType: "lunch",
    cuisine: "south indian",
    calorieCategory: "low",
    calories: 330,
    protein: 12,
    carbs: 48,
    fat: 9,
    fiber: 8,
    iron: 3.5,
    calcium: 310,
    sodium: 210,
    cookingTime: 25,
    tags: ["Cooling Probiotic", "Gut Healing", "PCOS Friendly"],
    conditionsSafe: ["GERD", "PCOS", "Hypertension", "Diabetes"],
    dietType: ["Vegetarian", "Jain"],
    ingredients: [
      { name: "Sour Churned Buttermilk", qty: "1.5 cups", swapKey: "whole milk" },
      { name: "Yellow Pumpkin (Parangikai)", qty: "1 cup cubes", swapKey: "potatoes" },
      { name: "Coconut, Green Chili & Cumin Paste", qty: "2 tbsp", swapKey: null },
      { name: "Quinoa", qty: "1/2 cup dry / 1 cup cooked", swapKey: "white rice" },
      { name: "Mustard & Fenugreek Seeds", qty: "1/2 tsp each", swapKey: null }
    ],
    diseaseAdaptation: "Live lactobacillus cultures restore gut microbiome diversity. Fenugreek seeds in tempering prevent gut inflammation and curb sudden glucose release.",
    stepsEnglish: [
      "Boil yellow pumpkin cubes in a cup of water with turmeric until fork-tender.",
      "Blend grated coconut, cumin, ginger, and soaked chana dal into a fine paste and mix into buttermilk.",
      "Pour mixture over warm pumpkin and gently heat on low flame without boiling (to avoid curdling).",
      "Temper with mustard seeds, fenugreek seeds, and curry leaves.",
      "Serve warm over fluffy steamed quinoa."
    ],
    stepsHinglish: [
      "Peela kaddu (pumpkin) ko haldi ke paani me naram hone tak ubaal lein.",
      "Nariyal, jeera, adrak aur bheege chana dal ka paste dahi/chach me milayein.",
      "Uble hue kaddu me milayein aur dhimi aanch par halka gunguna karein (ubaalein nahi).",
      "Rai aur methi dana ka tadka lagayein.",
      "Steamed quinoa ke saath serve karein."
    ]
  },

  // --- NORTH INDIAN LUNCH ---
  {
    id: "nil-1",
    name: "Dal Tadka with Sprouted Methi & Brown Basmati Rice",
    mealType: "lunch",
    cuisine: "north indian",
    calorieCategory: "balanced",
    calories: 410,
    protein: 17,
    carbs: 66,
    fat: 7,
    fiber: 11,
    iron: 5.2,
    calcium: 130,
    sodium: 250,
    cookingTime: 30,
    tags: ["Diabetes Safe", "Cholesterol Reducer", "High Protein", "Liver Friendly"],
    conditionsSafe: ["Diabetes", "High Cholesterol", "Fatty Liver", "Anemia"],
    dietType: ["Vegetarian", "Vegan", "Jain"],
    ingredients: [
      { name: "Yellow Moong & Masoor Dal Mix", qty: "1/2 cup dry", swapKey: null },
      { name: "Sprouted Methi (Fenugreek) Seeds", qty: "2 tbsp", swapKey: "spinach" },
      { name: "Brown Basmati Rice", qty: "3/4 cup cooked", swapKey: "white rice" },
      { name: "Tomatoes, Garlic & Hing", qty: "2 ripe + 4 cloves", swapKey: null },
      { name: "Cold Pressed Mustard Oil", qty: "1 tsp", swapKey: "deep frying / oil" }
    ],
    diseaseAdaptation: "Sprouted methi seeds contain bioactive galactomannan that delays intestinal absorption of sugars and lowers serum cholesterol, without adding bitterness.",
    stepsEnglish: [
      "Wash moong and masoor dal and pressure cook with turmeric, rock salt, and sprouted methi seeds for 3 whistles.",
      "Heat 1 tsp mustard oil in a tadka pan to smoking point, lower heat, and add cumin, hing, and chopped garlic.",
      "Sauté chopped tomatoes until pulpy and soft, then pour the aromatic tadka into the cooked dal.",
      "Simmer for 3 minutes, garnish with fresh coriander, and serve over warm steamed brown basmati rice."
    ],
    stepsHinglish: [
      "Moong aur masoor dal ko haldi, sendha namak aur ankurit methi daana ke saath 3 seeti aane tak paka lein.",
      "Pan me 1 chammach sarson ka tel garam karein, jeera, hing aur lehsan ka tadka lagayein.",
      "Tamatar ko galne tak bhunein aur dal me daal dein.",
      "3 minute dhimi aanch par pakayein, hara dhaniya daalein aur brown rice ke saath parosein."
    ]
  },
  {
    id: "nil-2",
    name: "Palak & Tofu/Paneer Bhurji with 2 Missi Rotis (Gram-Flour Flatbread)",
    mealType: "lunch",
    cuisine: "north indian",
    calorieCategory: "balanced",
    calories: 430,
    protein: 23,
    carbs: 48,
    fat: 14,
    fiber: 10,
    iron: 6.8,
    calcium: 410,
    sodium: 280,
    cookingTime: 25,
    tags: ["High Iron", "High Calcium", "Muscle Recovery", "PCOS Friendly"],
    conditionsSafe: ["Anemia", "PCOS", "High Cholesterol", "Diabetes"],
    dietType: ["Vegetarian"],
    ingredients: [
      { name: "Crumbled Organic Firm Tofu or Low-Fat Paneer", qty: "1 cup", swapKey: "paneer" },
      { name: "Fresh Spinach (Palak) Puree", qty: "1 cup", swapKey: "spinach" },
      { name: "Besan + Whole Wheat Flour (Missi Mix)", qty: "1/2 cup", swapKey: "maida" },
      { name: "Kasuri Methi, Ajwain & Anardana", qty: "1 tsp each", swapKey: null },
      { name: "Cold-Pressed Mustard Oil", qty: "1 tsp", swapKey: "deep frying / oil" }
    ],
    diseaseAdaptation: "Powerhouse combination of plant iron from spinach and calcium from tofu/paneer. Missi roti has a low glycemic index and prevents insulin resistance.",
    stepsEnglish: [
      "Blanch spinach leaves for 90 seconds, plunge into ice water, and puree with 1 green chili.",
      "In a skillet, heat 1 tsp oil, sauté cumin seeds, onions, ginger, and turmeric.",
      "Add the vibrant green spinach puree and crumbled tofu/paneer; toss with roasted cumin and dry pomegranate (anardana) powder.",
      "Knead whole wheat flour, besan, ajwain, and kasuri methi into soft dough and roll into 2 nutritious missi rotis.",
      "Roast rotis on hot tawa and serve with piping hot palak tofu bhurji."
    ],
    stepsHinglish: [
      "Palak ko 90 seconds ubaal kar thande paani me daalein aur hari mirch ke saath puree bana lein.",
      "Pan me 1 chammach tel me jeera, pyaz, adrak aur haldi bhunein.",
      "Palak puree aur crumble kiya hua tofu/paneer daalein, anardana aur bhuna jeera milayein.",
      "Gehun, besan, ajwain aur kasuri methi ka aata goondh kar 2 missi roti sek lein.",
      "Garma-garam palak tofu ke saath serve karein."
    ]
  },
  {
    id: "nil-3",
    name: "Lauki (Bottle Gourd) & Moong Dal with Bajra (Pearl Millet) Phulka",
    mealType: "lunch",
    cuisine: "north indian",
    calorieCategory: "low",
    calories: 340,
    protein: 14,
    carbs: 52,
    fat: 6,
    fiber: 12,
    iron: 5.8,
    calcium: 160,
    sodium: 210,
    cookingTime: 30,
    tags: ["Ultra Low Calorie", "Cardio Friendly", "High Magnesium", "GERD Safe"],
    conditionsSafe: ["Hypertension", "High Cholesterol", "GERD", "Weight Loss"],
    dietType: ["Vegetarian", "Jain"],
    ingredients: [
      { name: "Bottle Gourd (Lauki) Diced", qty: "1.5 cups", swapKey: "potatoes" },
      { name: "Split Yellow Moong Dal", qty: "1/3 cup", swapKey: null },
      { name: "Pearl Millet (Bajra) Flour", qty: "1/2 cup", swapKey: "maida" },
      { name: "Cumin Seeds, Ginger & Hing", qty: "1 tsp", swapKey: null },
      { name: "Desi Ghee", qty: "1/2 tsp", swapKey: "deep frying / oil" }
    ],
    diseaseAdaptation: "Exceptionally light on digestion. Lauki and moong provide potassium and cooling hydration. Bajra phulkas provide magnesium which relaxes vascular smooth muscles.",
    stepsEnglish: [
      "Pressure cook diced bottle gourd and split moong dal with turmeric and rock salt for 2 whistles.",
      "Temper with cumin seeds, grated ginger, and hing in 1/2 tsp pure ghee.",
      "Knead bajra flour with warm water and hand-pat or roll into soft gluten-free phulkas.",
      "Puff bajra phulkas over an open flame until pillowy.",
      "Serve warm dal with fresh cucumber slices and bajra roti."
    ],
    stepsHinglish: [
      "Kati hui lauki aur moong dal ko haldi aur sendha namak ke saath 2 seeti aane tak paka lein.",
      "Adha chammach ghee me jeera, adrak aur hing ka halka tadka lagayein.",
      "Bajre ke aate ko gungune paani se goondh kar phulke bana lein.",
      "Aanch par fulayein aur garma-garam daal ke saath parosein."
    ]
  },
  {
    id: "nil-4",
    name: "Kashmiri Style Rajma (Kidney Beans) with Steamed Quinoa & Radish Salad",
    mealType: "lunch",
    cuisine: "north indian",
    calorieCategory: "balanced",
    calories: 420,
    protein: 19,
    carbs: 64,
    fat: 7,
    fiber: 14,
    iron: 6.2,
    calcium: 140,
    sodium: 270,
    cookingTime: 35,
    tags: ["High Fiber", "Sustained Energy", "Cholesterol Eraser"],
    conditionsSafe: ["High Cholesterol", "Diabetes", "Anemia"],
    dietType: ["Vegetarian", "Vegan", "Jain"],
    ingredients: [
      { name: "Soaked Red Kidney Beans (Rajma)", qty: "3/4 cup", swapKey: null },
      { name: "Steamed Quinoa", qty: "3/4 cup cooked", swapKey: "white rice" },
      { name: "Sonth (Dry Ginger) & Fennel Powder (Saunf)", qty: "1 tsp each", swapKey: null },
      { name: "Grated White Radish (Mooli) & Lemon", qty: "1/2 cup", swapKey: null },
      { name: "Cold Pressed Mustard Oil", qty: "1 tsp", swapKey: "deep frying / oil" }
    ],
    diseaseAdaptation: "Cooked in authentic Kashmiri style with fennel (saunf) and dry ginger (sonth) to eliminate intestinal flatulence and bloating. Quinoa brings a complete amino acid profile.",
    stepsEnglish: [
      "Boil soaked rajma with black cardamom and cinnamon until completely tender and mashable.",
      "Heat mustard oil, add hing, Kashmiri red chili, saunf powder, and sonth powder stirred with 2 tbsp water.",
      "Pour spiced mix into boiling rajma and simmer on low for 15 minutes, lightly mashing a few beans for natural thickness.",
      "Serve hot over steamed quinoa with a zesty grated mooli-lemon digestive salad."
    ],
    stepsHinglish: [
      "Rajma ko badi elaichi aur dalchini ke saath naram hone tak ubaal lein.",
      "Sarson ke tel me hing, Kashmiri mirch, saunf powder aur sonth ka paste bhunein.",
      "Uble hue rajma me daal kar 15 minute dheemi aanch par kadhein.",
      "Steamed quinoa aur mooli-nimbu ke salad ke saath serve karein."
    ]
  },
  {
    id: "nil-5",
    name: "Tandoori Spiced Grilled Chicken/Tofu Breast with Sauteed Methi Greens",
    mealType: "lunch",
    cuisine: "north indian",
    calorieCategory: "balanced",
    calories: 390,
    protein: 36,
    carbs: 18,
    fat: 12,
    fiber: 7,
    iron: 4.8,
    calcium: 210,
    sodium: 290,
    cookingTime: 25,
    tags: ["Ultra High Protein", "Lean Muscle", "Low Carb", "PCOS Friendly"],
    conditionsSafe: ["Weight Loss", "PCOS", "Diabetes", "Thyroid concerns"],
    dietType: ["Non-vegetarian", "Vegetarian"],
    ingredients: [
      { name: "Skinless Chicken Breast or Extra-Firm Tofu", qty: "180g", swapKey: "paneer" },
      { name: "Hung Curd & Tandoori Masala", qty: "3 tbsp + 1 tbsp", swapKey: null },
      { name: "Fresh Fenugreek (Methi) Leaves", qty: "1.5 cups", swapKey: "spinach" },
      { name: "Garlic, Lemon Juice & Chaat Masala", qty: "1 tbsp", swapKey: null },
      { name: "Cold-Pressed Mustard Oil", qty: "1 tsp", swapKey: "deep frying / oil" }
    ],
    diseaseAdaptation: "Zero-carb, lean-mass stimulator. High protein stabilizes insulin secretion and prevents blood glucose spikes while methi leaves stimulate glucagon.",
    stepsEnglish: [
      "Slit chicken breast or tofu slabs and coat with hung curd, lemon juice, ginger-garlic paste, and tandoori spices.",
      "Air fry at 195°C for 14 minutes (or grill on cast-iron grill pan) until charred and cooked through.",
      "Quickly sauté fresh methi leaves with sliced garlic and rock salt in 1/2 tsp oil for 3 minutes.",
      "Serve the juicy protein steak over the bed of wilted bitter-sweet methi greens with a squeeze of fresh lemon."
    ],
    stepsHinglish: [
      "Chicken ya tofu ko dahi, nimbu, adrak-lehsan aur tandoori masale me marinate karein.",
      "Air fryer me 195°C par 14 minute ya grill pan par seekhein.",
      "Taazi methi aur lehsan ko aadhe chammach tel me 3 minute halka sauté karein.",
      "Tandoori protein steak ko sautéed methi ke upar nimbu nichod kar serve karein."
    ]
  },

  // --- EVENING SNACKS (ALL CUISINES) ---
  {
    id: "snk-1",
    name: "Turmeric & Pink Salt Roasted Makhana (Foxnuts)",
    mealType: "snack",
    cuisine: "north indian",
    calorieCategory: "low",
    calories: 140,
    protein: 4,
    carbs: 24,
    fat: 3,
    fiber: 4,
    iron: 2.1,
    calcium: 70,
    sodium: 95,
    cookingTime: 10,
    tags: ["Zero Cholesterol", "Low Sodium", "Renal Friendly", "Anti-Inflammatory"],
    conditionsSafe: ["Hypertension", "High Cholesterol", "Diabetes", "GERD"],
    dietType: ["Vegetarian", "Vegan", "Jain"],
    ingredients: [
      { name: "Lotus Seeds / Foxnuts (Makhana)", qty: "2 cups", swapKey: null },
      { name: "Curcumin Turmeric Powder", qty: "1/2 tsp", swapKey: null },
      { name: "Black Pepper & Sendha Namak", qty: "1/4 tsp each", swapKey: "table salt" },
      { name: "Cold-Pressed Olive / Sesame Oil", qty: "1/2 tsp", swapKey: "deep frying / oil" }
    ],
    diseaseAdaptation: "Naturally low in sodium and high in magnesium, which makes makhana ideal for hypertension and heart disease. Turmeric and piperine fight systemic inflammation.",
    stepsEnglish: [
      "Heat 1/2 tsp oil in a broad thick-bottomed kadai.",
      "Add turmeric powder and makhana; roast on medium-low flame for 7-8 minutes continuously.",
      "Check by crushing one makhana between your fingers; it should shatter with a crisp crunch.",
      "Toss with freshly ground black pepper and pink salt.",
      "Enjoy warm with a cup of green tea or herbal infusion."
    ],
    stepsHinglish: [
      "Kadai me adha chammach tel garam karein aur haldi daalein.",
      "Makhana daalkar dheemi aanch par 7-8 minute lagataar chalate hue bhunein.",
      "Ungli se daba kar dekhein, makhana ekdum kurkura tootna chahiye.",
      "Sendha namak aur kali mirch powder daal kar mix karein.",
      "Garma-garam green tea ke saath evening snack me lutf uthayein."
    ]
  },
  {
    id: "snk-2",
    name: "Boiled Kala Chana & Sprout Chaat with Lemon and Roasted Flaxseeds",
    mealType: "snack",
    cuisine: "north indian",
    calorieCategory: "low",
    calories: 180,
    protein: 9,
    carbs: 28,
    fat: 3,
    fiber: 8,
    iron: 4.2,
    calcium: 75,
    sodium: 140,
    cookingTime: 10,
    tags: ["High Iron", "Gut Satiety", "Diabetes Safe"],
    conditionsSafe: ["Diabetes", "Anemia", "PCOS", "High Cholesterol"],
    dietType: ["Vegetarian", "Vegan", "Jain"],
    ingredients: [
      { name: "Boiled Kala Chana & Moong Sprouts", qty: "1 cup mix", swapKey: null },
      { name: "Chopped Cucumber, Tomatoes & Onions", qty: "1/2 cup", swapKey: null },
      { name: "Fresh Lemon Juice & Chaat Spices", qty: "1 tbsp", swapKey: null },
      { name: "Roasted Golden Flaxseeds", qty: "1 tbsp", swapKey: null }
    ],
    diseaseAdaptation: "Vitamin C from fresh lemon juice quadruples the bioavailability of non-heme iron from kala chana. High fiber maintains steady 5 PM blood glucose.",
    stepsEnglish: [
      "Combine boiled kala chana, sprouted moong, diced cucumber, tomatoes, and onions in a mixing bowl.",
      "Add rock salt, roasted cumin powder, and fresh green chili.",
      "Drizzle freshly squeezed lemon juice generously.",
      "Top with crunchy roasted flaxseeds and fresh coriander.",
      "Toss well and serve fresh."
    ],
    stepsHinglish: [
      "Bowl me ubla hua kala chana, moong sprouts, kheera, tamatar aur pyaz daalein.",
      "Sendha namak, bhuna jeera aur hari mirch milayein.",
      "Taaza nimbu ka ras acche se nichodein.",
      "Upar se roasted alsi (flaxseeds) aur hara dhaniya daal kar mix karein.",
      "Healthy chaat ka swad lein."
    ]
  },
  {
    id: "snk-3",
    name: "Air-Crisp Methi Muthiya with Raw Mango Dip",
    mealType: "snack",
    cuisine: "north indian",
    calorieCategory: "low",
    calories: 160,
    protein: 6,
    carbs: 26,
    fat: 4,
    fiber: 6,
    iron: 3.2,
    calcium: 95,
    sodium: 170,
    cookingTime: 20,
    tags: ["Low Calorie", "Air-Fried", "Digestive"],
    conditionsSafe: ["Diabetes", "Weight Loss", "High Cholesterol"],
    dietType: ["Vegetarian", "Vegan", "Jain"],
    ingredients: [
      { name: "Fresh Methi Leaves", qty: "1 cup chopped", swapKey: "spinach" },
      { name: "Besan + Whole Wheat Flour", qty: "1/2 cup", swapKey: "maida" },
      { name: "Ginger-Green Chili Paste", qty: "1 tsp", swapKey: null },
      { name: "Sesame Seeds & Ajwain", qty: "1 tsp", swapKey: null },
      { name: "Air Fryer Mist", qty: "1/2 tsp", swapKey: "deep frying / oil" }
    ],
    diseaseAdaptation: "Transforms oil-soaked Gujarati muthiya into a light air-fried superfood packed with fenugreek bitterness to stimulate insulin sensitivity.",
    stepsEnglish: [
      "Combine chopped methi, besan, whole wheat flour, ajwain, sesame seeds, ginger paste, and a pinch of turmeric.",
      "Shape into small oval cylindrical dumplings (muthiyas).",
      "Steam for 10 minutes, then place in an air fryer at 180°C for 6 minutes with a light oil spray until golden crisp.",
      "Serve with tangy home-style raw mango mint chutney."
    ],
    stepsHinglish: [
      "Kati methi, besan, gehun ka aata, ajwain, til aur adrak-mirch ka paste milakar dough banayein.",
      "Chhote-chhote muthiya shape banayein.",
      "10 minute steam karein, fir air fryer me 180°C par 6 minute ke liye crispy bake karein.",
      "Aam-pudine ki chutney ke saath serve karein."
    ]
  },
  {
    id: "snk-4",
    name: "Steamed Edamame & Peanut Sundal with Fresh Coconut",
    mealType: "snack",
    cuisine: "south indian",
    calorieCategory: "low",
    calories: 175,
    protein: 10,
    carbs: 18,
    fat: 7,
    fiber: 6,
    iron: 2.6,
    calcium: 80,
    sodium: 130,
    cookingTime: 12,
    tags: ["High Protein", "Thyroid Friendly", "South Indian Snack"],
    conditionsSafe: ["Weight Loss", "PCOS", "Thyroid concerns"],
    dietType: ["Vegetarian", "Vegan", "Jain"],
    ingredients: [
      { name: "Shelled Green Edamame / White Chickpeas", qty: "1 cup", swapKey: null },
      { name: "Mustard Seeds, Urad Dal & Asafoetida", qty: "1 tsp", swapKey: null },
      { name: "Fresh Grated Coconut", qty: "1.5 tbsp", swapKey: null },
      { name: "Curry Leaves & Dry Red Chili", qty: "1 sprig + 1", swapKey: null }
    ],
    diseaseAdaptation: "Clean plant isoflavones and complete protein provide sustained neurotransmitter support, banishing 4 PM energy crashes without sugar spikes.",
    stepsEnglish: [
      "Steam fresh edamame or chickpeas until tender with a pinch of rock salt.",
      "In a small pan, temper mustard seeds, urad dal, broken red chili, and curry leaves in 1/2 tsp coconut oil.",
      "Toss steamed edamame into the pan, turn off heat, and fold in fresh grated coconut.",
      "Serve warm as a high-protein temple-style evening snack."
    ],
    stepsHinglish: [
      "Edamame ya safed chana ko sendha namak ke saath naram steam karein.",
      "Pan me aadha chammach nariyal tel me rai, urad dal, sukhi lal mirch aur curry patta ka tadka lagayein.",
      "Edamame ko tadke me toss karein aur taaza grated nariyal milayein.",
      "Garma-garam sundal enjoy karein."
    ]
  },
  {
    id: "snk-5",
    name: "Spiced Green Tea with Soaked Walnuts & Flax-Chia Crackers",
    mealType: "snack",
    cuisine: "continental",
    calorieCategory: "low",
    calories: 150,
    protein: 5,
    carbs: 8,
    fat: 12,
    fiber: 5,
    iron: 1.8,
    calcium: 90,
    sodium: 15,
    cookingTime: 5,
    tags: ["Brain Food", "Anti-Oxidant", "Omega-3", "Heart Safe"],
    conditionsSafe: ["High Cholesterol", "Hypertension", "Thyroid concerns"],
    dietType: ["Vegetarian", "Vegan", "Jain"],
    ingredients: [
      { name: "Organic Green Tea with Cinnamon & Cardamom", qty: "1 cup brewed", swapKey: null },
      { name: "Overnight Soaked Walnuts (Akhrot)", qty: "4 halves", swapKey: null },
      { name: "Pumpkin & Chia Seeds Mix", qty: "1 tbsp", swapKey: null }
    ],
    diseaseAdaptation: "Soaking walnuts deactivates phytic acid tannins, optimizing bioavailability of brain-protecting ALA omega-3 fatty acids and reducing cardiovascular inflammation.",
    stepsEnglish: [
      "Brew green tea with a small cinnamon stick and crushed cardamom pod for 3 minutes.",
      "Peel skin off soaked walnuts to eliminate any remaining phytates.",
      "Enjoy warm spiced green tea alongside crisp seeds and nutrient-dense soaked walnuts."
    ],
    stepsHinglish: [
      "Green tea ko dalchini aur elaichi ke saath 3 minute brew karein.",
      "Raat bhar bheege hue akhrot ka chilka nikaal lein taaki digestion asaan ho.",
      "Garam green tea ke saath akhrot aur seeds ka sevan karein."
    ]
  },

  // --- DINNER ITEMS (ALL CUISINES) ---
  {
    id: "din-1",
    name: "Moong Dal & Vegetable Khichdi with 1 Tsp Desi Ghee & Roasted Jeera Dahi",
    mealType: "dinner",
    cuisine: "north indian",
    calorieCategory: "low",
    calories: 320,
    protein: 13,
    carbs: 52,
    fat: 6,
    fiber: 8,
    iron: 3.8,
    calcium: 140,
    sodium: 220,
    cookingTime: 25,
    tags: ["Ayurvedic Detox", "Tridoshic", "Easy Digestion", "GERD Safe"],
    conditionsSafe: ["GERD", "Hypertension", "High Cholesterol", "Diabetes"],
    dietType: ["Vegetarian", "Jain"],
    ingredients: [
      { name: "Split Yellow Moong Dal", qty: "1/2 cup", swapKey: null },
      { name: "Brown Rice or Foxtail Millet", qty: "1/4 cup", swapKey: "white rice" },
      { name: "Diced Carrots, Peas & French Beans", qty: "3/4 cup", swapKey: null },
      { name: "Fresh Ginger, Turmeric & Hing", qty: "1 tsp", swapKey: null },
      { name: "Pure A2 Cow Ghee", qty: "1 tsp", swapKey: "deep frying / oil" }
    ],
    diseaseAdaptation: "Recognized by Ayurvedic clinical nutrition as the supreme cleansing dinner. Yellow moong digests effortlessly, soothing irritated gastrointestinal linings and promoting deep restorative sleep.",
    stepsEnglish: [
      "Wash split moong dal and brown rice/millet together thoroughly.",
      "In a pressure cooker, warm 1 tsp A2 ghee, add cumin seeds, hing, and grated ginger.",
      "Add vegetables, turmeric powder, rock salt, and 3.5 cups of water.",
      "Pressure cook for 3-4 whistles until soft, melting, and soup-like.",
      "Serve warm with a bowl of homemade probiotic curd dusted with roasted cumin."
    ],
    stepsHinglish: [
      "Peeli moong dal aur brown rice ya millet ko dho lein.",
      "Cooker me 1 chammach A2 ghee garam karein, jeera, hing aur adrak daalein.",
      "Sabziyan, haldi, sendha namak aur 3.5 cup paani daal kar 3 seeti aane tak paka lein.",
      "Naram aur pachan me aasan khichdi tayar ho jayegi.",
      "Bhune jeere wale taaze dahi ke saath garma-garam raat ke khane me serve karein."
    ]
  },
  {
    id: "din-2",
    name: "Silken Tofu & Greens Clear Soup with Steamed Edamame Dumplings",
    mealType: "dinner",
    cuisine: "asian",
    calorieCategory: "low",
    calories: 230,
    protein: 16,
    carbs: 22,
    fat: 7,
    fiber: 7,
    iron: 4.6,
    calcium: 290,
    sodium: 280,
    cookingTime: 20,
    tags: ["Ultra Low Carb", "Hydrating", "Anti-Inflammatory", "PCOS Friendly"],
    conditionsSafe: ["Diabetes", "PCOS", "High Cholesterol", "Weight Loss"],
    dietType: ["Vegetarian", "Vegan"],
    ingredients: [
      { name: "Silken Tofu Cubes", qty: "100g", swapKey: "paneer" },
      { name: "Bok Choy / Baby Spinach", qty: "1 cup", swapKey: "spinach" },
      { name: "Shiitake or Button Mushrooms", qty: "1/2 cup sliced", swapKey: null },
      { name: "Fresh Ginger Juliennes & Spring Onion", qty: "2 tbsp", swapKey: null },
      { name: "Low-Sodium Tamari / Soy Broth", qty: "2 cups", swapKey: "table salt" }
    ],
    diseaseAdaptation: "Extremely low caloric density dinner with zero blood sugar disturbance. Shiitake mushrooms contribute lentinan and eritadenine to accelerate cholesterol breakdown.",
    stepsEnglish: [
      "Simmer mineral-rich vegetable broth with sliced ginger, smashed garlic, and spring onion bulbs for 8 minutes.",
      "Add sliced mushrooms and gently slide in silken tofu cubes.",
      "Add chopped bok choy/spinach in the final 2 minutes so they remain emerald green and nutrient-intact.",
      "Season with low-sodium tamari, black pepper, and 3 drops of toasted sesame oil.",
      "Ladle piping hot into a deep soup bowl and sip slowly before bedtime."
    ],
    stepsHinglish: [
      "Vegetable broth me adrak, lehsan aur spring onion daal kar 8 minute ubaalein.",
      "Mushrooms aur silken tofu ke tukde dheere se broth me dalein.",
      "Palak ya bok choy ko aakhri 2 minute me daalein taaki rang aur poshan bana rahe.",
      "Low-sodium tamari aur kali mirch milayein.",
      "Garma-garam soup bowl me serve karein."
    ]
  },
  {
    id: "din-3",
    name: "Herb-Crusted Grilled Fish/Paneer Steak with Garlic Roasted Veggies",
    mealType: "dinner",
    cuisine: "continental",
    calorieCategory: "balanced",
    calories: 340,
    protein: 30,
    carbs: 16,
    fat: 14,
    fiber: 6,
    iron: 3.4,
    calcium: 220,
    sodium: 260,
    cookingTime: 25,
    tags: ["High Protein", "Low Carb", "Keto Friendly", "Thyroid Safe"],
    conditionsSafe: ["Thyroid concerns", "Diabetes", "PCOS", "Weight Loss"],
    dietType: ["Non-vegetarian", "Vegetarian"],
    ingredients: [
      { name: "Fresh Fish Fillet or Low-Fat Paneer Slab", qty: "160g", swapKey: "paneer" },
      { name: "Rosemary, Thyme & Crushed Garlic", qty: "1 tbsp", swapKey: null },
      { name: "Zucchini, Bell Peppers & Broccoli", qty: "1.5 cups florets", swapKey: "potatoes" },
      { name: "Extra Virgin Olive Oil", qty: "1 tsp", swapKey: "deep frying / oil" },
      { name: "Lemon Zest & Sea Salt", qty: "1/4 tsp", swapKey: "table salt" }
    ],
    diseaseAdaptation: "High biological value protein stimulates overnight cellular repair without spiking nocturnal insulin. Cruciferous broccoli is steamed/roasted to deactivate any goitrogens.",
    stepsEnglish: [
      "Rub fish or paneer steak with minced garlic, fresh thyme, rosemary, lemon zest, and olive oil.",
      "Toss broccoli florets and zucchini batons with black pepper and rock salt.",
      "Sear fish/paneer on a medium-hot cast-iron skillet for 4 minutes per side until golden.",
      "Roast veggies in the same skillet until lightly charred and tender-crisp.",
      "Plate the protein steak accompanied by vibrant Mediterranean vegetables and lemon wedge."
    ],
    stepsHinglish: [
      "Fish ya paneer ke steak par lehsan, herbs, nimbu ka chilka aur olive oil lagayein.",
      "Broccoli aur zucchini ko kali mirch aur sendha namak ke saath mix karein.",
      "Iron pan par fish/paneer ko dono taraf se 4-4 minute sek lein.",
      "Usi pan me sabziyon ko halka roast karein.",
      "Nimbu ke saath fresh continental plate serve karein."
    ]
  },
  {
    id: "din-4",
    name: "Methi & Moong Dal Cheela with Mint-Coriander Chutney",
    mealType: "dinner",
    cuisine: "north indian",
    calorieCategory: "low",
    calories: 220,
    protein: 14,
    carbs: 30,
    fat: 4,
    fiber: 8,
    iron: 4.4,
    calcium: 110,
    sodium: 190,
    cookingTime: 20,
    tags: ["High Fiber", "Light Dinner", "Diabetes Friendly"],
    conditionsSafe: ["Diabetes", "High Cholesterol", "GERD"],
    dietType: ["Vegetarian", "Vegan", "Jain"],
    ingredients: [
      { name: "Soaked Yellow Moong Dal", qty: "3/4 cup", swapKey: "white rice" },
      { name: "Fresh Fenugreek (Methi) Leaves", qty: "1/2 cup chopped", swapKey: "spinach" },
      { name: "Ginger, Green Chili & Cumin Seeds", qty: "1 tsp each", swapKey: null },
      { name: "Sendha Namak", qty: "1/4 tsp", swapKey: "table salt" },
      { name: "Cold Pressed Sesame Oil", qty: "1/2 tsp", swapKey: "deep frying / oil" }
    ],
    diseaseAdaptation: "Light, protein-dense dinner preventing nocturnal GERD acid reflux. Methi stabilizes dawn-phenomenon fasting blood sugar in diabetics.",
    stepsEnglish: [
      "Grind soaked moong dal with ginger, green chili, and cumin seeds to a smooth batter.",
      "Fold in rock salt and finely chopped fresh methi leaves.",
      "Spread evenly on a warm non-stick tawa and cook for 3 minutes on medium-low flame.",
      "Flip and cook the other side with minimal oil brushing until golden and crisp.",
      "Serve warm with refreshing mint-coriander digestive chutney."
    ],
    stepsHinglish: [
      "Bheege moong dal ko adrak, hari mirch aur jeera ke saath pees lein.",
      "Kati methi aur sendha namak batter me milayein.",
      "Garam tawa par failayein aur 3 minute dhimi aanch par sek lein.",
      "Palat kar thoda sa tel lagayein aur kurkura karein.",
      "Pudine aur dhaniye ki chutney ke saath serve karein."
    ]
  },
  {
    id: "din-5",
    name: "Warm Roasted Pumpkin & Ginger Potage with Crunchy Pumpkin Seeds",
    mealType: "dinner",
    cuisine: "continental",
    calorieCategory: "low",
    calories: 190,
    protein: 6,
    carbs: 26,
    fat: 7,
    fiber: 6,
    iron: 3.1,
    calcium: 95,
    sodium: 160,
    cookingTime: 20,
    tags: ["High Tryptophan", "Deep Sleep Support", "Low Sodium", "Anti-Bloat"],
    conditionsSafe: ["Hypertension", "GERD", "High Cholesterol", "Weight Loss"],
    dietType: ["Vegetarian", "Vegan", "Jain"],
    ingredients: [
      { name: "Sweet Yellow Pumpkin Cubes", qty: "2 cups", swapKey: "potatoes" },
      { name: "Fresh Ginger & Cinnamon Stick", qty: "1 inch + 1 stick", swapKey: null },
      { name: "Raw Pumpkin Seeds (Pepitas)", qty: "1.5 tbsp", swapKey: null },
      { name: "Nutmeg & Black Pepper", qty: "1 pinch each", swapKey: null },
      { name: "Almond Milk (Unsweetened)", qty: "1/4 cup", swapKey: "whole milk" }
    ],
    diseaseAdaptation: "Rich in zinc and tryptophan, pumpkin soup directly enhances melatonin synthesis for deep sleep. High potassium naturally lowers overnight arterial blood pressure.",
    stepsEnglish: [
      "Steam or roast pumpkin cubes with ginger and cinnamon until soft.",
      "Discard cinnamon stick and blend pumpkin with warm water and nutmeg into a velvet potage.",
      "Stir in unsweetened almond milk and season with black pepper and a pinch of pink salt.",
      "Dry toast raw pumpkin seeds in a small pan until they pop.",
      "Garnish the creamy golden soup with toasted seeds and enjoy a calm, nourishing dinner."
    ],
    stepsHinglish: [
      "Kaddu (pumpkin) ko adrak aur dalchini ke saath naram ubaal lein.",
      "Dalchini hata kar kaddu ko mixer me pees kar smooth soup bana lein.",
      "Almond milk, kali mirch aur jaiphal (nutmeg) milayein.",
      "Pumpkin seeds ko halka bhun lein.",
      "Soup ke upar seeds daal kar garma-garam piyein aur acchi neend lein."
    ]
  }
];

// 4. Authentic Desi "Nuske" (Indian Home Remedies & Ayurvedic Alternatives to Allopathy)
const NUSKE_REPOSITORY = [
  {
    id: "nuskha-1",
    ailment: "Gas, Bloating & Flatulence",
    category: "Digestion",
    title: "Ajwain + Kala Namak Lukewarm Water Elixir",
    alopathyAlternativeTo: "Antacids (Gelusil, Digene, Gas-O-Fast) & Simethicone",
    symptoms: ["Stomach tightness after meals", "Excess gas", "Bloating", "Abdominal heaviness"],
    ingredients: [
      { name: "Carom Seeds (Ajwain)", qty: "1/2 tsp" },
      { name: "Black Salt (Kala Namak)", qty: "1/4 tsp" },
      { name: "Lukewarm Water", qty: "1 glass (200 ml)" }
    ],
    preparation: "Take 1/2 tsp of ajwain and 1/4 tsp of black salt in your palm. Chew them thoroughly for 30-45 seconds, then swallow immediately with a glass of warm water.",
    idealTiming: "Take 15-20 minutes post meal when bloating commences, or on an empty stomach in the morning if suffering from chronic flatulence.",
    clinicalRationale: "Ajwain is rich in thymol, a powerful aromatic compound that stimulates gastric secretion of enzymes, relaxes intestinal smooth muscles, and disperses trapped digestive gas bubbles within minutes.",
    caution: "Avoid excessive black salt if suffering from severe acute hypertension or renal sodium restrictions. Pregnant women should consult their doctor before large doses of ajwain."
  },
  {
    id: "nuskha-2",
    ailment: "Acid Reflux & Severe Heartburn (GERD)",
    category: "Acidity",
    title: "Chilled Fennel (Saunf) & Mishri Water Infusion",
    alopathyAlternativeTo: "Proton Pump Inhibitors (Pantoprazole, Omeprazole, Rabeprazole)",
    symptoms: ["Burning sensation in chest", "Sour water in throat", "Epigastric burn"],
    ingredients: [
      { name: "Fennel Seeds (Saunf)", qty: "1 tbsp" },
      { name: "Dhaga Mishri (Rock Candy)", qty: "1/2 tsp crushed" },
      { name: "Earthen Pot Water (or regular cold water)", qty: "1 glass" }
    ],
    preparation: "Soak 1 tbsp of raw green fennel seeds in a glass of cool water overnight (or for 3 hours). Strain in the morning, crush a tiny bit of dhaga mishri, and sip slowly.",
    idealTiming: "First thing in the morning on an empty stomach, or right after lunch when acid surges occur.",
    clinicalRationale: "Fennel contains anethole, which suppresses gut spasms, lines the esophageal mucosa, and calms hyperchlorhydria without interfering with natural digestive pH balance.",
    caution: "Do not add refined white sugar. In diabetics, omit mishri and drink plain saunf soaked water."
  },
  {
    id: "nuskha-3",
    ailment: "Dry Cough, Sore Throat & Phlegm",
    category: "Respiratory",
    title: "Mulethi (Licorice) & Ginger-Honey Throat Soother",
    alopathyAlternativeTo: "Cough Syrups (Benadryl, Ascoril) & Dextromethorphan",
    symptoms: ["Scratchy throat", "Non-stop dry coughing fit", "Throat irritation", "Chest congestion"],
    ingredients: [
      { name: "Mulethi (Licorice Root) Powder", qty: "1/2 tsp" },
      { name: "Fresh Ginger Juice", qty: "1 tsp" },
      { name: "Raw Forest Honey", qty: "1 tsp" },
      { name: "Freshly Ground Black Pepper", qty: "1 pinch" }
    ],
    preparation: "Grate fresh ginger and squeeze 1 tsp of fresh juice. Blend with 1/2 tsp pure mulethi powder, a pinch of black pepper, and 1 tsp raw honey into a thick therapeutic syrup. Lick slowly with a spoon.",
    idealTiming: "Take right before sleeping at night, and avoid drinking cold water for at least 30 minutes afterward.",
    clinicalRationale: "Mulethi acts as a potent demulcent and expectorant, coating inflamed pharyngeal tissues, while gingerol and honey exert broad-spectrum antimicrobial and anti-tussive effects.",
    caution: "Patients with severe chronic hypertension should limit mulethi consumption to under 7 consecutive days, as glycyrrhizin can retain sodium over extended periods."
  },
  {
    id: "nuskha-4",
    ailment: "Chronic Constipation & Sluggish Bowels",
    category: "Digestion",
    title: "Warm Milk with Munakka (Seeded Raisins) & Isabgol",
    alopathyAlternativeTo: "Chemical Laxatives (Dulcolax, Cremaffin, Lactulose)",
    symptoms: ["Hard stools", "Straining", "Incomplete bowel evacuation", "Heaviness"],
    ingredients: [
      { name: "Munakka (Large Dried Raisins with seeds)", qty: "6-8 pieces" },
      { name: "Psyllium Husk (Isabgol)", qty: "1 tbsp" },
      { name: "Warm Cow Milk (or Oat Milk)", qty: "1 cup (200 ml)" }
    ],
    preparation: "Boil munakka in milk for 5-7 minutes until soft. Turn off heat, let cool to warm, stir in 1 tbsp of Isabgol husk, and chew the munakka while drinking the warm milk.",
    idealTiming: "30 minutes before bedtime.",
    clinicalRationale: "Munakka contains natural sorbitol and tartaric acid, stimulating peristalsis. Isabgol provides soluble mucilage that bulks the stool naturally without cramping or laxative dependency.",
    caution: "Always ensure adequate hydration (at least 8-10 glasses of water daily) when taking Isabgol to prevent intestinal impaction."
  },
  {
    id: "nuskha-5",
    ailment: "High Cholesterol & Blockage Prevention",
    category: "Cardiac",
    title: "Morning Crushed Garlic & Arjun Ki Chaal Tea",
    alopathyAlternativeTo: "Statins (Atorvastatin, Rosuvastatin) - As dietary adjuvant",
    symptoms: ["Elevated LDL/Triglycerides", "Poor blood flow", "Lethargy", "Fatty deposits"],
    ingredients: [
      { name: "Raw Desi Garlic (Lahsun)", qty: "1-2 small cloves" },
      { name: "Arjun Bark (Arjuna Chaal) Powder", qty: "1/2 tsp" },
      { name: "Water", qty: "1.5 cups" }
    ],
    preparation: "Crush garlic cloves and leave exposed to air for 10 minutes (activates allicin). In a separate pan, boil Arjun chaal powder in 1.5 cups water until reduced by half. Swallow crushed garlic with warm Arjun tea.",
    idealTiming: "Morning on an empty stomach.",
    clinicalRationale: "Allicin inhibits hepatic HMG-CoA reductase (cholesterol synthesis pathway). Arjuna bark contains bioflavonoids and arjunolic acid that strengthen cardiac muscle contraction and tone arteries.",
    caution: "Do not discontinue prescribed cardiac medications without consulting your cardiologist. Inform doctor if scheduled for major surgery (garlic has mild blood-thinning properties)."
  },
  {
    id: "nuskha-6",
    ailment: "High Blood Pressure (Hypertension)",
    category: "Cardiac",
    title: "Hibiscus & Soaked Methi Water with Garlic",
    alopathyAlternativeTo: "Beta-blockers / ACE inhibitors adjuvant",
    symptoms: ["Head pressure", "Restlessness", "Elevated systolic/diastolic readings"],
    ingredients: [
      { name: "Dried Hibiscus Flowers (Gudhal)", qty: "2-3 petals / 1 tsp" },
      { name: "Fenugreek Seeds (Methi Dana)", qty: "1 tsp soaked" },
      { name: "Lukewarm Water", qty: "1 glass" }
    ],
    preparation: "Soak methi dana in water overnight. In the morning, brew with dried hibiscus for 4 minutes. Strain and drink warm.",
    idealTiming: "Early morning before breakfast.",
    clinicalRationale: "Hibiscus calyces are rich in anthocyanins that act as natural ACE inhibitors, promoting vasodilation and gentle diuresis without potassium depletion.",
    caution: "Monitor blood pressure regularly. Avoid if taking high doses of prescription diuretics unless cleared by doctor."
  },
  {
    id: "nuskha-7",
    ailment: "Joint Pain, Arthritis & Morning Stiffness",
    category: "Joints",
    title: "Golden Turmeric-Ginger Paste with Black Pepper & Virgin Coconut Oil",
    alopathyAlternativeTo: "NSAIDs (Ibuprofen, Combiflam, Diclofenac)",
    symptoms: ["Knee stiffness", "Swollen knuckle joints", "Morning immobility"],
    ingredients: [
      { name: "Pure Lakadong Turmeric Powder", qty: "1/2 tsp" },
      { name: "Dry Ginger Powder (Sonth)", qty: "1/4 tsp" },
      { name: "Fresh Crushed Black Pepper", qty: "1 pinch" },
      { name: "Cold-Pressed Virgin Coconut / Sesame Oil", qty: "1/2 tsp" }
    ],
    preparation: "Mix turmeric, sonth, black pepper, and warm coconut oil into a smooth paste. Swallow with warm water or mix into warm almond/cow milk.",
    idealTiming: "Twice daily: Once in morning and once before bedtime.",
    clinicalRationale: "Curcumin inhibits COX-2 and NF-kB inflammatory cascades. Piperine in black pepper boosts curcumin absorption by 2,000%, offering pain relief comparable to mild NSAIDs without gastric ulcers.",
    caution: "Safe for daily consumption. Avoid excessive doses if suffering from active gallbladder stones."
  },
  {
    id: "nuskha-8",
    ailment: "PCOS & Menstrual Cramps",
    category: "Women's Health",
    title: "Jeera-Ajwain-Methi Boiled Kadha with Organic Jaggery",
    alopathyAlternativeTo: "Mefenamic Acid (Meftal-Spas) & Painkillers",
    symptoms: ["Severe lower abdominal spasms", "Delayed cycles", "Bloating", "Pelvic pain"],
    ingredients: [
      { name: "Cumin Seeds (Jeera)", qty: "1/2 tsp" },
      { name: "Carom Seeds (Ajwain)", qty: "1/2 tsp" },
      { name: "Fenugreek Seeds (Methi)", qty: "1/4 tsp" },
      { name: "Dark Organic Jaggery (Gur)", qty: "1 small piece (5g)" },
      { name: "Water", qty: "2 cups" }
    ],
    preparation: "Boil cumin, ajwain, and methi seeds in 2 cups of water for 8 minutes until water reduces to 1 cup. Add jaggery, stir until dissolved, and drink warm.",
    idealTiming: "Take twice daily during the 3 days preceding menstruation and on day 1-2 of cycle.",
    clinicalRationale: "Ajwain and jeera relax uterine myometrial smooth muscle spasms, while jaggery supplies bioavailable plant iron and warms pelvic circulation to facilitate smooth flow.",
    caution: "In diabetic PCOS patients, omit jaggery and drink the herbal decoction plain."
  }
];

// 5. Post-Surgery Clinical Recovery Nutrition Guidelines
const POST_SURGERY_PROTOCOLS = {
  // Common surgical categories
  "cholecystectomy / gallbladder": {
    category: "Gastrointestinal / Abdominal",
    phases: {
      "day 1-3": {
        phaseName: "Clear Liquid & Ultra-Light",
        meals: [
          { name: "Clear Moong Dal Water with Pinch of Cumin", time: "Morning", notes: "Supplies electrolytes and easily absorbable amino acids without stimulating bile." },
          { name: "Tender Coconut Water (Fresh)", time: "Mid-Day", notes: "Natural potassium and hydration to combat postoperative dehydration." },
          { name: "Strained Apple-Stew Puree Broth", time: "Evening", notes: "Gentle pectin soothes gut lining." }
        ]
      },
      "day 4-7": {
        phaseName: "Low-Fat Soft Recovery",
        meals: [
          { name: "Steamed Oats Porridge in Water with 1 tsp Honey", time: "Breakfast", notes: "Zero fat; gentle soluble fiber." },
          { name: "Mashed Yellow Moong Khichdi (Zero Ghee / Zero Oil)", time: "Lunch", notes: "Soft, easily digestible complex carbs." },
          { name: "Lauki (Bottle Gourd) & Carrot Strained Soup", time: "Dinner", notes: "Gentle micronutrients without straining the liver." }
        ]
      },
      "week 2-4": {
        phaseName: "Gradual Fat Re-introduction",
        meals: [
          { name: "Soft Steamed Idli with Mild Tomato Rasam", time: "Breakfast", notes: "Fermented probiotics restore post-antibiotic gut flora." },
          { name: "Soft Brown Rice with Boiled Masoor Dal and Steamed Squash", time: "Lunch", notes: "Limit fat to maximum 3 grams per meal." },
          { name: "Light Tofu / Boiled Egg White Bhurji with 1 Phulka", time: "Dinner", notes: "High protein for surgical incision wound healing." }
        ]
      }
    },
    criticalWarnings: "Your gallbladder has been removed; bile now drips continuously into the duodenum rather than in concentrated bursts. Strictly avoid deep-fried foods, creamy gravies, ghee, butter, and heavy whole-milk dairy for at least 6 weeks.",
    healingSuperfoods: ["Moong dal water", "Lauki soup", "Tender coconut water", "Steamed apples", "Egg whites", "Diluted buttermilk"]
  },

  "cardiac bypass / angioplasty / stent": {
    category: "Cardiovascular",
    phases: {
      "day 1-7": {
        phaseName: "Cardiac Soft Healing (Strict Low Sodium)",
        meals: [
          { name: "Rolled Oats Cooked in Almond Milk with Chia Seeds", time: "Breakfast", notes: "Soluble fiber binds cholesterol; zero cholesterol." },
          { name: "Steamed Vegetable Khichdi with Sendha Namak (<1g/day)", time: "Lunch", notes: "Low vascular tension; prevents fluid retention." },
          { name: "Garlic Infused Steamed Bottle Gourd Soup", time: "Dinner", notes: "Allicin improves endothelial blood flow." }
        ]
      },
      "week 2-4": {
        phaseName: "Arterial Endothelial Protection",
        meals: [
          { name: "Ragi Dosa with Flaxseed-Mint Chutney", time: "Breakfast", notes: "Omega-3 fatty acids prevent platelet aggregation." },
          { name: "Steamed Foxtail Millet with Palak Moong Dal & Grated Beetroot", time: "Lunch", notes: "Dietary nitrates promote nitric oxide release." },
          { name: "Steamed White Fish / Tofu Tikka with Sautéed Greens", time: "Dinner", notes: "Lean protein supports sternum bone healing." }
        ]
      }
    },
    criticalWarnings: "Strictly cap sodium to under 1,500 mg per day. Avoid pickles, papads, canned broths, baking soda, and processed snacks. If taking blood thinners (Warfarin/Acenocoumarol), keep daily Vitamin K (dark greens) intake strictly consistent.",
    healingSuperfoods: ["Garlic", "Flaxseed powder", "Beetroot", "Oats", "Arjun tea", "Walnuts"]
  },

  "c-section / postpartum surgical": {
    category: "Obstetric / Pelvic",
    phases: {
      "day 1-3": {
        phaseName: "Post-Cesarean Gas-Relief & Gentle Nourishment",
        meals: [
          { name: "Warm Ajwain & Fennel Infused Water with Soaked Munakka", time: "Morning", notes: "Eliminates post-anesthesia gas buildup in intestines." },
          { name: "Liquid Moong Dal Soup with a Dash of Hing", time: "Lunch", notes: "Gentle protein without intestinal strain." },
          { name: "Thin Rice & Moong Porridge with Grated Ginger", time: "Dinner", notes: "Warming to abdominal agni." }
        ]
      },
      "day 4-14": {
        phaseName: "Tissue Collagen Repair & Lactation Support",
        meals: [
          { name: "Oats & Gondh (Edible Gum) Halwa (Light Ghee) with Almond Milk", time: "Breakfast", notes: "Pelvic floor strengthening and tissue repair." },
          { name: "Methi Phulka with Dal Palak and Stewed Lauki", time: "Lunch", notes: "Fenugreek supports milk supply; iron supports blood volume." },
          { name: "Light Egg Curry / Paneer Stew with Soft Steamed Rice", time: "Dinner", notes: "High protein for rectus abdominis muscle repair." }
        ]
      }
    },
    criticalWarnings: "Avoid constipation at all costs to prevent strain on abdominal sutures. Drink at least 3 to 3.5 liters of warm water. Avoid raw cruciferous vegetables (raw cabbage, cauliflower) that induce flatulence.",
    healingSuperfoods: ["Ajwain water", "Methi leaves", "Gondh", "Almonds", "Moong dal", "Desi cow ghee in moderation"]
  },

  "general / abdominal / orthopedic": {
    category: "General Post-Surgical Recovery",
    phases: {
      "day 1-3": {
        phaseName: "Liquid to Soft Transition",
        meals: [
          { name: "Coconut Water & Strained Vegetable Broth", time: "Morning", notes: "Restores electrolyte balance." },
          { name: "Soft Mashed Dal & Rice Gruel (Kanji)", time: "Lunch", notes: "Easily absorbed with zero digestive tax." },
          { name: "Warm Turmeric Spiced Pumpkin Soup", time: "Dinner", notes: "Curcumin initiates anti-inflammatory cascade." }
        ]
      },
      "day 4-14": {
        phaseName: "High Protein Tissue & Bone Healing",
        meals: [
          { name: "Sprouted Moong Chilla with Curd", time: "Breakfast", notes: "High bioavailable zinc and amino acids." },
          { name: "Brown Rice with Sambar, Boiled Egg Whites or Tofu & Greens", time: "Lunch", notes: "Provides complete spectrum of essential amino acids." },
          { name: "Grilled Herb Protein with Steamed Broccoli & Carrot Puree", time: "Dinner", notes: "Vitamin C and collagen synergy for incision strength." }
        ]
      }
    },
    criticalWarnings: "Adequate protein intake is required to regenerate excised tissues and maintain immune competence. Stay hydrated and avoid heavy red meats and inflammatory refined sugars.",
    healingSuperfoods: ["Turmeric broth", "Sprouted legumes", "Citrus fruits", "Bone or dal broth", "Moringa"]
  }
};

// Export to global window context for vanilla JS single-page app
window.HealthChefData = {
  FOOD_NUTRITION_DATABASE,
  INGREDIENT_SUBSTITUTIONS,
  CLINICAL_RECIPE_CATALOG,
  NUSKE_REPOSITORY,
  POST_SURGERY_PROTOCOLS
};
