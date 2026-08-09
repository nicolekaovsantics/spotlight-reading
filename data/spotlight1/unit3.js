// data/spotlight1/unit3.js

window.unitData = {
  "unit": "Spotlight on Reading Book 1 Unit 3: A Nice Trip",
  "words": [
    // --- 一、單字：中翻英 (10題，無提示) ---
    { "id": "w1", "type": "chinese_to_english", "prompt": "中翻英：假期", "answer": ["vacation"] },
    { "id": "w2", "type": "chinese_to_english", "prompt": "中翻英：遊客 / 訪客", "answer": ["visitor", "visitors"] },
    { "id": "w3", "type": "chinese_to_english", "prompt": "中翻英：教堂", "answer": ["church"] },
    { "id": "w4", "type": "chinese_to_english", "prompt": "中翻英：著名的", "answer": ["famous"] },
    { "id": "w5", "type": "chinese_to_english", "prompt": "中翻英：溫泉", "answer": ["hot spring", "hot springs"] },
    { "id": "w6", "type": "chinese_to_english", "prompt": "中翻英：秋天", "answer": ["fall", "autumn"] },
    { "id": "w7", "type": "chinese_to_english", "prompt": "中翻英：夏天", "answer": ["summer"] },
    { "id": "w8", "type": "chinese_to_english", "prompt": "中翻英：風景 / 景色", "answer": ["view"] },
    { "id": "w9", "type": "chinese_to_english", "prompt": "中翻英：地點 / 景點", "answer": ["spot", "spots"] },
    { "id": "w10", "type": "chinese_to_english", "prompt": "中翻英：吸引", "answer": ["attract", "attracts"] },

    // --- 二、單字：文意填空 (15題，給開頭字母提示) ---
    { "id": "w11", "type": "context_fill", "prompt": "文意填空：In Taiwan, the weather in f_____ is cool and comfortable.", "answer": ["fall"] },
    { "id": "w12", "type": "context_fill", "prompt": "文意填空：There is a beautiful c_____ near the park. Many Christians pray there.", "answer": ["church"] },
    { "id": "w13", "type": "context_fill", "prompt": "文意填空：That man is a very f_____ movie star in this country.", "answer": ["famous"] },
    { "id": "w14", "type": "context_fill", "prompt": "文意填空：Raymond wants to go to Japan for his winter v_____.", "answer": ["vacation"] },
    { "id": "w15", "type": "context_fill", "prompt": "文意填空：In winter, many people go to h_____ springs to keep warm.", "answer": ["hot"] },
    { "id": "w16", "type": "context_fill", "prompt": "文意填空：Sun Moon Lake is a popular travel s_____ in Nantou.", "answer": ["spot"] },
    { "id": "w17", "type": "context_fill", "prompt": "文意填空：Many v_____ take a boat to enjoy the beautiful lake view.", "answer": ["visitors"] },
    { "id": "w18", "type": "context_fill", "prompt": "文意填空：We went to Kenting in s_____ because we love swimming.", "answer": ["summer"] },
    { "id": "w19", "type": "context_fill", "prompt": "文意填空：The sea turtle swims s_____ in the ocean.", "answer": ["slowly"] },
    { "id": "w20", "type": "context_fill", "prompt": "文意填空：The beautiful flowers a_____ many butterflies.", "answer": ["attract"] },
    { "id": "w21", "type": "context_fill", "prompt": "文意填空：There are four s_____ in a year: spring, summer, fall, and winter.", "answer": ["seasons"] },
    { "id": "w22", "type": "context_fill", "prompt": "文意填空：People like to watch the colorful tree l_____ in fall.", "answer": ["leaves"] },
    { "id": "w23", "type": "context_fill", "prompt": "文意填空：We go to the beach to see the sunset v_____.", "answer": ["view"] },
    { "id": "w24", "type": "context_fill", "prompt": "文意填空：Eddie is making a travel p_____ for his family.", "answer": ["plan"] },
    { "id": "w25", "type": "context_fill", "prompt": "文意填空：A big w_____ can do many amazing tricks in the show.", "answer": ["whale"] }
  ],
  "sentences": [
    // --- 三、句型練習：問答 (5題，焦點：There is / There are) ---
    { "id": "s1", "type": "q_and_a", "prompt": "問答題：Is there an eraser in your pencil box? (提示：簡答肯定)", "answer": ["Yes, there is."] },
    { "id": "s2", "type": "q_and_a", "prompt": "問答題：Are there any shoes in the department store? (提示：簡答肯定)", "answer": ["Yes, there are."] },
    { "id": "s3", "type": "q_and_a", "prompt": "問答題：Is there any milk in the refrigerator? (提示：簡答否定)", "answer": ["No, there isn't.", "No, there is not."] },
    { "id": "s4", "type": "q_and_a", "prompt": "問答題：How many seasons are there in a year? (提示：four seasons)", "answer": ["There are four seasons in a year.", "There are four seasons."] },
    { "id": "s5", "type": "q_and_a", "prompt": "問答題：How many dogs are there in the yard? (提示：three dogs)", "answer": ["There are three dogs in the yard.", "There are three dogs."] },

    // --- 四、句型練習：重組 (5題) ---
    { "id": "s6", "type": "unscramble", "prompt": "重組句子：[is] [a] [spot] [Sun Moon Lake] [popular] [vacation]", "answer": ["Sun Moon Lake is a popular vacation spot."] },
    { "id": "s7", "type": "unscramble", "prompt": "重組句子：[refrigerator.] [is] [There] [juice] [a lot of] [in the]", "answer": ["There is a lot of juice in the refrigerator."] },
    { "id": "s8", "type": "unscramble", "prompt": "重組句子：[people] [movie theater.] [are] [There] [many] [in the]", "answer": ["There are many people in the movie theater."] },
    { "id": "s9", "type": "unscramble", "prompt": "重組句子：[hot springs] [go to] [Eddie] [Taitung.] [will] [in]", "answer": ["Eddie will go to hot springs in Taitung."] },
    { "id": "s10", "type": "unscramble", "prompt": "重組句子：[swimming pool.] [isn't] [any water] [in the] [There]", "answer": ["There isn't any water in the swimming pool."] },

    // --- 五、句型練習：改寫 (5題) ---
    { "id": "s11", "type": "rewrite", "prompt": "句型改寫：There is a coffee shop near my house. (改為否定句)", "answer": ["There is not a coffee shop near my house.", "There isn't a coffee shop near my house."] },
    { "id": "s12", "type": "rewrite", "prompt": "句型改寫：There are two cats in the yard. (依劃線部分 two cats 造問句)", "answer": ["How many cats are there in the yard?"] },
    { "id": "s13", "type": "rewrite", "prompt": "句型改寫：There are some toy shops near the school. (改為一般疑問句)", "answer": ["Are there any toy shops near the school?"] },
    { "id": "s14", "type": "rewrite", "prompt": "句型改寫：There is a big tree in the park. (改為複數句：Two big trees...)", "answer": ["There are two big trees in the park."] },
    { "id": "s15", "type": "rewrite", "prompt": "句型改寫：There is some water in the cup. (改為否定句)", "answer": ["There isn't any water in the cup.", "There is no water in the cup."] }
  ],

  // --- 六、克漏字 (依 Eddie's Travel Plan，無音檔) ---
  "cloze": {
    "title": "Cloze Test: Eddie's Travel Plan",
    "hasAudio": false,
    "article": "Eddie loves traveling. He travels to different places in Taiwan in different seasons. In spring, the weather is warm and rainy, and he goes to Yilan for the flower show. In summer, it is hot and sunny, so he goes to Kenting for a concert. In fall, when it is cool and windy, he visits the natural park in Taipei. Finally, in winter, when it is cold and humid, he enjoys (1)_____ in Taitung. There (2)_____ many wonderful places in Taiwan, and Eddie (3)_____ a great time on his trips every year. (4)_____ places do you plan to visit this year?",
    "questions": [
      { "id": "c1", "number": "(1)", "options": ["hot springs", "swimming", "flower show", "concerts"], "answer": ["hot springs"] },
      { "id": "c2", "number": "(2)", "options": ["is", "am", "are", "be"], "answer": ["are"] },
      { "id": "c3", "number": "(3)", "options": ["have", "has", "having", "is"], "answer": ["has"] },
      { "id": "c4", "number": "(4)", "options": ["How many", "How much", "Where", "What"], "answer": ["How many"] }
    ]
  },

  // --- 七、短篇閱讀理解 (依 Welcome to the Sea World 文章，無音檔) ---
  "reading": {
    "title": "Reading Comprehension: Welcome to the Sea World",
    "hasAudio": false,
    "article": "There are all kinds of sea animals in Sea World. Here are the most popular ones. Come and See!\n\nThe Crabs: They are small but fast. They walk around with their big nippers.\nThe Turtles: There are many kinds of turtles, small and big. They walk slowly, but they swim quickly.\nThe Whales: They are cute and wise. Every afternoon, there is a whale show at two o'clock. Come and see the mother whale and baby whale do the tricks!\nThe Sharks: They are big and not very friendly, but they are popular. There is a shark show at four o'clock every afternoon. Come and watch them swim!",
    "questions": [
      {
        "id": "r1",
        "prompt": "1. What kind of animal walks slowly?",
        "options": ["Crabs", "Whales", "Sharks", "Turtles"],
        "answer": ["Turtles"]
      },
      {
        "id": "r2",
        "prompt": "2. What are there in the whale show?",
        "options": [
          "The father whale and the baby whale",
          "Two baby whales",
          "The mother whale and the baby whale",
          "The father whale and the mother whale"
        ],
        "answer": ["The mother whale and the baby whale"]
      },
      {
        "id": "r3",
        "prompt": "3. What time is the whale show?",
        "options": ["4 a.m.", "4 p.m.", "2 a.m.", "2 p.m."],
        "answer": ["2 p.m."]
      }
    ]
  }
};
