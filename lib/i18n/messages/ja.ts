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
    "scene-showcase": { title: "特集シネマティクス", label: "ファイル" },
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
  showcase: {
    label: "特集シネマティクス",
    title: "事件ファイル — 深掘り分析",
    caption: "2つの事件を大きく開く：問題、構築、そしてリリースされたもの。",
    evidenceFile: "証拠ファイル {n} — {year}",
    problem: "問題",
    solution: "解決策",
    momentItHurt: "苦しかった瞬間",
    aftermath: "結果",
    caseVisual: "事件ビジュアル",
    artCaseCover: "art：事件表紙",
    liveSignal: "LIVE信号",
    sourceCode: "ソースコード",
    liveDemo: "ライブデモ",
    projects: {
      casebreak: {
        title: "CASEBREAK",
        oneLiner:
          "紙の束を検索可能な証拠室に変えたケース管理プラットフォーム。",
        problem:
          "地元の機関はクライアントの案件をスプレッドシートと印刷フォルダで管理していた。記録は重複し、期限は守られず、何も検索できなかった。",
        solution:
          "役割ベースのアクセス、ケースステータスボード、期限アラート、全文検索付きドキュメント保管庫を備えたLaravel + MySQLのバックオフィスを設計した。",
        role: "フルスタック開発者",
        features: [
          "担当者・管理者向けの役割別ダッシュボード",
          "カンバン式ケースステータスボード",
          "期限リマインダーメールの自動送信",
          "全文検索とタグ付け",
        ],
        challenge:
          "データを失わずに4年分の乱雑なレガシー記録を移行するのが本当の闘いだった — ドライラン検証付きの段階的インポーターを構築した。",
        outcome:
          "検索時間は数分から数秒に短縮され、チームは2ヶ月で200件以上の滞留案件を解消した。",
      },
      "kode-ledger": {
        title: "KODELEDGER",
        oneLiner:
          "副業の請求パイプラインのための最小限の複式簿記API。",
        problem:
          "フリーランスの請求はチャットアプリに埋もれていた。何が請求され、支払われ、期限切れかについて、信頼できる記録がなかった。",
        solution:
          "冪等な請求書作成、PDF生成、支払いリマインダーを持つ型付きREST APIを公開するNode.js + PostgreSQLサービスを構築した。",
        role: "バックエンド開発者",
        features: [
          "冪等な請求・支払いエンドポイント",
          "自動PDF請求書生成",
          "期限超過支払いリマインダーワーカー",
          "すべての変更に対する監査ログ",
        ],
        challenge:
          "並行処理の中での金額計算の正確さ — 行レベルロックと帳簿を正確に保つ照合ジョブを追加した。",
        outcome:
          "使用開始最初の四半期で請求書の損失ゼロ。リマインダーで約1週間分の未払い仕事を回収した。",
      },
      retromart: {
        title: "RETROMART",
        oneLiner:
          "ヴィンテージテックをテーマにしたLaravel製ECストア — カート、決済、レトロな管理画面。",
        problem:
          "ヴィンテージテックの転売業者は、そのカタログのように感じられるストアを必要としていた：遊び心があり、信頼でき、モバイルでも速い。",
        solution:
          "商品バリアント、プロモエンジン、ペイメントゲートウェイ統合、在庫管理パネルを備えた完全なLaravelストアフロントを納品した。",
        role: "フルスタック開発者",
        features: [
          "カート、チェックアウト & 決済ゲートウェイ",
          "積み重ねルール付きプロモコード",
          "在庫管理 & 低在庫アラート",
          "管理レポートダッシュボード",
        ],
        challenge:
          "在庫・割引・決済の状態をまたぐ取引の安全性を確保するには、慎重なキューイングと冪等な注文作成が必要だった。",
        outcome:
          "初シーズンで数百件の注文を1件の二重請求もなく処理してローンチした。",
      },
      weathermono: {
        title: "WEATHERMONO",
        oneLiner:
          "モノスペースの美学を持つ小さくオフライン対応の天気PWA — 天気、ただしターミナル風。",
        problem:
          "読者を尊重する天気アプリが欲しかった：トラッカーなし、無駄なし、遅いスマホでも一目でわかるデータ。",
        solution:
          "予報をキャッシュし、オフラインで動作し、日付付きのモノスペース格子予報マップを描画するvanilla TypeScript製PWA。",
        role: "ソロ開発者",
        features: [
          "オフライン予報キャッシュ",
          "モノスペース天気グリッド",
          "広告ゼロ & アナリティクスゼロ",
        ],
        challenge:
          "実際の天気マップをクライアント側で描画しながら、バンドルを12kB以下に縮小すること。",
        outcome:
          "ネットワークが死んでいても動き続ける10kBのコアアプリ — 抑制の小さな記念碑。",
      },
    },
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
    label: "屋上の無線室",
    title: "コンタクト信号",
    caption:
      "街の交換台は開いている。チャンネルを回すか、メッセージを直接送信せよ。",
    primaryFrequency: "主要周波数",
    form: {
      title: "メッセージを送信",
      name: "名前",
      email: "メール",
      subject: "件名",
      message: "メッセージ",
      placeholderName: "山田太郎",
      placeholderEmail: "taro@example.com",
      placeholderSubject: "re: 開く価値のある事件",
      placeholderMessage: "何を構築していますか？",
      sending: "送信中…",
      send: "信号を送信",
      sentTitle: "信号を受信",
      sentText: "送信を記録。48時間以内に返信。",
      again: "別の信号を送信",
      errFields: "入力漏れまたは形式エラー — 名前とメールを確認。",
      errRejected: "送信が拒否されました。",
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