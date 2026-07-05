[README.md](https://github.com/user-attachments/files/29678279/README.md)
# UMEP — Photography Portfolio (Dreamfield edition)

写真家 UMEP のポートフォリオサイト。ダークキャンバスの上を、微生物のように写真の泡が浮遊するデザイン。ホバー / クリックで右下に詳細カードが立ち上がる。

## ファイル構成

```
umep-portfolio/
├── index.html   ← ヒーロー（Dreamfield）・About・Contact
├── style.css    ← ダークテーマ + 浮遊アニメーション
├── script.js    ← 写真の自動配置・クリック詳細表示
└── README.md    ← このファイル
```

---

## 🚀 GitHub Pages で更新する

すでに `UME-P-85.github.io` として公開済みなので、更新は次の手順のみ：

1. GitHub のリポジトリ `UME-P-85.github.io` を開く
2. 既存の `index.html` / `style.css` / `script.js` を **1つずつクリック** → 右上の 🖉（鉛筆）アイコン → 中身を全消しして、新しいファイルの中身をコピペ → Commit
3. もしくは、上の「Add file」→「Upload files」で 3ファイルを新しいものに置き換え

数分後 `https://ume-p-85.github.io/` にDreamfieldデザインが反映される。

---

## 🖼️ 自分の写真に差し替える方法

現在は `picsum.photos` のプレースホルダー画像を使用中。実写真に切り替えるには **`script.js` の `PHOTOS` 配列** を編集します。

### ステップ1：画像をアップロード

1. リポジトリのトップで「Add file」→「Create new file」
2. ファイル名を `images/photo01.jpg` のように入力（`images/` と入れると自動でフォルダになる）
3. その後は「Upload files」から画像を一気にドラッグ&ドロップ

### ステップ2：`script.js` の `PHOTOS` を書き換え

`script.js` の先頭に PHOTOS という配列があり、1エントリ = 1つの浮遊写真です。

**変更前（サンプル）:**
```js
{ seed: 'umep01', title: 'Camellia', subtitle: 'Editorial · Winter Series', ... },
```

`seed` は `picsum.photos` 用のキーワードで、画像URLは `script.js` の下の方でこう書かれています：

```js
img.src = `https://picsum.photos/seed/${photo.seed}/600/600`;
```

自分の写真を使う場合、**この行を書き換えて** `photo.src` を読ませます：

```js
img.src = photo.src;
```

そして PHOTOS 配列を次のように書き換えます：

```js
{ src: 'images/photo01.jpg', title: '作品名', subtitle: '2026 · Spring', meta: '2026 · No. 001',
  tag: 'Portrait', desc: 'English caption.', descJa: '日本語のキャプション。', credit: 'Client — ○○' },
```

写真は何枚でも増減できます。多いほど画面が密になり、大小のバランスも自動で決まります（大/中/小の比率は約 15% / 30% / 55%）。

---

## 🎨 デザイン微調整のヒント

### 背景色を変えたい
`style.css` の `:root` の `--color-void: #050505;` を書き換えるだけ。

### 写真の浮き具合を変えたい
`style.css` の `@keyframes float-slow / float-mid / float-fast` の `translate` の数値を大きくすると、より激しく揺れます。

### 詳細カードの位置
`style.css` の `.detail-card` の `right` と `bottom` を調整。左下に出したい場合は `right` を `left` に。

### ワードマークを変えたい
`index.html` の `<h1 class="wordmark-bg">UMEP</h1>` を変更。フォントサイズは `--text-display` で調整。

---

## 📮 コンタクトフォーム（Formspree）

`GitHub Pages` は静的なので、フォーム送信には外部サービスが必要。**Formspree** が最も簡単（月50件まで無料）。

1. https://formspree.io/ でアカウント作成
2. 「New Form」→ 発行される Form ID（例：`xyzabcde`）をコピー
3. `index.html` の以下を差し替え：

**変更前：**
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**変更後：**
```html
<form class="contact-form" action="https://formspree.io/f/xyzabcde" method="POST">
```

未設定のまま送信されると、`script.js` 側で「未設定です」の警告が出る仕組み。

---

## 🔗 独自ドメイン（例：umep.com）

1. お名前.com / Cloudflare / Google Domains などでドメイン取得
2. GitHub リポジトリの Settings → Pages → Custom domain に入力
3. DNS で以下のAレコードを設定：
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
4. リポジトリのルートに `CNAME` ファイルを作成し、ドメイン名を1行書く

---

## 💡 モバイルでの見え方

- 900px 以下：ナビの余白がタイトになる
- 600px 以下：ヒーロー最低高が 600px に、詳細カードが横幅いっぱいに
- `prefers-reduced-motion` が有効な端末では、浮遊アニメーションが自動でオフになるように設定済み（酔いやすい方への配慮）

---

## ライセンス

写真の著作権は UMEP に帰属します。コードは自由に改変してください。

© 2026 UMEP
