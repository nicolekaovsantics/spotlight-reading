// data/spotlight1/unit8.js

window.unitData = {
  "unit": "Spotlight on Reading Book 1 Unit 8: My Meals",
  "words": [
    // --- 一、單字：中翻英 (10題，無提示) ---
    { "id": "w1", "type": "chinese_to_english", "prompt": "中翻英：自助餐廳 / 食堂", "answer": ["cafeteria"] },
    { "id": "w2", "type": "chinese_to_english", "prompt": "中翻英：主廚 / 廚師", "answer": ["chef"] },
    { "id": "w3", "type": "chinese_to_english", "prompt": "中翻英：花椰菜", "answer": ["broccoli"] },
    { "id": "w4", "type": "chinese_to_english", "prompt": "中翻英：牛肉", "answer": ["beef"] },
    { "id": "w5", "type": "chinese_to_english", "prompt": "中翻英：蔬菜", "answer": ["vegetable", "vegetables"] },
    { "id": "w6", "type": "chinese_to_english", "prompt": "中翻英：義大利麵", "answer": ["spaghetti"] },
    { "id": "w7", "type": "chinese_to_english", "prompt": "中翻英：有營養的", "answer": ["nutritious"] },
    { "id": "w8", "type": "chinese_to_english", "prompt": "中翻英：吃飽的 / 塞滿的", "answer": ["stuffed"] },
    { "id": "w9", "type": "chinese_to_english", "prompt": "中翻英：美味的", "answer": ["delicious"] },
    { "id": "w10", "type": "chinese_to_english", "prompt": "中翻英：湯", "answer": ["soup"] },

    // --- 二、單字：文意填空 (15題，給開頭字母提示) ---
    { "id": "w11", "type": "context_fill", "prompt": "文意填空：I'm hungry. I'm going to the school c_____ to buy lunch.", "answer": ["cafeteria"] },
    { "id": "w12", "type": "context_fill", "prompt": "文意填空：It's time for dinner. I want to have some s_____.", "answer": ["spaghetti"] },
    { "id": "w13", "type": "context_fill", "prompt": "文意填空：I go to the supermarket to buy some v_____ and meat.", "answer": ["vegetables"] },
    { "id": "w14", "type": "context_fill", "prompt": "文意填空：Linda cooks at a famous restaurant. She is a c_____.", "answer": ["chef"] },
    { "id": "w15", "type": "context_fill", "prompt": "文意填空：Emma eats meat, vegetables, and fruit. She has a n_____ diet.", "answer": ["nutritious"] },
    { "id": "w16", "type": "context_fill", "prompt": "文意填空：Green b_____ is good for your health.", "answer": ["broccoli"] },
    { "id": "w17", "type": "context_fill", "prompt": "文意填空：My father likes b_____ steak for dinner.", "answer": ["beef"] },
    { "id": "w18", "type": "context_fill", "prompt": "文意填空：I ate too much food at lunch, so I feel s_____ now.", "answer": ["stuffed"] },
    { "id": "w19", "type": "context_fill", "prompt": "文意填空：Joy o_____ a small restaurant and has many special deals.", "answer": ["owns"] },
    { "id": "w20", "type": "context_fill", "prompt": "文意填空：Jerry buys l_____, tomatoes, and chicken to make sandwiches.", "answer": ["lettuce"] },
    { "id": "w21", "type": "context_fill", "prompt": "文意填空：I'm thirsty. I want to h_____ some water.", "answer": ["have"] },
    { "id": "w22", "type": "context_fill", "prompt": "文意填空：Tina has f_____ rice for lunch today.", "answer": ["fried"] },
    { "id": "w23", "type": "context_fill", "prompt": "文意填空：What do you have in your d_____?", "answer": ["drawer"] },
    { "id": "w24", "type": "context_fill", "prompt": "文意填空：Chicken sandwiches are 30% o_____ during lunch hours.", "answer": ["off"] },
    { "id": "w25", "type": "context_fill", "prompt": "文意填空：Jerry serves the sandwich on a clean p_____.", "answer": ["plate"] }
  ],
  "sentences": [
    // --- 三、句型練習：問答 (5題，文法重點：Have / Has) ---
    { "id": "s1", "type": "q_and_a", "prompt": "問答題：What does the doll have? (提示：long legs)", "answer": ["The doll has long legs.", "It has long legs."] },
    { "id": "s2", "type": "q_and_a", "prompt": "問答題：Does Lucas have breakfast every day? (提示：簡答肯定)", "answer": ["Yes, he does."] },
    { "id": "s3", "type": "q_and_a", "prompt": "問答題：What does Jimmy have on Monday? (提示：pork and salad)", "answer": ["He has pork and a salad on Monday.", "He has pork and salad."] },
    { "id": "s4", "type": "q_and_a", "prompt": "問答題：Do you have any scissors on your desk? (提示：簡答肯定)", "answer": ["Yes, I do."] },
    { "id": "s5", "type": "q_and_a", "prompt": "問答題：Does he have shrimp? (提示：沒有 / 他有螃蟹)", "answer": ["No, he doesn't. He has some crabs."] },

    // --- 四、句型練習：重組 (5題) ---
    { "id": "s6", "type": "unscramble", "prompt": "重組句子：[best] [cafeteria.] [has] [Our] [school] [the]", "answer": ["Our school has the best cafeteria."] },
    { "id": "s7", "type": "unscramble", "prompt": "重組句子：[chef] [delicious] [for us.] [cooks] [The] [food]", "answer": ["The chef cooks delicious food for us."] },
    { "id": "s8", "type": "unscramble", "prompt": "重組句子：[is] [Broccoli] [for you.] [good] [nutritious] [food]", "answer": ["Broccoli is nutritious food good for you.", "Broccoli is good nutritious food for you."] },
    { "id": "s9", "type": "unscramble", "prompt": "重組句子：[doesn't] [any] [have] [paper.] [Jeffery]", "answer": ["Jeffery doesn't have any paper."] },
    { "id": "s10", "type": "unscramble", "prompt": "重組句子：[have] [in] [What] [your bag?] [do you]", "answer": ["What do you have in your bag?"] },

    // --- 五、句型練習：改寫 (5題) ---
    { "id": "s11", "type": "rewrite", "prompt": "句型改寫：Kate has some toys. (改為否定句：Jeffery...)", "answer": ["Jeffery doesn't have any toys.", "Jeffery does not have any toys."] },
    { "id": "s12", "type": "rewrite", "prompt": "句型改寫：Mindy has hamburgers for lunch. (改為否定句)", "answer": ["Mindy doesn't have hamburgers for lunch.", "Mindy does not have hamburgers for lunch."] },
    { "id": "s13", "type": "rewrite", "prompt": "句型改寫：Amy has paper. (改為一般疑問句)", "answer": ["Does Amy have any paper?", "Does Amy have paper?"] },
    { "id": "s14", "type": "rewrite", "prompt": "句型改寫：I have some change in my pocket. (依劃線部分 change 造問句)", "answer": ["What do you have in your pocket?"] },
    { "id": "s15", "type": "rewrite", "prompt": "句型改寫：I have glue. I don't have paper. (用 but 合併)", "answer": ["I have glue, but I don't have any paper.", "I have glue, but I don't have paper."] }
  ],

  // --- 六、克漏字 (依 Tina's Breakfast/Lunch，無音檔) ---
  "cloze": {
    "title": "Cloze Test: Healthy Meals",
    "hasAudio": false,
    "article": "Tina likes to have breakfast at home. Her mom (1)_____ breakfast for her every morning. Today, Tina has some bread and fresh juice. Tina never misses breakfast. She wants to grow tall and strong.\nAt noon, Tina has lunch with her classmates and teachers at the school (2)_____. They have many different choices. There are sandwiches, chicken soup, (3)_____, chicken, pork, and fish. Tina has some chicken and a sandwich. (4)_____, such as broccoli and spinach. Tina has a very healthy diet.",
    "questions": [
      { "id": "c1", "number": "(1)", "options": ["takes", "cooks", "washes", "brushes"], "answer": ["cooks"] },
      { "id": "c2", "number": "(2)", "options": ["theater", "office", "hospital", "cafeteria"], "answer": ["cafeteria"] },
      { "id": "c3", "number": "(3)", "options": ["spaghetti", "offers", "menu", "order"], "answer": ["spaghetti"] },
      { "id": "c4", "number": "(4)", "options": ["She also likes rice and noodles", "She also eats a lot of vegetables", "She doesn't have any meat", "She doesn't want to eat fruits"], "answer": ["She also eats a lot of vegetables"] }
    ]
  },

  // --- 七、短篇閱讀理解 (依 Jerry's Chicken Sandwiches 文章，無音檔) ---
  "reading": {
    "title": "Reading Comprehension: Best Chicken Sandwiches",
    "hasAudio": false,
    "article": "What would you like for lunch? How about a nutritious chicken sandwich? Our head chef, Jerry, makes the best chicken sandwiches in the world!\n\nHere's what he does: He buys toast from Julie's Bakery. Then, he buys lettuce, tomatoes, butter, and chicken from a supermarket. He slices the tomatoes and chicken, and he carefully spreads butter on the toast. Then, he puts the lettuce, tomato, and chicken between two slices of toast. He serves the sandwich on a clean plate. Jerry wants everything to be fresh, clean, and delicious. Come to our restaurant and enjoy a great meal! Chicken sandwiches are 30% off during lunch hours from 11:30 a.m. to 1:00 p.m.!",
    "questions": [
      {
        "id": "r1",
        "prompt": "1. What does Jerry have in his sandwich?",
        "options": [
          "Lettuce and fish",
          "Tomatoes and chicken",
          "Chicken and broccoli",
          "Chicken and beef"
        ],
        "answer": ["Tomatoes and chicken"]
      },
      {
        "id": "r2",
        "prompt": "2. When do they offer a special price on the sandwich?",
        "options": ["In the afternoon", "Every night", "At lunch time", "On the weekend"],
        "answer": ["At lunch time"]
      },
      {
        "id": "r3",
        "prompt": "3. Which of the following statements is NOT true?",
        "options": [
          "Jerry buys toast from Julie's Bakery.",
          "The writer wants people to come to their restaurant.",
          "The sandwiches are given to people on a clean plate.",
          "Jerry is the best waiter at the restaurant."
        ],
        "answer": ["Jerry is the best waiter at the restaurant."]
      }
    ]
  }
};
