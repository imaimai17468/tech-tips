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
- [ ] 共通パーツ
  - [ ] Aurora
    - [ ] アニメーション効果
    - [ ] 表示・非表示
  - [ ] ErrorBoundary
    - [ ] エラー捕捉
    - [ ] フォールバックUI
  - [ ] Header
    - [ ] ナビゲーション
    - [ ] ユーザーメニュー
    - [ ] レスポンシブ対応
  - [ ] Footer
    - [ ] リンク動作
    - [ ] コピーライト表示
  - [ ] SNSButtons
    - [ ] 各SNSボタンの表示
    - [ ] シェアリンク生成
  - [ ] Editor
    - [ ] テキスト入力
    - [ ] ツールバー操作
    - [ ] プレビュー表示
  - [ ] AuthorCard
    - [ ] ユーザー情報表示
    - [ ] プロフィール画像
  - [ ] Logo
    - [ ] 画像表示
    - [ ] リンク動作
  - [ ] TipList
    - [ ] リスト表示
    - [ ] ページネーション
    - [ ] フィルタリング
- [ ] テンプレート
  - [ ] ユーザーページ
    - [ ] プロフィール表示
    - [ ] Tips一覧
  - [ ] トップページ
    - [ ] 新着Tips
    - [ ] 人気Tags
  - [ ] Tip詳細ページ
    - [ ] コンテンツ表示
    - [ ] メタ情報
  - [ ] ストック一覧
    - [ ] ストック表示
    - [ ] 削除機能
  - [ ] 設定ページ
    - [ ] フォーム入力
    - [ ] 保存機能

## ロジックテスト (*.test.ts)
- [ ] リポジトリアクション
  - [ ] 作成処理
    - [ ] 正常系テスト
    - [ ] バリデーションエラー
    - [ ] 重複エラー
  - [ ] 更新処理
    - [ ] 正常系テスト
    - [ ] 存在しないデータ
    - [ ] 競合エラー
  - [ ] 削除処理
    - [ ] 正常系テスト
    - [ ] 関連データの整合性
  - [ ] 取得処理
    - [ ] 単一データ取得
    - [ ] リスト取得
    - [ ] フィルタリング
    - [ ] ソート
    - [ ] ページネーション
- [ ] データベース操作
  - [ ] トランザクション
  - [ ] ロールバック
  - [ ] 整合性制約

## APIテスト (*.test.ts)
- [ ] エンドポイント動作
  - [ ] HTTPメソッド
    - [ ] GET
    - [ ] POST
    - [ ] PUT/PATCH
    - [ ] DELETE
  - [ ] ステータスコード
    - [ ] 成功時(2xx)
    - [ ] クライアントエラー(4xx)
    - [ ] サーバーエラー(5xx)
- [ ] リクエスト
  - [ ] パラメータバリデーション
  - [ ] ヘッダー検証
  - [ ] ボディ検証
- [ ] レスポンス
  - [ ] レスポンス形式
  - [ ] データ型
  - [ ] 必須フィールド
- [ ] 認証・認可
  - [ ] 未認証アクセス
  - [ ] 認証済みアクセス
  - [ ] 権限チェック

## ユーティリティテスト (*.test.ts)
- [ ] 関数テスト
  - [ ] 入力値の検証
  - [ ] 戻り値の検証
  - [ ] エッジケース
- [ ] 型の検証
- [ ] パフォーマンス
  - [ ] 実行時間
  - [ ] メモリ使用量

## 統合テスト
- [ ] シナリオテスト
  - [ ] ユーザーフロー
  - [ ] データフロー
  - [ ] エラーハンドリング
- [ ] コンポーネント間連携
  - [ ] データの受け渡し
  - [ ] イベントの伝播
  - [ ] 状態の同期

## CI/CD
- [ ] GitHub Actions設定
  - [ ] bunテストの実行
  - [ ] vitestテストの実行
  - [ ] 並列実行の設定
- [ ] カバレッジレポート
  - [ ] レポート生成
  - [ ] 閾値チェック
  - [ ] レポート保存
- [ ] テスト失敗時の処理
  - [ ] 通知設定
  - [ ] ログ保存
  - [ ] リトライ設定

## コード品質
- [ ] ESLintルール
  - [ ] テストファイル用の設定
  - [ ] importの順序
  - [ ] 命名規則
- [ ] Prettierの設定
  - [ ] フォーマットルール
  - [ ] 自動フォーマット
- [ ] TypeScriptの設定
  - [ ] 厳格なチェック
  - [ ] テスト用の型定義

## ドキュメント
- [ ] テスト方針の文書化
- [ ] セットアップ手順の文書化
- [ ] テストケース作成ガイドライン
- [ ] トラブルシューティングガイド