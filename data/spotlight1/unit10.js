// data/spotlight1/unit10.js

window.unitData = {
  "unit": "Spotlight on Reading Book 1 Unit 10: At the Pet Store",
  "words": [
    // --- 一、單字：中翻英 (10題，無提示) ---
    { "id": "w1", "type": "chinese_to_english", "prompt": "中翻英：動物", "answer": ["animal", "animals"] },
    { "id": "w2", "type": "chinese_to_english", "prompt": "中翻英：陸地", "answer": ["land"] },
    { "id": "w3", "type": "chinese_to_english", "prompt": "中翻英：金黃色的", "answer": ["golden"] },
    { "id": "w4", "type": "chinese_to_english", "prompt": "中翻英：幼犬 / 小狗", "answer": ["puppy", "puppies"] },
    { "id": "w5", "type": "chinese_to_english", "prompt": "中翻英：柔軟的", "answer": ["soft"] },
    { "id": "w6", "type": "chinese_to_english", "prompt": "中翻英：視線 / 景象", "answer": ["sight"] },
    { "id": "w7", "type": "chinese_to_english", "prompt": "中翻英：毛皮", "answer": ["fur"] },
    { "id": "w8", "type": "chinese_to_english", "prompt": "中翻英：迷 / 粉絲", "answer": ["fan", "fans"] },
    { "id": "w9", "type": "chinese_to_english", "prompt": "中翻英：烏龜", "answer": ["turtle", "turtles"] },
    { "id": "w10", "type": "chinese_to_english", "prompt": "中翻英：活力充沛的", "answer": ["energetic"] },

    // --- 二、單字：文意填空 (15題，給開頭字母提示) ---
    { "id": "w11", "type": "context_fill", "prompt": "文意填空：I am at the City Zoo. I can see many wild a_____.", "answer": ["animals"] },
    { "id": "w12", "type": "context_fill", "prompt": "文意填空：I'm not a big f_____ of cats. I like dogs better.", "answer": ["fan"] },
    { "id": "w13", "type": "context_fill", "prompt": "文意填空：This sweater is s_____ and warm to wear.", "answer": ["soft"] },
    { "id": "w14", "type": "context_fill", "prompt": "文意填空：The cat's f_____ is very clean and smooth.", "answer": ["fur"] },
    { "id": "w15", "type": "context_fill", "prompt": "文意填空：The golden p_____ is very small and cute.", "answer": ["puppy"] },
    { "id": "w16", "type": "context_fill", "prompt": "文意填空：I was in love with the kitten at first s_____.", "answer": ["sight"] },
    { "id": "w17", "type": "context_fill", "prompt": "文意填空：T_____ are water animals that move very slowly.", "answer": ["Turtles"] },
    { "id": "w18", "type": "context_fill", "prompt": "文意填空：Frogs are chubby and n_____ in the rainy season.", "answer": ["noisy"] },
    { "id": "w19", "type": "context_fill", "prompt": "文意填空：Dogs are e_____ animals that need a lot of playtime.", "answer": ["energetic"] },
    { "id": "w20", "type": "context_fill", "prompt": "文意填空：Peter was very p_____ of his frog at the pet show.", "answer": ["proud"] },
    { "id": "w21", "type": "context_fill", "prompt": "文意填空：The frog jumped from the chair into the p_____.", "answer": ["pond"] },
    { "id": "w22", "type": "context_fill", "prompt": "文意填空：Where w_____ you three hours ago?", "answer": ["were"] },
    { "id": "w23", "type": "context_fill", "prompt": "文意填空：Helen w_____ in Taipei last week.", "answer": ["was"] },
    { "id": "w24", "type": "context_fill", "prompt": "文意填空：He couldn't take his eyes o_____ the cute turtles.", "answer": ["off"] },
    { "id": "w25", "type": "context_fill", "prompt": "文意填空：We had many pets three years a_____.", "answer": ["ago"] }
  ],
  "sentences": [
    // --- 三、句型練習：問答 (5題，文法重點：be 動詞過去式 was / were) ---
    { "id": "s1", "type": "q_and_a", "prompt": "問答題：Were his daughters in Hong Kong last Christmas? (提示：簡答肯定)", "answer": ["Yes, they were."] },
    { "id": "s2", "type": "q_and_a", "prompt": "問答題：Where was Helen last week? (提示：Taipei)", "answer": ["She was in Taipei last week.", "She was in Taipei."] },
    { "id": "s3", "type": "q_and_a", "prompt": "問答題：How was Eric this morning? (提示：fine/good)", "answer": ["He was fine this morning.", "He was fine.", "He was good."] },
    { "id": "s4", "type": "q_and_a", "prompt": "問答題：Was Henry sad just now? (提示：簡答否定)", "answer": ["No, he wasn't.", "No, he was not."] },
    { "id": "s5", "type": "q_and_a", "prompt": "問答題：Where was the frog at the end? (提示：in the pond)", "answer": ["It was in the pond.", "The frog was in the pond."] },

    // --- 四、句型練習：重組 (5題) ---
    { "id": "s6", "type": "unscramble", "prompt": "重組句子：[at a pet store] [I] [was] [last week.]", "answer": ["I was at a pet store last week."] },
    { "id": "s7", "type": "unscramble", "prompt": "重組句子：[soft.] [was] [fur] [Its] [so]", "answer": ["Its fur was so soft."] },
    { "id": "s8", "type": "unscramble", "prompt": "重組句子：[busy] [were] [this morning.] [The students]", "answer": ["The students were busy this morning."] },
    { "id": "s9", "type": "unscramble", "prompt": "重組句子：[his eyes] [He] [can't take] [off the turtles.]", "answer": ["He can't take his eyes off the turtles."] },
    { "id": "s10", "type": "unscramble", "prompt": "重組句子：[at the party] [were there] [How many people] [last night?]", "answer": ["How many people were there at the party last night?"] },

    // --- 五、句型練習：改寫 (5題) ---
    { "id": "s11", "type": "rewrite", "prompt": "句型改寫：How old are you? (加入 at that time 改寫句型)", "answer": ["How old were you at that time?"] },
    { "id": "s12", "type": "rewrite", "prompt": "句型改寫：They are not classmates. (加入 three months ago 改寫句型)", "answer": ["They were not classmates three months ago.", "They weren't classmates three months ago."] },
    { "id": "s13", "type": "rewrite", "prompt": "句型改寫：I was at the lake before 3 o'clock. (改以 We... 為句首)", "answer": ["We were at the lake before 3 o'clock."] },
    { "id": "s14", "type": "rewrite", "prompt": "句型改寫：Helen is in her room. (加入 just now 改寫句型)", "answer": ["Helen was in her room just now."] },
    { "id": "s15", "type": "rewrite", "prompt": "句型改寫：I was at the supermarket the other day. (依劃線部分 at the supermarket 提示造原問句)", "answer": ["Where were you the other day?"] }
  ],

  // --- 六、克漏字 (依 My Pets Three Years Ago，無音檔) ---
  "cloze": {
    "title": "Cloze Test: Pets Three Years Ago",
    "hasAudio": false,
    "article": "We had many different kinds of pets three years (1)_____. Our pets were very cute. (2)_____ There was a cute dog in our yard. Its name was Bob. Bob was a golden dog. It was a friendly dog. My friends were very happy to play with Bob. We also had a water animal, a (3)_____. It was slow and funny. These two pets were best friends. They were together all the time. We also had a cat. Its (4)_____ was soft. But the cat wasn't friendly.",
    "questions": [
      { "id": "c1", "number": "(1)", "options": ["before", "ago", "last", "then"], "answer": ["ago"] },
      { "id": "c2", "number": "(2)", "options": ["They never played with us.", "They liked to fight with each other.", "They were a part of our family.", "They got angry all the time."], "answer": ["They were a part of our family."] },
      { "id": "c3", "number": "(3)", "options": ["dog", "rabbit", "kitten", "turtle"], "answer": ["turtle"] },
      { "id": "c4", "number": "(4)", "options": ["food", "sight", "fur", "animal"], "answer": ["fur"] }
    ]
  },

  // --- 七、短篇閱讀理解 (依 Pet Show Frog 文章，無音檔) ---
  "reading": {
    "title": "Reading Comprehension: Peter's Frog at the Pet Show",
    "hasAudio": false,
    "article": "There was a pet show at school last Monday. Everybody in class showed their pets. Peter was very proud of his frog. The frog was very round and quite cute. The frog made loud noises. The weather was too hot. It wasn't happy.\n\nPeter was not able to hold the frog still. The frog wanted to go back into the water. It was on the table and then on the chair. At last, the frog was gone. Jess saw it outside. The frog was in the pond.",
    "questions": [
      {
        "id": "r1",
        "prompt": "1. What was there at school last Monday?",
        "options": [
          "A school field trip",
          "A pajamas show",
          "A pet show",
          "A school fair"
        ],
        "answer": ["A pet show"]
      },
      {
        "id": "r2",
        "prompt": "2. According to the passage, which of the following statements is NOT true?",
        "options": [
          "Peter was proud of his frog.",
          "The frog was chubby.",
          "Peter couldn't keep the frog in his hands.",
          "The frog stayed at Peter's side."
        ],
        "answer": ["The frog stayed at Peter's side."]
      },
      {
        "id": "r3",
        "prompt": "3. Where was the frog at the end?",
        "options": [
          "On the table",
          "In the pond",
          "On the chair",
          "At the pet store"
        ],
        "answer": ["In the pond"]
      }
    ]
  }
};
