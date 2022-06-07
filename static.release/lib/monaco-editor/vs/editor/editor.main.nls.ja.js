/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.13.2(53a4043676e6259fb734c90fad14bf16f7425640)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
monacoDefine("vs/editor/editor.main.nls.ja",{"vs/base/browser/ui/actionbar/actionbar":["{0} ({1})"],"vs/base/browser/ui/aria/aria":["{0} (再発)"],"vs/base/browser/ui/findinput/findInput":["入力"],"vs/base/browser/ui/findinput/findInputCheckboxes":["大文字と小文字を区別する","単語単位で検索する","正規表現を使用する"],"vs/base/browser/ui/inputbox/inputBox":["エラー: {0}","警告: {0}","情報: {0}"],"vs/base/browser/ui/selectBox/selectBoxCustom":["{0}"],"vs/base/common/keybindingLabels":["Ctrl","Shift","Alt","Windows","Control","Shift","Alt","コマンド","Control","Shift","Alt","Windows"],"vs/base/common/severity":["エラー","警告","情報"],"vs/base/parts/quickopen/browser/quickOpenModel":["{0}, ピッカー","選択"],"vs/base/parts/quickopen/browser/quickOpenWidget":["クイック選択。入力すると結果が絞り込まれます。","クイック選択"],"vs/base/parts/tree/browser/treeDefaults":["折りたたむ"],"vs/editor/browser/services/bulkEdit":["編集は行われませんでした","{1} 個のファイルで {0} 件のテキスト編集を実行","1 つのファイルで {0} 個のテキストを編集","この間に次のファイルが変更されました: {0}"],"vs/editor/browser/widget/diffEditorWidget":["一方のファイルが大きすぎるため、ファイルを比較できません。"],
"vs/editor/browser/widget/diffReview":["閉じる","行なし","1 行","{0} 行","{1} の差異 {0}: 変更前 {2}, {3}, 変更後 {4}, {5}","空白","変更前の {0}、変更後の {1}: {2}","+ 変更後の {0}: {1}","- 変更前の {0}: {1}","次の差分に移動","前の差分に移動"],"vs/editor/common/commonCodeEditor":["カーソルの数は {0} 個に制限されています。"],
"vs/editor/common/config/commonEditorConfig":["エディター","フォント ファミリを制御します。","フォントの太さを制御します。","フォント サイズをピクセル単位で制御します。","行の高さを制御します。fontSize に基づいて lineHeight を計算する場合には、0 を使用します。","文字の間隔をピクセル単位で制御します。","行番号は表示されません。","行番号は、絶対数として表示されます。","行番号は、カーソル位置までの行数として表示されます。","行番号は 10 行ごとに表示されます。","行番号の表示を制御します。","等幅フォントの特定番号の後ろに垂直ルーラーを表示します。複数のルーラーには複数の値を使用します。配列が空の場合はルーラーを表示しません。","単語に関連したナビゲーションまたは操作を実行するときに、単語の区切り文字として使用される文字","1 つのタブに相当するスペースの数。`editor.detectIndentation` がオンの場合、この設定はファイル コンテンツに基づいて上書きされます。","'number' が必要です。`editor.detectIndentation` 設定によって値 \"auto\" が置き換えられていることに注意してください。","Tab キーを押すとスペースが挿入されます。`editor.detectIndentation` がオンの場合、この設定はファイル コンテンツに基づいて上書きされます。","'boolean' が必要です。`editor.detectIndentation` 設定によって値 \"auto\" が置き換えられていることに注意してください。","ファイルを開くと、そのファイルの内容に基づいて `editor.tabSize` と `editor.insertSpaces` が検出されます。","選択範囲の角を丸くするかどうかを制御します","エディターで最後の行を越えてスクロールするかどうかを制御します","アニメーションでエディターをスクロールするかどうかを制御します","ミニマップを表示するかどうかを制御します","ミニマップを表示する場所を制御します。","ミニマップのスライダーを自動的に非表示にするかどうかを制御します。","行に (カラー ブロックではなく) 実際の文字を表示します","表示するミニマップの最大幅を特定の桁数に制限します","エディターの選択から検索ウィジェット内の検索文字列を与えるかどうかを制御します","エディター内で複数の文字もしくは行が選択されているときに選択範囲を検索するフラグを有効にするかどうかを制御します","macOS で検索ウィジェットが共有の検索クリップボードを読み取りまたは変更するかどうかを制御します","行を折り返しません。","行をビューポートの幅で折り返します。","行を 'editor.wordWrapColumn' で折り返します。","ビューポートと 'editor.wordWrapColumn' の最小値で行を折り返します。","行の折り返し方法を制御します。次の値を指定できます。\n - 'off' (折り返さない),\n - 'on' (ビューポート折り返し),\n - 'wordWrapColumn' ('editor.wordWrapColumn' で折り返し) or\n - 'bounded' (ビューポートと 'editor.wordWrapColumn' の最小値で折り返し).","'editor.wordWrap' が 'wordWrapColumn' または 'bounded' の場合に、エディターの折り返し桁を制御します。","折り返し行のインデントを制御します。'none'、'same'、または 'indent' のいずれかを指定できます。","マウス ホイール スクロール イベントの `deltaX` と `deltaY` で使用される乗数","Windows および Linux 上の `Control` キーと macOS 上の `Command` キーに割り当てます。","Windows および Linux 上の `Alt` キーと macOS 上の `Option` キーに割り当てます。","マウスを使用して複数のカーソルを追加するときに使用する修飾キーです。`ctrlCmd` は Windows および Linux 上の `Control` キーと macOS 上の `Command` キーに割り当てます。「定義に移動」や「リンクを開く」のマウス操作は、マルチカーソルの修飾キーと競合しないように適用されます。","複数のカーソルが重なっているときは、マージします。","文字列内でクイック候補を有効にします。","コメント内でクイック候補を有効にします。","文字列およびコメント外でクイック候補を有効にします。","入力中に候補を自動的に表示するかどうかを制御します","クイック候補が表示されるまでの待ち時間 (ミリ秒) を制御します","入力時にパラメーター ドキュメントと型情報を表示するポップアップを有効にする","エディターで左角かっこの後に自動的に右角かっこを挿入するかどうかを制御します","エディターで入力後に自動的に行の書式設定を行うかどうかを制御します","貼り付けた内容がエディターにより自動的にフォーマットされるかどうかを制御します。フォーマッタを使用可能にする必要があります。また、フォーマッタがドキュメント内の範囲をフォーマットできなければなりません。","ユーザーが入力や貼り付け、行の移動をしたとき、エディターがインデントを自動的に調整するかどうかを制御します。言語のインデント ルールを使用できる必要があります。","トリガー文字の入力時に候補が自動的に表示されるようにするかどうかを制御します","'Tab' キーに加えて 'Enter' キーで候補を受け入れるかどうかを制御します。改行の挿入や候補の反映の間であいまいさを解消するのに役立ちます。'smart' 値は文字を変更するときに、Enter キーを押すだけで提案を反映することを意味します。","コミット文字で候補を受け入れるかどうかを制御します。たとえば、JavaScript ではセミコロン (';') をコミット文字にして、候補を受け入れてその文字を入力することができます。","他の候補の上にスニペットの候補を表示します。","他の候補の下にスニペットの候補を表示します。","他の候補と一緒にスニペットの候補を表示します。","スニペットの候補を表示しません。","他の修正候補と一緒にスニペットを表示するかどうか、およびその並び替えの方法を制御します。","選択範囲を指定しないでコピーする場合に現在の行をコピーするかどうかを制御します。","ドキュメント内の単語に基づいて入力候補を計算するかどうかを制御します。","常に最初の候補を選択します。","追加入力によって選択されたものがなければ、最近の候補を選択します。例: `console.| -> console.log` (`log` は最近入力されたため)。","これらの候補を入力した前のプレフィックスに基づいて候補を選択します。例: `co -> console`、`con -> const`。","候補リストを表示するときに候補を事前に選択する方法を制御します。","候補のウィジェットのフォント サイズ","候補のウィジェットの行の高さ","エディターで選択範囲に類似する一致箇所を強調表示するかどうかを制御します","エディターでセマンティック シンボルの出現箇所を強調表示するかどうかを制御します","概要ルーラーの同じ位置に表示できる装飾の数を制御します","概要ルーラーの周囲に境界線が描画されるかどうかを制御します。","カーソルのアニメーション方式を制御します。","Ctrl キーを押しながらマウス ホイールを使用してエディターのフォントをズームします","カーソルのスタイルを制御します。指定できる値は 'block'、'block-outline'、'line'、'line-thin'、'underline'、'underline-thin' です","editor.cursorStyle が 'line' に設定されている場合、カーソルの幅を制御する","フォントの合字を使用します","概要ルーラーでカーソルを非表示にするかどうかを制御します。","エディターで空白文字を表示する方法を制御します。'none'、'boundary' および 'all' が使用可能です。'boundary' オプションでは、単語間の単一スペースは表示されません。","エディターで制御文字を表示する必要があるかどうかを制御します","エディターでインデントのガイドを表示する必要があるかどうかを制御します","エディターが現在の行をどのように強調表示するかを制御します。考えられる値は 'none'、'gutter'、'line'、'all' です。","エディターが CodeLens を表示するかどうかを制御します","エディターでコードの折りたたみを有効にするかどうかを制御します","利用可能であれば、言語に特有の折りたたみ方式を使用して、そうでない場合はインデント方式に戻ります。","常にインデントに基づく折りたたみ方式を使用します","折りたたみ範囲の計算方法を制御します。'auto' は利用可能であれば言語固有の折りたたみ方式を使用します。'indentation' は常にインデントに基づく折りたたみ方式を使用します。","余白上の折りたたみコントロールを自動的に非表示にするかどうかを制御します 。","かっこを選択すると、対応するかっこを強調表示します。","エディターで縦のグリフ余白が表示されるかどうかを制御します。ほとんどの場合、グリフ余白はデバッグに使用されます。","空白の挿入や削除はタブ位置に従って行われます","自動挿入された末尾の空白を削除する","エディターのコンテンツをダブルクリックするか、Esc キーを押しても、ピーク エディターを開いたままにします。","ドラッグ アンド ドロップによる選択範囲の移動をエディターが許可する必要があるかどうかを制御します。","エディターはスクリーン リーダーがいつ接続されたかを検出するためにプラットフォーム API を使用します。","エディターは永続的にスクリーン リーダー向けに最適化されます。","エディターはスクリーン リーダー向けに最適化されません。","エディターをスクリーン リーダーに最適化されたモードで実行するかどうかを制御します。","エディターがリンクを検出してクリック可能な状態にするかどうかを制御します","エディターでインライン カラー デコレーターと色の選択を表示する必要があるかどうかを制御します。","コード アクション (lightbulb) を有効にする","保存時にインポートの整理を実行しますか?","保存時に実行されるコード アクションの種類。","保存時に実行されるコード アクションのタイムアウト値。","Linux の PRIMARY クリップボードをサポートするかどうかを制御します。","差分エディターが差分を横に並べて表示するか、行内に表示するかを制御します","差分エディターが、先頭または末尾の空白の変更を差分として表示するかどうかを制御します。","Special handling for large files to disable certain memory intensive features.","差分エディターが追加/削除された変更に +/- インジケーターを示すかどうかを制御します"],
"vs/editor/common/config/editorOptions":["現在エディターにアクセスすることはできません。 Alt + F1 キーを押してオプションを選択します。","エディターのコンテンツ"],"vs/editor/common/controller/cursor":["コマンドの実行中に予期しない例外が発生しました。"],"vs/editor/common/modes/modesRegistry":["プレーンテキスト"],"vs/editor/common/services/modelServiceImpl":["[{0}]\n{1}","[{0}] {1}"],
"vs/editor/common/view/editorColorRegistry":["カーソル位置の行を強調表示する背景色。","カーソル位置の行の境界線を強調表示する背景色。","Quick Open 機能や検索機能などによって強調表示された範囲の背景色。下にある装飾を隠さないために、色は不透過であってはなりません。","強調表示された範囲の境界線の背景色。","エディターのカーソルの色。","選択された文字列の背景色です。選択された文字列の背景色をカスタマイズ出来ます。","エディターのスペース文字の色。","エディター インデント ガイドの色。","アクティブなエディターのインデント ガイドの色。","エディターの行番号の色。","エディターのアクティブ行番号の色","id は使用しないでください。代わりに 'EditorLineNumber.activeForeground' を使用してください。","エディターのアクティブ行番号の色","エディター ルーラーの色。","CodeLens エディターの前景色。","一致するかっこの背景色","一致するかっこ内のボックスの色","概要ルーラーの境界色。","エディターの余白の背景色。余白にはグリフ マージンと行番号が含まれます。","エディターでエラーを示す波線の前景色。","エディターでエラーを示す波線の境界線の色。","エディターで警告を示す波線の前景色。","エディターで警告を示す波線の境界線の色。","エディターで情報を示す波線の前景色。","エディターで情報を示す波線の境界線の色。","エディターでヒントを示す波線の前景色。","エディターでヒントを示す波線の境界線の色。","範囲を強調表示するときの概要ルーラーのマーカー色。この色は下地の色に紛れないよう不明瞭であってはいけません。","エラーを示す概要ルーラーのマーカー色。","警告を示す概要ルーラーのマーカー色。","情報を示す概要ルーラーのマーカー色。"],"vs/editor/contrib/bracketMatching/bracketMatching":["一致するブラケットを示す概要ルーラーのマーカー色。","ブラケットへ移動","ブラケットに選択"],
"vs/editor/contrib/caretOperations/caretOperations":["キャレットを左に移動","キャレットを右に移動"],"vs/editor/contrib/caretOperations/transpose":["文字の入れ替え"],"vs/editor/contrib/clipboard/clipboard":["切り取り","コピー","貼り付け","構文を強調表示してコピー"],"vs/editor/contrib/codeAction/codeActionCommands":["修正プログラム ({0}) を表示する","修正プログラムを表示する","クイック フィックス...","利用可能なコード アクションはありません","利用可能なコード アクションはありません","リファクター...","利用可能なリファクタリングはありません","ソース アクション...","利用可能なソース アクションはありません","インポートを整理","利用可能なインポートの整理アクションはありません"],"vs/editor/contrib/comment/comment":["行コメントの切り替え","行コメントの追加","行コメントの削除","ブロック コメントの切り替え"],"vs/editor/contrib/contextmenu/contextmenu":["エディターのコンテキスト メニューの表示"],"vs/editor/contrib/find/findController":["検索","選択範囲を検索","次を検索","前を検索","次の選択項目を検索","前の選択項目を検索","置換","次の検索語句を表示","前の検索語句を表示"],"vs/editor/contrib/find/findWidget":["検索","検索","前の一致項目","次の一致項目","選択範囲を検索","閉じる","置換","置換","置換","すべて置換","置換モードの切り替え","最初の {0} 件の結果だけが強調表示されますが、すべての検索操作はテキスト全体で機能します。","{0} / {1} 件","結果なし"],
"vs/editor/contrib/folding/folding":["展開","再帰的に展開","折りたたみ","再帰的に折りたたむ","すべてのブロック コメントの折りたたみ","すべての領域を折りたたむ","すべての領域を展開","すべて折りたたみ","すべて展開","レベル {0} で折りたたむ"],"vs/editor/contrib/format/formatActions":["行 {0} で 1 つの書式設定を編集","行 {1} で {0} 個の書式設定を編集","行 {0} と {1} の間で 1 つの書式設定を編集","行 {1} と {2} の間で {0} 個の書式設定を編集","インストールされた '{0}'ファイル用のフォーマッターが存在しません。","ドキュメントのフォーマット","インストールされた '{0}'ファイル用のドキュメント フォーマッターが存在しません。","選択範囲のフォーマット","インストールされた '{0}' ファイル用の選択範囲フォーマッターが存在しません。"],"vs/editor/contrib/goToDeclaration/goToDeclarationCommands":["'{0}' の定義は見つかりません","定義が見つかりません"," – {0} 個の定義","定義へ移動","定義を横に開く","定義をここに表示","'{0}' の実装が見つかりません","実装が見つかりません","– {0} 個の実装","実装に移動","実装のプレビュー","'{0}' の型定義が見つかりません","型定義が見つかりません"," – {0} 個の型定義","型定義へ移動","型定義を表示"],"vs/editor/contrib/goToDeclaration/goToDeclarationMouse":["クリックして、{0} の定義を表示します。"],"vs/editor/contrib/gotoError/gotoError":["次の問題 (エラー、警告、情報) へ移動","前の問題 (エラー、警告、情報) へ移動"],
"vs/editor/contrib/gotoError/gotoErrorWidget":["({0}/{1})","エディターのマーカー ナビゲーション ウィジェットのエラーの色。","エディターのマーカー ナビゲーション ウィジェットの警告の色。","エディターのマーカー ナビゲーション ウィジェットの情報の色。","エディターのマーカー ナビゲーション ウィジェットの背景。"],"vs/editor/contrib/hover/hover":["ホバーの表示"],"vs/editor/contrib/hover/modesContentHover":["読み込んでいます..."],"vs/editor/contrib/inPlaceReplace/inPlaceReplace":["前の値に置換","次の値に置換"],"vs/editor/contrib/linesOperations/linesOperations":["行を上へコピー","行を下へコピー","行を上へ移動","行を下へ移動","行を昇順に並べ替え","行を降順に並べ替え","末尾の空白のトリミング","行の削除","行のインデント","行のインデント解除","行を上に挿入","行を下に挿入","左側をすべて削除","右側をすべて削除","行をつなげる","カーソルの周囲の文字を入れ替える","大文字に変換","小文字に変換"],"vs/editor/contrib/links/links":["command キーを押しながらクリックしてリンク先を表示","Ctrl キーを押しながらクリックしてリンク先を表示","command キーを押しながらクリックしてコマンドを実行","Ctrl キーを押しながらクリックしてコマンドを実行","Option キーを押しながらクリックしてリンク先を表示","Altl キーを押しながらクリックしてリンク先を表示","Option キーを押しながらクリックしてコマンドを実行","Alt キーを押しながらクリックしてコマンドを実行","このリンクは形式が正しくないため開くことができませんでした: {0}","このリンクはターゲットが存在しないため開くことができませんでした。","リンクを開く"],
"vs/editor/contrib/message/messageController":["読み取り専用のエディターは編集できません"],"vs/editor/contrib/multicursor/multicursor":["カーソルを上に挿入","カーソルを下に挿入","カーソルを行末に挿入","選択項目を次の一致項目に追加","選択項目を次の一致項目に追加","最後に選択した項目を次の一致項目に移動","最後に選択した項目を前の一致項目に移動","一致するすべての出現箇所を選択","すべての出現箇所を変更"],"vs/editor/contrib/parameterHints/parameterHints":["パラメーター ヒントをトリガー"],"vs/editor/contrib/parameterHints/parameterHintsWidget":["{0}、ヒント"],"vs/editor/contrib/referenceSearch/peekViewWidget":["閉じる"],"vs/editor/contrib/referenceSearch/referenceSearch":["– {0} 個の参照","すべての参照の検索"],"vs/editor/contrib/referenceSearch/referencesController":["読み込んでいます..."],"vs/editor/contrib/referenceSearch/referencesModel":["列 {2} の {1} 行目に {0} つのシンボル","{0} に 1 個のシンボル、完全なパス {1}","{1} に {0} 個のシンボル、完全なパス {2}","一致する項目はありません","{0} に 1 個のシンボルが見つかりました","{1} に {0} 個のシンボルが見つかりました","{1} 個のファイルに {0} 個のシンボルが見つかりました"],
"vs/editor/contrib/referenceSearch/referencesWidget":["ファイルを解決できませんでした。","{0} 個の参照","{0} 個の参照","プレビューを表示できません","参照","結果がありません","参照","ピーク ビューのタイトル領域の背景色。","ピーク ビュー タイトルの色。","ピーク ビューのタイトル情報の色。","ピーク ビューの境界と矢印の色。","ピーク ビュー結果リストの背景色。","ピーク ビュー結果リストのライン ノードの前景色。","ピーク ビュー結果リストのファイル ノードの前景色。","ピーク ビュー結果リストの選択済みエントリの背景色。","ピーク ビュー結果リストの選択済みエントリの前景色。","ピーク ビュー エディターの背景色。","ピーク ビュー エディターの余白の背景色。","ピーク ビュー結果リストの一致した強調表示色。","ピーク ビュー エディターの一致した強調表示色。","ピーク ビュー エディターの一致した強調境界色。"],"vs/editor/contrib/rename/rename":["結果がありません。","'{0}' から '{1}' への名前変更が正常に完了しました。概要: {2}","名前の変更を実行できませんでした。","シンボルの名前を変更"],"vs/editor/contrib/rename/renameInputField":["名前変更入力。新しい名前を入力し、Enter キーを押してコミットしてください。"],"vs/editor/contrib/smartSelect/smartSelect":["選択範囲を拡大","選択範囲を縮小"],"vs/editor/contrib/snippet/snippetVariables":["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日","日","月","火","水","木","金","土","1 月","2 月","3 月","4 月","5 月","6 月","7 月","8 月","9 月","10 月","11 月","12 月","1 月","2 月","3 月","4 月","5 月","6 月","7 月","8 月","9 月","10 月","11 月","12 月"],
"vs/editor/contrib/suggest/suggestController":["'{0}' が次のテキストを挿入したことを承認しています: {1}","候補をトリガー"],"vs/editor/contrib/suggest/suggestWidget":["候補のウィジェットの背景色。","候補ウィジェットの境界線色。","候補ウィジェットの前景色。","候補ウィジェット内で選択済みエントリの背景色。","候補のウィジェット内で一致したハイライトの色。","詳細を表示...{0}","{0}、候補、詳細あり","{0}、候補","詳細を隠す...{0}","読み込んでいます...","候補はありません。","{0}、受け入れ済み","{0}、候補、詳細あり","{0}、候補"],"vs/editor/contrib/toggleTabFocusMode/toggleTabFocusMode":["TAB キーのフォーカス移動を切り替え"],"vs/editor/contrib/wordHighlighter/wordHighlighter":["変数の読み取りなど読み取りアクセス中のシンボルの背景色。下にある装飾を隠さないために、色は不透過であってはなりません。","変数への書き込みなど書き込みアクセス中のシンボルの背景色。下にある装飾を隠さないために、色は不透過であってはなりません。","変数の読み取りなど読み取りアクセス中のシンボルの境界線の色。","変数への書き込みなど書き込みアクセス中のシンボルの境界線の色。","シンボルを強調表示するときの概要ルーラーのマーカー色。この色は下地の色に紛れないよう不明瞭であってはいけません。","書き込みアクセス シンボルを強調表示するときの概要ルーラーのマーカー色。この色は下地の色に紛れないよう不明瞭であってはいけません。","次のシンボル ハイライトに移動","前のシンボル ハイライトに移動"],
"vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp":["No selection","Line {0}, Column {1} ({2} selected)","Line {0}, Column {1}","{0} selections ({1} characters selected)","{0} selections","Now changing the setting `accessibilitySupport` to 'on'.","Now opening the Editor Accessibility documentation page."," in a read-only pane of a diff editor."," in a pane of a diff editor."," in a read-only code editor"," in a code editor","To configure the editor to be optimized for usage with a Screen Reader press Command+E now.","To configure the editor to be optimized for usage with a Screen Reader press Control+E now.","The editor is configured to be optimized for usage with a Screen Reader.","The editor is configured to never be optimized for usage with a Screen Reader, which is not the case at this time.","Pressing Tab in the current editor will move focus to the next focusable element. Toggle this behavior by pressing {0}.","Pressing Tab in the current editor will move focus to the next focusable element. The command {0} is currently not triggerable by a keybinding.","Pressing Tab in the current editor will insert the tab character. Toggle this behavior by pressing {0}.","Pressing Tab in the current editor will insert the tab character. The command {0} is currently not triggerable by a keybinding.","Press Command+H now to open a browser window with more information related to editor accessibility.","Press Control+H now to open a browser window with more information related to editor accessibility.","You can dismiss this tooltip and return to the editor by pressing Escape or Shift+Escape.","Show Accessibility Help"],
"vs/editor/standalone/browser/inspectTokens/inspectTokens":["Developer: Inspect Tokens"],"vs/editor/standalone/browser/quickOpen/gotoLine":["Go to line {0} and character {1}","Go to line {0}","Type a line number between 1 and {0} to navigate to","Type a character between 1 and {0} to navigate to","Go to line {0}","Type a line number, followed by an optional colon and a character number to navigate to","Go to Line..."],"vs/editor/standalone/browser/quickOpen/quickCommand":["{0}, commands","Type the name of an action you want to execute","Command Palette"],"vs/editor/standalone/browser/quickOpen/quickOutline":["{0}, symbols","Type the name of an identifier you wish to navigate to","Go to Symbol...","symbols ({0})","modules ({0})","classes ({0})","interfaces ({0})","methods ({0})","functions ({0})","properties ({0})","variables ({0})","variables ({0})","constructors ({0})","calls ({0})"],
"vs/editor/standalone/browser/standaloneCodeEditor":["Editor content","Press Ctrl+F1 for Accessibility Options.","Press Alt+F1 for Accessibility Options."],"vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast":["Toggle High Contrast Theme"],"vs/platform/configuration/common/configurationRegistry":["既定の構成オーバーライド","{0} 言語に対して上書きされるエディター設定を構成します。","言語に対して上書きされるエディター設定を構成します。","'{0}' を登録できません。これは、言語固有のエディター設定を記述するプロパティ パターン '\\\\[.*\\\\]$' に一致しています。'configurationDefaults' コントリビューションを使用してください。","'{0}' を登録できません。このプロパティは既に登録されています。"],"vs/platform/dialogs/common/dialogs":["...1 つの追加ファイルが表示されていません","...{0} 個の追加ファイルが表示されていません"],"vs/platform/keybinding/common/abstractKeybindingService":["({0}) が押されました。2 番目のキーを待っています...","キーの組み合わせ ({0}、{1}) はコマンドではありません。"],
"vs/platform/list/browser/listService":["ワークベンチ","Windows および Linux 上の `Control` キーと macOS 上の `Command` キーに割り当てます。","Windows および Linux 上の `Alt` キーと macOS 上の `Option` キーに割り当てます。","マウスで複数の選択肢にツリーおよびリストの項目を追加するために使用される修飾子 (たとえば、エクスプローラーでエディターと scm ビューを開くなど)。`ctrlCmd` は、Windows と Linux では `Control` にマップされ、macOS では `Command` にマップされます。'横に並べて開く' マウス ジェスチャー (サポートされている場合) は、複数選択修飾子と競合しないように調整されます。","マウスのシングル クリックで項目を開きます。","マウスのダブル クリックで項目を開きます。","マウスを使用して、ツリーとリストで項目を開く方法を制御します (サポートされている場合)。'SingleClick' に設定すると、項目をマウスのシングル クリックで開き、'doubleClick' に設定すると、ダブル クリックでのみ開きます。ツリーで子を持つ親の場合、この設定で、親をシングル クリックで展開するか、ダブル クリックで展開するかを制御します。該当しない場合、一部のツリーとリストでは、この設定が無視される場合があることに注意してください。","ワークベンチでツリーが水平スクロールをサポートするかどうかを制御します。"],"vs/platform/markers/common/markers":["エラー","警告","情報"],
"vs/platform/theme/common/colorRegistry":["ワークベンチで使用する色。","全体の前景色。この色は、コンポーネントによってオーバーライドされていない場合にのみ使用されます。","エラー メッセージ全体の前景色。この色は、コンポーネントによって上書きされていない場合にのみ使用されます。","追加情報を提供する説明文の前景色、例:ラベル。","フォーカスされた要素の境界線全体の色。この色はコンポーネントによって上書きされていない場合にのみ使用されます。","コントラストを強めるために、他の要素と隔てる追加の境界線。","コントラストを強めるために、アクティブな他要素と隔てる追加の境界線。","ワークベンチ内のテキスト選択の背景色 (例: 入力フィールドやテキストエリア)。エディター内の選択には適用されないことに注意してください。","テキストの区切り文字の色。","テキスト内のリンクの前景色。","テキスト内のアクティブなリンクの前景色。","フォーマット済みテキスト セグメントの前景色。","テキスト内のブロック引用の背景色。","テキスト内のブロック引用の境界線色。","テキスト内のコード ブロックの背景色。","エディター内の検索/置換窓など、エディター ウィジェットの影の色。","入力ボックスの背景。","入力ボックスの前景。","入力ボックスの境界線。","入力フィールドのアクティブ オプションの境界線の色。","入力ボックスのプレースホルダー テキストの前景色。","情報の重大度を示す入力検証の背景色。","情報の重大度を示す入力検証の境界線色。","警告の重大度を示す入力検証の背景色。","警告の重大度を示す入力検証の境界線色。","エラーの重大度を示す入力検証の背景色。","エラーの重大度を示す入力検証の境界線色。","ドロップダウンの背景。","ドロップダウン リストの背景色。","ドロップダウンの前景。","ドロップダウンの境界線。","ツリーリストがアクティブのとき、フォーカスされた項目のツリーリスト背景色。アクティブなツリーリストはキーボード フォーカスがあり、非アクティブではこれがありません。","ツリーリストがアクティブのとき、フォーカスされた項目のツリーリスト前景色。アクティブなツリーリストはキーボード フォーカスがあり、非アクティブではこれがありません。","ツリーリストがアクティブのとき、選択された項目のツリーリスト背景色。アクティブなツリーリストはキーボード フォーカスがあり、非アクティブではこれがありません。","ツリーリストがアクティブのとき、選択された項目のツリーリスト前景色。アクティブなツリーリストはキーボード フォーカスがあり、非アクティブではこれがありません。","ツリーリストが非アクティブのとき、フォーカスされた項目のツリーリスト背景色。アクティブなツリーリストはキーボード フォーカスがあり、非アクティブではこれがありません。","ツリーリストが非アクティブのとき、選択された項目のツリーリスト前景色。アクティブなツリーリストはキーボード フォーカスがあり、非アクティブではこれがありません。","ツリーリストが非アクティブのとき、フォーカスされた項目のツリーリスト背景色。アクティブなツリーリストはキーボード フォーカスがあり、非アクティブではこれがありません。","マウス操作で項目をホバーするときのツリーリスト背景。","マウス操作で項目をホバーするときのツリーリスト前景。","マウス操作で項目を移動するときのツリーリスト ドラッグ アンド ドロップの背景。","ツリーリスト内を検索しているとき、一致した強調のツリーリスト前景色。","無効な項目のツリーリストの前景色。たとえばエクスプローラーの未解決なルート。","ラベルをグループ化するためのクリック選択の色。","境界線をグループ化するためのクイック選択の色。","ボタンの前景色。","ボタンの背景色。","ホバー時のボタン背景色。","バッジの背景色。バッジとは小さな情報ラベルのことです。例:検索結果の数","バッジの前景色。バッジとは小さな情報ラベルのことです。例:検索結果の数","ビューがスクロールされたことを示すスクロール バーの影。","スクロール バーのスライダーの背景色。","ホバー時のスクロール バー スライダー背景色。","アクティブ時のスクロール バー スライダー背景色。","時間のかかる操作で表示するプログレス バーの背景色。","エディターの背景色。","エディターの既定の前景色。","検索/置換窓など、エディター ウィジェットの背景色。","エディター ウィジェットの境界線色。ウィジェットに境界線があり、ウィジェットによって配色を上書きされていない場合でのみこの配色は使用されます。","エディターの選択範囲の色。","ハイ コントラストの選択済みテキストの色。","非アクティブなエディターの選択範囲の色。下にある装飾を隠さないために、色は不透過であってはなりません。","選択範囲と同じコンテンツの領域の色。下にある装飾を隠さないために、色は不透過であってはなりません。","選択範囲と同じコンテンツの境界線の色。","現在の検索一致項目の色。","他の検索一致項目の色。下にある装飾を隠さないために、色は不透過であってはなりません。","検索を制限する範囲の色。下にある装飾を隠さないために、色は不透過であってはなりません。","現在の検索一致項目の境界線の色。","他の検索一致項目の境界線の色。","検索を制限する範囲の境界線の色。下にある装飾を隠さないために、色は不透過であってはなりません。","ホバーが表示されているワードの下を強調表示します。下にある装飾を隠さないために、色は不透過であってはなりません。","エディター ホバーの背景色。","エディター ホバーの境界線の色。","アクティブなリンクの色。","挿入されたテキストの境界線の色。下にある装飾を隠さないために、色は不透過であってはなりません。","削除されたテキストの境界線の色。下にある装飾を隠さないために、色は不透過であってはなりません。","挿入されたテキストの輪郭の色。","削除されたテキストの輪郭の色。","行内マージ競合の現在のヘッダー背景色。下にある装飾を隠さないために、色は不透過であってはなりません。","行内マージ競合の現在のコンテンツ背景色。下にある装飾を隠さないために、色は不透過であってはなりません。","行内マージ競合の入力側ヘッダー背景色。下にある装飾を隠さないために、色は不透過であってはなりません。","行内マージ競合の入力側コンテンツ背景色。下にある装飾を隠さないために、色は不透過であってはなりません。","行内マージ競合の共通の祖先ヘッダー背景色。下にある装飾を隠さないために、色は不透過であってはなりません。","行内マージ競合の共通の祖先コンテンツ背景色。下にある装飾を隠さないために、色は不透過であってはなりません。","行内マージ競合のヘッダーとスプリッターの境界線の色。","行内マージ競合の現在の概要ルーラー前景色。","行内マージ競合の入力側の概要ルーラー前景色。","行内マージ競合の共通の祖先概要ルーラー前景色。","検索一致項目を示す概要ルーラーのマーカー色。この色は下地の色に紛れないよう不明瞭であってはいけません。","選択範囲を強調表示するときの概要ルーラーのマーカー色。この色は下地の色に紛れないよう不明瞭であってはいけません。"],
"vs/platform/workspaces/common/workspaces":["コード ワークスペース","未設定 (ワークスペース)","{0} (ワークスペース)","{0} (ワークスペース)"]});
//# sourceMappingURL=../../../min-maps/vs/editor/editor.main.nls.ja.js.map