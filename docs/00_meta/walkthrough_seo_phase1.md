# SEO Implementation - Phase 1: Technical Foundation

## 概要 (Overview)
SEO計画のPhase 1「技術的基盤の確立」を実装しました。
Google検索エンジンがサイトを正しくクロールし、インデックスするための必須設定を完了しました。

## 実装内容 (Changes)

### 1. Site URL & Sitemap Configuration
`astro.config.mjs` に以下の設定を追加しました。
- サイトURLを `https://babysitter-enak.com` に設定（`.env`のメール設定より推定）。
- `@astrojs/sitemap` インテグレーションを導入し、ビルド時に自動で `sitemap.xml` を生成するように設定。

### 2. Robots.txt
`public/robots.txt` を作成しました。
- 全てのクローラーに対してアクセスを許可 (`Allow: /`)。
- サイトマップの場所を明示 (`Sitemap: ...`)。

### 3. Canonical URLs
`src/layouts/Layout.astro` に `rel="canonical"` タグを追加しました。
- 正規化されたURL（クエリパラメータを含まないURL）を検索エンジンに伝えることで、重複コンテンツとみなされるリスクを回避します。
- `Astro.site` 設定を利用して絶対パスを出力します。

## 検証結果 (Verification)

### Build Verification
`npm run build` を実行し、正常に完了することを確認しました。

### Output Check
生成されたファイル (`dist/client/`) を確認しました。

1.  **sitemap-index.xml**
    ```xml
    <sitemapindex ...>
      <sitemap>
        <loc>https://babysitter-enak.com/sitemap-0.xml</loc>
      </sitemap>
    </sitemapindex>
    ```
2.  **sitemap-0.xml**
    - Topページ (`/`)
    - 固定ページ (`/price/`, `/service/`, `/profile/`, `/contact/`)
    - 動的ページ (`/news/u1dslh1f14a/`)
    が含まれていることを確認しました。

3.  **robots.txt**
    ```text
    User-agent: *
    Allow: /
    Sitemap: https://babysitter-enak.com/sitemap-index.xml
    ```

## Next Steps
Phase 1 が完了しました。次は **Phase 2: Structural & Semantic（構造・意味付けの強化）** として、構造化データ（JSON-LD）の実装を推奨します。
