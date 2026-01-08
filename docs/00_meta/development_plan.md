# 開発計画書 - enna

## 1. 開発フェーズ (詳細タスク)

### Phase 0: 準備・詳細設計 (Week 1前半)
**Goal**: 開発に着手する前に、ツール類の準備と画面設計を完全に固める。

*   **Accounts & Tools Setup**
    *   [x] microCMS アカウント作成 & サービス(プロジェクト)開設
    *   [x] GitHub リポジトリ作成
    *   [x] Vercel アカウント確認 (連携準備)
*   **Detailed Wireframing (ページ別詳細設計)**
    *   [x] **Top Page**: FV, Features, Flow, FAQ configuration
    *   [x] **Profile Page**: 経歴見せ方、写真配置、想いのテキスト量定義
    *   [x] **Service Page**: 料金表とアクティビティへの導線定義
    *   [x] **Activity Page**: 小麦粉粘土や手形アート等の詳細コンテンツ定義
    *   [x] **Contact**: 入力項目とバリデーションルールの定義

### Phase 1: 環境構築とベース実装 (Week 1後半)

*   **Project Setup**
    *   [x] `npm create astro@latest` でプロジェクト作成 (minimal)
    *   [x] TailwindCSS インテグレーション追加 (`npx astro add tailwind`)
    *   [x] ディレクトリ構成の整理 (`src/components`, `src/layouts`, `src/utils` 等の作成)
    *   [x] ローカル環境での起動確認 (`npm run dev`)
*   **Design System Implementation**
    *   [ ] Google Fonts (`Zen Maru Gothic`, `Outfit`) の読み込み設定 (Layout実装時)
    *   [x] `src/styles/global.css` へのカラーパレット定義 (@theme)
    *   [x] `src/styles/global.css` 作成 (基本スタイル、@apply設定)
*   **Assets Generation (Gemini)**
    *   [x] ロゴ画像の生成・選定・配置 (`/public/logo.svg` or `.png`)
    *   [x] ファビコン生成・配置
    *   [x] キービジュアル用イメージの生成
*   **Common Components**
    *   [x] `Layout.astro` (基本HTML構造, Metaタグ, OGP枠) の実装
    *   [x] `Header.astro` (ロゴ表示, ナビゲーションメニュー, スマホ用ハンバーガー) の実装
    *   [x] `Footer.astro` (ロゴ, リンク, コピーライト) の実装

### Phase 2: コンテンツ実装 (Static & CMS)
**Goal**: 主要ページを実装し、動的コンテンツを表示できるようにする。

*   **microCMS Integration**
    *   [x] microCMS サービス作成
    *   [x] APIスキーマ定義: 「お知らせ (news)」(title, content, date, category)
    *   [x] `.env` ファイル作成 (API Key設定)
    *   [x] `src/utils/microcms.ts` (SDKを使用したクライアント) の実装
*   **Top Page (`index.astro`)**
    *   [x] **Hero Section**: キャッチコピーとメインビジュアル、CTAボタン(面談予約)の実装
    *   [x] **Concept Section**: 「ennaについて」のメッセージ実装
    *   [x] **Features Section**: 「3つの強み」をカードデザイン等で実装 (Activityへの導線含む)
    *   [x] **Service Summary**: サービス概要へのリンク導線
    *   [x] **Flow & FAQ Section**: 利用の流れ(3ステップ)とFAQ(アコーディオン)の実装
    *   [x] **News Section**: microCMSから最新3件取得・表示
*   **Sub Pages**
    *   [x] **Profile Page**: 経歴タイムライン、資格リスト、想いテキストの実装
    *   [x] **Service Page**: 料金表(Table)、オプションリスト、アクティビティページへのバナー実装
    *   [x] **Activity Page**: 小麦粉粘土・手形アート等の詳細紹介、ギャラリー実装

### Phase 3: インタラクション & フォーム
**Goal**: ユーザーが問い合わせ可能で、触り心地の良いサイトにする。

*   **Contact Form**
    *   [ ] フォームUIコンポーネント (Name, Email, Tel, Type, Message) の作成
    *   [ ] 送信機能の実装 (Web3Forms/SSG Form/Google Forms埋め込み等を検討・決定)
    *   [ ] サンクスページの実装
*   **UI Polish**
    *   [ ] ボタンのHoverアニメーション追加
    *   [ ] スクロール連動フェードインアニメーション (Astro使用 or JS)
    *   [ ] モバイルメニューの開閉アニメーション調整
*   **SEO & Meta**
    *   [ ] 各ページの `title`, `description` 設定
    *   [ ] OGP画像の設定
    *   [ ] `sitemap-index.xml` 生成設定 (`@astrojs/sitemap`)

### Phase 4: デプロイ & 運用準備
**Goal**: 本番環境で公開し、運用フローを確立する。

*   **Deployment**
    *   [ ] GitHub リポジトリへのPush
    *   [ ] Vercel プロジェクト作成 & GitHub連携
    *   [ ] Vercel 環境変数 (microCMS API Key) 設定
    *   [ ] ビルド & デプロイ確認
*   **Verification**
    *   [ ] スマホ実機での表示崩れチェック
    *   [ ] 問い合わせフォームの送信テスト
    *   [ ] Lighthouse / PageSpeed Insights スコア確認

## 2. ディレクトリ構造 (予定)
```
src/
├── components/
│   ├── common/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Button.astro
│   ├── home/
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   └── NewsPreview.astro
│   └── ui/
│       ├── SectionTitle.astro
│       └── Accordion.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro
│   ├── profile.astro
│   ├── service.astro
│   ├── activity.astro
│   ├── contact/
│   │   ├── index.astro
│   │   └── thanks.astro
│   └── news/
│       ├── [id].astro
│       └── index.astro
├── styles/
│   └── global.css
└── utils/
    └── microcms.ts
```
