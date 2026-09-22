import type { Messages } from "../types";

export const ja: Messages = {
  languageSwitcher: {
    label: "言語を変更",
  },
  skip: "コンテンツへ移動",
  sceneIndicator: {
    label: "シーンインデックス",
    goTo: "チャプター{chapter}：{title}へ移動",
  },
  hero: {
    cityLine: "Full-Stack Web Developer · AI-Assisted Workflow",
    tagline:
      "アイデア・ニーズ・課題を、実際に使えるデジタルプロダクトへ変えるウェブサイトとフルスタックアプリを開発しています。",
    role: "フルスタック開発者",
    enterArchive: "制作実績を見る",
    readOn: "私について",
  },
  scenes: {
    "scene-hero": { title: "ようこそ", label: "序章" },
    "scene-identity": { title: "私について", label: "概要" },
    "scene-about": { title: "プロフィール", label: "プロフィール" },
    "scene-arsenal": { title: "技術スタック", label: "スキル" },
    "scene-nft": { title: "クリエイティブスタジオ", label: "スタジオ" },
    "scene-experience": { title: "開発の歩み", label: "歩み" },
    "scene-contact": { title: "お問い合わせ", label: "連絡" },
    "scene-final": { title: "締めくくり", label: "終幕" },
  },
  identity: {
    intro: "序章 · こんにちは",
    titleAsk: "開発者",
    titleWho: "作る人。",
    devProfile: "開発者プロフィール",
  },
  profile: {
    developerTitle: "フルスタック開発者",
    positioning: "Coding · Building · Experimenting with AI",
    shortBio:
      "アイデアを最初のスケッチから動くプロダクトへ、インターフェースからデータベースまで一気通貫で作るウェブ開発者。",
    bio: [
      "Renno Nur Oktavianoと申します。ウェブサイトとフルスタックアプリの開発に取り組む開発者です。ニーズを理解し、インターフェースを設計し、システムを組み立て、機能を開発し、最終的なプロダクトが本当に動くことを確認する——ゼロから作り上げる過程を楽しんでいます。",
      "日々のワークフローでは、AIコーディングエージェントを開発パートナーとして使っています。アイデア探索、実装、デバッグ、そして反復のスピードアップをサポートしてくれます。",
    ],
    currentFocus: "フルスタック開発とAI支援ワークフロー",
    location: "インドネシア · UTC+7",
    status: "業務募集 · インターン · フリーランス · 協業に対応",
    interests: [
      "映画的なUI",
      "タイポグラフィ",
      "レトロテクノロジー",
      "分散システム",
      "インディーゲームデザイン",
      "ジャズノワールのサントラ",
    ],
    philosophy:
      "AIはコードをより速く書いたり探求したりするのを助けてくれます。しかし、問題を理解し、解決策を決め、結果をテストし、システムが動くことを確かめるのは、開発者である私の仕事です。",
    caseNumber: "RN-001",
  },
  about: {
    label: "私のプロフィール",
    title: "私について",
    caption:
      "私が誰で、何を大切にし、開発者としてどう働くか——ひと目でわかる紹介です。",
    subjectProfile: "プロフィール概要",
    caseOpen: "プロフィールID",
    filePhoto: "開発者写真 —",
    evidenceGradeB: "ステータス · アクティブ",
    personalStatement: "自己申告",
    currentInterests: "現在の関心事",
    doctrine: "— 開発者の個人信条",
    meta: {
      status: "ステータス",
      location: "所在地",
      currentFocus: "現在の焦点",
      caseNumber: "プロフィールID",
    },
  },
  arsenal: {
    label: "スキルスタック",
    title: "Tech Stack",
    caption:
      "フルスタックプロダクトの設計・開発・リリースに使っている技術たち。",
    hint: "スキルマップ — ここにあるツールはすべて実案件で使いました",
    category: {
      frontend: "フロントエンド",
      backend: "バックエンド",
      database: "データベース",
      styling: "スタイリング",
      tooling: "ツール",
      deployment: "デプロイ",
    },
    skill: {
      "frontend.Next.js":
        "App Router、Server Components、APIルート、画像・フォント最適化、本番デプロイ。",
      "frontend.React":
        "コンポーネント設計、hooks、状態管理、パフォーマンスを意識した描画。",
      "frontend.TypeScript":
        "データモデル・props・チームにやさしいAPIのための厳格な型付け。",
      "backend.Laravel / PHP":
        "REST API、Eloquentモデル、認証、保守性の高いMVCアプリ。",
      "backend.Node.js":
        "APIサービス、バックグラウンドジョブ、堅実なエラー処理を持つツールスクリプト。",
      "database.MySQL":
        "本番負荷のためのスキーマ設計、インデックス、クエリ最適化。",
      "database.PostgreSQL":
        "リレーショナルモデリング、JSONカラム、トランザクション整合性。",
      "styling.Tailwind CSS":
        "デザイントークンとカスタムモーションを備えたutility-firstスタイリング。",
      "styling.Framer Motion / GSAP":
        "スクロール連動のUI、マイクロインタラクション、演出されたモーション。",
      "tooling.Git & GitHub":
        "きれいなブランチ運用、コードレビュー、CIパイプライン。",
      "tooling.Docker":
        "再現性のあるローカル環境とシンプルなサービスオーケストレーション。",
      "deployment.Vercel":
        "Next.jsアプリのプレビューデプロイと統合アナリティクス。",
      "deployment.Linux / cPanel servers":
        "Nginx、PHP-FPM、プロセス管理、堅牢なサーバーセキュリティ。",
    },
    overview: {
      title: "スキル概要",
      loaded: "読み込み済み",
      loadedValue: "{count}/{total}",
      avg: "平均レベル",
      top: "得意分野",
    },
  },
  status: {
    live: "公開中",
    archived: "アーカイブ済",
    inProgress: "開発中",
  },
  nft: {
    label: "クリエイティブ実験 · AI支援ビジュアル",
    title: "AI支援ビジュアルスタディ",
    caption:
      "AI支援の画像生成でキャラクターと衣装のデザインを探求する、ビジュアル実験の場。生成ツールが人間のクリエイティブワークフローをどう拡張するかを実践的に研究します。",
    outputs: "選ばれた出力",
    framesHint: "ワイド画面ではフレームが横に流れます",
    fig: "図 {n} / {total}",
    endRunTitle: "このセットの果て",
    endRunText: "3作品 — どう作ったかはスクロールし続けて",
    workflow: "クリエイティブワークフロー",
    workflowHint: "5ステップ — ワイド画面では横に流れます",
    endFlowTitle: "ワークフローの果て",
    endFlowText: "コンセプトからアートワークへ — 5ステップで",
    process: {
      "01": {
        title: "コンセプト",
        short:
          "探求したい主題、ムード、視覚の方向性を決める。",
      },
      "02": {
        title: "生成",
        short:
          "ChatGPT、Gemini、DeepSeek、Claudeでのプロンプト実験で視覚の方向性を探る。",
      },
      "03": {
        title: "反復",
        short:
          "衣装、アクセサリー、照明、背景を押し進める — 1つの主題、無数のバリエーション。",
      },
      "04": {
        title: "精錬",
        short:
          "最も強い結果を選び、展示可能な最終作品へと磨き上げる。",
      },
      "05": {
        title: "アートワーク",
        short:
          "選ばれた作品を一貫した最終セットに組み立てる — フレーム、トーン、完成したシリーズ。",
      },
    },
    artwork: {
      "ms-central-cee": {
        description:
          "ストリートウェアに着想を得た衣装の研究 — 落ち着いた光の下で、くっきりしたレイヤーと大胆なブランディング。",
        tags: ["衣装", "ストリートウェア"],
      },
      "ms-travis-scott": {
        description:
          "同じシルエットのよりダークな解釈 — グラフィックレイヤーと陰鬱なパレット。",
        tags: ["衣装", "ダーク"],
      },
      "ms-body": {
        description:
          "空白の素体 — どの衣装レイヤーを重ねる前のまっさらな状態。コレクションのためのポーズ。",
        tags: ["ベース", "モデル"],
      },
    },
  },
  lightbox: {
    vault: "kodecity · アート保管庫",
    viewerLabel: "アートビューア — {title}",
    openViewer: "作品{title}をビューアで開く",
    close: "アートビューアを閉じる",
    prev: "前の作品",
    next: "次の作品",
    prevShort: "前",
    nextShort: "次",
    aiLabel: "AI支援デジタルアート作品",
    caseVisual: "事件ビジュアル",
  },
  experience: {
    label: "開発の軌跡 · 仕事の記録",
    title: "開発の軌跡",
    caption:
      "独学の基礎とバックエンドインターンから、フリーランスの仕事と本番稼働のシステムまで——私の開発の道のり。",
    type: {
      internship: "インターン",
      freelance: "フリーランス",
      personal: "個人",
      achievement: "実績",
      learning: "学習",
    },
    items: {
      "learning-foundations": {
        title: "基礎を学ぶ",
        org: "独学の道",
        description:
          "基礎を学んだ — HTML、CSS、JavaScript、そして小さなプロジェクトを完成させる規律。",
        tags: ["HTML", "CSS", "JavaScript"],
      },
      internship: {
        title: "バックエンドインターン",
        org: "PT. Deswa Invisco Multitama",
        description:
          "RESTサービスと社内ツールを構築し、コードレビューを学び、実際のユーザーへ実際の機能をリリースした。",
        tags: ["PHP", "MySQL", "REST"],
      },
      freelance: {
        title: "個人での構築",
        org: "フリーランス & サイドプロジェクト",
        description:
          "中小企業向けのフルスタック製品を納品した — 在庫、請求、Webプレゼンス。",
        tags: ["Laravel", "Node.js", "SQL"],
      },
      achievement: {
        title: "本番へ",
        org: "本番のマイルストーン",
        description:
          "本番で実トラフィックをさばく最初のシステム：決済、ビジネスデータ、顧客向けダッシュボード。",
        tags: ["本番", "決済", "DevOps"],
      },
      present: {
        title: "現在の停車場",
        org: "フルスタック開発者",
        description:
          "頼れるフルスタック体験を構築し、技術を磨き続けている — 映画的で、アクセシブルで、速い。",
        tags: ["Next.js", "TypeScript", "Tailwind"],
      },
    },
  },
  contact: {
    label: "ご連絡はこちら",
    title: "一緒に作りましょう。",
    caption: "アイデア、プロジェクト、開発の話まで。メッセージを送るか、お好きなチャンネルでどうぞ。",
    emailLabel: "メール",
    socialsLabel: "SNS",
    response: "返信は下のチャンネルが最速です。",
    form: {
      title: "メッセージを送る",
      name: "名前",
      email: "メール",
      subject: "件名",
      message: "メッセージ",
      placeholderName: "山田太郎",
      placeholderEmail: "taro@example.com",
      placeholderSubject: "re: 相談したいプロジェクト",
      placeholderMessage: "何を構築していますか？",
      sending: "送信中…",
      send: "メッセージを送信",
      sentTitle: "送信完了",
      sentText: "メッセージを受け取りました — 連絡ありがとう。",
      again: "別のメッセージを送る",
      errFields: "入力漏れまたは形式エラー — 名前とメールを確認。",
      errRejected: "送信が拒否されました。後でもう一度。",
      errServer: "送信に失敗 — もう一度試すか、上のチャンネルを使ってください。",
    },
  },
  final: {
    closing: "閉幕",
    title1: "ご覧いただき",
    title2: "ありがとうございました。",
    para:
      "このサイトは好奇心、コード、そしてAI支援の開発で作られています — ここにあるすべてのシーンは本当の構築、本当の教訓、本当のプロダクトです。何か心に留まるものがあれば、一緒に作りましょう。",
    returnLabel: "最初に戻る",
    credits: {
      aria: "サイトクレジット",
      builtIn: "使用技術",
      designed: "デザイン",
      poweredBy: "技術提供",
      designedValue: "暗闇の中で",
    },
    footer: "© {year} {name} — 好奇心、コード、AIで構築。",
  },
  notFound: {
    kicker: "404 — このページは存在しません",
    title: "ページが見つかりません。",
    body:
      "お探しのページはここにはありません — 移動したか、元々存在しなかったのかもしれません。最初に戻ってポートフォリオを探索してください。",
    back: "最初に戻る",
  },
  errorPage: {
    kicker: "エラーが発生しました",
    title: "予期しないエラー。",
    body:
      "このページの描画中にエラーが発生しました。下から再読み込みしてください — データの損失はありません。",
    action: "ページを再読み込み",
  },
};