module.exports = {
  title: "文档",
  description: "测试专用",
  base: "/hello-vuepress/",
  themeConfig: {
    // logo: "./headLogo.png",
    nav: [
      {
        text: "问题",
        link: "/bar/one",
      },
      {
        text: "版本",
        ariaLabel: "版本号",
        items: [
          { text: "1.0", link: "/language/chinese/" },
          { text: "1.1", link: "/language/japanese/" },
        ],
      },
    ],
    sidebar: [
      {
        title: "默认配置",
        collapsable: false, //是否需要关闭子级，默认为true
        // sidebarDepth: 1, //展开层级，默认为1
        children: ["/foo/home", "/foo/nav", "/foo/slider"],
      },
      {
        title: "暂未解决",
        collapsable: false,
        // sidebarDepth: 1,
        // path: "/bar/",
        children: ["/bar/two", "/bar/one"],
      },
    ],
    displayAllHeaders: true, // 显示所有页面的标题链接
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       "@alias": "path/to/some/dir",
  //     },
  //   },
  // },
};

// [
//   {
//     title: "介绍", // 必要的
//     path: "/guide/test1/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
//     collapsable: false, // 可选的, 默认值是 true,
//     children: [],
//   },
//   {
//     title: "开发文档",
//     path: "/guide/test2/",
//   },
// ]
