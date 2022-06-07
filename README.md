# 开发指南

## 前排提示

本包是基于 datav-cli 进行修改，移除了对 node 版本的限制

为了和原来的工具区分，本工具的名称改为了 `datavv`

> `init` 和 `run` 命令目前测试没有问题，其他命令待验证。

## 快速开始

### 一、环境准备

安装 node 环境，推荐 node 的版本在 8 以上。NodeJS 官网：[Node.js](https://nodejs.org)
安装成功时，在命令行操作界面执行 (OXS 在 terminal 中执行，Windows 在 cmd 中执行)：

```bash
node -v
v10.11.0

npm -v
6.4.1
```

> 如果您的系统已经安装过或曾经安装过 node ，并且还需要持续使用。推荐安装 nvm 来进行 node 版本管理。它能够使您可以不用管之前的 node，并且不会造成冲突。安装地址：[GitHub - creationix/nvm: Node Version Manager - Simple bash script to manage multiple active node.js versions](https://github.com/creationix/nvm)

### 二、安装开发工具套件

在您的命令行界面执行：

```bash
npm install --registry=https://registry.npm.taobao.org @orca-fe/datav-cli -g
```

安装成功时：

```bash
datavv --version
2.0.0
```

### 三、设置语言环境

如果您的默认语言环境不是 English，您可以在命令行界面执行：

```bash
datavv locale

? 您的语言环境是? [English\Chinese\Japanese]
```

> 如果之后您想根据您的账户所在域，自动切换语言环境，您可以在登录后，执行：[datavv locale-clear | datavv lc]，可以清空默认设置的语言环境。
> 如果之后您想切换语言环境，也可以再次使用 [datavv locale] 重新设置语言环境。

### 四、用户登录

在您的命令行界面执行：

```bash
datavv login

? 用户名:  [输入您在 DataV 控制台首页右上角的名字，如果是子账号，请注意使用主账号的名字]
? 开发者识别码:  [输入您在 DataV 控制台「我的组件」页复制得到的开发者识别码]
? 需要设置别名吗? (Y/n)
? 别名: [输入您想要设置的别名，如果需要的话]

设置成功
```

当看到 `设置成功`时，登录就算完成了。

> 登录不是必须的，如果您只是想试下创建组件，预览组件功能的话，是可以不进行登录操作的。只有发布功能需要登录。

### 五、生成组件包

在您的命令行界面执行：

```bash
datavv init

? 你要创建的组件名(字母，-，数字)是... [组件名只能出现字母、数字和-]
? 你要创建的组件显示名是... [显示名是以后在大屏中组件列表里显示的您的组件名]
? 你的组件描述是...
? 请从组件模板中选择你要创建的组件...
```

当看到`组件创建完毕`时，生成组件包就算完成了。如图：

![](https://img.alicdn.com/tfs/TB1LOWLubrpK1RjSZTEXXcWAVXa-2050-740.png)

### 六、预览组件

在您的命令行界面执行：

```bash
cd 您的组件名
datavv run
```

当看到 `服务启动`时，预览组件的服务已经启动了，您的 google chrome 浏览器会被自动打开组件预览页。如图：

![](https://img.alicdn.com/tfs/TB1KIaQukzoK1RjSZFlXXai4VXa-2048-600.png)

> 1. 如果您的浏览器没有自动打开，可能是您未安装 google chrome，建议安装后手动打开 localhost:1111/
> 2. 如果您看到端口冲突，可能是您的 1111 端口被别的应用程序占用了，您可以使用 `datavv run -p 1112` 来指定使用 1112 端口开启我们的预览服务。
> 3. 如果您的浏览器打开 localhost:1111/，显示并没有此服务，可能是您的电脑并未配置 hosts localhost 指向 127.0.0.1。你可以访问 127.0.0.1:1111/

成功后的预览页如图：
![](https://img.alicdn.com/tfs/TB1C1qHumzqK1RjSZFLXXcn2XXa-2068-1142.png)

预览页主要分`中心画布区`, `底部工具栏`, `右侧工具栏`。

#### 5.1 中心画布区

中心画布区是用来展现组件，实时观测组件变化的舞台。
所有右侧工具栏的配置、数据修改都会实时反映在中心画布的组件上。
组件的白框代表了组件的容器范围大小，每个方向上的白框都可以做缩放来测试组件在任意方向缩放的表现。

#### 右侧工具栏

右侧工具栏分为`样式`、`数据`、`交互`、`发布`4 个面板。

- 样式
  ![](https://img.alicdn.com/tfs/TB1sgCLumzqK1RjSZFpXXakSXXa-602-1006.png)

样式页面描述了组件可变动的一些配置项，如果在样式页进行操作，改动会立即生效。比如在此页面拖拽字号滑动条，组件中的文字字号立即随之变化。
右上的`保存`按钮是用来保存当前修改的配置，保存成此组件的默认配置。

- 数据
  ![](https://img.alicdn.com/tfs/TB1v4SPugHqK1RjSZFkXXX.WFXa-600-1500.png)

数据页面描述了组件的数据接口配置，数据页的数据一旦进行改动，组件都会进行相应的改动。
右上的`保存`按钮是用来保存当前修改的数据，保存成此组件的默认数据。

- 交互
  ![](https://img.alicdn.com/tfs/TB1YXOHubPpK1RjSZFFXXa5PpXa-594-792.png)

交互页面描述了组件的交互说明。

- 发布
  ![](https://img.alicdn.com/tfs/TB14e5RugHqK1RjSZFEXXcGMXXa-596-1082.png)

发布页面描述了组件的类型、图标、发布版本等配置，单击`发布`按钮，即可发布组件。

### 七、发布组件

您可通过以下三种方式发布组件。

- 方式一（推荐）
  进入组件的目录地址下，执行 datavv publish 命令，组件将自动打包压缩发布至账号所在域的服务器。

- 方式二
  进入组件的目录地址下，执行 datavv package 命令，在组件目录外会有一个以“组件-版本号”命名的 tar.gz 压缩包，将此压缩包上传到 datav.aliyun.com 的组件页，即可发布。

- 方法三
  进入预览组件页面下的发布页面，单击发射，即可发布组件。

## 文档结构

```javascript
(--coms - name) | //组件名
  --index.js | //组件主入口
  --package.json | //组件配置
  --readme.md | //组件描述
  --history.md; //组件更新历史描述
```

## package.json 规范

### 协议版本 2(new)

举个例子:

```javascript
{
  "name": "@leaf/pie-multi-radius-with-title",                           //@命名空间/组件名
  "version": "0.1.5",                                                    //版本号
  "dependencies": {                                                      //依赖, 不包括datav:/com/依赖
    "bcore": "0.0.9",
    "jquery": "~2.1.4",
    "lodash": "*"
  },
  "datav": {                                                             //datav配置
    "cn_name": "带标题的多维饼图",                                         //组件中文名
    "protocol": 2,                                                       //协议版本号
    "type": ["regular_pie"],
    "view": {
        "width": 300,
        "height": 200,
        "minWidth": 100,
        "minHeight": 50
    },
    "icon": "",
    "apis": {                                                            //组件接口,可以多个
      "source": {                                                        //接口名
        "handler": "render",                                             //处理接口返回的组件方法名
        "description" : "多维度饼图接口",                                  //接口描述
        "fields" : {                                                     //接口所需字段,可以多个
          "x" : {                                                        //字段名
            "description" : "类目",                                      //字段描述
            "type" : "string",                                           //字段类型
            "optional": true                                             //可选字段
          },
          "y" : {
            "description" : "值",
            "type" : "int"
          }
        }
      }
    },
    "config" : {                                                         //组件配置, 给编辑器识别用
      "paxis" : {
        "type" : "group",                                                //类型:组,详见<组件config配置说明>
        "name" : "标签",
        "children" : {
          "dx" : {
            "type" : "text",                                             //类型:文本,详见<组件config配置说明>
            "name" : "标签距中心",
            "default" : 220
          }
        }
      },
      "title" : {
        "type" : "group",
        "name" : "标题",
        "children" : {
          "value" : {
            "hasVisibility" : "true",
            "visible" : "true",
            "type" : "text",
            "name" : "标题名",
            "default" : "我是标题"
          },
          "font-size" : {
            "type" : "number",                                           //类型:数字,详见<组件config配置说明>
            "name" : "字体",
            "min" : 10,
            "default" : 32,
            "max" : 100
          },
          "text-align" : {
            "name" : "对齐方式",
            "type" : "select",                                           //类型:下拉框,详见<组件config配置说明>
            "options" : [
              {"name" : "左对齐", "value" : "left"},
              {"name" : "右对齐", "value" : "right"},
              {"name" : "居中对齐", "value" : "center"}
            ],
            "default" : "center"
          },
          "color" : {
            "name" : "字体颜色",
            "type" : "color",                                            //类型:颜色,详见<组件config配置说明>
            "default" : "#fff"
          },
          "background-color" : {
            "name" : "背景",
            "type" : "color",
            "default" : "#000"
          }
        }
      }
    },
    "api_data":{                                                         //接口数据,可以多个
      "source" : [                                                       //接口名,必须和apis中的接口名一致,限制6K
        {"x": "普货", "y" : 5},
        {"x": "普货", "y" : 22},
        {"x": "泡货", "y" : 22},
        {"x": "设备", "y" : 14},
        {"x": "矿产", "y" : 15},
        {"x": "钢铁", "y" : 15},
        {"x": "建材", "y" : 12},
        {"x": "食品", "y" : 12},
        {"x": "粮食", "y" : 28}
      ],
      "source2" : "./data.json"                                          //也可以为json文件路径,限制512K
    }
  }
}
```

### type 说明

```javascript
  type: ["regular_bar", ...]               //可以多个,一个组件可以属于多个组,中间以下划线分割

  type: ["第一分类_第二分类"]
```

```javascript
{
  regular: "常规图表",
  map: "地图",
  text: "文本",
  network: "关系网络",
  media: "媒体",
  decorate: "辅助图形",
  interact: "交互"
}
```

### 组件 config 配置说明

config 配置用以说明组件有哪些配置,既用于传给组件,也用于说明编辑器的选项.
config 配置要求:

- 包含组件默认配置
- 描述清配置的输入规范, 用以编辑器识别.

#### type: group

```javascript
"margin": {
  "type" : "group",
  "name" : "标签",
  "children" : {
  }
}

```

|  字段名  |   含义   | 必选 | 备注                                      |
| :------: | :------: | :--: | :---------------------------------------- |
|   type   |   类型   |  √   | -                                         |
|   name   |  显示名  |  -   | 没填时,则用 key 名作为显示名,例如"margin" |
| children | 组内元素 |  -   | 没填时, 组为空                            |

#### type: text

```javascript
{
  "type" : "text",
  "name" : "标题",
  "default": "我是标题"
}

```

| 字段名  |    含义    | 必选 | 备注                                      |
| :-----: | :--------: | :--: | :---------------------------------------- |
|  type   |    类型    |  √   | -                                         |
|  name   |   显示名   |  -   | 没填时,则用 key 名作为显示名,例如"margin" |
| default | 默认显示值 |  -   | 没填时为""                                |

#### type: number

```javascript
{
  "type" : "number",
  "name" : "字号",
  "default": 22,
  "min": 10,
  "max": 55,
  "range": [10, 55],
  "range": {
     "min" : 10,
     "max" : 55
  }
}
```

| 字段名  |    含义    | 必选 | 备注                                                                                                |
| :-----: | :--------: | :--: | :-------------------------------------------------------------------------------------------------- |
|  type   |    类型    |  √   | -                                                                                                   |
|  name   |   显示名   |  -   | 没填时,则用 key 名作为显示名,例如"margin"                                                           |
| default | 默认显示值 |  -   | 没填时为 16                                                                                         |
|   min   |   最小值   |  -   | min\range[0]\range.min 三者有其一就设置最小值成功, 都没有时, 退化为`text`, 不保证运行正确           |
|   max   |   最大值   |  -   | min\range[1]\range.max 三者有其一就设置最大值成功, 都没有时, 退化为`text`, 不保证运行正确           |
|  range  |  取值区间  |  -   | 可以为数组[10, 55],也可以为对象{min: 10, max: 55}, 与 min\max 都没有时,退化为`text`, 不保证运行正确 |

> 有最大\最小值时, UI 进化为 slider 拖动条.

#### type: select

```javascript
{
  "name" : "对齐方式",
  "type" : "select",
  "options" : [
     {"name" : "左对齐", "value" : "left"},
     {"name" : "右对齐", "value" : "right"},
     {"name" : "居中对齐", "value" : "center"}
  ],
  "default" : "center"
}

```

| 字段名  |    含义    | 必选 | 备注                                              |
| :-----: | :--------: | :--: | :------------------------------------------------ |
|  type   |    类型    |  √   | -                                                 |
|  name   |   显示名   |  -   | 没填时,则用 key 名作为显示名,例如"margin"         |
| default | 默认显示值 |  -   | 没填时为 options[0]                               |
| options | 下拉框选择 |  √   | 数组型[{name: '' ,value: ''}], 没有时退化为`text` |

#### type: color

```javascript
{
  "name" : "字体颜色",
  "type" : "color",
  "default" : "#fff"
}

```

| 字段名  |    含义    | 必选 | 备注                                      |
| :-----: | :--------: | :--: | :---------------------------------------- |
|  type   |    类型    |  √   | -                                         |
|  name   |   显示名   |  -   | 没填时,则用 key 名作为显示名,例如"margin" |
| default | 默认显示值 |  -   | 没填时为'#000'                            |

#### type: multicolor

```javascript
{
  "name" : "渐变颜色",
  "type" : "multicolor",
  "default" : {
    "style": "single",
    "value": "#ccc",
    "from": "#000",
    "to": "#fff",
    "angle": 0
  }
}

```

| 字段名  |    含义    | 必选 | 备注                                                                            |
| :-----: | :--------: | :--: | :------------------------------------------------------------------------------ |
|  type   |    类型    |  √   | -                                                                               |
|  name   |   显示名   |  -   | 没填时,则用 key 名作为显示名,例如"margin"                                       |
| default | 默认显示值 |  √   | style 为 single 或 double,value 为 single 单值,from,to,angle 代表 double 的渐变 |

当 style 为 single 时，真实值返回

```javascript
{
  "style": "single",
  "value": "#xxx"
}
```

当 style 为 double 时，真实值返回

```javascript
{
  "style": "double",
  "from": "#xxx",
  "to": "#xxx",
  "angle": 90
}
```

#### type: image

```javascript
{
  "name" : "背景图",
  "type" : "image",
  "default": "http://datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/c4ba3c6518c1997f4baa612a600c3fbe.png"
}

```

| 字段名  |    含义    | 必选 | 备注                                      |
| :-----: | :--------: | :--: | :---------------------------------------- |
|  type   |    类型    |  √   | -                                         |
|  name   |   显示名   |  -   | 没填时,则用 key 名作为显示名,例如"margin" |
| default | 默认显示值 |  -   | 没填时为'', 无图片                        |

#### type: array

```javascript
{
  "name" : "数据系列",
  "type" : "array",
  "default": [{"name": "系列一", value: "进港"},{"name": "系列二", value: "出港"}]
  "child": {
    "name" : "系列<%=i+1%>",
    "type" : "object",
    "child": {
      "name": {
        "name" : "系列值",
        "type" : "text",
        "default": "系列"
      },
      "value": {
        "name" : "系列名",
        "type" : "text",
        "default": ""
      }
    }
  }
}
```

#### type: hidden

```javascript
{
  "type" : "hidden",
  "name": "值",
  "default": 22
}

```

| 字段名  |  含义  | 必选 | 备注                                      |
| :-----: | :----: | :--: | :---------------------------------------- |
|  type   |  类型  |  √   | 此字段编辑器不配置                        |
|  name   | 显示名 |  -   | 没填时,则用 key 名作为显示名,例如"margin" |
| default | 默认值 |  -   | 默认不显示的值,但是会作为 config 传给方法 |

#### type: boolean

```javascript
{
  "type" : "boolean",
  "name" : "显示",
  "default": true
}
```

| 字段名  |  含义  | 必选 | 备注                                      |
| :-----: | :----: | :--: | :---------------------------------------- |
|  type   |  类型  |  √   | 此字段编辑器不配置                        |
|  name   | 显示名 |  -   | 没填时,则用 key 名作为显示名,例如"margin" |
| default | 默认值 |  -   | 没填时为 false                            |

#### type: search

```javascript
{
  "name": "字体",
  "type": "search",
  "default": "Microsoft Yahei",
  "range": [
    {
      "微软雅黑": "Microsoft Yahei"
    },
    {
      "宋体": "SimSun"
    },
    {
      "黑体": "SimHei"
    },
    {
      "隶书": "LiSu"
    },
    {
      "幼圆": "YouYuan"
    },
    "tahoma",
    "arial",
    "sans-serif"
  ],
  "description": "请选择您系统有的字体,如果您系统无此字体,标题将会显示默认字体"
}
```

| 字段名  |    含义    | 必选  | 备注                                      |
| :-----: | :--------: | :---: | :---------------------------------------- | --- | -------------------------------------------------------------------------------------------- |
|  type   |    类型    |   √   | -                                         |
|  name   |   显示名   |   -   | 没填时,则用 key 名作为显示名,例如"margin" |
| default | 默认显示值 |   -   | 没填时为 options[0]                       |
| options |            | range | 下拉框选择                                | √   | 数组型[{name: '' ,value: ''}],也可以为[{key: value}]型,也可以只有[value], 没有时退化为`text` |

#### type: imageSelect

```javascript
{
  "name": "装饰元素",
  "type": "imageSelect",
  "default": "gif1",
  "range": [
    {
      "name": "gif1",
      "value": "gif1",
      "url": "https://img.alicdn.com/tps/TB1tFMtPXXXXXXyXpXXXXXXXXXX-1920-1080.gif"
    },
    {
      "name": "gif2",
      "value": "gif2",
      "url": "https://img.alicdn.com/tps/TB1Pg3pPXXXXXcxXpXXXXXXXXXX-1920-1080.gif"
    }
  ]
}
```

| 字段名  |    含义    | 必选  | 备注                                      |
| :-----: | :--------: | :---: | :---------------------------------------- | --- | -------------------------------------- |
|  type   |    类型    |   √   | -                                         |
|  name   |   显示名   |   -   | 没填时,则用 key 名作为显示名,例如"margin" |
| default | 默认显示值 |   -   | 没填时为 options[0]                       |
| options |            | range | 下拉框选择                                | √   | 数组型[{name: '' ,value: '', url: ''}] |

#### show 的用法

```javascript
{
    "xAxis": {
        "type": "group",
        "name": "x轴",
        "children": {
            "show": {                 //在x轴右侧展示一个显示的点选框,但其实不含兄弟属性是否显示的功能
                 "type": "boolean",
                 "name": "显示",
                 "default": true
            },
            "color": {
                "type": "color",
                "name": "颜色",
                "default": "#ccc",
                "show": [            //单个属性是否显示的功能
                    ["show", "$eq", true]     //表示color要显示的情况是:我的兄弟show = true的时候我才显示
                ]
            }
        }
    }
}
```

## index.js 规范

### 模板案例

详细模板案例详见[example 组件](http://datav.oss-cn-hangzhou.aliyuncs.com/uploads/component-seeds/example/index.js)

#### render(array:data[, object config])

渲染，当组件被初始化后，组件渲染逻辑被调用，入参为数据，配置入参可选。

> 注: 渲染需要能够支持重渲染，保证一样的数据、配置输入，能渲染出一样的效果。

#### resize(int: width, int: height)

缩放，当组件被拖拽、缩放时被调用。

#### updateOptions(object config)

更新配置，当组件配置被更新时调用。

#### clear()

清理，当组件被清理时被调用

#### destroy()

销毁，当组件被销毁时调用

#### emit('global_var', var_name, var_value)

全局参数设置，当全局参数被设置后，屏幕上每个接口都会带上这个参数。

#### require(\*)

支持`js`, `css`, `less`, `html`

## 发布组件

```bash

datavv package

```

在组件目录外会有一个以组件-版本号命名的 tar.gz 包，将此包上传到 datav.aliyun.com 的组件页即可发布。

## ECharts 组件封装指南

### 1. 找案例

在 ECharts 官网找到适合自己需求的图表，例如这次教程的案例：[柱状图动画延迟](http://ECharts.baidu.com/demo.html#bar-animation-delay)

### 2. 抽离配置与数据

根据案例左侧代码栏中配置，可以将一整个 option 抽离出配置与数据。

首先案例中的完整代码是：

```javascript
var xAxisData = [];
var data1 = [];
var data2 = [];
for (var i = 0; i < 100; i++) {
  xAxisData.push('类目' + i);
  data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
  data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
}

option = {
  title: {
    text: '柱状图动画延迟',
  },
  legend: {
    data: ['bar', 'bar2'],
    align: 'left',
  },
  toolbox: {
    // y: 'bottom',
    feature: {
      magicType: {
        type: ['stack', 'tiled'],
      },
      dataView: {},
      saveAsImage: {
        pixelRatio: 2,
      },
    },
  },
  tooltip: {},
  xAxis: {
    data: xAxisData,
    silent: false,
    splitLine: {
      show: false,
    },
  },
  yAxis: {},
  series: [
    {
      name: 'bar',
      type: 'bar',
      data: data1,
      animationDelay: function (idx) {
        return idx * 10;
      },
    },
    {
      name: 'bar2',
      type: 'bar',
      data: data2,
      animationDelay: function (idx) {
        return idx * 10 + 100;
      },
    },
  ],
  animationEasing: 'elasticOut',
  animationDelayUpdate: function (idx) {
    return idx * 5;
  },
};
```

其中含有数据项的配置是：

1. option.xAxis.data
2. option.series[x].data

为了转换为 DataV 能识别的细化到数据元的数据：

```javascript
[
  {
    x: 'option.xAxis.data的某一项值',
    y: 'option.series[x].data的某一项值',
    s: 'option.series[x].name',
  },
];
```

所以除了这三项配置属于数据，别的都属于配置了。

### 3. 填写 package.json

将梳理的配置和数据按照第一章的规范写入 package.json，注意以下几点：

1. 觉得自己组件不需要的配置完全可以删除
2. 觉得还有些配置虽然案例代码里没有，但是你需要的话，可以从[[ECharts配置项手册]](http://ECharts.baidu.com/option.html)获取
3. ECharts 配置项种类繁多，大部分都已支持，但是不支持配置项是函数的，不支持 ECharts 自己的类型，比如 echarts.datatool.xxx，目前也暂不支持一个配置项有多种类型，比如既可以是 text 类型，也可以是 number 类型。
4. 尽量配置结构与 ECharts 一致，实在需要不一致也可以，那需要在 index.js 中自己实现转换（所以其实也可以变相支持 echarts.datatool 等 echarts 类型）

展示下案例中的 ECharts 转换后的部分 package.json

```javascript
{
  "datav": {
    "cn_name": "柱状图",
    "icon": "",
    "protocol": 2,
    "type": [
      "regular_bar"
    ],
    "view": {
      "width": "600",
      "height": "200",
      "minWidth": "40",
      "minHeight": "20"
    },
    "apis": {
      "source": {
        "handler": "render",
        "description": "echarts动画延迟柱状图接口描述",
        "fields": {
          "x": {
            "description": "x坐标轴值"
          },
          "y": {
            "description": "y坐标轴值"
          },
          "s": {
            "description": "系列值",
            "optional": true
          }
        }
      }
    },
    "config": {
      "legend": {
        //...
      },
      "grid": {
        //...
      },
      "xAxis": {
        "name": "x轴",
        "type": "group",
        "children": {
          "show": {
            "name": "显示",
            "type": "boolean",
            "default": false
          },
          "offset": {
            "name": "位移",
            "type": "number",
            "default": 0
          },
          "type": {
            "name": "类型",
            "type": "text",
            "default": "category"
          },
          "name": {
            "name": "名称",
            "type": "text",
            "default": ""
          },
          "nameLocation": {
            "name": "名称位置",
            "type": "text",
            "default": "end"
          },
          "nameTextStyle": {
            "name": "名称样式",
            "type": "group",
            "children": {
              "color": {
                "name": "颜色",
                "type": "color",
                "default": "rgba(0,0,0,0)"
              },
              "fontStyle": {
                "name": "字体样式",
                "type": "text",
                "default": "normal"
              },
              "fontWeight": {
                "name": "字体粗细",
                "type": "text",
                "default": "normal"
              },
              "fontFamily": {
                "name": "字体",
                "type": "text",
                "default": "sans-serif"
              },
              "fontSize": {
                "name": "字号",
                "type": "number",
                "default": 10
              }
            },
            "fold": true
          },
          "nameGap": {
            "name": "名称间隔",
            "type": "number",
            "default": 15
          },
          "nameRotate": {
            "name": "名称旋转",
            "type": "number",
            "default": null
          },
          "inverse": {
            "name": "反向",
            "type": "boolean",
            "default": false
          },
          "boundaryGap": {
            "name": "留白",
            "type": "boolean",
            "default": true
          },
          "min": {
            "name": "最小值",
            "type": "text",
            "default": "dataMin"
          },
          "max": {
            "name": "最大值",
            "type": "text",
            "default": "dataMax"
          },
          "scale": {
            "name": "自动伸缩",
            "type": "boolean",
            "default": false
          },
          "splitNumber": {
            "name": "分割段数",
            "type": "number",
            "default": 5
          },
          "minInterval": {
            "name": "最小间隔大小",
            "type": "number",
            "default": 0
          },
          "logBase": {
            "name": "对数轴底数",
            "type": "number",
            "default": 10
          },
          "silent": {
            "name": "静态",
            "type": "boolean",
            "default": false
          },
          "triggerEvent": {
            "name": "触发事件",
            "type": "boolean",
            "default": false
          },
          "axisLine": {
            "name": "轴线",
            "type": "group",
            "children": {
              "show": {
                "name": "显示",
                "type": "boolean",
                "default": false
              },
              "onZero": {
                "name": "在零上",
                "type": "boolean",
                "default": true
              },
              "lineStyle": {
                "name": "轴线样式",
                "type": "group",
                "children": {
                  "color": {
                    "name": "颜色",
                    "type": "multicolor",
                    "default": {
                      "style": "single",
                      "value": "rgba(255,255,255,.8)"
                    }
                  },
                  "width": {
                    "name": "宽度",
                    "type": "number",
                    "default": 1
                  },
                  "type": {
                    "name": "类型",
                    "type": "text",
                    "default": "solid"
                  },
                  "opacity": {
                    "name": "透明度",
                    "type": "number",
                    "default": 1
                  }
                },
                "fold": true
              }
            },
            "fold": true
          },
          "axisTick": {
            "name": "刻度",
            "type": "group",
            "children": {
              "show": {
                "name": "显示",
                "type": "boolean",
                "default": false
              },
              "alignWithLabel": {
                "name": "和标签对齐",
                "type": "boolean",
                "default": false
              },
              "interval": {
                "name": "分割间隔",
                "type": "number",
                "default": 0
              },
              "inside": {
                "name": "内部",
                "type": "boolean",
                "default": false
              },
              "length": {
                "name": "长度",
                "type": "number",
                "default": 5
              },
              "lineStyle": {
                "name": "轴线样式",
                "type": "group",
                "children": {
                  "color": {
                    "name": "颜色",
                    "type": "multicolor",
                    "default": {
                      "style": "single",
                      "value": "rgba(255,255,255,.8)"
                    }
                  },
                  "width": {
                    "name": "宽度",
                    "type": "number",
                    "default": 1
                  },
                  "type": {
                    "name": "类型",
                    "type": "text",
                    "default": "solid"
                  },
                  "opacity": {
                    "name": "透明度",
                    "type": "number",
                    "default": 1
                  }
                },
                "fold": true
              }
            },
            "fold": true
          },
          "axisLabel": {
            "name": "刻度标签",
            "type": "group",
            "children": {
              "show": {
                "name": "显示",
                "type": "boolean",
                "default": true
              },
              "interval": {
                "name": "分割间隔",
                "type": "number",
                "default": 13
              },
              "inside": {
                "name": "内部",
                "type": "boolean",
                "default": false
              },
              "rotate": {
                "name": "旋转",
                "type": "number",
                "default": 0
              },
              "margin": {
                "name": "外间距",
                "type": "number",
                "default": 8
              },
              "showMinLabel": {
                "name": "显示最小标签",
                "type": "boolean",
                "default": true
              },
              "showMaxLabel": {
                "name": "显示最大标签",
                "type": "boolean",
                "default": true
              },
              "textStyle": {
                "name": "文本样式",
                "type": "group",
                "children": {
                  "color": {
                    "name": "颜色",
                    "type": "color",
                    "default": "rgba(255,255,255,.8)"
                  },
                  "fontStyle": {
                    "name": "字体样式",
                    "type": "text",
                    "default": "normal"
                  },
                  "fontWeight": {
                    "name": "字体粗细",
                    "type": "text",
                    "default": "normal"
                  },
                  "fontFamily": {
                    "name": "字体",
                    "type": "text",
                    "default": "sans-serif"
                  },
                  "fontSize": {
                    "name": "字号",
                    "type": "number",
                    "default": 10
                  },
                  "align": {
                    "name": "对齐",
                    "type": "select",
                    "range": [
                      {
                        "name": "自动",
                        "value": "auto"
                      },
                      {
                        "name": "左对齐",
                        "value": "left"
                      },
                      {
                        "name": "居中对齐",
                        "value": "center"
                      },
                      {
                        "name": "右对齐",
                        "value": "right"
                      }
                    ],
                    "default": ""
                  },
                  "baseline": {
                    "name": "基线",
                    "type": "text",
                    "default": ""
                  }
                },
                "fold": true
              }
            },
            "fold": true
          },
          "splitLine": {
            "name": "分割线",
            "type": "group",
            "children": {
              "show": {
                "name": "显示",
                "type": "boolean",
                "default": false
              },
              "interval": {
                "name": "分割间隔",
                "type": "number",
                "default": 0
              },
              "lineStyle": {
                "name": "轴线样式",
                "type": "group",
                "children": {
                  "width": {
                    "name": "宽度",
                    "type": "number",
                    "default": 1
                  },
                  "type": {
                    "name": "类型",
                    "type": "text",
                    "default": "solid"
                  },
                  "opacity": {
                    "name": "透明度",
                    "type": "number",
                    "default": 1
                  }
                },
                "fold": true
              }
            },
            "fold": true
          },
          "splitArea": {
            "name": "分割区域",
            "type": "group",
            "children": {
              "interval": {
                "name": "分割间隔",
                "type": "number",
                "default": 0
              },
              "show": {
                "name": "显示",
                "type": "boolean",
                "default": false
              },
              "areaStyle": {
                "name": "区域样式",
                "type": "group",
                "children": {
                  "opacity": {
                    "name": "透明度",
                    "type": "number",
                    "default": 1
                  }
                },
                "fold": true
              }
            },
            "fold": true
          },
          "axisPointer": {
            "name": "坐标轴指示器",
            "type": "group",
            "children": {
              "show": {
                "name": "显示",
                "type": "boolean",
                "default": true
              },
              "type": {
                "name": "类型",
                "type": "select",
                "default": "line",
                "range": [
                  {
                    "name": "直线指示器",
                    "value": "line"
                  },
                  {
                    "name": "阴影指示器",
                    "value": "shadow"
                  }
                ]
              },
              "snap": {
                "name": "自动吸附",
                "type": "boolean",
                "default": false
              },
              "value": {
                "name": "初始值",
                "type": "number",
                "default": null
              },
              "status": {
                "name": "状态",
                "type": "boolean",
                "default": false
              },
              "label": {
                "name": "标签",
                "type": "group",
                "children": {
                  "show": {
                    "name": "显示",
                    "type": "boolean",
                    "default": false
                  },
                  "precision": {
                    "name": "小数精度",
                    "type": "number",
                    "default": "'auto'"
                  },
                  "margin": {
                    "name": "外间距",
                    "type": "boolean",
                    "default": 3
                  },
                  "textStyle": {
                    "name": "文本样式",
                    "type": "group",
                    "children": {
                      "color": {
                        "name": "颜色",
                        "type": "color",
                        "default": "#ffffff"
                      },
                      "fontStyle": {
                        "name": "字体样式",
                        "type": "text",
                        "default": "normal"
                      },
                      "fontWeight": {
                        "name": "字体粗细",
                        "type": "text",
                        "default": "normal"
                      },
                      "fontFamily": {
                        "name": "字体",
                        "type": "text",
                        "default": "sans-serif"
                      },
                      "fontSize": {
                        "name": "字号",
                        "type": "number",
                        "default": 10
                      }
                    },
                    "fold": true
                  },
                  "backgroundColor": {
                    "name": "背景色",
                    "type": "text",
                    "default": "auto"
                  },
                  "borderColor": {
                    "name": "边框色",
                    "type": "text",
                    "default": ""
                  },
                  "borderWidth": {
                    "name": "边框粗细",
                    "type": "text",
                    "default": ""
                  }
                },
                "fold": true
              },
              "lineStyle": {
                "name": "轴线样式",
                "type": "group",
                "show": [
                  [
                    "type",
                    "$eq",
                    "line"
                  ]
                ],
                "children": {
                  "color": {
                    "name": "颜色",
                    "type": "multicolor",
                    "default": {
                      "style": "single",
                      "value": "rgba(0,0,0,0)"
                    }
                  },
                  "width": {
                    "name": "宽度",
                    "type": "number",
                    "default": 1
                  },
                  "type": {
                    "name": "类型",
                    "type": "text",
                    "default": "solid"
                  },
                  "opacity": {
                    "name": "透明度",
                    "type": "number",
                    "default": 1
                  }
                },
                "fold": true
              },
              "shadowStyle": {
                "name": "阴影样式",
                "type": "group",
                "show": [
                  [
                    "type",
                    "$eq",
                    "shadow"
                  ]
                ],
                "children": {
                  "color": {
                    "name": "颜色",
                    "type": "multicolor",
                    "default": {
                      "style": "single",
                      "value": "rgba(150,150,150,0.3)"
                    }
                  },
                  "opacity": {
                    "name": "透明度",
                    "type": "number",
                    "default": 1
                  }
                },
                "fold": true
              },
              "handle": {
                "name": "拖拽手柄",
                "type": "group",
                "children": {
                  "show": {
                    "name": "显示",
                    "type": "boolean",
                    "default": false
                  },
                  "size": {
                    "name": "大小",
                    "type": "number",
                    "default": 45
                  },
                  "margin": {
                    "name": "外间距",
                    "type": "number",
                    "default": 50
                  },
                  "color": {
                    "name": "颜色",
                    "type": "text",
                    "default": "#333"
                  },
                  "throttle": {
                    "name": "刷新频率",
                    "type": "number",
                    "default": 40
                  }
                },
                "fold": true
              }
            },
            "fold": true
          }
        },
        "fold": true
      },
      "yAxis": {
        //...
      },
      "tooltip": {
        //...
      },
      "series": {
        "name": "系列",
        "type": "array",
        "fold": true,
        "default": [
          {
            "name": "bar",
            "type": "bar",
            "legendHoverLink": true,
            "coordinateSystem": "cartesian2d",
            "label": {
              "normal": {
                "show": false,
                "textStyle": {
                  "color": "#000",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 10
                }
              },
              "emphasis": {
                "show": false,
                "textStyle": {
                  "color": "#000",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 10
                }
              }
            },
            "itemStyle": {
              "normal": {
                "color": {
                  "style": "single",
                  "value": "#00c2ff"
                },
                "borderColor": {
                  "style": "single",
                  "value": "#000"
                },
                "borderWidth": 0,
                "borderType": "solid",
                "barBorderRadius": 0,
                "opacity": 1
              },
              "emphasis": {
                "color": {
                  "style": "single",
                  "value": "#00c2ff"
                },
                "borderColor": {
                  "style": "single",
                  "value": "#000"
                },
                "borderWidth": 0,
                "borderType": "solid",
                "opacity": 1
              }
            },
            "stack": "",
            "barWidth": "50%",
            "barMinHeight": 0,
            "barGap": "30%",
            "barCategoryGap": "20%",
            "silent": false
          },
          {
            "name": "bar2",
            "type": "bar",
            "legendHoverLink": true,
            "coordinateSystem": "cartesian2d",
            "label": {
              "normal": {
                "show": false,
                "textStyle": {
                  "color": "#000",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 10
                }
              },
              "emphasis": {
                "show": false,
                "textStyle": {
                  "color": "#000",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 10
                }
              }
            },
            "itemStyle": {
              "normal": {
                "color": {
                  "style": "single",
                  "value": "#5bffb0"
                },
                "borderColor": {
                  "style": "single",
                  "value": "#000"
                },
                "borderWidth": 0,
                "borderType": "solid",
                "barBorderRadius": 0,
                "opacity": 1
              },
              "emphasis": {
                "color": {
                  "style": "single",
                  "value": "#5bffb0"
                },
                "borderColor": {
                  "style": "single",
                  "value": "#000"
                },
                "borderWidth": 0,
                "borderType": "solid",
                "opacity": 1
              }
            },
            "stack": "",
            "barWidth": "50%",
            "barMinHeight": 0,
            "barGap": "30%",
            "barCategoryGap": "20%",
            "silent": false
          }
        ],
        "child": {
          "type": "object",
          "name": "系列<%= i+1 %>",
          "child": {
            "name": {
              "name": "名称",
              "type": "text",
              "default": ""
            },
            "legendHoverLink": {
              "name": "图例联动高亮",
              "type": "boolean",
              "default": true
            },
            "coordinateSystem": {
              "name": "坐标系",
              "type": "text",
              "default": "cartesian2d"
            },
            "label": {
              "name": "标签",
              "type": "group",
              "children": {
                "normal": {
                  "name": "普通项",
                  "type": "group",
                  "children": {
                    "show": {
                      "name": "显示",
                      "type": "boolean",
                      "default": false
                    },
                    "textStyle": {
                      "name": "文本样式",
                      "type": "group",
                      "children": {
                        "color": {
                          "name": "颜色",
                          "type": "color",
                          "default": "#000"
                        },
                        "fontStyle": {
                          "name": "字体样式",
                          "type": "text",
                          "default": "normal"
                        },
                        "fontWeight": {
                          "name": "字体粗细",
                          "type": "text",
                          "default": "normal"
                        },
                        "fontFamily": {
                          "name": "字体",
                          "type": "text",
                          "default": "sans-serif"
                        },
                        "fontSize": {
                          "name": "字号",
                          "type": "number",
                          "default": 10
                        }
                      },
                      "fold": true
                    }
                  },
                  "fold": true
                },
                "emphasis": {
                  "name": "重点项",
                  "type": "group",
                  "children": {
                    "show": {
                      "name": "显示",
                      "type": "boolean",
                      "default": false
                    },
                    "textStyle": {
                      "name": "文本样式",
                      "type": "group",
                      "children": {
                        "color": {
                          "name": "颜色",
                          "type": "color",
                          "default": "#000"
                        },
                        "fontStyle": {
                          "name": "字体样式",
                          "type": "text",
                          "default": "normal"
                        },
                        "fontWeight": {
                          "name": "字体粗细",
                          "type": "text",
                          "default": "normal"
                        },
                        "fontFamily": {
                          "name": "字体",
                          "type": "text",
                          "default": "sans-serif"
                        },
                        "fontSize": {
                          "name": "字号",
                          "type": "number",
                          "default": 10
                        }
                      },
                      "fold": true
                    }
                  },
                  "fold": true
                }
              },
              "fold": true
            },
            "itemStyle": {
              "name": "元素样式",
              "type": "group",
              "children": {
                "normal": {
                  "name": "普通项",
                  "type": "group",
                  "children": {
                    "color": {
                      "name": "颜色",
                      "type": "multicolor",
                      "default": {
                        "style": "single",
                        "value": "rgba(0,0,0,0)"
                      }
                    },
                    "borderColor": {
                      "name": "边框色",
                      "type": "multicolor",
                      "default": {
                        "style": "single",
                        "value": "#000"
                      }
                    },
                    "borderWidth": {
                      "name": "边框粗细",
                      "type": "number",
                      "default": 0
                    },
                    "borderType": {
                      "name": "边框样式",
                      "type": "text",
                      "default": "solid"
                    },
                    "barBorderRadius": {
                      "name": "柱状图圆角",
                      "type": "number",
                      "default": 0
                    },
                    "opacity": {
                      "name": "透明度",
                      "type": "number",
                      "default": 1
                    }
                  },
                  "fold": true
                },
                "emphasis": {
                  "name": "重点项",
                  "type": "group",
                  "children": {
                    "color": {
                      "name": "颜色",
                      "type": "multicolor",
                      "default": {
                        "style": "single",
                        "value": "rgba(0,0,0,0)"
                      }
                    },
                    "borderColor": {
                      "name": "边框色",
                      "type": "multicolor",
                      "default": {
                        "style": "single",
                        "value": "#000"
                      }
                    },
                    "borderWidth": {
                      "name": "边框粗细",
                      "type": "number",
                      "default": 0
                    },
                    "borderType": {
                      "name": "边框样式",
                      "type": "text",
                      "default": "solid"
                    },
                    "opacity": {
                      "name": "透明度",
                      "type": "number",
                      "default": 1
                    }
                  },
                  "fold": true
                }
              },
              "fold": true
            },
            "stack": {
              "name": "堆叠图",
              "type": "text",
              "default": ""
            },
            "barWidth": {
              "name": "柱子宽度",
              "type": "text",
              "default": "50%"
            },
            "barMinHeight": {
              "name": "柱状图最小高度",
              "type": "number",
              "default": 0
            },
            "barGap": {
              "name": "柱状图间隔",
              "type": "text",
              "default": "30%"
            },
            "barCategoryGap": {
              "name": "类目间柱子间距",
              "type": "text",
              "default": "20%"
            },
            "silent": {
              "name": "静态",
              "type": "boolean",
              "default": false
            }
          }
        }
      },
      "animation": {
        "name": "动画",
        "type": "boolean",
        "default": true
      },
      "animationThreshold": {
        "name": "动画阈值",
        "type": "number",
        "default": 2000
      },
      "animationDuration": {
        "name": "动画时长",
        "type": "number",
        "default": 1000
      },
      "animationEasing": {
        "name": "缓动效果",
        "type": "text",
        "default": "elasticOut"
      }
    },
    "api_data": {
      "source": [
        {
          "x": "类目0",
          "y": 0,
          "s": "bar"
        },
        {
          "x": "类目0",
          "y": -50,
          "s": "bar2"
        },
        {
          "x": "类目1",
          "y": -8.901463875624668,
          "s": "bar"
        },
        {
          "x": "类目1",
          "y": -47.18992898088751,
          "s": "bar2"
        },
        {
          "x": "类目2",
          "y": -17.025413764148556,
          "s": "bar"
        },
        {
          "x": "类目2",
          "y": -42.54426104547181,
          "s": "bar2"
        },
        {
          "x": "类目3",
          "y": -24.038196249566663,
          "s": "bar"
        },
        {
          "x": "类目3",
          "y": -36.290773900754886,
          "s": "bar2"
        },
        {
          "x": "类目4",
          "y": -29.66504684804471,
          "s": "bar"
        },
        {
          "x": "类目4",
          "y": -28.71517529663627,
          "s": "bar2"
        },
        {
          "x": "类目5",
          "y": -33.699527649688676,
          "s": "bar"
        },
        {
          "x": "类目5",
          "y": -20.146937097399626,
          "s": "bar2"
        },
        {
          "x": "类目6",
          "y": -36.00971978255796,
          "s": "bar"
        },
        {
          "x": "类目6",
          "y": -10.94374119697364,
          "s": "bar2"
        },
        {
          "x": "类目7",
          "y": -36.541005056170455,
          "s": "bar"
        },
        {
          "x": "类目7",
          "y": -1.4752538113770308,
          "s": "bar2"
        },
        {
          "x": "类目8",
          "y": -35.31542466107655,
          "s": "bar"
        },
        {
          "x": "类目8",
          "y": 7.893046603320797,
          "s": "bar2"
        },
        {
          "x": "类目9",
          "y": -32.427752866005996,
          "s": "bar"
        },
        {
          "x": "类目9",
          "y": 16.81528588241657,
          "s": "bar2"
        },
        {
          "x": "类目10",
          "y": -28.038563739693934,
          "s": "bar"
        },
        {
          "x": "类目10",
          "y": 24.979206795219028,
          "s": "bar2"
        },
        {
          "x": "类目11",
          "y": -22.364693082297347,
          "s": "bar"
        },
        {
          "x": "类目11",
          "y": 32.11821023962515,
          "s": "bar2"
        },
        {
          "x": "类目12",
          "y": -15.667600860943732,
          "s": "bar"
        },
        {
          "x": "类目12",
          "y": 38.02096119056733,
          "s": "bar2"
        },
        {
          "x": "类目13",
          "y": -8.240217424060843,
          "s": "bar"
        },
        {
          "x": "类目13",
          "y": 42.53821720798438,
          "s": "bar2"
        },
        {
          "x": "类目14",
          "y": -0.3929067389459173,
          "s": "bar"
        },
        {
          "x": "类目14",
          "y": 45.58667093073836,
          "s": "bar2"
        },
        {
          "x": "类目15",
          "y": 7.560799717904647,
          "s": "bar"
        },
        {
          "x": "类目15",
          "y": 47.14973738101559,
          "s": "bar2"
        },
        {
          "x": "类目16",
          "y": 15.318054209871054,
          "s": "bar"
        },
        {
          "x": "类目16",
          "y": 47.275355710354944,
          "s": "bar2"
        },
        ...
      ]
    }
  }
}
```

### 4. 编写 index.js

1. 在初始化方法中，执行`EChart.init`
2. 在渲染方法中，执行`chart.setOption`
3. 在缩放方法中，执行`chart.resize`
4. 在清空方法中，执行`chart.clear`
5. 在销毁方法中，执行`chart.dispose`
