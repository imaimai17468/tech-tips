# テスト実装チェックリスト

## 環境セットアップ
- [x] bunのインストールと設定
  - [x] `bun install` の実行
  - [x] `bun test` コマンドの動作確認
- [x] vitestの設定
  - [x] `vitest.config.ts` の作成
  - [x] テストマッチパターンの設定 (`*.vitest.ts`)
  - [x] happy-domの設定
- [x] タイムゾーン設定の確認
  - [x] デフォルトタイムゾーンの設定
  - [x] CI環境でのタイムゾーン設定

## コンポーネントテスト (*.vitest.tsx)
- [ ] レイアウトコンポーネント
  - [x] MainLayout
  - [x] SeoComponent
