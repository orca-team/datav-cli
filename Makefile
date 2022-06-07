VERSION := $(cat package.json | awk -F '"' '{if ($2 == "version") {print $4}}')

install:
	@tnpm install
	@cd static && npm install --registry=http://registry.npm.alibaba-inc.com

release: clear
	# git pull origin master
	@mkdir -p ./out/release
	@rsync -av . ./out/release --exclude .git --exclude .vscode --exclude out --exclude node_modules --exclude tmp_cache --exclude cache --exclude composite.js
	@cd ./out/release && npm install --registry=http://registry.npm.alibaba-inc.com
	@if [ -d ./out/release/static ];then cd ./out/release/static && npm install --registry=http://registry.npm.alibaba-inc.com; fi
	@./out/release/node_modules/.bin/cube build ./out/release/static --remote=static  --smart --mangle-file-name --export=/js/share.js,/js/index.js
	@rm -rf ./out/release/static
	@rm -f ./out/release/static.release/cube_file_map.json
	@mv -f ./out/release/config/config_production.js  ./out/release/config/config.js
	# @mv ./out/release/static.release ./out/release/static

git-check:
	@git status | grep -s "nothing to commit"; if [ $$? -eq 0 ]; then \
			echo "[OK] all code commited"; \
		else \
			echo "[ERROR] git commit all code changes first!" && exit 1; \
		fi;

git-tag:
	@cat package.json | awk -F '"' '/":version" *: *"/{print "v"$$4}' | xargs -I {} git tag {}

clear:
	@rm -rf ./out/release
	@rm -rf ./package-lock.json
	@rm -rf ./static/package-lock.json

pre-publish: git-check git-tag release

publish: git-check git-tag release
	@cd ./out/release && npm publish
