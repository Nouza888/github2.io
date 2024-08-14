document.getElementById('fridayForm').addEventListener('submit', function(event) {
    event.preventDefault(); // フォームの送信をキャンセル
    const year = document.getElementById('year').value;
    const result = countFriday13ths(year);
    document.getElementById('result').textContent = `${year}年に13日の金曜日は${result}回あります。`;
});

    // 半角数字以外の不正な値が入力されている場合のチェック
    if (!/^\d+$/.test(yearInput)) {
        // 画像と「残念」というテキストを表示
        resultDiv.innerHTML = '<img src="path/to/your/image.png" alt="残念な画像" style="max-width: 100%; height: auto;">';
        const sorryText = document.createElement('p');
        sorryText.textContent = '残念';
        sorryText.style.position = 'absolute'; // テキストを画像の上に重ねるため
        sorryText.style.top = '10px'; // 画像上部からの距離
        sorryText.style.left = '50%'; // 中央寄せ
        sorryText.style.transform = 'translateX(-50%)';
        sorryText.style.color = 'red'; // テキストの色を赤に設定
        sorryText.style.fontSize = '2em'; // テキストサイズを調整
        sorryText.style.fontWeight = 'bold'; // テキストを太字に設定
        resultDiv.appendChild(sorryText);

    }

    // 正常な値の場合の処理（13日の金曜日の計算など）

function countFriday13ths(year) {
    let friday13Count = 0;
    for (let month = 0; month < 12; month++) {
        const date = new Date(year, month, 13);
        if (date.getDay() === 5) { // 5 = Friday
            friday13Count++;
        }
    }
    return friday13Count;
}
