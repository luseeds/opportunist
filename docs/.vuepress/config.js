const path = require("path")

module.exports = {
  title: "The Wise Opportunist",
  description: "Learn how to exploit the system for your own interest",
  themeConfig: {
    logo: "/logo.svg",
    searchPlaceholder: "Search...",
    lastUpdated: "Last Updated",
    docsRepo: "luseeds/opportunist",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Edit this page on Github",
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Luseeds", link: "https://luseeds.com" },
    ],
    sidebar: {
      "/": [
        {
          title: "",
          collapsable: false,
          sidebarDepth: 0,
          children: [["/", "Home"]],
        },
        {
          title: "Basic needs",
          collapsable: false,
          children: [
            ["/basics/water", "Water 💧"],
            ["/basics/food", "Food 🍕"],
            ["/basics/clothes", "Clothes 👚"],
            ["/basics/sleep", "Sleep 😴"],
          ],
        },
        {
          title: "Extras",
          collapsable: false,
          children: [
            ["/extras/energy", "Energy ⚡️"],
            ["/extras/goods", "Goods 🔧"],
            ["/extras/books", "Books 📚"],
            ["/extras/hygiene", "Hygiene 🚿"],
            ["/extras/activities", "Activities 🎨"],
            ["/extras/transport", "Transport 🚆"],
            ["/extras/internet", "Internet 📶"],
          ],
        },
      ],
    },
  },
  plugins: ["vuepress-plugin-clean-urls"],
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "../assets"),
      },
    },
  },
}
