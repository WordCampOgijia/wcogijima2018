#WordCamp Ogijima 2018 Site.

WordCamp Ogijima 2018 のサイトの CSS とか画像などをおきます。

## Get started

1. cd /PATH/TO/wp-content/themes/
2. git clone https://github.com/WordCampOgijia/wcogijima2018.git
3. cd wcogijima2018
4. npm install
5. npm run gulp sass

## WordPress 設定
1. ヘッダー画像差し替え
2. メニュー作成・割り当て（トップメニュー＆フッターウィジェットエリアにメニューウィジェット配置）
3. 開催概要ページ作成＆ホームページに割り当て
4. 夜キャンプ作成＆パネル1に割り当て
5. お知らせページ（スラッグ news）作成＆最新の投稿と、パネル2に割り当て
6. Follow me! ページ作成＆パネル3にわりあて
8. English ページを作成（スラッグ en）、Sponsers と Code of Conduct、contact を下層に配置
9. 行動規範ページ（スラッグ code-of-conduct）作成
10. お問い合わせ（スラッグ contact）作成
11. スポンサーウィジェットをフッターウィジェットエリアに配置

## 注意事項
* トップページ各パネル内のスタイルは、ローカルと本番で割り当てた投稿の ID が異なる可能性を考慮して、「何番目のパネル」という指定をしています。そのため、パネルの順番を入れ替えるとデザインが崩れるので、入れ替える際は CSS の調整が必要です。
* トップページのスポンサーについては、ショートコードが出力するものをいろいろ `display: none` して画像だけがでるようにしています。ランクについてはまだ未確定？かなと思いましたので、上から1つめと2つめのランクのバナーは幅50%、それより下のランクは幅33%という指定にしています。
