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
    cityLine: "{city} · 雨のインターフェースのメトロポリス",
    tagline: "真夜中を過ぎても動き続けるWebシステムを構築しています。",
    role: "フルスタック開発者",
    enterArchive: "ファイルを開く",
    readOn: "続きを読む —",
  },
  scenes: {
    "scene-hero": { title: "目覚める街", label: "序章" },
    "scene-identity": { title: "正体の解明", label: "誰" },
    "scene-about": { title: "事件ファイル", label: "概要" },
    "scene-arsenal": { title: "テック兵器庫", label: "スキル" },
    "scene-nft": { title: "クリエイティブスタジオ", label: "コレクション" },
    "scene-experience": { title: "夜行列車", label: "経路" },
    "scene-contact": { title: "コンタクト信号", label: "連絡" },
    "scene-final": { title: "夜が更ける", label: "終幕" },
  },
  identity: {
    intro: "シーン02 · 導入",
    titleAsk: "街が問いかける…",
    titleWho: "灯りの向こうにいるのは誰？",
    devProfile: "DEVプロフィール",
  },
  profile: {
    developerTitle: "フルスタック開発者",
    positioning:
      "真夜中を過ぎても灯りを絶やさない、頼れるWebシステムを構築しています。",
    shortBio:
      "クリーンな設計、映画的なマイクロインタラクション、実トラフィックに耐えるソフトウェアを好むフルスタック開発者。",
    bio: [
      "私が送り出すすべてのプロダクトは、ひとつの問いから始まります。「役に立つものを、どうすれば無理なく感じられるものにできるか」。私はデータベーススキーマからレスポンシブなインターフェースまで、Web体験を最初から最後まで設計・構築します。パフォーマンス、アクセシビリティ、そしてユーザーが感じるけれど決して見ることはない静かな細部を大切にしています。",
      "画面が暗くなった時、私はたいていインターフェースをスケッチし、分散システムについて読み、完璧なタイプスケールを探しています。コードを工芸品のように扱います。意図的で、文書化され、中途半端な状態で世に出したりはしません。",
    ],
    currentFocus: "フルスタックWeb開発とインタラクティブ体験",
    location: "インドネシア · UTC+7",
    status: "プロジェクト受付中",
    education: "情報工学 — 仮の学校名",
    interests: [
      "映画的なUI",
      "タイポグラフィ",
      "レトロテクノロジー",
      "分散システム",
      "インディーゲームデザイン",
      "ジャズノワールのサントラ",
    ],
    philosophy:
      "良いソフトウェアは真夜中の明るい通りのようなもの。静かで、予測可能で、あなたを行かねばならない場所へ静かに運んでくれる。",
    caseNumber: "FILE NO. RN-001",
  },
  about: {
    label: "諜報ファイル",
    title: "事件ファイル",
    caption:
      "開発対象についての機密解除メモ。好奇心をもって扱うこと。",
    subjectProfile: "対象者プロフィール",
    caseOpen: "事件オープン",
    filePhoto: "添付のファイル写真 —",
    evidenceGradeB: "証拠グレードB",
    personalStatement: "自己申告",
    currentInterests: "現在の関心事",
    doctrine: "— 開発者個人の信条",
    meta: {
      status: "ステータス",
      location: "所在地",
      currentFocus: "現在の焦点",
      education: "学歴",
      caseNumber: "事件番号",
    },
  },
  arsenal: {
    label: "装備ロッカー",
    title: "テック兵器庫",
    caption:
      "証拠の壁に並ぶ道具たち。ここにあるすべてが本番運用の現場を見てきたものだ。",
    hint: "シナプスマップ — どのクラスターも本番投入済み",
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
        "App Router、Server Components、ルートハンドラ、画像・フォント最適化、中規模の本番デプロイ。",
      "frontend.React":
        "組み合わせ可能なコンポーネント設計、hooks、context、パフォーマンスを意識した再レンダリング管理。",
      "frontend.TypeScript":
        "標準で厳格な型付け — 型付きデータモデル、ジェネリクス、チームを速くするinterface。",
      "backend.Laravel / PHP":
        "REST API、Eloquentモデリング、認証、保守性の高いMVCアプリを本番まで。",
      "backend.Node.js":
        "APIサービス、バックグラウンドジョブ、エラー処理と可観測性に配慮したツールスクリプト。",
      "database.MySQL":
        "読み込み中心の本番負荷に向けたスキーマ設計、インデックス戦略、クエリ最適化。",
      "database.PostgreSQL":
        "リレーショナルモデリング、JSONカラム、データに敏感な機能のためのトランザクション整合性。",
      "styling.Tailwind CSS":
        "デザイントークン、ダークテーマ、カスタムモーションを備えたutility-firstシステム。",
      "styling.Framer Motion / GSAP":
        "スクロール連動のストーリーテリング、マイクロインタラクション、演出されたUIモーション。",
      "tooling.Git & GitHub":
        "クリーンなブランチ運用、Conventional Commits、コードレビュー、CIパイプライン。",
      "tooling.Docker":
        "再現性のあるローカル環境とシンプルなサービスオーケストレーション。",
      "deployment.Vercel":
        "Next.jsアプリ向けのプレビューデプロイ、エッジ関数、アナリティクス。",
      "deployment.Linux / cPanel servers":
        "Nginxリバースプロキシ、PHP-FPM、プロセス管理、堅牢なサーバーセキュリティ。",
    },
    overview: {
      title: "兵器庫の概要",
      loaded: "装填済み",
      loadedValue: "{count}/{total}",
      avg: "平均性能",
      top: "最強カリバー",
    },
  },
  status: {
    live: "公開中",
    archived: "アーカイブ済",
    inProgress: "開発中",
  },
  nft: {
    label: "クリエイティブ部門 · コンセプトからコレクションへ",
    title: "AI支援NFTコレクション",
    caption:
      "実験的なスタジオ部門 — AI支援の画像生成を通じて探求するキャラクターデザインとデジタルコレクティブル。生成ツールが人間のクリエイティブワークフローの一部になることを学ぶ演習であり、全部ではありません。",
    outputs: "選ばれた出力",
    framesHint: "ワイド画面ではフレームが横に流れます",
    fig: "図 {n} / {total}",
    endRunTitle: "シリーズの果て",
    endRunText: "3フレーム — どう作られたかはスクロールし続けて",
    workflow: "クリエイティブワークフロー",
    workflowHint: "5ステップ — ワイド画面では横に流れます",
    endFlowTitle: "ワークフローの果て",
    endFlowText: "コンセプトからコレクションへ — 5ステップで",
    process: {
      "01": {
        title: "コンセプト",
        short:
          "キャラクターのアイデンティティを設計する — シルエット、ムード、そして彼が属する架空の通り。",
      },
      "02": {
        title: "生成",
        short:
          "ChatGPT、Gemini、DeepSeek、Claudeでのプロンプト実験で視覚の方向性を探る。",
      },
      "03": {
        title: "反復",
        short:
          "衣装、アクセサリー、照明、背景を押し進める — 1つのアイデンティティ、無数のバリエーション。",
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
      "hrln-rain": {
        description:
          "街おなじみの土砂降りの下での衣装バリエーション — 生成後、手作業で清掃。",
        tags: ["衣装", "雨"],
      },
      "hrln-midnight": {
        description:
          "照明とパレットの研究 — 同じシルエットを深夜の青へと押し込む。",
        tags: ["照明", "夜"],
      },
      "hrln-look": {
        description:
          "コレクション全体を通してキャラクターの毎日の装備を定義するアクセサリーバリエーション。",
        tags: ["アクセサリー", "バリアント"],
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
    label: "夜行列車 · 経路記録",
    title: "経験のタイムライン",
    caption:
      "この10年が辿った経路 — 各停車駅は何かを学んだ場所だ。",
    type: {
      education: "教育",
      internship: "インターン",
      freelance: "フリーランス",
      personal: "個人",
      achievement: "実績",
      learning: "学習",
    },
    items: {
      "learning-foundations": {
        title: "登り始め",
        org: "独学ルート",
        description:
          "基礎を学んだ — HTML、CSS、JavaScript、そして小さなプロジェクトを完成させる規律。",
        tags: ["HTML", "CSS", "JavaScript"],
      },
      education: {
        title: "情報工学の学生",
        org: "仮の学校名",
        description:
          "アルゴリズム、データベース、ソフトウェア工学の実践を、自主的なWeb開発と並行して学んだ。",
        tags: ["アルゴリズム", "データベース"],
      },
      internship: {
        title: "バックエンドインターン",
        org: "仮の会社名",
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
        title: "本番への到達",
        org: "本番のマイルストーン",
        description:
          "本番で実トラフィックをさばく最初のシステム：決済、事件データ、顧客向けダッシュボード。",
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
    label: "連絡先",
    title: "お問い合わせ",
    caption: "プロジェクト、機会、あるいは軽い挨拶まで。メッセージをどうぞ。",
    emailLabel: "メール",
    socialsLabel: "SNS",
    response: "返信は通常1〜2営業日以内です。",
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
      sentText: "メッセージを送信しました。追って返信します。",
      again: "別のメッセージを送る",
      errFields: "入力漏れまたは形式エラー — 名前とメールを確認。",
      errRejected: "送信が拒否されました。後でもう一度。",
    },
  },
  final: {
    closing: "クロージングキャプション",
    title1: "街が灯りを落とす。",
    title2: "仕事は続く。",
    para:
      "このページのすべてのシーンは、本物の構築、本物の教訓、あるいは本物の傷跡だ。街を歩いてくれてありがとう。",
    returnLabel: "最初に戻る",
    credits: {
      aria: "サイトクレジット",
      builtIn: "構築地",
      designed: "デザイン",
      poweredBy: "パワードバイ",
      designedValue: "雨",
    },
    footer: "© {year} {name} — マントは使われていない。",
  },
  notFound: {
    kicker: "行き止まり — 雨の中で迷子",
    title: "この通りは存在しない。",
    body:
      "入力した住所は{city}のどこにも通じていない。霧が閉じる前に広場へ戻れ。",
    back: "広場へ戻る",
  },
  errorPage: {
    kicker: "通信エラー — rt-404",
    title: "街のグリッドがつまずいた。",
    body:
      "このブロックの描画で問題が発生。下のサーキットブレーカーを試せ — データは失われない。",
    action: "ブロックを再起動",
  },
  audio: {
    enable: "環境音を有効にする",
    disable: "環境音を無効にする",
    ambienceOn: "環境音：オン",
    ambienceOff: "環境音：オフ",
  },
};