if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const classify = [
    "柜台",
    "第一排左",
    "第一排右",
    "第二排左",
    "第二排右",
    "第三排左",
    "第三排右",
    "第四排左",
    "第四排右",
    "里部走廊",
    "中间走廊",
    "外部走廊"
  ];
  const classify$1 = {
    classify
  };
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$6 = {
    data() {
      return {
        title: "Hello",
        classify: classify$1.classify
      };
    },
    onLoad() {
      formatAppLog("log", "at pages/index/index.vue:34", this.classify[0]);
      formatAppLog("log", "at pages/index/index.vue:35", this.classify[1]);
    },
    methods: {
      handleTap(item, index) {
        formatAppLog("log", "at pages/index/index.vue:40", "存储数据");
        uni.setStorageSync("clickedItem", item);
        uni.setStorageSync("clickedIndex", index);
        uni.navigateTo({
          url: "/pages/info/info"
        });
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "head" }, [
          vue.createCommentVNode(" 头部信息，居中，大字 "),
          vue.createTextVNode(" 商品分类 ")
        ]),
        vue.createElementVNode("hr"),
        vue.createElementVNode("scroll-view", { "scroll-y": "true" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.classify, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index,
                onClick: ($event) => $options.handleTap(item, index)
              }, [
                vue.createElementVNode("view", { class: "content" }, [
                  vue.createElementVNode("view", { class: "imagePlace" }, [
                    vue.createElementVNode("image", {
                      src: "/static/show.png",
                      mode: "widthFix"
                    })
                  ]),
                  vue.createElementVNode(
                    "view",
                    { class: "textplace" },
                    vue.toDisplayString(item),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("view", { class: "jumpArrow" }, [
                    vue.createElementVNode("image", {
                      src: "/static/箭头.png",
                      mode: "widthFix"
                    })
                  ])
                ])
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "D:/denchan/denchan2024/goods/goods/pages/index/index.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {
        recentSearches: ["牛奶", "面包", "鸡蛋", "水果"]
        // 示例数据
      };
    },
    methods: {
      search(event) {
        formatAppLog("log", "at pages/search/search.vue:40", "搜索内容:", event.target.value);
      },
      goToSearch() {
        uni.navigateTo({
          url: "/pages/result/result"
        });
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "search-page" }, [
      vue.createCommentVNode(" 标题部分 "),
      vue.createElementVNode("view", { class: "title" }, "立即搜索"),
      vue.createCommentVNode(" 搜索栏部分 "),
      vue.createElementVNode("view", { class: "search-bar" }, [
        vue.createElementVNode("view", { class: "search-icon" }, [
          vue.createElementVNode("image", {
            src: "/static/箭头.png",
            mode: "widthFix"
          })
        ]),
        vue.createElementVNode(
          "input",
          {
            type: "text",
            class: "search-input",
            placeholder: "搜索商品",
            onConfirm: _cache[0] || (_cache[0] = (...args) => $options.search && $options.search(...args))
          },
          null,
          32
          /* HYDRATE_EVENTS */
        ),
        vue.createElementVNode("view", {
          class: "search-button",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.goToSearch && $options.goToSearch(...args))
        }, [
          vue.createElementVNode("image", {
            src: "/static/箭头.png",
            mode: "widthFix"
          })
        ])
      ]),
      vue.createCommentVNode(" 最近搜索部分 "),
      vue.createElementVNode("view", { class: "recent-search" }, [
        vue.createElementVNode("view", { class: "recent-title" }, "最近搜索"),
        vue.createElementVNode("view", { class: "recent-list" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.recentSearches, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "recent-item",
                key: index,
                onClick: ($event) => $options.goToSearch(item)
              }, vue.toDisplayString(item), 9, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ])
    ]);
  }
  const PagesSearchSearch = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "D:/denchan/denchan2024/goods/goods/pages/search/search.vue"]]);
  const data = {
    "柜台": [
      {
        goodid: 1,
        classify: 0,
        goodname: "smoke1",
        price: 5,
        Specification: "1盒"
      },
      {
        goodid: 2,
        classify: 0,
        goodname: "somke2",
        price: 10,
        Specification: "1盒"
      },
      {
        goodid: 7,
        classify: 0,
        goodname: "矿泉水",
        price: 1,
        Specification: "1盒"
      }
    ],
    "第一排左": [
      {
        goodid: 3,
        classify: 1,
        goodname: "牙膏",
        price: 5,
        Specification: "1盒"
      },
      {
        goodid: 4,
        classify: 1,
        goodname: "牙刷",
        price: 10,
        Specification: "1盒"
      }
    ],
    "第一排右": [
      {
        goodid: 5,
        classify: 2,
        goodname: "红烧牛肉面",
        price: 5,
        Specification: "1盒"
      },
      {
        goodid: 6,
        classify: 2,
        goodname: "火腿肠",
        price: 10,
        Specification: "1盒"
      }
    ]
  };
  const _sfc_main$4 = {
    data() {
      return {
        // 定义一个变量来存储过滤后的历史记录
        filteredHistoryList: [],
        classify: classify$1.classify,
        jsonData: data,
        showData: []
      };
    },
    onShow() {
      this.loadAndFilterHistoryList();
      var data2 = uni.getStorageSync("historyList");
      this.traverseHistoryList(data2);
    },
    methods: {
      loadAndFilterHistoryList() {
        var historyList = uni.getStorageSync("historyList");
        if (!historyList) {
          historyList = [];
          this.filteredHistoryList = historyList;
          uni.setStorageSync("historyList", historyList);
          return;
        }
        var now = /* @__PURE__ */ new Date();
        var thirtySixHoursAgo = new Date(now.getTime() - 36 * 60 * 60 * 1e3);
        this.filteredHistoryList = historyList.filter((item) => {
          var itemDate = new Date(item.joinedTime);
          return itemDate >= thirtySixHoursAgo;
        });
        uni.setStorageSync("historyList", this.filteredHistoryList);
      },
      traverseHistoryList(data2) {
        this.showData = [];
        data2.forEach((item, index) => {
          var goodCla = this.classify[item.classify];
          var goodIdT = item.goodid;
          if (goodCla && this.jsonData[goodCla]) {
            var xinxi = this.jsonData[goodCla];
            xinxi.forEach((good) => {
              if (good.goodid === goodIdT) {
                formatAppLog("log", "at pages/last/last.vue:83", "target");
                formatAppLog("log", "at pages/last/last.vue:84", good);
                var alreadyExists = this.showData.some(
                  (showItem) => showItem.goodid === good.goodid && showItem.classify === good.classify
                );
                if (!alreadyExists) {
                  this.showData.push(good);
                }
              }
            });
          }
        });
        formatAppLog("log", "at pages/last/last.vue:101", "-----------------------------------------------------");
        formatAppLog("log", "at pages/last/last.vue:102", this.showData);
      },
      getCurrentTime() {
        var now = /* @__PURE__ */ new Date();
        return now.toISOString();
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "head" }, [
          vue.createCommentVNode(" 头部信息，居中，大字 "),
          vue.createTextVNode(" 最近查看 ")
        ]),
        vue.createElementVNode("hr"),
        vue.createElementVNode("scroll-view", { "scroll-y": "true" }, [
          vue.createElementVNode("view", null, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.showData, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "content",
                  key: index
                }, [
                  vue.createElementVNode("view", { class: "imagePlace" }, [
                    vue.createElementVNode("image", {
                      src: "/static/show.png",
                      mode: "widthFix"
                    })
                  ]),
                  vue.createElementVNode("view", { class: "textplace" }, [
                    vue.createElementVNode(
                      "text",
                      null,
                      "名称：" + vue.toDisplayString(item.goodname),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("br"),
                    vue.createElementVNode(
                      "text",
                      null,
                      "规格：" + vue.toDisplayString(item.Specification),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("br"),
                    vue.createElementVNode(
                      "text",
                      null,
                      "单价：" + vue.toDisplayString(item.price),
                      1
                      /* TEXT */
                    )
                  ])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesLastLast = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "D:/denchan/denchan2024/goods/goods/pages/last/last.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {
        title: "Hello",
        jsonData: data,
        showData: null,
        currentPressedIndex: null
        // 添加一个属性来记录当前被点击的view的索引
      };
    },
    onLoad() {
      const jsonKeys = Object.keys(this.jsonData);
      formatAppLog("log", "at pages/info/info.vue:37", jsonKeys);
      var a = uni.getStorageSync("clickedItem");
      formatAppLog("log", "at pages/info/info.vue:40", a);
      if (jsonKeys.includes(a)) {
        formatAppLog("log", "at pages/info/info.vue:43", "这个种类存在内容");
        var needs = this.jsonData[a];
        formatAppLog("log", "at pages/info/info.vue:45", "needs");
        formatAppLog("log", "at pages/info/info.vue:46", needs);
        this.showData = needs;
        formatAppLog("log", "at pages/info/info.vue:48", "this");
        formatAppLog("log", "at pages/info/info.vue:49", this.showData);
      } else {
        formatAppLog("log", "at pages/info/info.vue:51", "这个种类不存在内容");
      }
    },
    methods: {
      pressDown(item, index) {
        this.currentPressedIndex = index;
        formatAppLog("log", "at pages/info/info.vue:57", item);
        var good = {
          "classify": item.classify,
          "goodid": item.goodid,
          joinedTime: this.getCurrentTime()
        };
        formatAppLog("log", "at pages/info/info.vue:63", good);
        var historyList = uni.getStorageSync("historyList");
        if (!historyList) {
          historyList = [];
        }
        var exists = historyList.some(
          (existingGood) => existingGood.goodid === good.goodid && existingGood.classify === good.classify
        );
        if (!exists) {
          historyList.push(good);
          uni.setStorageSync("historyList", historyList);
        }
      },
      getCurrentTime() {
        var now = /* @__PURE__ */ new Date();
        return now.toLocaleString();
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "head" }, [
          vue.createCommentVNode(" 头部信息，居中，大字 "),
          vue.createTextVNode(" 分类结果 ")
        ]),
        vue.createElementVNode("hr"),
        vue.createElementVNode("scroll-view", { "scroll-y": "true" }, [
          vue.createCommentVNode(" 使用v-for循环显示showData中的每个商品 "),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.showData, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index,
                class: vue.normalizeClass({ "content": true, "active": $data.currentPressedIndex === index }),
                onClick: ($event) => $options.pressDown(item, index)
              }, [
                vue.createElementVNode("view", { class: "imagePlace" }, [
                  vue.createElementVNode("image", {
                    src: "/static/show.png",
                    mode: "widthFix"
                  })
                ]),
                vue.createElementVNode("view", { class: "textplace" }, [
                  vue.createElementVNode(
                    "text",
                    null,
                    "名称：" + vue.toDisplayString(item.goodname),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("br"),
                  vue.createElementVNode(
                    "text",
                    null,
                    "规格：" + vue.toDisplayString(item.Specification),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("br"),
                  vue.createElementVNode(
                    "text",
                    null,
                    "单价：" + vue.toDisplayString(item.price),
                    1
                    /* TEXT */
                  )
                ])
              ], 10, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesInfoInfo = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "D:/denchan/denchan2024/goods/goods/pages/info/info.vue"]]);
  const _sfc_main$2 = {};
  function _sfc_render$1(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "head" }, [
          vue.createCommentVNode(" 头部信息，居中，大字 "),
          vue.createTextVNode(" 搜索结果 ")
        ]),
        vue.createElementVNode("hr"),
        vue.createElementVNode("scroll-view", { "scroll-y": "true" }, [
          vue.createElementVNode("view", null, [
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("view", { class: "imagePlace" }, [
                vue.createElementVNode("image", {
                  src: "/static/show.png",
                  mode: "widthFix"
                })
              ]),
              vue.createElementVNode("view", { class: "textplace" }, [
                vue.createElementVNode("text", null, "名称：旺仔牛奶"),
                vue.createElementVNode("br"),
                vue.createElementVNode("text", null, "规格：500ml/罐"),
                vue.createElementVNode("br"),
                vue.createElementVNode("text", null, "单价：5元")
              ])
            ])
          ]),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("view", { class: "imagePlace" }, [
                vue.createElementVNode("image", {
                  src: "/static/show.png",
                  mode: "widthFix"
                })
              ]),
              vue.createElementVNode("view", { class: "textplace" }, [
                vue.createElementVNode("text", null, "名称：旺仔牛奶"),
                vue.createElementVNode("br"),
                vue.createElementVNode("text", null, "规格：500ml/罐"),
                vue.createElementVNode("br"),
                vue.createElementVNode("text", null, "单价：5元")
              ])
            ])
          ]),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("view", { class: "imagePlace" }, [
                vue.createElementVNode("image", {
                  src: "/static/show.png",
                  mode: "widthFix"
                })
              ]),
              vue.createElementVNode("view", { class: "textplace" }, [
                vue.createElementVNode("text", null, "名称：旺仔牛奶"),
                vue.createElementVNode("br"),
                vue.createElementVNode("text", null, "规格：500ml/罐"),
                vue.createElementVNode("br"),
                vue.createElementVNode("text", null, "单价：5元")
              ])
            ])
          ]),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("view", { class: "imagePlace" }, [
                vue.createElementVNode("image", {
                  src: "/static/show.png",
                  mode: "widthFix"
                })
              ]),
              vue.createElementVNode("view", { class: "textplace" }, [
                vue.createElementVNode("text", null, "名称：旺仔牛奶"),
                vue.createElementVNode("br"),
                vue.createElementVNode("text", null, "规格：500ml/罐"),
                vue.createElementVNode("br"),
                vue.createElementVNode("text", null, "单价：5元")
              ])
            ])
          ]),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("view", { class: "imagePlace" }, [
                vue.createElementVNode("image", {
                  src: "/static/show.png",
                  mode: "widthFix"
                })
              ]),
              vue.createElementVNode("view", { class: "textplace" }, [
                vue.createElementVNode("text", null, "名称：旺仔牛奶"),
                vue.createElementVNode("br"),
                vue.createElementVNode("text", null, "规格：500ml/罐"),
                vue.createElementVNode("br"),
                vue.createElementVNode("text", null, "单价：5元")
              ])
            ])
          ]),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("view", { class: "imagePlace" }, [
                vue.createElementVNode("image", {
                  src: "/static/show.png",
                  mode: "widthFix"
                })
              ]),
              vue.createElementVNode("view", { class: "textplace" }, [
                vue.createElementVNode("text", null, "名称：旺仔牛奶"),
                vue.createElementVNode("br"),
                vue.createElementVNode("text", null, "规格：500ml/罐"),
                vue.createElementVNode("br"),
                vue.createElementVNode("text", null, "单价：5元")
              ])
            ])
          ]),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("view", { class: "imagePlace" }, [
                vue.createElementVNode("image", {
                  src: "/static/show.png",
                  mode: "widthFix"
                })
              ]),
              vue.createElementVNode("view", { class: "textplace" }, [
                vue.createElementVNode("text", null, "名称：旺仔牛奶"),
                vue.createElementVNode("br"),
                vue.createElementVNode("text", null, "规格：500ml/罐"),
                vue.createElementVNode("br"),
                vue.createElementVNode("text", null, "单价：5元")
              ])
            ])
          ]),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("view", { class: "imagePlace" }, [
                vue.createElementVNode("image", {
                  src: "/static/show.png",
                  mode: "widthFix"
                })
              ]),
              vue.createElementVNode("view", { class: "textplace" }, [
                vue.createElementVNode("text", null, "名称：旺仔牛奶"),
                vue.createElementVNode("br"),
                vue.createElementVNode("text", null, "规格：500ml/罐"),
                vue.createElementVNode("br"),
                vue.createElementVNode("text", null, "单价：5元")
              ])
            ])
          ]),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("view", { class: "imagePlace" }, [
                vue.createElementVNode("image", {
                  src: "/static/show.png",
                  mode: "widthFix"
                })
              ]),
              vue.createElementVNode("view", { class: "textplace" }, [
                vue.createElementVNode("text", null, "名称：旺仔牛奶"),
                vue.createElementVNode("br"),
                vue.createElementVNode("text", null, "规格：500ml/罐"),
                vue.createElementVNode("br"),
                vue.createElementVNode("text", null, "单价：5元")
              ])
            ])
          ]),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("view", { class: "imagePlace" }, [
                vue.createElementVNode("image", {
                  src: "/static/show.png",
                  mode: "widthFix"
                })
              ]),
              vue.createElementVNode("view", { class: "textplace" }, [
                vue.createElementVNode("text", null, "名称：旺仔牛奶"),
                vue.createElementVNode("br"),
                vue.createElementVNode("text", null, "规格：500ml/罐"),
                vue.createElementVNode("br"),
                vue.createElementVNode("text", null, "单价：5元")
              ])
            ])
          ])
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesResultResult = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/denchan/denchan2024/goods/goods/pages/result/result.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        title: "Hello",
        jsonData: data,
        showData: null
      };
    },
    onLoad() {
      const jsonKeys = Object.keys(this.jsonData);
      formatAppLog("log", "at pages/info2/info2.vue:35", jsonKeys);
      var a = uni.getStorageSync("clickedItem");
      formatAppLog("log", "at pages/info2/info2.vue:38", a);
      if (jsonKeys.includes(a)) {
        formatAppLog("log", "at pages/info2/info2.vue:41", "这个种类存在内容");
        formatAppLog("log", "at pages/info2/info2.vue:43", this.jsonData[a]);
        var needs = this.jsonData[a];
        formatAppLog("log", "at pages/info2/info2.vue:45", "needs");
        formatAppLog("log", "at pages/info2/info2.vue:46", needs);
        this.showData = needs;
        formatAppLog("log", "at pages/info2/info2.vue:48", "this");
        formatAppLog("log", "at pages/info2/info2.vue:49", this.showData);
      } else {
        formatAppLog("log", "at pages/info2/info2.vue:51", "这个种类不存在内容");
      }
    },
    methods: {
      pressDown() {
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "head" }, [
          vue.createCommentVNode(" 头部信息，居中，大字 "),
          vue.createTextVNode(" 分类结果 ")
        ]),
        vue.createElementVNode("hr"),
        vue.createElementVNode("scroll-view", { "scroll-y": "true" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.showData, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index,
                onClick: _cache[0] || (_cache[0] = ($event) => $options.pressDown())
              }, [
                vue.createElementVNode("view", { class: "content" }, [
                  vue.createElementVNode("view", { class: "imagePlace" }, [
                    vue.createElementVNode("image", {
                      src: "/static/show.png",
                      mode: "widthFix"
                    })
                  ]),
                  vue.createElementVNode("view", { class: "textplace" }, [
                    vue.createElementVNode(
                      "text",
                      null,
                      "名称：" + vue.toDisplayString(item.goodname),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("br"),
                    vue.createElementVNode(
                      "text",
                      null,
                      "规格：" + vue.toDisplayString(item.Specification),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("br"),
                    vue.createElementVNode(
                      "text",
                      null,
                      "单价：" + vue.toDisplayString(item.price),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesInfo2Info2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/denchan/denchan2024/goods/goods/pages/info2/info2.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/search/search", PagesSearchSearch);
  __definePage("pages/last/last", PagesLastLast);
  __definePage("pages/info/info", PagesInfoInfo);
  __definePage("pages/result/result", PagesResultResult);
  __definePage("pages/info2/info2", PagesInfo2Info2);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/denchan/denchan2024/goods/goods/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
