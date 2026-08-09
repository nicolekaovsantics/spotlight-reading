// data/spotlight1/unit2.js

window.unitData = {
  "unit": "Spotlight on Reading Book 1 Unit 2: Follow the Rules",
  "words": [
    // --- 一、單字：中翻英 (10題，無提示，依課本重點單字) ---
    { "id": "w1", "type": "chinese_to_english", "prompt": "中翻英：遵循 / 遵守", "answer": ["follow"] },
    { "id": "w2", "type": "chinese_to_english", "prompt": "中翻英：規則", "answer": ["rule", "rules"] },
    { "id": "w3", "type": "chinese_to_english", "prompt": "中翻英：噪音 / 雜音", "answer": ["noise", "noises"] },
    { "id": "w4", "type": "chinese_to_english", "prompt": "中翻英：垃圾", "answer": ["trash"] },
    { "id": "w5", "type": "chinese_to_english", "prompt": "中翻英：餵食", "answer": ["feed"] },
    { "id": "w6", "type": "chinese_to_english", "prompt": "中翻英：票 / 門票", "answer": ["ticket", "tickets"] },
    { "id": "w7", "type": "chinese_to_english", "prompt": "中翻英：勤奮的 / 認真的", "answer": ["diligent"] },
    { "id": "w8", "type": "chinese_to_english", "prompt": "中翻英：令人興奮的", "answer": ["exciting"] },
    { "id": "w9", "type": "chinese_to_english", "prompt": "中翻英：校外教學", "answer": ["field trip", "field trips"] },
    { "id": "w10", "type": "chinese_to_english", "prompt": "中翻英：標誌 / 告示", "answer": ["sign", "signs"] },

    // --- 二、單字：文意填空 (15題，給開頭字母提示) ---
    { "id": "w11", "type": "context_fill", "prompt": "文意填空：Students have to f_____ their teacher's rules at school.", "answer": ["follow"] },
    { "id": "w12", "type": "context_fill", "prompt": "文意填空：There is a loud n_____ in the living room.", "answer": ["noise"] },
    { "id": "w13", "type": "context_fill", "prompt": "文意填空：Please take the t_____ to the garbage truck.", "answer": ["trash"] },
    { "id": "w14", "type": "context_fill", "prompt": "文意填空：I f_____ my lovely kitten every morning.", "answer": ["feed"] },
    { "id": "w15", "type": "context_fill", "prompt": "文意填空：The movie t_____ is very expensive.", "answer": ["ticket"] },
    { "id": "w16", "type": "context_fill", "prompt": "文意填空：Mr. Lee is a d_____ and kind teacher.", "answer": ["diligent"] },
    { "id": "w17", "type": "context_fill", "prompt": "文意填空：Going to the amusement park is an e_____ trip.", "answer": ["exciting"] },
    { "id": "w18", "type": "context_fill", "prompt": "文意填空：We line up to buy tickets for the f_____ trip.", "answer": ["field"] },
    { "id": "w19", "type": "context_fill", "prompt": "文意填空：Look at the warning s_____ on the wall.", "answer": ["sign"] },
    { "id": "w20", "type": "context_fill", "prompt": "文意填空：Don't c_____ in line when waiting for the bus.", "answer": ["cut"] },
    { "id": "w21", "type": "context_fill", "prompt": "文意填空：Please turn o_____ your cell phone in the theater.", "answer": ["off"] },
    { "id": "w22", "type": "context_fill", "prompt": "文意填空：Don't l_____ your schoolbag on the bus.", "answer": ["leave"] },
    { "id": "w23", "type": "context_fill", "prompt": "文意填空：Jimmy wants his younger sister to be p_____.", "answer": ["polite"] },
    { "id": "w24", "type": "context_fill", "prompt": "文意填空：Please r_____ your hand before asking a question.", "answer": ["raise"] },
    { "id": "w25", "type": "context_fill", "prompt": "文意填空：Children must s_____ down when crossing the road.", "answer": ["slow"] }
  ],
  "sentences": [
    // --- 三、句型練習：問答 (5題，文法重點：祈使句 Imperatives) ---
    { "id": "s1", "type": "q_and_a", "prompt": "問答題：What should we do when the teacher is speaking? (提示：Be quiet)", "answer": ["Be quiet.", "Please be quiet."] },
    { "id": "s2", "type": "q_and_a", "prompt": "問答題：Can we eat in class? (提示：簡答否定)", "answer": ["No, you can't.", "No, we can't."] },
    { "id": "s3", "type": "q_and_a", "prompt": "問答題：What is the rule for taking a bus? (提示：Don't make noises)", "answer": ["Don't make noises.", "Do not make noises."] },
    { "id": "s4", "type": "q_and_a", "prompt": "問答題：Should we feed the animals in the zoo? (提示：簡答否定)", "answer": ["No, don't feed the animals.", "No, we shouldn't."] },
    { "id": "s5", "type": "q_and_a", "prompt": "問答題：How do you ask someone to open the door politely? (提示：用 Please)", "answer": ["Please open the door.", "Open the door, please."] },

    // --- 四、句型練習：重組 (5題) ---
    { "id": "s6", "type": "unscramble", "prompt": "重組句子：[cell phone] [Turn] [your] [off] [now.]", "answer": ["Turn off your cell phone now."] },
    { "id": "s7", "type": "unscramble", "prompt": "重組句子：[the] [animals] [zoo.] [Don't] [at] [feed] [the]", "answer": ["Don't feed the animals at the zoo."] },
    { "id": "s8", "type": "unscramble", "prompt": "重組句子：[line.] [cut] [Please] [in] [don't]", "answer": ["Please don't cut in line."] },
    { "id": "s9", "type": "unscramble", "prompt": "重組句子：[quiet,] [Jeff.] [be] [Please]", "answer": ["Please be quiet, Jeff.", "Jeff, please be quiet."] },
    { "id": "s10", "type": "unscramble", "prompt": "重組句子：[leave] [Don't] [bus.] [trash] [on] [your] [the]", "answer": ["Don't leave your trash on the bus."] },

    // --- 五、句型練習：改寫 (5題) ---
    { "id": "s11", "type": "rewrite", "prompt": "句型改寫：You must be quiet in the library. (改為否定祈使句)", "answer": ["Don't make noise in the library.", "Don't be noisy in the library.", "Be quiet in the library."] },
    { "id": "s12", "type": "rewrite", "prompt": "句型改寫：Open the window. (在句尾加上 please)", "answer": ["Open the window, please."] },
    { "id": "s13", "type": "rewrite", "prompt": "句型改寫：We go home now. (改為 Let's 開頭的祈使句)", "answer": ["Let's go home now."] },
    { "id": "s14", "type": "rewrite", "prompt": "句型改寫：You cannot feed the animals. (改為 Don't 開頭的祈使句)", "answer": ["Don't feed the animals."] },
    { "id": "s15", "type": "rewrite", "prompt": "句型改寫：Jeff, turn off the TV. (將稱謂放到句尾)", "answer": ["Turn off the TV, Jeff."] }
  ],

  // --- 六、克漏字 (依 GEPT Booster 頁面題型，無音檔) ---
  "cloze": {
    "title": "Cloze Test: House Rules (GEPT Booster)",
    "hasAudio": false,
    "article": "My mom and dad are engineers. They go to work early in the morning and come home late. So, my sister and I need to help them do the housework every day. Here is the list of some rules for us to (1)_____.\n(1) (2)_____ the dog and cat in the morning.\n(2) Water the flowers every two days.\n(3) Clean the table after each meal.\n(4) Wash the dishes and (3)_____ out the trash every night.\nMy sister and I always do a good job, so our parents are happy and say that (4)_____.",
    "questions": [
      { "id": "c1", "number": "(1)", "options": ["leave", "follow", "put", "raise"], "answer": ["follow"] },
      { "id": "c2", "number": "(2)", "options": ["Make", "Answer", "Follow", "Feed"], "answer": ["Feed"] },
      { "id": "c3", "number": "(3)", "options": ["taking", "take", "takes", "taken"], "answer": ["take"] },
      { "id": "c4", "number": "(4)", "options": ["we are diligent helpers", "we are naughty children", "we should study harder", "we must do the dishes"], "answer": ["we are diligent helpers"] }
    ]
  },

  // --- 七、短篇閱讀理解 (依 Jimmy & Jenny 文章，無音檔) ---
  "reading": {
    "title": "Reading Comprehension: Jimmy and Jenny",
    "hasAudio": false,
    "article": "My name is Jimmy, and I am a sixth grader. I have a younger sister, Jenny. She is 3 years old, and she is cute and pretty. I often take care of her at home.\n\nJenny likes to play with dolls. She speaks a lot with them, and she also enjoys talking to me. Sometimes she says, \"I'm thirsty. Get me a drink.\" I would say, \"No! PLEASE get me a drink.\" Sometimes she says, \"I want new dolls. Take me to the store.\" I would say, \"No! PLEASE take me to the store.\" I love my sister, so I want her to be polite.",
    "questions": [
      {
        "id": "r1",
        "prompt": "1. Which of the following statements is true about Jimmy?",
        "options": [
          "He is in elementary school.",
          "He is Jenny's younger brother.",
          "He likes to play with dolls.",
          "He doesn't like Jenny."
        ],
        "answer": ["He is in elementary school."]
      },
      {
        "id": "r2",
        "prompt": "2. Which of the following statements is NOT polite for Jenny to say?",
        "options": [
          "I'm thirsty.",
          "Please take me to the store.",
          "Get me a drink.",
          "Please get me a drink."
        ],
        "answer": ["Get me a drink."]
      },
      {
        "id": "r3",
        "prompt": "3. Which of the following statements is NOT true?",
        "options": [
          "Jenny is three years old.",
          "Jenny is cute and pretty.",
          "Jenny is very polite.",
          "Jenny speaks a lot."
        ],
        "answer": ["Jenny is very polite."]
      }
    ]
  }
};
