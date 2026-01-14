# SEO Implementation - Phase 3 (Early Start): Area Keyword Optimization

## 概要 (Overview)
ユーザーの要望である「たまプラーザ ベビーシッター」での検索順位1位獲得を目指し、具体的なキーワード対策（Area Optimization）を実施しました。
Phase 2で構築した「構造化データ」と「基礎タグ」に、具体的なエリアキーワード「たまプラーザ」「横浜市青葉区」を強力に組み込みました。

## 実施内容 (Changes)

### 1. Homepage (`src/pages/index.astro`)
#### Title Tag
検索結果で最も重要なタイトルタグを最適化しました。
- `before`: enak | ママと赤ちゃんを包み込む、プロフェッショナルの温もり
- `after`: enak | **たまプラーザ・横浜市青葉区のベビーシッター**・産後ケア

#### Structured Data (JSON-LD)
検索エンジンに地域の関連性を伝えるため、構造化データを強化しました。
- `description`: 「たまプラーザ・青葉区のベビーシッターenak」から始まるように変更。
- `address.addressLocality`: 「横浜市」→「**横浜市青葉区（たまプラーザ周辺）**」と具体化。

#### Hero Section Content
ユーザーがサイトを開いた瞬間に「自分の地域のサービスだ」と認識できるよう、メインビジュアル直下のコピーを変更しました。
- `Text`: 「たまプラーザ・青葉区を中心に、一人ひとりの個性と成長に合わせた…」

### 2. Price/Area Page (`src/pages/price.astro`)
キャンペーン対象エリアの記載を具体化しました。
- `Text`: 「横浜市青葉区・川崎市宮前区の一部エリア **（たまプラーザ周辺）**」

## 検証結果 (Verification)

### Build & Source Check
`npm run build` 後の `dist/client/index.html` を確認しました。
- `<title>` タグに「たまプラーザ」が含まれていることを確認。
- JSON-LD スクリプト内に「たまプラーザ」が含まれていることを確認。
- 表示テキスト（Hero section）に「たまプラーザ」が含まれていることを確認。

## Next Actions
- **Google Search Console**: インデックス登録をリクエストし、変更を早期に反映させることを推奨します。
- **Content Expansion**: 今後、「たまプラーザの子育て支援情報」などのブログ記事を追加すると、さらに地域関連性が高まります。
