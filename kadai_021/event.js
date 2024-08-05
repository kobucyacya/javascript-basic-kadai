//btnを取得して代入
const btn = document.getElementById('btn');
//クリックして２秒後に実行
btn.addEventListener('click', () => { 
  setTimeout(() => {
    //textを取得して代入
    const text = document.getElementById('text');
    //テキストを追加
    text.textContent ='ボタンをクリックしました';
  }, 2000);
});
