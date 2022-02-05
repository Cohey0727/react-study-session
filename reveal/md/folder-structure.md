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

#### ⚠️ ここからは私の考察。

---

Atomic デザインを採用する目的

→ 再利用性を高め、コンポーネントの複雑さを回避する。

---

### フォルダ構成

```
src
└── components
    ├── atoms
    ├── molecules
    ├── organisms
    ├── pages
    └── templates

```

---

### 役割

| フォルダ  | 役割                                                                                                          |
| --------- | ------------------------------------------------------------------------------------------------------------- |
| atoms     | 最も小さいコンポーネント。複数の JSX で構成されることは少なく、スタイルのみを適用する。もっとも再利用される。 |
| molecules | atoms やライブラリから複数の JSX を組み合わせてできるコンポーネント。ビジネスロジックは持たない。             |
| organisms | molecules や atoms ライブラリから複数の JSX を組み合わせてできるコンポーネント。ビジネスロジックを持つ。      |
| pages     | ルーティングされるコンポーネント。organisms 間の状態のやり取りや画面の構成を実装する。                        |
| templates | pages で共通するものを切り出すコンポーネント。ヘッダーやナビゲーションなど。                                  |

---

こうすることで 2 階層までというルールを設けても molecules や organisms では、すでにカスタマイズ済みのコンポーネントが利用できるため巨大になりにくい。

---

ところで、ビジネスロジックとは？

---

- ビジネスロジックがないといえるもの

  - プロダクト固有の属性や名詞が入っていない
  - そのコンポーネントが別のプロダクトで必要なときにデザイン以外の変更が必要にならない

- 例
  - customer や user → ビジネスロジックである
  - label や value → ビジネスロジックでない

---

### カルテ画面をサンプルに分解してみる。

---

ページ全体を organism に分解

![titan](/dist/assets/folder-structure-component1.png "titan")

---

organism を nested organism に分解 ①

![titan](/dist/assets/folder-structure-component2.png "titan")

---

organism を nested organism に分解 ②

![titan](/dist/assets/folder-structure-component3.png "titan")

---

organism を nested organism に分解 ③

![titan](/dist/assets/folder-structure-component4.png "titan")

---

おしまい
