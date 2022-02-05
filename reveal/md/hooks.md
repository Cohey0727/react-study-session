# React hooks

---

## hooks とは

![hooks](/dist/assets/hooks-overview.png "hooks")

---

へぇ

なるほどわからん

---

そもそも state(状態)とはなんなのか？

なぜ useState とか useMemo とかいうやつを使う必要があるのか？

---

ということで実際に書きながら試してみる

```sh
$ npx create-react-app hooks-app --template typescript
```

---

もし React の state(状態)について何も知識がないまま state を書いてと言われたらどうするか？

---

![hooks](/dist/assets/hooks-original-state.png "hooks")

---

これだと画面がうまく動作しません。

なぜでしょう？

---

状態変化に伴うべき再レンダリングが**フック**されていないから！

---

じゃあどうすべきか。

useState を使おう！

---

![hooks](/dist/assets/hooks-usestate-state.png "hooks")

---

useState の戻り値である set 関数は、

コンポーネントの再レンダリングを**フック**します。

---

# This is hooks!

---

それ以外に用意されている基本的な hooks

| 関数        | 処理内容                                         |
| ----------- | ------------------------------------------------ |
| useMemo     | 変数の変更を**フック**して新しい値を再計算する   |
| useCallback | 変数の変更を**フック**して新しい関数を再計算する |
| useEffect   | 変数の変更を**フック**して特定の処理を実行する   |

---

## カスタム hooks

---

先ほどの hooks の多くは状態に付随してロジックを持つことが多いです。

そのロジックを内包することでより便利になることがあります。

---

画面のサイズ変更に**フック**して画面の再レンダリング行うとともに現在の画面サイズを返す

![hooks](/dist/assets/hooks-customhooks.png "hooks")

---

### よくある間違い

何からも**フック**されないし、何にも**フック**しない

これはただの関数!

![hooks](/dist/assets/hooks-mistake.png "hooks")

---

## hooks によるパフォーマンス向上

---

React は状態が変わると再レンダリングします。

では状態が変わるとは？

---

### 状態が変わる ≒ 参照が変わる

---

さきほど出てきた`useMemo`や`useCallback`は
第二引数の参照やプリミティブ値が変わらない場合、前回と同じ参照を返します。

---

左は `useMemo` を利用しない。右は利用する。

<div style="width: 100%; display: flex;">
  <img src="/dist/assets/hooks-nostate.png" />
  <img src="/dist/assets/hooks-yesstate.png" />
</div>

---

線が入っている箇所は再レンダリングされている。
`useMome`を利用したほうがレンダリングが抑えられている。

<div style="width: 100%; display: flex;">
  <div style="flex: 1 1 auto">
    <img src="/dist/assets/hooks-render-nostate.png" />
  </div>
  <div style="flex: 1 1 auto">
    <img src="/dist/assets/hooks-render-yesstate.png" />
  </div>
</div>
---

再レンダリングは、以下の Chrome 拡張で見ることができます。

開発者ツールの Profiler タブから'Highlight updates when components render.'にチェック！

<div style="width: 100%; display: flex;">
  <div style="flex: 1 1 auto">
    <img src="/dist/assets/hooks-react-extention.png" />
  </div>
  <div style="flex: 1 1 auto">
    <img src="/dist/assets/hooks-devtool.png" />
  </div>
</div>
