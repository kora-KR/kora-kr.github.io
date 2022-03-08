(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1551:function(t,a,s){"use strict";s.r(a);var e=s(2),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"git-基础开发命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-基础开发命令"}},[t._v("#")]),t._v(" Git 基础开发命令")]),t._v(" "),s("h3",{attrs:{id:"项目搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目搭建"}},[t._v("#")]),t._v(" 项目搭建")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 拉取")]),t._v("\n$ git clone "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("线上仓库"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n$ git pull origin dev "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一般clone会携带所有分支信息，不需要单独拉取（所需拉取仓库分支）")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 分支管理")]),t._v("\n$ git branch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查看分支")]),t._v("\n$ git branch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("newBranch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新增分支(勿重名)")]),t._v("\n$ git checkout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("newBranch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 切换分支(如 git checkout develop)")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. 上传流程")]),t._v("\n$ git add "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n$ git commit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("提交日志"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (如 git commit -m'初始版本')")]),t._v("\n$ git push "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认提交 clone 线上仓库，可以 git push origin \\*\\*不同仓库(不建议使用)")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新建分支与新建分支提交差异(上传流程最后一步)")]),t._v("\n$ git push "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("set"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("upstream origin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("newBranch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上传线上新分支(如 git push --set-upstream origin develop)")]),t._v("\n")])])]),s("h3",{attrs:{id:"项目开发中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目开发中"}},[t._v("#")]),t._v(" 项目开发中")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 注意：如果团队合作且同分支开发，每次提交代码必须遵循如下流程\n * \t\t拉取 -> 无冲突 -> 上传\n * \t\t(或)\n * \t\t拉取 -> 冲突 -> 回滚 -> 拉取 -> 回滚提取，合并 -> 上传\n * **/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 拉取")]),t._v("\n$ git pull\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 冲突处理")]),t._v("\n\t$ git stash "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 本地回滚")]),t._v("\n\t$ git pull\n\t$ git stash pop "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 回滚提取(需到项目内手动解决冲突，可全局搜索`<<<<<<<<<<`)")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 上传")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("同上")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("项目搭建上传流程"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"git-拓展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-拓展"}},[t._v("#")]),t._v(" Git 拓展")]),t._v(" "),s("h3",{attrs:{id:"多私钥配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多私钥配置"}},[t._v("#")]),t._v(" 多私钥配置")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/popfisher/p/5731232.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"分支合并"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分支合并"}},[t._v("#")]),t._v(" 分支合并")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 注意：\n *     1. 合并时，合并分支与被合并分支均需提交线上\n *     2. 若合并存在冲突，需手动解决冲突后提交代码(可全局搜索`<<<<<<<<<<`)\n * **/")]),t._v("\n$ git merge dev "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dev分支合并至当前所在分支")]),t._v("\n")])])]),s("h3",{attrs:{id:"删除分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除分支"}},[t._v("#")]),t._v(" 删除分支")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 删除本地")]),t._v("\n$ git branch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("分支名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如 git branch -D develop")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 删除线上")]),t._v("\n$ git push origin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("分支名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如 git push origin --delete develop")]),t._v("\n")])])]),s("h3",{attrs:{id:"分支重命名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分支重命名"}},[t._v("#")]),t._v(" 分支重命名")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("$ git branch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oldName newName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 本地更名(如 git branch -m develop develop2)")]),t._v("\n$ git push "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" origin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oldName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除远程老分支")]),t._v("\n$ git push origin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("newName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上传新分支")]),t._v("\n$ git branch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("set"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("upstream"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("to origin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("newName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 本地与远程建立连接")]),t._v("\n")])])]),s("h3",{attrs:{id:"删除无用-commit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除无用-commit"}},[t._v("#")]),t._v(" 删除无用 commit")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("$ git log "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查看commitLog")]),t._v("\n$ git reset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("hard "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commit_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 本地回滚至指定commit_id")]),t._v("\n$ git push origin "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("master "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("force "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 强制推送线上")]),t._v("\n")])])]),s("h3",{attrs:{id:"切换至指定-commit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换至指定-commit"}},[t._v("#")]),t._v(" 切换至指定 commit")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("$ git log "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查看commitLog")]),t._v("\n$ git checkout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commit_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 切换指定commit_id")]),t._v("\n$ git checkout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("newBranch commit_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 本地新建newBranch分支记录commit_id")]),t._v("\n$ git push "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("set"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("upstream origin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("newBranch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 强制推送线上")]),t._v("\n")])])]),s("h3",{attrs:{id:"tag-的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tag-的问题"}},[t._v("#")]),t._v(" Tag 的问题")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 注意：\n *     1. tag就是一个只读的branch，是静态的；\n *     2. branch是一个分支；tag是分支上的一个里程碑；\n *   **/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. tag标记、提交")]),t._v("\n$ git add "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n$ git commit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m “fixed some bugs”\n$ git tag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag备注"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 标记tag(如 git tag -a 1.0.1 -m "Release version 1.0.1")')]),t._v("\n$ git push origin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("tags\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. tag删除")]),t._v("\n$ git tag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("d "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除本地(如 git tag -d 1.0.1)")]),t._v("\n$ git push origin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("refs"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tags"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除线上(如 git push origin :refs/tags/1.0.1)")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. 查看tag")]),t._v("\n$ git tag "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查看列表")]),t._v("\n$ git show "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查看当前tag详细信息")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4. tag升级")]),t._v("\n$ git checkout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("迁出branch名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tag迁出分支(如 git checkout -b tagToBranch 1.0.1)")]),t._v("\n$ git checkout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("迁出branch名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 切换tag迁出分支，在此分支修改迭代")]),t._v("\n$ git tag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag备注"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 标记tag(如 git tag -a 1.0.2 -m "Release version 1.0.2")')]),t._v("\n$ git push origin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("tags\n")])])]),s("h2",{attrs:{id:"异常问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异常问题"}},[t._v("#")]),t._v(" 异常问题")]),t._v(" "),s("h3",{attrs:{id:"推送报错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推送报错"}},[t._v("#")]),t._v(" 推送报错")]),t._v(" "),s("blockquote",[s("p",[t._v("GitLab: You are not allowed to force push code to a protected branch on this project")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("解决：\n1. Settings -> Repository -> Protected Branches -> Unprotect // 不建议使用，处理完后建议重新打开\n2. Settings -> Repository -> Protected Branches -> Allowed to push配置可修改角色\n")])])]),s("h3",{attrs:{id:"push-代码超过-100m"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#push-代码超过-100m"}},[t._v("#")]),t._v(" push 代码超过 100M")]),t._v(" "),s("blockquote",[s("p",[t._v("fatal: fatal: sha1 file stdout write error: Broken pipe The remote end hung up unexpectedly error")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("解决：\ngit config http.postBuffer 524288000 // 提高提交上限(500*1024*1024 = 500M)\ngit config -l // 查看配置是否成功\n")])])]),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/zmdComeOn/p/12565629.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);