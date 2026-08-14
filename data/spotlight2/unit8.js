// data/spotlight2/unit8.js

window.unitData = {
  "unit": "Spotlight on Reading Book 2 Unit 8: School Subjects",
  "words": [
    // --- 一、單字：中翻英 (10題，無提示) ---
    { "id": "w1", "type": "chinese_to_english", "prompt": "中翻英：學科 / 科目", "answer": ["subject", "subjects"] },
    { "id": "w2", "type": "chinese_to_english", "prompt": "中翻英：此外 / 而且", "answer": ["besides"] },
    { "id": "w3", "type": "chinese_to_english", "prompt": "中翻英：困難 / 麻煩", "answer": ["trouble"] },
    { "id": "w4", "type": "chinese_to_english", "prompt": "中翻英：理解 / 明白", "answer": ["understand", "understanding"] },
    { "id": "w5", "type": "chinese_to_english", "prompt": "中翻英：得分 / 成績", "answer": ["score", "scores"] },
    { "id": "w6", "type": "chinese_to_english", "prompt": "中翻英：秘密", "answer": ["secret", "secrets"] },
    { "id": "w7", "type": "chinese_to_english", "prompt": "中翻英：記得", "answer": ["remember"] },
    { "id": "w8", "type": "chinese_to_english", "prompt": "中翻英：預習", "answer": ["preview"] },
    { "id": "w9", "type": "chinese_to_english", "prompt": "中翻英：複習", "answer": ["review"] },
    { "id": "w10", "type": "chinese_to_english", "prompt": "中翻英：不再", "answer": ["no longer"] },

    // --- 二、單字：文意填空 (15題，給開頭字母提示) ---
    { "id": "w11", "type": "context_fill", "prompt": "文意填空：History is one of Debbie's favorite s_____ in school.", "answer": ["subjects"] },
    { "id": "w12", "type": "context_fill", "prompt": "文意填空：Don't forget to r_____ today's lessons after school.", "answer": ["review"] },
    { "id": "w13", "type": "context_fill", "prompt": "文意填空：Sam talks too fast, so I can hardly u_____ what he is saying.", "answer": ["understand"] },
    { "id": "w14", "type": "context_fill", "prompt": "文意填空：The final s_____ of the soccer match was 3 to 1.", "answer": ["score"] },
    { "id": "w15", "type": "context_fill", "prompt": "文意填空：Don't tell Amy about the surprise party because she is bad at keeping s_____.", "answer": ["secrets"] },
    { "id": "w16", "type": "context_fill", "prompt": "文意填空：Ted had t_____ understanding the math teacher in class.", "answer": ["trouble"] },
    { "id": "w17", "type": "context_fill", "prompt": "文意填空：Peter advised Ted to p_____ before class and review after class.", "answer": ["preview"] },
    { "id": "w18", "type": "context_fill", "prompt": "文意填空：Ted is n_____ longer afraid to ask questions in math class.", "answer": ["no"] },
    { "id": "w19", "type": "context_fill", "prompt": "文意填空：Students take an e_____ in every subject every Friday.", "answer": ["exam"] },
    { "id": "w20", "type": "context_fill", "prompt": "文意填空：Mrs. Lin wants her students to think outside the b_____.", "answer": ["box"] },
    { "id": "w21", "type": "context_fill", "prompt": "文意填空：Making us think i_____ is one of her main teaching goals.", "answer": ["independently"] },
    { "id": "w22", "type": "context_fill", "prompt": "文意填空：She gives lots of e_____ to help us understand difficult concepts.", "answer": ["examples"] },
    { "id": "w23", "type": "context_fill", "prompt": "文意填空：Mrs. Lin never loses p_____ when students ask questions.", "answer": ["patience"] },
    { "id": "w24", "type": "context_fill", "prompt": "文意填空：We have to be c_____ and open-minded to find solutions.", "answer": ["creative"] },
    { "id": "w25", "type": "context_fill", "prompt": "文意填空：I left the trash by the door; r_____ to take it out tonight.", "answer": ["remember"] }
  ],
  "sentences": [
    // --- 三、句型練習：問答 (5題，文法重點：動名詞 V-ing 用法) ---
    { "id": "s1", "type": "q_and_a", "prompt": "問答題：What subjects is the girl studying today in the picture? (提示：Math, English, Chinese)", "answer": ["She is studying Math, English, and Chinese.", "Math, English, and Chinese."] },
    { "id": "s2", "type": "q_and_a", "prompt": "問答題：What is Peter's secret to getting good grades in math? (提示：preview, review, ask questions)", "answer": ["Preview before class, review after class, and ask questions.", "Preview, review, and never be shy to ask questions."] },
    { "id": "s3", "type": "q_and_a", "prompt": "問答題：What subject does Kevin spend the longest time studying? (提示：English)", "answer": ["He spends the longest time studying English.", "English."] },
    { "id": "s4", "type": "q_and_a", "prompt": "問答題：Which subject has the highest score in Kevin's exam results? (提示：History)", "answer": ["History has the highest score.", "History."] },
    { "id": "s5", "type": "q_and_a", "prompt": "問答題：What does \"think outside the box\" mean? (提示：think independently)", "answer": ["It means to think independently.", "To think independently."] },

    // --- 四、句型練習：重組 (5題) ---
    { "id": "s6", "type": "unscramble", "prompt": "重組句子：[to wash the dishes] [Remember] [in the sink.]", "answer": ["Remember to wash the dishes in the sink."] },
    { "id": "s7", "type": "unscramble", "prompt": "重組句子：[The floor] [cleaning.] [needs]", "answer": ["The floor needs cleaning."] },
    { "id": "s8", "type": "unscramble", "prompt": "重組句子：[mopping the floor] [She finished] [an hour ago.]", "answer": ["She finished mopping the floor an hour ago."] },
    { "id": "s9", "type": "unscramble", "prompt": "重組句子：[running] [We want to keep] [until we get tired.]", "answer": ["We want to keep running until we get tired."] },
    { "id": "s10", "type": "unscramble", "prompt": "重組句子：[He is thinking about] [another book.] [reading]", "answer": ["He is thinking about reading another book."] },

    // --- 五、句型練習：改寫 (5題) ---
    { "id": "s11", "type": "rewrite", "prompt": "句型改寫：Jason forgot to wash the dishes in the sink. (用 remember 及不定詞改寫為肯定提醒句)", "answer": ["Remember to wash the dishes in the sink."] },
    { "id": "s12", "type": "rewrite", "prompt": "句型改寫：Someone needs to clean the floor. (以 The floor... 為句首及動名詞改寫)", "answer": ["The floor needs cleaning."] },
    { "id": "s13", "type": "rewrite", "prompt": "句型改寫：She mopped the floor an hour ago. (加入 finish 改寫)", "answer": ["She finished mopping the floor an hour ago."] },
    { "id": "s14", "type": "rewrite", "prompt": "句型改寫：We want to run until we get tired. (加入 keep 改寫)", "answer": ["We want to keep running until we get tired."] },
    { "id": "s15", "type": "rewrite", "prompt": "句型改寫：He reads another book. / He is thinking about it. (用 He is... 為句首合併句子)", "answer": ["He is thinking about reading another book."] }
  ],

  // --- 六、克漏字 (依 How to Get Better Grades in Math 改編，無音檔) ---
  "cloze": {
    "title": "Cloze Test: Better Grades in Math",
    "hasAudio": false,
    "article": "Ted is a junior high school student. He enjoys studying all subjects but math. He used to have trouble (1)_____ the teacher in math class. His classmate Peter told him that (2)_____ before class and reviewing after class were very important. Ted followed Peter's advice. Now, he is no longer afraid of (3)_____ questions in class.",
    "questions": [
      { "id": "c1", "number": "(1)", "options": ["understand", "understanding", "to understand", "understood"], "answer": ["understanding"] },
      { "id": "c2", "number": "(2)", "options": ["previewing", "preview", "to previewing", "previewed"], "answer": ["previewing"] },
      { "id": "c3", "number": "(3)", "options": ["ask", "asking", "to ask", "asked"], "answer": ["asking"] }
    ]
  },

  // --- 七、短篇閱讀理解 (依 Cool Teacher Mrs. Lin 文章，無音檔) ---
  "reading": {
    "title": "Reading Comprehension: Our Teacher Mrs. Lin",
    "hasAudio": false,
    "article": "Our teacher, Mrs. Lin, is a cool teacher. She likes to make us think outside the box. Making us think independently is one of her teaching goals. In her class, she gives lots of examples to help us understand better. She never loses her patience when we need her to give us more examples. I love listening to her talk. She is such a wise lady. We all enjoy learning new things in her class. She is the best teacher in the world!",
    "questions": [
      {
        "id": "r1",
        "prompt": "1. What does \"think outside the box\" mean?",
        "options": [
          "To find answers quickly",
          "To think independently",
          "To give examples",
          "To discuss in groups"
        ],
        "answer": ["To think independently"]
      },
      {
        "id": "r2",
        "prompt": "2. How does Mrs. Lin help her students understand better?",
        "options": [
          "She makes them think outside the box.",
          "She gives homework every day.",
          "She uses many examples.",
          "She doesn't give correct answers."
        ],
        "answer": ["She uses many examples."]
      },
      {
        "id": "r3",
        "prompt": "3. According to the passage, why is Mrs. Lin the best teacher in the world?",
        "options": [
          "Students learn to share information in her class.",
          "She makes students discuss in groups.",
          "Students have to be creative to stay in her class.",
          "All of her students enjoy her class."
        ],
        "answer": ["All of her students enjoy her class."]
      }
    ]
  }
};
