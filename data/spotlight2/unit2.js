// data/spotlight2/unit2.js

window.unitData = {
  "unit": "Spotlight on Reading Book 2 Unit 2: Illness and Injuries",
  "words": [
    // --- 一、單字：中翻英 (10題，無提示) ---
    { "id": "w1", "type": "chinese_to_english", "prompt": "中翻英：傷害 / 受傷", "answer": ["injury", "injuries"] },
    { "id": "w2", "type": "chinese_to_english", "prompt": "中翻英：壓力 / 按壓", "answer": ["pressure"] },
    { "id": "w3", "type": "chinese_to_english", "prompt": "中翻英：傷口", "answer": ["wound", "wounds"] },
    { "id": "w4", "type": "chinese_to_english", "prompt": "中翻英：流血", "answer": ["bleeding"] },
    { "id": "w5", "type": "chinese_to_english", "prompt": "中翻英：口罩", "answer": ["mask", "masks"] },
    { "id": "w6", "type": "chinese_to_english", "prompt": "中翻英：體溫 / 溫度", "answer": ["temperature"] },
    { "id": "w7", "type": "chinese_to_english", "prompt": "中翻英：極度的 / 嚴重的", "answer": ["extreme"] },
    { "id": "w8", "type": "chinese_to_english", "prompt": "中翻英：輪流 / 順序", "answer": ["turn"] },
    { "id": "w9", "type": "chinese_to_english", "prompt": "中翻英：有耐心的 / 病人", "answer": ["patient", "patients"] },
    { "id": "w10", "type": "chinese_to_english", "prompt": "中翻英：外科手術", "answer": ["surgery"] },

    // --- 二、單字：文意填空 (15題，給開頭字母提示) ---
    { "id": "w11", "type": "context_fill", "prompt": "文意填空：The old man took some medicine for his back i_____.", "answer": ["injury"] },
    { "id": "w12", "type": "context_fill", "prompt": "文意填空：The t_____ in this room is too high. Please turn on the AC.", "answer": ["temperature"] },
    { "id": "w13", "type": "context_fill", "prompt": "文意填空：The woman is in e_____ pain because she just broke her leg.", "answer": ["extreme"] },
    { "id": "w14", "type": "context_fill", "prompt": "文意填空：The boy's finger is b_____ because he accidentally cut it.", "answer": ["bleeding"] },
    { "id": "w15", "type": "context_fill", "prompt": "文意填空：The man had a leg w_____, and it became worse after two days.", "answer": ["wound"] },
    { "id": "w16", "type": "context_fill", "prompt": "文意填空：Keep applying p_____ on the wound to stop bleeding.", "answer": ["pressure"] },
    { "id": "w17", "type": "context_fill", "prompt": "文意填空：He wore a m_____ so that nobody else would catch a cold from him.", "answer": ["mask"] },
    { "id": "w18", "type": "context_fill", "prompt": "文意填空：The nurse was taking her t_____ because she had a fever.", "answer": ["temperature"] },
    { "id": "w19", "type": "context_fill", "prompt": "文意填空：It was Kevin's t_____ to see the doctor in the waiting room.", "answer": ["turn"] },
    { "id": "w20", "type": "context_fill", "prompt": "文意填空：The doctor was very kind and p_____ to all children.", "answer": ["patient"] },
    { "id": "w21", "type": "context_fill", "prompt": "文意填空：She took medicine for the p_____ in her knee.", "answer": ["pain"] },
    { "id": "w22", "type": "context_fill", "prompt": "文意填空：The nurse helps Dr. Lee keep the patients' medical r_____.", "answer": ["records"] },
    { "id": "w23", "type": "context_fill", "prompt": "文意填空：Jake needs a s_____ on his left foot because of his serious injury.", "answer": ["surgery"] },
    { "id": "w24", "type": "context_fill", "prompt": "文意填空：If you follow the doctor's orders, you will be good as n_____.", "answer": ["new"] },
    { "id": "w25", "type": "context_fill", "prompt": "文意填空：Uncle Bob loved helping p_____ in his neighborhood.", "answer": ["patients"] }
  ],
  "sentences": [
    // --- 三、句型練習：問答 (5題，文法重點：因為、所以、雖然、只要、以便等連接詞) ---
    { "id": "s1", "type": "q_and_a", "prompt": "問答題：Why did Kevin's mom take him to the hospital? (提示：knee injury)", "answer": ["Because he had a serious knee injury.", "Because of his knee injury."] },
    { "id": "s2", "type": "q_and_a", "prompt": "問答題：Why was the young man wearing a mask? (提示：had a cold)", "answer": ["Because he had a cold."] },
    { "id": "s3", "type": "q_and_a", "prompt": "問答題：Why was the nurse taking the little girl's temperature? (提示：fever)", "answer": ["Because she had a fever."] },
    { "id": "s4", "type": "q_and_a", "prompt": "問答題：Why does Bob need to take medicine? (提示：stomachache)", "answer": ["Because he has a stomachache."] },
    { "id": "s5", "type": "q_and_a", "prompt": "問答題：What does \"good as new\" mean? (提示：healthy)", "answer": ["It means to be healthy.", "To be healthy."] },

    // --- 四、句型練習：重組 (5題) ---
    { "id": "s6", "type": "unscramble", "prompt": "重組句子：[so that] [he could catch] [He ran as fast as possible] [the last train.]", "answer": ["He ran as fast as possible so that he could catch the last train."] },
    { "id": "s7", "type": "unscramble", "prompt": "重組句子：[received a surprise gift,] [Because Irene] [she was very excited.]", "answer": ["Because Irene received a surprise gift, she was very excited."] },
    { "id": "s8", "type": "unscramble", "prompt": "重組句子：[is coming,] [Linda's birthday] [George will buy a present for her.] [so]", "answer": ["Linda's birthday is coming, so George will buy a present for her."] },
    { "id": "s9", "type": "unscramble", "prompt": "重組句子：[as long as] [mopping before 4 p.m.] [You can go out] [you finish]", "answer": ["You can go out as long as you finish mopping before 4 p.m."] },
    { "id": "s10", "type": "unscramble", "prompt": "重組句子：[they don't look alike at all.] [they are brother and sister,] [Although]", "answer": ["Although they are brother and sister, they don't look alike at all."] },

    // --- 五、句型練習：改寫 (5題) ---
    { "id": "s11", "type": "rewrite", "prompt": "句型改寫：He ran as fast as possible. He could catch the last train. (用 so that 合併)", "answer": ["He ran as fast as possible so that he could catch the last train."] },
    { "id": "s12", "type": "rewrite", "prompt": "句型改寫：Irene received a surprise gift. Irene was very excited. (以 Because 為句首合併)", "answer": ["Because Irene received a surprise gift, she was very excited."] },
    { "id": "s13", "type": "rewrite", "prompt": "句型改寫：Linda's birthday is coming. George will buy a present for her. (用 so 合併)", "answer": ["Linda's birthday is coming, so George will buy a present for her."] },
    { "id": "s14", "type": "rewrite", "prompt": "句型改寫：You finish mopping before 4 p.m. You can go out with your friends. (把 as long as 放在句中合併)", "answer": ["You can go out with your friends as long as you finish mopping before 4 p.m."] },
    { "id": "s15", "type": "rewrite", "prompt": "句型改寫：They are brother and sister. They don't look alike at all. (以 Although 為句首合併)", "answer": ["Although they are brother and sister, they don't look alike at all."] }
  ],

  // --- 六、克漏字 (依 Waiting at the Hospital 文章，無音檔) ---
  "cloze": {
    "title": "Cloze Test: Hospital Visit",
    "hasAudio": false,
    "article": "When your body is in pain, you need to go to a hospital and wait for your turn to see a doctor. You have to be patient (1)_____ there are usually many people there, and the doctors are always very busy. Remember to wear a (2)_____ in case there are people coughing around you. If you are in (3)_____ pain, you should let the nurses know (4)_____.",
    "questions": [
      { "id": "c1", "number": "(1)", "options": ["so", "though", "as long as", "because"], "answer": ["because"] },
      { "id": "c2", "number": "(2)", "options": ["pain", "patient", "mask", "pressure"], "answer": ["mask"] },
      { "id": "c3", "number": "(3)", "options": ["patient", "extreme", "kind", "scared"], "answer": ["extreme"] },
      { "id": "c4", "number": "(4)", "options": [
        "because they will become more friendly to you",
        "because the doctors are usually out for lunch",
        "so that you can go to another hospital",
        "so that you can receive the help you need right away"
      ], "answer": ["so that you can receive the help you need right away"] }
    ]
  },

  // --- 七、短篇閱讀理解 (依 Doctor Lee's Office 文章，無音檔) ---
  "reading": {
    "title": "Reading Comprehension: Doctor Lee's Patients",
    "hasAudio": false,
    "article": "Every day is a busy day in Doctor Lee's office. He has many patients to take care of. The nurse helps him keep the patients' records.\n\n- Bob P.: Stomachache -> Medicine -> Don't eat anything for the next four hours.\n- Sally L.: Headache -> Medicine -> Get lots of rest.\n- Jake R.: Injury -> Surgery -> Do not use left foot for three months. Get lots of rest.\n- Simon W.: Fever -> Medicine -> Drink lots of water. Get lots of rest.\n- Peter N.: Cough -> Medicine -> Try not to talk or laugh too hard. Drink lots of water.",
    "questions": [
      {
        "id": "r1",
        "prompt": "1. Why does Bob need to take medicine?",
        "options": [
          "Because he has a stomachache",
          "Because he has an injury",
          "Because he has a bad cough",
          "Because he has a fever"
        ],
        "answer": ["Because he has a stomachache"]
      },
      {
        "id": "r2",
        "prompt": "2. What does the doctor want Peter to do?",
        "options": [
          "Talk as much as he can",
          "Get lots of rest",
          "Drink lots of water",
          "Don't eat anything"
        ],
        "answer": ["Drink lots of water"]
      },
      {
        "id": "r3",
        "prompt": "3. What's wrong with Jake?",
        "options": [
          "He has a head injury.",
          "He has a foot injury.",
          "He has a stomachache.",
          "He has a headache."
        ],
        "answer": ["He has a foot injury."]
      },
      {
        "id": "r4",
        "prompt": "4. What does the doctor tell Simon to do?",
        "options": [
          "Get lots of rest, and drink lots of water",
          "Don't drink anything, and get lots of rest",
          "Don't laugh too hard, and get lots of rest",
          "Don't use his left foot, and get lots of rest"
        ],
        "answer": ["Get lots of rest, and drink lots of water"]
      }
    ]
  }
};
