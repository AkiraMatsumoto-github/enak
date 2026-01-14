# SEO Implementation Plan for enna

## 現在のステータス分析 (Current Status Analysis)

### ✅ Good Points
- **Architecture**: Astro v5による高速なSSG/SSR基盤（Core Web Vitals的に有利）。
- **Basic Meta**: `Layout.astro` に `title`, `description`, `og:image` 等の基本タグは実装済み。
- **Mobile First**: TailwindCSSによるレスポンシブデザイン。

### ⚠️ Missing / Improvement Areas
1.  **Indexing Control**: `sitemap.xml` と `robots.txt` が存在しないため、Googleがサイト全体を正しくクロールできない可能性がある。
2.  **Canonical URLs**: 同一コンテンツのURL正規化（Canonical）設定がない。
3.  **Structured Data (JSON-LD)**: 「保育・産後ケアサービス」としての構造化データがないため、ローカル検索（Google Map等）での優位性が発揮できていない。
4.  **Dynamic OGP**: 記事ページ（News）と固定ページで `og:type` が区別されていない（全て `website` になっている）。

---

## Roadmap

### Phase 1: Technical Foundation (技術的基盤の確立)
**目的**: Googleのクローラーがサイトを正しく認識・評価できるようにする。

1.  **Sitemap Generation**
    - `@astrojs/sitemap` を導入し、ビルド時に自動生成する設定を追加。
    - `astro.config.mjs` に `site` (本番URL) を設定。
2.  **Robots.txt Creation**
    - `public/robots.txt` を作成し、Sitemapの場所を明記。
3.  **Canonical URL Implementation**
    - `Layout.astro` に `rel="canonical"` を追加し、重複コンテンツ問題を防止。

### Phase 2: Structural & Semantic (構造・意味付けの強化)
**目的**: 検索エンジンに「どのようなサービスか」を詳しく伝える。

1.  **Structured Data (JSON-LD)**
    - Topページ (`index.astro`) に `LocalBusiness` または `ChildCareAccount` のスキーマを追加。
    - サービス名、エリア、価格帯、ロゴなどを定義。
2.  **Dynamic OGP & Meta**
    - `Layout.astro` を改修し、ページタイプ (`website` vs `article`) を動的に切り替え可能にする。
    - ニュース記事などの個別ページでのOGP最適化。

### Phase 3: Content Strategy (コンテンツ施策)
**目的**: ターゲットユーザー（0-1歳児のママ）の流入を増やす。

1.  **Educational/Support Content**: 育児の悩み（「夜泣き」「離乳食」など）に答える記事コンテンツの拡充。
2.  **Area Optimization**: 「横浜市青葉区 ベビーシッター」などの地域キーワードの適切な配置。

---

## Next Action (まずはここから)

Phase 1 の実装から着手することを推奨します。

### 具体的な作業手順
1.  `docs/00_meta/seo_plan.md` の作成（本ドキュメント）
2.  `astro.config.mjs` への `site` URL設定
3.  `@astrojs/sitemap` のインストールと設定
4.  `public/robots.txt` の作成
