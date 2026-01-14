# SEO Implementation - Phase 2: Structural & Semantic Structure

## 概要 (Overview)
SEO計画のPhase 2「構造・意味付けの強化」として、構造化データ（JSON-LD）の実装とOGPの動的設定を完了しました。
これにより、検索エンジンが「どのようなサービスか」をより深く理解でき、ローカル検索やSNSシェア時の表示が最適化されます。

## 実装内容 (Changes)

### 1. Structured Data (JSON-LD)
Topページ (`src/pages/index.astro`) に、Google推奨の JSON-LD スクリプトを追加しました。
- **Type**: `ChildCare` (LocalBusinessのサブタイプ)
- **Properties**:
    - `name`: enak（エナ）
    - `description`: サイト概要と一致
    - `priceRange`: 2,800円/時間〜
    - `areaServed`: 東京都, 神奈川県
    - `address`: 横浜市 (LocalBusinessとして重要)

### 2. Dynamic OGP
ページの種類に応じて `og:type` メタタグを切り替える機能を実装しました。
- **Layout.astro**: `ogType` プロパティを受け取れるように変更（デフォルトは `website`）。
- **News Detail**: `src/pages/news/[id].astro` にて `ogType="article"` を指定。これにより、SNS等で記事として正しく認識されます。

## 検証結果 (Verification)

### Build Verification
`npm run build` が正常に完了し、HTMLが生成されることを確認しました。
（※一時的なネットワークエラーがありましたが、再実行で解消済み）

### Output Check (Dist)
生成されたHTMLファイルを確認しました。
1.  **Top Page (`dist/client/index.html`)**
    - `<script type="application/ld+json">` が `<head>` 内（またはbody直下）に出力され、`@type": "ChildCare"` などの情報が正しく含まれていることを確認。
2.  **News Page (`dist/client/news/u1dslh1f14a/index.html`)**
    - `<meta property="og:type" content="article">` と出力されていることを確認（通常ページは `website`）。

## Next Steps
SEOの技術的な基盤構築はこれで一通り完了です。
次のフェーズ（Phase 3: Content Strategy）は継続的な運用タスクとなりますが、必要に応じて「エリア別ランディングページ（LP）の作成」や「コラム記事のテンプレート作成」などを進めることが可能です。
