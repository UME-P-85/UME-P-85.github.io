# UMEP — Photography Portfolio

写真家 UMEP のポートフォリオサイト。編集写真の「Julia」スタイルに基づいたミニマルなデザイン。白いキャンバスの上に、写真の主要色を抽出した1pxのカラーフレームを持つメイソンリーグリッドと、巨大な黒いワードマークが特徴。

## ファイル構成

```
umep-portfolio/
├── index.html   ← ページ本体（ヒーロー・ギャラリー・About・Contact）
├── style.css    ← Julia デザインシステム
├── script.js    ← スムーズスクロール & フェードイン
└── README.md    ← このファイル
```

---

## 🚀 GitHub Pages で公開する手順

### ステップ1：GitHub アカウントを作成する

1. https://github.com/ にアクセスして「Sign up」
2. ユーザー名は URL の一部になるので慎重に選ぶ（例：`umep-photo`）
3. メール認証を完了する

### ステップ2：リポジトリを作成する

1. GitHub にログイン後、右上の「+」→「New repository」
2. **Repository name** に **`ユーザー名.github.io`** を入力
   - 例：ユーザー名が `umep-photo` なら `umep-photo.github.io`
   - この命名にすると `https://umep-photo.github.io/` という綺麗な URL になる
3. **Public** を選択
4. 「Create repository」をクリック

### ステップ3：ファイルをアップロードする

作成したリポジトリのページで：

1. 「uploading an existing file」というリンクをクリック
2. `umep-portfolio` フォルダの中身（`index.html`, `style.css`, `script.js`）をドラッグ&ドロップ
   - ⚠️ フォルダごとではなく **中身だけ** をアップロード
3. 「Commit changes」をクリック

### ステップ4：GitHub Pages を有効化

1. リポジトリの「Settings」タブを開く
2. 左メニューの「Pages」をクリック
3. **Source** で `Deploy from a branch` を選択
4. **Branch** で `main` / `/root` を選択して「Save」
5. 数分待つと `https://ユーザー名.github.io/` で公開される 🎉

---

## 🖼️ 自分の写真に差し替える方法

現在はプレースホルダー画像（`picsum.photos`）を使用しています。実際の写真に差し替えるには：

1. リポジトリに `images/` フォルダを作成
2. 自分の写真を `images/photo01.jpg` のようにアップロード
3. `index.html` の中の以下のような部分を書き換える：

**変更前：**
```html
<img src="https://picsum.photos/seed/umep1/800/1100" alt="Editorial portrait" loading="lazy" />
```

**変更後：**
```html
<img src="images/photo01.jpg" alt="お好みの説明文" loading="lazy" />
```

### 💡 カラーフレームは写真の主要色に合わせて

各タイルの `class="tile tile--vermillion"` のような部分でフレームの色を変えられます：

| クラス名 | 色 | 使い分け |
|---|---|---|
| `tile--vermillion` | 朱赤 | 赤系が強い写真 |
| `tile--cobalt` | コバルトブルー | 青系が強い写真 |
| `tile--marigold` | オレンジ | 暖色系の写真 |
| `tile--fern` | グリーン | 緑系が強い写真 |
| `tile--brass` | ゴールド | 黄色・黄土色系の写真 |

キャプションの下線の色も一致させるため、`caption--vermillion` のように同じ色名にしてください。

---

## 📮 お問い合わせフォームの有効化（Formspree）

GitHub Pages は静的サイトなので、フォームを動かすには外部サービスが必要です。**Formspree**（無料）を使うのが一番簡単です：

1. https://formspree.io/ でアカウント作成（月50件まで無料）
2. 「New Form」でフォームを作成
3. 発行される **Form ID**（例：`xyzabcde`）をコピー
4. `index.html` の以下の部分を差し替える：

**変更前：**
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**変更後：**
```html
<form class="contact-form" action="https://formspree.io/f/xyzabcde" method="POST">
```

これで送信フォームが有効になります。

---

## 🎨 デザインカスタマイズ

`style.css` の先頭 `:root` セクションで、以下を調整できます：

- 巨大ワードマークのサイズ：`--text-display`
- カラーフレームの色：`--color-vermillion-frame` など
- 余白：`--spacing-15`, `--section-gap`

**Julia デザインシステムの鉄則：**
- 角丸は **すべて 0px**（シャープなエッジのみ）
- 影・グラデーションは使わない
- Helvetica の **700（Bold）以外は使わない**
- 本文の色は **黒のみ**、色は写真とフレームから

---

## 🔗 独自ドメインを使いたい場合

`umep.com` のような独自ドメインを設定するには：

1. お名前.com、Cloudflare、Google Domains などでドメインを取得
2. GitHub リポジトリの Settings → Pages → Custom domain にドメインを入力
3. ドメインの DNS 設定で GitHub Pages を指すレコードを追加
4. リポジトリのルートに `CNAME` ファイルを作成し、ドメイン名を1行書く

---

## ライセンス

写真の著作権は UMEP に帰属します。コードは自由に改変してください。

© 2026 UMEP
