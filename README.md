#### Chrome Extension Sample (background.js, script.js, Chrome.storage API)
簡易ストップウォッチプログラム

メッセージのやり取りをシンプルにするため、送信はscript.js(フロント)のみとし、コールバックも受け取らず常に投げっぱなし状態。

1. [start]ボタンクリック
1. script.js が chrome.runtime.sendMessage()
1. background.js が chrome.runtime.onMessage.addListener() で受信を検知、カウンター起動
1. カウントアップし、Chrome.storageを書き換える
1. script.js が chrome.storage.onChanged.addListener() でChrome.storageの変更を検知。popup.html に反映

