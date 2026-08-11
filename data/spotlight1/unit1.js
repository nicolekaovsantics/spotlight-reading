// data/spotlight1/unit1.js

window.unitData = {
  "unit": "Spotlight on Reading Book 1 Unit 1: My Family",
  "words": [
    // --- 一、單字：中翻英 (10題，依課本標記單字，無提示) ---
    { "id": "w1", "type": "chinese_to_english", "prompt": "中翻英：農夫", "answer": ["farmer", "farmers"] },
    { "id": "w2", "type": "chinese_to_english", "prompt": "中翻英：警察", "answer": ["police officer"] },
    { "id": "w3", "type": "chinese_to_english", "prompt": "中翻英：家庭主婦", "answer": ["housewife"] },
    { "id": "w4", "type": "chinese_to_english", "prompt": "中翻英：歌手", "answer": ["singer"] },
    { "id": "w5", "type": "chinese_to_english", "prompt": "中翻英：工程師", "answer": ["engineer"] },
    { "id": "w6", "type": "chinese_to_english", "prompt": "中翻英：護理師 / 護士", "answer": ["nurse"] },
    { "id": "w7", "type": "chinese_to_english", "prompt": "中翻英：堂(表)兄弟姊妹", "answer": ["cousin"] },
    { "id": "w8", "type": "chinese_to_english", "prompt": "中翻英：同班同學", "answer": ["classmate", "classmates"] },
    { "id": "w9", "type": "chinese_to_english", "prompt": "中翻英：寵物", "answer": ["pet", "pets"] },
    { "id": "w10", "type": "chinese_to_english", "prompt": "中翻英：幼貓 / 小貓", "answer": ["kitten", "kittens"] },

    // --- 二、單字：文意填空 (15題，給開頭字母提示) ---
    { "id": "w11", "type": "context_fill", "prompt": "文意填空：My grandfather works on the farm. He is a f_____.", "answer": ["farmer"] },
    { "id": "w12", "type": "context_fill", "prompt": "文意填空：Her father is a p_____ officer. He catches bad people.", "answer": ["police"] },
    { "id": "w13", "type": "context_fill", "prompt": "文意填空：My mother stays at home and takes care of us. She is a h_____.", "answer": ["housewife"] },
    { "id": "w14", "type": "context_fill", "prompt": "文意填空：Taylor Swift is a famous s_____. She sings well.", "answer": ["singer"] },
    { "id": "w15", "type": "context_fill", "prompt": "文意填空：An e_____ can build bridges and design computers.", "answer": ["engineer"] },
    { "id": "w16", "type": "context_fill", "prompt": "文意填空：The n_____ takes care of sick people in the hospital.", "answer": ["nurse"] },
    { "id": "w17", "type": "context_fill", "prompt": "文意填空：My uncle's daughter is my c_____.", "answer": ["cousin"] },
    { "id": "w18", "type": "context_fill", "prompt": "文意填空：We are in the same class, so we are c_____.", "answer": ["classmates"] },
    { "id": "w19", "type": "context_fill", "prompt": "文意填空：I have two p_____, a dog and a cat.", "answer": ["pets"] },
    { "id": "w20", "type": "context_fill", "prompt": "文意填空：The cute k_____ is only two months old.", "answer": ["kitten"] },
    { "id": "w21", "type": "context_fill", "prompt": "文意填空：Peter's teacher asks the class to d_____ a family tree.", "answer": ["draw"] },
    { "id": "w22", "type": "context_fill", "prompt": "文意填空：There are thirty students in our c_____.", "answer": ["class"] },
    { "id": "w23", "type": "context_fill", "prompt": "文意填空：My brother Nick is a b_____. He is one year old.", "answer": ["baby"] },
    { "id": "w24", "type": "context_fill", "prompt": "文意填空：Rose's family is f_____ and kind.", "answer": ["friendly"] },
    { "id": "w25", "type": "context_fill", "prompt": "文意填空：We will c_____ Grandpa's birthday on Saturday.", "answer": ["celebrate"] }
  ],
  "sentences": [
    // --- 三、句型練習：問答 (5題，焦點：Be動詞、Wh-問句) ---
    { "id": "s1", "type": "q_and_a", "prompt": "問答題：What is his father's job? (提示：police officer)", "answer": ["His father is a police officer.", "He is a police officer.","He's a police officer."] },
    { "id": "s2", "type": "q_and_a", "prompt": "問答題：Who is she? (提示：my aunt)", "answer": ["She is my aunt."] },
    { "id": "s3", "type": "q_and_a", "prompt": "問答題：Is Peter a teacher? (提示：簡答否定)", "answer": ["No, he isn't.", "No, he is not."] },
    { "id": "s4", "type": "q_and_a", "prompt": "問答題：Are they your classmates? (提示：簡答肯定)", "answer": ["Yes, they are."] },
    { "id": "s5", "type": "q_and_a", "prompt": "問答題：How old is Rose's brother Nick? (提示：one year old)", "answer": ["He is one year old."] },

    // --- 四、句型練習：重組 (5題) ---
    { "id": "s6", "type": "unscramble", "prompt": "重組句子：[is] [My] [a] [father] [police officer.]", "answer": ["My father is a police officer."] },
    { "id": "s7", "type": "unscramble", "prompt": "重組句子：[grandparents] [farmers.] [are] [Her]", "answer": ["Her grandparents are farmers."] },
    { "id": "s8", "type": "unscramble", "prompt": "重組句子：[are] [both] [twelve] [old.] [years] [We]", "answer": ["We are both twelve years old."] },
    { "id": "s9", "type": "unscramble", "prompt": "重組句子：[is] [a] [She] [great] [singer.]", "answer": ["She is a great singer."] },
    { "id": "s10", "type": "unscramble", "prompt": "重組句子：[kittens] [are] [both] [five months old.] [The]", "answer": ["The kittens are both five months old."] },

    // --- 五、句型練習：改寫 (5題) ---
    { "id": "s11", "type": "rewrite", "prompt": "句型改寫：My mother is a housewife. (改為否定句)", "answer": ["My mother is not a housewife.", "My mother isn't a housewife."] },
    { "id": "s12", "type": "rewrite", "prompt": "句型改寫：They are my cousins. (改為單數句：She...)", "answer": ["She is my cousin."] },
    { "id": "s13", "type": "rewrite", "prompt": "句型改寫：That is a big hamburger. (改為複數句：Those...)", "answer": ["Those are big hamburgers."] },
    { "id": "s14", "type": "rewrite", "prompt": "句型改寫：He is ten years old. (依劃線部分 ten years old 造問句)", "answer": ["How old is he?"] },
    { "id": "s15", "type": "rewrite", "prompt": "句型改寫：He is my father. (依劃線部分 my father 造問句)", "answer": ["Who is he?"] }
  ],

  // --- 六、克漏字 (依 GEPT Booster 題型，無音檔) ---
  "cloze": {
    "title": "Cloze Test (GEPT Booster)",
    "hasAudio": false,
    "article": "This is my best friend, Luke. Luke and I (1)_____ both thirteen years old. Luke (2)_____ a student in Green City Elementary School. His parents are very nice. His father is a police officer. His mother, Lucy, (3)_____. She stays at home and takes care of the kids. Cherry and Sherry are his sisters. They are both eleven years old. Meow is Cherry's (4)_____. It is a small kitten.",
    "questions": [
      { "id": "c1", "number": "(1)", "options": ["is", "am", "are", "be"], "answer": ["are"] },
      { "id": "c2", "number": "(2)", "options": ["is", "are", "am", "be"], "answer": ["is"] },
      { "id": "c3", "number": "(3)", "options": ["has a child", "owns two pets", "is a housewife", "knows a farmer"], "answer": ["is a housewife"] },
      { "id": "c4", "number": "(4)", "options": ["book", "pet", "pencil", "ruler"], "answer": ["pet"] }
    ]
  },

  // --- 七、短篇閱讀理解 (依課本 Welcome to the Party! 文章，無音檔) ---
  "reading": {
    "title": "Reading Comprehension: Welcome to the Party!",
    "hasAudio": false,
    "article": "We will celebrate Grandpa's 71st birthday on Saturday!\n\nPlace: Uncle Joe's Farm\nDate: May 20th, Saturday\nTime: 2:00 p.m.-8:00 p.m.\n\nMy father Joseph, my mother Mary, and my aunt Sue will prepare the food. I will sing some songs for the party with my sister Katie. We will sing Grandpa's favorite songs. My father's friend Vincent will play the piano.\n\nSee you soon!",
    "questions": [
      {
        "id": "r1",
        "prompt": "1. How old is Jeff's grandfather now?",
        "options": ["70", "71", "72", "73"],
        "answer": ["71"]
      },
      {
        "id": "r2",
        "prompt": "2. Where is the birthday party?",
        "options": ["Grandpa's home", "Uncle Joe's home", "Uncle Joe's farm", "Grandpa's farm"],
        "answer": ["Uncle Joe's farm"]
      },
      {
        "id": "r3",
        "prompt": "3. Who is NOT the cook for the party?",
        "options": ["Vincent", "Mary", "Sue", "Joseph"],
        "answer": ["Vincent"]
      }
    ]
  }
};
