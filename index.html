<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Spotlight on Reading 英文測驗系統</title>
  <style>
    :root {
      --primary-color: #4a90e2;
      --success-color: #2ecc71;
      --danger-color: #e74c3c;
      --bg-color: #f5f7fa;
      --card-bg: #ffffff;
    }

    body {
      font-family: "Segoe UI", Microsoft JhengHei, sans-serif;
      background-color: var(--bg-color);
      margin: 0;
      padding: 20px;
      display: flex;
      justify-content: center;
    }

    .container {
      width: 100%;
      max-width: 800px;
      background: var(--card-bg);
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      padding: 30px;
    }

    h1 {
      text-align: center;
      color: #333;
      margin-bottom: 25px;
    }

    .section-title {
      background: var(--primary-color);
      color: white;
      padding: 10px 15px;
      border-radius: 6px;
      margin-top: 30px;
      font-size: 1.2rem;
    }

    .q-card {
      border: 1px solid #e1e8ed;
      border-radius: 8px;
      padding: 15px;
      margin: 15px 0;
      background: #fafafa;
    }

    .q-title {
      font-weight: bold;
      font-size: 1.1rem;
      margin-bottom: 10px;
      color: #2c3e50;
    }

    .audio-btn {
      background: #f39c12;
      color: white;
      border: none;
      padding: 4px 10px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.9rem;
      margin-left: 8px;
    }

    .audio-btn:hover { background: #d35400; }

    input[type="text"] {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 1rem;
      box-sizing: border-box;
      margin-top: 8px;
    }

    .article-box {
      background: #eef5fc;
      border-left: 4px solid var(--primary-color);
      padding: 15px;
      border-radius: 4px;
      line-height: 1.6;
      font-size: 1.05rem;
      margin-bottom: 15px;
      white-space: pre-line;
    }

    .options-group {
      margin-top: 10px;
    }

    .option-label {
      display: block;
      margin: 6px 0;
      cursor: pointer;
    }

    .submit-btn {
      width: 100%;
      background: var(--success-color);
      color: white;
      border: none;
      padding: 15px;
      font-size: 1.2rem;
      border-radius: 8px;
      cursor: pointer;
      margin-top: 30px;
      font-weight: bold;
    }

    .submit-btn:hover { background: #27ae60; }

    /* 成果頁面 */
    .result-badge {
      display: inline-block;
      padding: 3px 8px;
      border-radius: 4px;
      color: white;
      font-weight: bold;
      font-size: 0.9rem;
    }

    .correct { background: var(--success-color); }
    .wrong { background: var(--danger-color); }

    .hidden { display: none; }
  </style>
</head>
<body>

<div class="container">
  <h1 id="unitTitle">Spotlight on Reading 測驗中...</h1>

  <form id="quizForm">
    <!-- 單字與句型區 -->
    <div id="wordsSentencesArea"></div>

    <!-- 克漏字區 -->
    <div id="clozeArea" class="hidden">
      <div class="section-title">三、克漏字測驗 (Cloze Test)</div>
      <div id="clozeArticle" class="article-box"></div>
      <div id="clozeQuestions"></div>
    </div>

    <!-- 短篇閱讀區 -->
    <div id="readingArea" class="hidden">
      <div class="section-title">四、短篇閱讀理解 (Reading Comprehension)</div>
      <div id="readingArticle" class="article-box"></div>
      <div id="readingQuestions"></div>
    </div>

    <button type="submit" class="submit-btn">完成並送出批改 🚀</button>
  </form>

  <!-- 批改結果頁面 -->
  <div id="resultArea" class="hidden">
    <h2>測驗結果</h2>
    <h3 id="scoreText"></h3>
    <div id="reviewList"></div>
    <button onclick="location.reload()" class="submit-btn" style="background:#3498db;">再測驗一次 🔄</button>
  </div>
</div>

<!-- 載入單元資料檔（例如 spotlight1 unit1） -->
<script src="data/spotlight1/unit1.js"></script>

<script>
  // 1. 朗讀發音功能 (Web Speech API)
  function speakText(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // 停止前一次發音
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9; // 語速稍慢，適合學生
      window.speechSynthesis.speak(utterance);
    }
  }

  // 2. 初始化畫面渲染
  document.addEventListener("DOMContentLoaded", () => {
    if (!window.unitData) return;
    
    document.getElementById("unitTitle").innerText = window.unitData.unit;
    const wsArea = document.getElementById("wordsSentencesArea");

    // 渲染 單字 & 句型
    let currentSection = "";
    const allQuestions = [...(window.unitData.words || []), ...(window.unitData.sentences || [])];

    allQuestions.forEach((q, idx) => {
      // 動態小標題
      let secName = "";
      if (q.type === "chinese_to_english") secName = "一、單字 - 中翻英 (無提示)";
      else if (q.type === "context_fill") secName = "二、單字 - 文意填空 (開頭字母提示)";
      else if (["q_and_a", "unscramble", "rewrite"].includes(q.type)) secName = "三、句型練習 (問答/重組/改寫)";

      if (secName !== currentSection) {
        currentSection = secName;
        const titleDiv = document.createElement("div");
        titleDiv.className = "section-title";
        titleDiv.innerText = secName;
        wsArea.appendChild(titleDiv);
      }

      // 題目卡片
      const card = document.createElement("div");
      card.className = "q-card";
      card.innerHTML = `
        <div class="q-title">
          Q${idx + 1}. ${q.prompt}
          <button type="button" class="audio-btn" onclick="speakText('${q.answer[0].replace(/'/g, "\\'")}')">🔊 聽發音</button>
        </div>
        <input type="text" name="ws_${q.id}" autocomplete="off" placeholder="請在此輸入答案...">
      `;
      wsArea.appendChild(card);
    });

    // 渲染 克漏字 (Cloze)
    if (window.unitData.cloze) {
      document.getElementById("clozeArea").classList.remove("hidden");
      document.getElementById("clozeArticle").innerText = window.unitData.cloze.article;
      const cQArea = document.getElementById("clozeQuestions");

      window.unitData.cloze.questions.forEach(q => {
        const div = document.createElement("div");
        div.className = "q-card";
        let optionsHTML = q.options.map(opt => `
          <label class="option-label">
            <input type="radio" name="cloze_${q.id}" value="${opt}"> ${opt}
          </label>
        `).join('');

        div.innerHTML = `<div class="q-title">${q.number} 題：</div>` + optionsHTML;
        cQArea.appendChild(div);
      });
    }

    // 渲染 短篇閱讀 (Reading)
    if (window.unitData.reading) {
      document.getElementById("readingArea").classList.remove("hidden");
      document.getElementById("readingArticle").innerText = window.unitData.reading.article;
      const rQArea = document.getElementById("readingQuestions");

      window.unitData.reading.questions.forEach(q => {
        const div = document.createElement("div");
        div.className = "q-card";
        let optionsHTML = q.options.map(opt => `
          <label class="option-label">
            <input type="radio" name="reading_${q.id}" value="${opt}"> ${opt}
          </label>
        `).join('');

        div.innerHTML = `<div class="q-title">${q.prompt}</div>` + optionsHTML;
        rQArea.appendChild(div);
      });
    }
  });

  // 3. 表單送出與對答案邏輯
  document.getElementById("quizForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    let totalCount = 0;
    let correctCount = 0;
    const reviewList = document.getElementById("reviewList");
    reviewList.innerHTML = "";

    // 批改單字與句型
    const allWS = [...(window.unitData.words || []), ...(window.unitData.sentences || [])];
    allWS.forEach((q, idx) => {
      totalCount++;
      const uAns = (formData.get(`ws_${q.id}`) || '').trim();

      // 大小寫彈性判斷邏輯
      const isCorrect = q.answer.some(a => {
        const target = String(a).trim();
        const hasCapital = /[A-Z]/.test(target);
        return hasCapital ? target === uAns : target.toLowerCase() === uAns.toLowerCase();
      });

      if (isCorrect) correctCount++;

      const item = document.createElement("div");
      item.className = "q-card";
      item.innerHTML = `
        <div>
          <span class="result-badge ${isCorrect ? 'correct' : 'wrong'}">${isCorrect ? '✓ 正確' : '✕ 錯誤'}</span>
          <strong>Q${idx + 1}. ${q.prompt}</strong>
        </div>
        <div style="margin-top: 8px;">
          學生回答：<span style="color:${isCorrect ? 'green' : 'red'};">${uAns || '(未作答)'}</span><br>
          正確答案：<strong>${q.answer[0]}</strong>
          <button type="button" class="audio-btn" onclick="speakText('${q.answer[0].replace(/'/g, "\\'")}')">🔊 聽發音</button>
        </div>
      `;
      reviewList.appendChild(item);
    });

    // 批改 克漏字
    if (window.unitData.cloze) {
      window.unitData.cloze.questions.forEach(q => {
        totalCount++;
        const uAns = formData.get(`cloze_${q.id}`) || '';
        const isCorrect = q.answer.includes(uAns);
        if (isCorrect) correctCount++;

        const item = document.createElement("div");
        item.className = "q-card";
        item.innerHTML = `
          <div>
            <span class="result-badge ${isCorrect ? 'correct' : 'wrong'}">${isCorrect ? '✓ 正確' : '✕ 錯誤'}</span>
            <strong>克漏字 ${q.number} 題</strong>
          </div>
          <div style="margin-top: 8px;">
            學生回答：${uAns || '(未作答)'} | 正確答案：<strong>${q.answer[0]}</strong>
          </div>
        `;
        reviewList.appendChild(item);
      });
    }

    // 批改 短篇閱讀
    if (window.unitData.reading) {
      window.unitData.reading.questions.forEach(q => {
        totalCount++;
        const uAns = formData.get(`reading_${q.id}`) || '';
        const isCorrect = q.answer.includes(uAns);
        if (isCorrect) correctCount++;

        const item = document.createElement("div");
        item.className = "q-card";
        item.innerHTML = `
          <div>
            <span class="result-badge ${isCorrect ? 'correct' : 'wrong'}">${isCorrect ? '✓ 正確' : '✕ 錯誤'}</span>
            <strong>${q.prompt}</strong>
          </div>
          <div style="margin-top: 8px;">
            學生回答：${uAns || '(未作答)'} | 正確答案：<strong>${q.answer[0]}</strong>
          </div>
        `;
        reviewList.appendChild(item);
      });
    }

    // 顯示成果
    document.getElementById("quizForm").classList.add("hidden");
    document.getElementById("resultArea").classList.remove("hidden");
    document.getElementById("scoreText").innerText = `總分：${Math.round((correctCount / totalCount) * 100)} 分 (答對 ${correctCount} / ${totalCount} 題)`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
</script>

</body>
</html>
