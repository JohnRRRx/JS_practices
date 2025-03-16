let title = document.getElementById("title");
let content = document.getElementById("content");
let post = document.getElementById("post");
let list = document.getElementById("list");

// 初期状態でボタンを無効化
post.disabled = true;

// 入力欄の変更を監視してボタンの状態を更新
function updateButtonState() {
    post.disabled = !(title.value.trim() && content.value.trim());
}

// 入力があるたびにボタンの状態を更新
title.addEventListener("input", updateButtonState);
content.addEventListener("input", updateButtonState);

post.addEventListener("click", () => {
    list.innerHTML += `
        <div class="article">
            <h2>${title.value}</h2>
            <p>${content.value}</p>
        </div>
    `;
    // 入力欄をクリア
    title.value = "";
    content.value = "";
    
    // ボタンを再び無効化
    updateButtonState();
});