// data/spotlight1/unit12.js

window.unitData = {
  "unit": "Spotlight on Reading Book 1 Unit 12: A Bad Dream",
  "words": [
    // --- 一、單字：中翻英 (10題，無提示) ---
    { "id": "w1", "type": "chinese_to_english", "prompt": "中翻英：發燒", "answer": ["fever"] },
    { "id": "w2", "type": "chinese_to_english", "prompt": "中翻英：疼痛的 / 酸痛的", "answer": ["sore"] },
    { "id": "w3", "type": "chinese_to_english", "prompt": "中翻英：藥物", "answer": ["medicine"] },
    { "id": "w4", "type": "chinese_to_english", "prompt": "中翻英：睡著的", "answer": ["asleep"] },
    { "id": "w5", "type": "chinese_to_english", "prompt": "中翻英：怪獸", "answer": ["monster", "monsters"] },
    { "id": "w6", "type": "chinese_to_english", "prompt": "中翻英：流汗", "answer": ["sweat", "sweating"] },
    { "id": "w7", "type": "chinese_to_english", "prompt": "中翻英：抓住 / 抓取", "answer": ["grab", "grabbed"] },
    { "id": "w8", "type": "chinese_to_english", "prompt": "中翻英：咳嗽", "answer": ["cough", "coughing"] },
    { "id": "w9", "type": "chinese_to_english", "prompt": "中翻英：巨人", "answer": ["giant"] },
    { "id": "w10", "type": "chinese_to_english", "prompt": "中翻英：日記", "answer": ["diary"] },

    // --- 二、單字：文意填空 (15題，給開頭字母提示) ---
    { "id": "w11", "type": "context_fill", "prompt": "文意填空：I have a terrible headache. You can take some m_____.", "answer": ["medicine"] },
    { "id": "w12", "type": "context_fill", "prompt": "文意填空：Mary can't talk now. She has a s_____ throat.", "answer": ["sore"] },
    { "id": "w13", "type": "context_fill", "prompt": "文意填空：The movie is about an ugly big m_____. It eats people.", "answer": ["monster"] },
    { "id": "w14", "type": "context_fill", "prompt": "文意填空：Dave was c_____ very hard. He needed to drink more water.", "answer": ["coughing"] },
    { "id": "w15", "type": "context_fill", "prompt": "文意填空：Michael was jogging in the park. He was s_____ a lot.", "answer": ["sweating"] },
    { "id": "w16", "type": "context_fill", "prompt": "文意填空：Mike caught a cold and was having a high f_____.", "answer": ["fever"] },
    { "id": "w17", "type": "context_fill", "prompt": "文意填空：After taking medicine, Mike fell a_____ in his bed.", "answer": ["asleep"] },
    { "id": "w18", "type": "context_fill", "prompt": "文意填空：The stranger g_____ Mike's arm in his dream.", "answer": ["grabbed"] },
    { "id": "w19", "type": "context_fill", "prompt": "文意填空：Sally wrote a dream d_____ to show it to her friends.", "answer": ["diary"] },
    { "id": "w20", "type": "context_fill", "prompt": "文意填空：I was running away from a g_____ in my dream.", "answer": ["giant"] },
    { "id": "w21", "type": "context_fill", "prompt": "文意填空：I was so scared when that robber g_____ my bag.", "answer": ["grabbed"] },
    { "id": "w22", "type": "context_fill", "prompt": "文意填空：Erica was t_____ everyone about her dream all morning.", "answer": ["telling"] },
    { "id": "w23", "type": "context_fill", "prompt": "文意填空：Jim fell over a r_____ when he was running away.", "answer": ["rock"] },
    { "id": "w24", "type": "context_fill", "prompt": "文意填空：Jim was g_____ that it was just a bad dream.", "answer": ["glad"] },
    { "id": "w25", "type": "context_fill", "prompt": "文意填空：His head was a_____ because of the bad cold.", "answer": ["aching"] }
  ],
  "sentences": [
    // --- 三、句型練習：問答 (5題，文法重點：過去進行式 Past Continuous) ---
    { "id": "s1", "type": "q_and_a", "prompt": "問答題：What was Rita doing at seven yesterday morning? (提示：drink juice)", "answer": ["She was drinking juice.", "Rita was drinking juice."] },
    { "id": "s2", "type": "q_and_a", "prompt": "問答題：Were Richard's parents walking the dog at ten o'clock last night? (提示：簡答肯定)", "answer": ["Yes, they were."] },
    { "id": "s3", "type": "q_and_a", "prompt": "問答題：What was Lily's mother doing two hours ago? (提示：wash dishes)", "answer": ["She was washing dishes."] },
    { "id": "s4", "type": "q_and_a", "prompt": "問答題：What were you doing when Mom cooked in the kitchen? (提示：do homework)", "answer": ["I was doing my homework."] },
    { "id": "s5", "type": "q_and_a", "prompt": "問答題：What was Kate doing this morning? (提示：watch TV)", "answer": ["She was watching TV."] },

    // --- 四、句型練習：重組 (5題) ---
    { "id": "s6", "type": "unscramble", "prompt": "重組句子：[watching TV.] [was] [Jason] [at seven]", "answer": ["Jason was watching TV at seven."] },
    { "id": "s7", "type": "unscramble", "prompt": "重組句子：[basketball] [was playing] [Jack] [when I ate pizza.]", "answer": ["Jack was playing basketball when I ate pizza."] },
    { "id": "s8", "type": "unscramble", "prompt": "重組句子：[raining] [was] [It] [this morning.] [at seven o'clock]", "answer": ["It was raining at seven o'clock this morning."] },
    { "id": "s9", "type": "unscramble", "prompt": "重組句子：[chasing after Michael] [A monster] [was] [in his dream.]", "answer": ["A monster was chasing after Michael in his dream."] },
    { "id": "s10", "type": "unscramble", "prompt": "重組句子：[sweating] [was] [She] [like a pig in her dream.]", "answer": ["She was sweating like a pig in her dream."] },

    // --- 五、句型練習：改寫 (5題) ---
    { "id": "s11", "type": "rewrite", "prompt": "句型改寫：Jill was studying. (改為否定句)", "answer": ["Jill was not studying.", "Jill wasn't studying."] },
    { "id": "s12", "type": "rewrite", "prompt": "句型改寫：I was playing the violin when Jay called. (用 I was playing tennis when he jumped rope 替換練習)", "answer": ["I was playing tennis when he jumped rope."] },
    { "id": "s13", "type": "rewrite", "prompt": "句型改寫：Was Nelson swimming at six this morning? (肯定簡答)", "answer": ["Yes, he was."] },
    { "id": "s14", "type": "rewrite", "prompt": "句型改寫：Tom and Jason were playing tennis in the gym. (依劃線部分 playing tennis in the gym 造 Wh- 原問句)", "answer": ["Where were Tom and Jason playing tennis?", "What were Tom and Jason doing in the gym?"] },
    { "id": "s15", "type": "rewrite", "prompt": "句型改寫：Who was Jason visiting last Tuesday? (答句：his grandma)", "answer": ["He was visiting his grandma."] }
  ],

  // --- 六、克漏字 (依 Erica's Monster Dream 故事，無音檔) ---
  "cloze": {
    "title": "Cloze Test: Erica's Monster Dream",
    "hasAudio": false,
    "article": "Erica (1)_____ everyone about her dream all morning. In her dream, she was a scientist. She created many little monsters. She wrote about them in her diary. She was (2)_____ excited when she created the monsters. But then, she got scared.\nThe monsters were jumping up to the tables and hopping everywhere in her house. Some monsters broke her window. They also broke the chairs. (3)_____ She was cleaning up after the monsters. She (4)_____ like a pig in her dream.",
    "questions": [
      { "id": "c1", "number": "(1)", "options": ["were telling", "was telling", "telling", "tell"], "answer": ["was telling"] },
      { "id": "c2", "number": "(2)", "options": ["many", "much", "not", "so"], "answer": ["so"] },
      { "id": "c3", "number": "(3)", "options": ["They were cute monsters.", "They swept the floor.", "They were not good monsters.", "They suddenly woke up."], "answer": ["They were not good monsters."] },
      { "id": "c4", "number": "(4)", "options": ["was sweating", "was sweat", "sweats", "did sweating"], "answer": ["was sweating"] }
    ]
  },

  // --- 七、短篇閱讀理解 (依 Jim's Fever & Dream 文章，無音檔) ---
  "reading": {
    "title": "Reading Comprehension: Jim's Fever and Dream",
    "hasAudio": false,
    "article": "Jim had a very high fever last night. He also had a sore throat. He took some medicine and went to bed. He fell asleep very soon and had a dream. He was dreaming about a monster. The monster was trying to catch him. It wanted to eat him. Jim was very scared. The monster was getting closer and closer. Jim fell over a rock when he was running away. Then, Jim woke up. It was 6 a.m. He was sweating. His T-shirt was all wet. Jim felt better after he woke up. He was glad that it was just a dream. His fever was gone. He didn't have a sore throat anymore.",
    "questions": [
      {
        "id": "r1",
        "prompt": "1. What happened to Jim last night?",
        "options": [
          "He had a runny nose.",
          "He fell over a rock.",
          "He had a fever.",
          "He saw a huge monster."
        ],
        "answer": ["He had a fever."]
      },
      {
        "id": "r2",
        "prompt": "2. Why was the monster going after Jim?",
        "options": [
          "It wanted to eat him.",
          "It wanted to play with him.",
          "It was having a fever.",
          "It wanted to help him."
        ],
        "answer": ["It wanted to eat him."]
      },
      {
        "id": "r3",
        "prompt": "3. When did Jim wake up from his dream?",
        "options": [
          "When he fell off his bed",
          "When the monster started to run after him",
          "Last night",
          "This morning"
        ],
        "answer": ["This morning"]
      }
    ]
  }
};
