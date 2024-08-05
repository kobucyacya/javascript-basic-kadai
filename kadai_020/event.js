// btnを取得し、定数に代入する
const btn = document.getElementById('btn');

// クリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
    //テキストを取得し、定数に代入する
    const text = document.getElementById('text');
    //新しくテキストを追加する
    text.textContent = 'ボタンをクリックしました';
});
