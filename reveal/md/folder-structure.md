## フォルダ構成

---

React でアプリケーションを書いていると

基本的にコンポーネントはどんどん大きくなっていきます。

---

大きすぎるコンポーネントは可読性に欠け

メンテナンスがしにくくなります。

---

そして大きくなりすぎたコンポーネントは

やがて街をぶっ壊しにきます。

![titan](/dist/assets/folder-structure-titan.png "titan")

---

コンポーネントを細かくすると今度はフォルダ構成の問題が。。。

ただこの議論って昔っからずっとやってるよなぁ。。。

---

先日いい記事を見つけました。

今までの経験と記事の内容がマッチしている

https://www.robinwieruch.de/react-folder-structure/

---

なにが書いてあるか。

---

### そもそもアプリケーションの大きさによってフォルダ構成は大きく異なるぞ！

的なことが書いてある。

---

kalonade のアプリケーションはすでに超大型巨人クラス

---

### 早速実践

```sh
$ npx create-react-app folder-structure-app --template typescript
```

---

### 1 ファイルで完結するようなアプリケーション

---

もしタイトルと説明だけのような画面なら 1 ファイルのほうがいい。

<div style="width: 100%; display: flex;">
  <div style="flex: 1 1 auto">
    <img src="/dist/assets/folder-structure-folder1.png" />
  </div>
  <div style="flex: 1 1 auto">
    <img src="/dist/assets/folder-structure-code1.png" />
  </div>
</div>

---

### そのファイルが成長してきたら

![titan](/dist/assets/folder-structure-code2.png "titan")

---

### 分割する

<div style="width: 100%; display: flex;">
  <div style="flex: 1 1 auto">
    <img src="/dist/assets/folder-structure-folder2.png" />
  </div>
  <div style="flex: 1 1 auto">
    <img src="/dist/assets/folder-structure-code3.png" />
  </div>
</div>

---

ここでさらに`List.tsx`が大きくなってきたときのことを考える。

もし`ListItem`が`List`に依存しており`ListItem`単独で利用することがあまり考えられない場合、次のような構成にする。
このとき`index.ts`で元のコンポーネントをエクスポートする。

<div style="width: 100%; display: flex;">
  <div style="flex: 1 1 auto">
    <img src="/dist/assets/folder-structure-folder3.png" />
  </div>
  <div style="flex: 1 1 auto">
    <img src="/dist/assets/folder-structure-code4.png" />
  </div>
</div>

---

こうすると何がうれしいか。

---

呼び出し元は、それがフォルダであるかファイルであるか意識しなくていい。

<div style="width: 100%; display: flex;">
  <div style="flex: 1 1 auto">
    <img src="/dist/assets/folder-structure-code5.png" />
  </div>
</div>

---

🚨 注意点

---

もし`ListItem.tsx`が大きくなって分割したいときにどう分割すべきか？
`ListItem`に依存する`ListItemTitle`を作るときどうすべきか。
左はさらにネストさせており、右はフラットにしている。

<div style="width: 100%; display: flex;">
  <div style="flex: 1 1 auto">
    <img src="/dist/assets/folder-structure-folder4.png" />
  </div>
  <div style="flex: 1 1 auto">
    <img src="/dist/assets/folder-structure-folder5.png" />
  </div>
</div>

---

### ネストさせた場合のメリット

- 今後どれだけ大きくなっても、この繰り返しであり考えることが少ない

### フラットにした場合のメリット

- フォルダ構成が深くなく、ソースコードを追いやすい

---

紹介した記事では、2 階層以上はネストを深くしないほうがいいとのこと。

<div style="width: 100%; display: flex;">
  <div style="flex: 1 1 auto">
    <img src="/dist/assets/folder-structure-article1.png" />
  </div>
</div>
訳:ここからは、コンポーネント同士をあまり深くネストさせないように注意する必要があります。私の経験則では、コンポーネントを2階層以上ネストさせることはありません。ListとListItemのフォルダは問題ありませんが、ListItemのフォルダには別のフォルダをネストさせないようにします。
---

実際はもっと巨大になっていく可能性がある。
![titan](/dist/assets/folder-structure-titan.png "titan")

---

### ここで登場するのが **Atomic デザイン**

⚠️ ここからは記事の内容と逸れます。

---
