
// data/spotlight2/unit1.js

window.unitData = {
  "unit": "Spotlight on Reading Book 2 Unit 1: Fun at the Night Market",
  "words": [
    // --- 一、單字：中翻英 (10題，無提示) ---
    { "id": "w1", "type": "chinese_to_english", "prompt": "中翻英：夜市", "answer": ["night market", "night markets"] },
    { "id": "w2", "type": "chinese_to_english", "prompt": "中翻英：擁擠的", "answer": ["crowded"] },
    { "id": "w3", "type": "chinese_to_english", "prompt": "中翻英：攤販 / 賣主", "answer": ["vendor", "vendors"] },
    { "id": "w4", "type": "chinese_to_english", "prompt": "中翻英：蒸過的", "answer": ["steamed"] },
    { "id": "w5", "type": "chinese_to_english", "prompt": "中翻英：水煮的", "answer": ["boiled"] },
    { "id": "w6", "type": "chinese_to_english", "prompt": "中翻英：臭豆腐", "answer": ["stinky tofu"] },
    { "id": "w7", "type": "chinese_to_english", "prompt": "中翻英：珍珠奶茶", "answer": ["pearl milk tea"] },
    { "id": "w8", "type": "chinese_to_english", "prompt": "中翻英：濕度 / 潮濕", "answer": ["humidity"] },
    { "id": "w9", "type": "chinese_to_english", "prompt": "中翻英：攤位", "answer": ["stand", "stands"] },
    { "id": "w10", "type": "chinese_to_english", "prompt": "中翻英：嫩的 / 軟嫩的", "answer": ["tender"] },

    // --- 二、單字：文意填空 (15題，給開頭字母提示) ---
    { "id": "w11", "type": "context_fill", "prompt": "文意填空：My mother bought some fresh vegetables from a street v_____.", "answer": ["vendor"] },
    { "id": "w12", "type": "context_fill", "prompt": "文意填空：The department store was c_____ with people during the sale.", "answer": ["crowded"] },
    { "id": "w13", "type": "context_fill", "prompt": "文意填空：Sandy can't stand the h_____ in summer because it makes her sweat.", "answer": ["heat"] },
    { "id": "w14", "type": "context_fill", "prompt": "文意填空：As u_____, he was late for school again today.", "answer": ["usual"] },
    { "id": "w15", "type": "context_fill", "prompt": "文意填空：I always have a b_____ egg and some bacon for breakfast.", "answer": ["boiled"] },
    { "id": "w16", "type": "context_fill", "prompt": "文意填空：The smell of s_____ tofu at the night market is very strong.", "answer": ["stinky"] },
    { "id": "w17", "type": "context_fill", "prompt": "文意填空：Lisa loves drinking p_____ milk tea from Taiwan.", "answer": ["pearl"] },
    { "id": "w18", "type": "context_fill", "prompt": "文意填空：Uncle Joe opens his s_____ at the night market every evening.", "answer": ["stand"] },
    { "id": "w19", "type": "context_fill", "prompt": "文意填空：The fried frog legs are t_____ and taste like chicken.", "answer": ["tender"] },
    { "id": "w20", "type": "context_fill", "prompt": "文意填空：The fried chicken was j_____ and delicious.", "answer": ["juicy"] },
    { "id": "w21", "type": "context_fill", "prompt": "文意填空：I was s_____ after eating so many snacks at the night market.", "answer": ["stuffed"] },
    { "id": "w22", "type": "context_fill", "prompt": "文意填空：We watched the vendors make s_____ dumplings.", "answer": ["steamed"] },
    { "id": "w23", "type": "context_fill", "prompt": "文意填空：Taipei has high h_____ in summer, making people feel hot and sweaty.", "answer": ["humidity"] },
    { "id": "w24", "type": "context_fill", "prompt": "文意填空：The barbecued meat tasted a little too s_____, so I drank a lot of water.", "answer": ["salty"] },
    { "id": "w25", "type": "context_fill", "prompt": "文意填空：I had i_____ noodles for dinner because Mom was too tired to cook.", "answer": ["instant"] }
  ],
  "sentences": [
    // --- 三、句型練習：問答 (5題，文法重點：感官動詞與連綴動詞) ---
    { "id": "s1", "type": "q_and_a", "prompt": "問答題：What did Mark see at the night market? (提示：a street vendor)", "answer": ["He saw a street vendor.", "Mark saw a street vendor."] },
    { "id": "s2", "type": "q_and_a", "prompt": "問答題：How does the milk tea taste? (提示：delicious)", "answer": ["It tastes delicious.", "The milk tea tastes delicious."] },
    { "id": "s3", "type": "q_and_a", "prompt": "問答題：What do fried frog legs taste like? (提示：chicken)", "answer": ["They taste like chicken."] },
    { "id": "s4", "type": "q_and_a", "prompt": "問答題：Why didn't Mom cook dinner yesterday? (提示：felt very tired)", "answer": ["Because she felt very tired.", "Because she was too tired."] },
    { "id": "s5", "type": "q_and_a", "prompt": "問答題：Which item is the most expensive at Uncle Joe's stand? (提示：barbecued beef)", "answer": ["Barbecued beef.", "Barbecued beef is the most expensive."] },

    // --- 四、句型練習：重組 (5題) ---
    { "id": "s6", "type": "unscramble", "prompt": "重組句子：[watches her daughter] [play the violin] [She] [every day.]", "answer": ["She watches her daughter play the violin every day."] },
    { "id": "s7", "type": "unscramble", "prompt": "重組句子：[I saw her] [in her room] [crying] [just now.]", "answer": ["I saw her crying in her room just now."] },
    { "id": "s8", "type": "unscramble", "prompt": "重組句子：[tasted like] [an old eraser.] [The barbecued beef]", "answer": ["The barbecued beef tasted like an old eraser."] },
    { "id": "s9", "type": "unscramble", "prompt": "重組句子：[smell delicious] [Mom's cookies] [in the kitchen.]", "answer": ["Mom's cookies smell delicious in the kitchen."] },
    { "id": "s10", "type": "unscramble", "prompt": "重組句子：[felt hot] [because of the heat] [We both] [and humidity.]", "answer": ["We both felt hot because of the heat and humidity."] },

    // --- 五、句型練習：改寫 (5題) ---
    { "id": "s11", "type": "rewrite", "prompt": "句型改寫：A dog was barking last night. (以 I heard... 為句首改寫)", "answer": ["I heard a dog barking last night.", "I heard a dog bark last night."] },
    { "id": "s12", "type": "rewrite", "prompt": "句型改寫：She has a terrible singing voice. (以 Her...sounds... 改寫)", "answer": ["Her singing voice sounds terrible.", "Her voice sounds terrible."] },
    { "id": "s13", "type": "rewrite", "prompt": "句型改寫：My cat chased a butterfly this morning. (以 I watched... 為句首改寫)", "answer": ["I watched my cat chase a butterfly this morning.", "I watched my cat chasing a butterfly this morning."] },
    { "id": "s14", "type": "rewrite", "prompt": "句型改寫：The barbecued beef tasted like an old eraser. (依劃線部分 an old eraser 造原問句)", "answer": ["What did the barbecued beef taste like?"] },
    { "id": "s15", "type": "rewrite", "prompt": "句型改寫：Mom's cookies smell delicious. (依劃線部分 delicious 造原問句)", "answer": ["How do Mom's cookies smell?"] }
  ],

  // --- 六、克漏字 (依 Uncle Joe's Stand 故事，無音檔) ---
  "cloze": {
    "title": "Cloze Test: Uncle Joe's Stand",
    "hasAudio": false,
    "article": "Uncle Joe is a vendor. He sells delicious snacks at a night market near my school. Every night from Tuesday to Sunday, Uncle Joe opens his stand at the night market and puts up the menu. On his menu, steamed buns taste sweet and soft. Boiled noodles taste fresh and spicy. Barbecued beef is juicy and very delicious, and fried frog legs are (1)_____ and chicken-like. Many students love to visit his stand because the food is cheap and tastes (2)_____.",
    "questions": [
      { "id": "c1", "number": "(1)", "options": ["stinky", "tender", "crowded", "boiled"], "answer": ["tender"] },
      { "id": "c2", "number": "(2)", "options": ["terrible", "salty", "delicious", "hard"], "answer": ["delicious"] }
    ]
  },

  // --- 七、短篇閱讀理解 (依 Instant Noodles for Dinner 文章，無音檔) ---
  "reading": {
    "title": "Reading Comprehension: Dinner at the Night Market",
    "hasAudio": false,
    "article": "I had instant noodles for dinner yesterday because Mom was too tired to cook. I boiled some water and put in the noodles. It tasted terrible, so I went to the night market to get some snacks instead. I bought some of Mom's favorite food, which are steamed buns and roast beef. Then, I saw a vendor selling barbecued meat at his stand. I felt very hungry, so I sat down to have some pork. It was juicy but a little too salty. Before I finished eating, Mom called me on the phone. She was still waiting for her dinner!",
    "questions": [
      {
        "id": "r1",
        "prompt": "1. Why didn't Mom cook dinner?",
        "options": [
          "Because she didn't have time",
          "Because she felt very tired",
          "Because she wasn't hungry",
          "Because she ate at the night market"
        ],
        "answer": ["Because she felt very tired"]
      },
      {
        "id": "r2",
        "prompt": "2. How did the barbecued pork taste?",
        "options": [
          "It tasted terrible.",
          "It tasted like erasers.",
          "It tasted sweet.",
          "It tasted salty."
        ],
        "answer": ["It tasted salty."]
      },
      {
        "id": "r3",
        "prompt": "3. Which of the following statements is true?",
        "options": [
          "The instant noodles tasted great.",
          "The writer only bought his own dinner.",
          "The writer bought steamed buns and roast beef.",
          "The writer's mom went to the market with him."
        ],
        "answer": ["The writer bought steamed buns and roast beef."]
      }
    ]
  }
};
