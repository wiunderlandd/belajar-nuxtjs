// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt"],

  tailwindcss:{
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwind.config.ts",
  },

  pwa: {
    manifest:{
      name: "smkcoding",
      short_name: "smkcoding",
      theme_color: "#fff",
      background_color: "#fff",
      display: "standalone",
      orientation: "portrait",
      scope: "/",
      start_url: "/",
      icons: [
        {
          src: "images/icons/icon-96x96.jpg",
          sizes: "96x96",
          type: "image/jpg"
        },
        {
          src: "images/icons/icon-128x128.jpg",
          sizes: "128x128",
          type: "image/jpg"
        },
        {
          src: "images/icons/icon-144x144.jpg",
          sizes: "144x144",
          type: "image/jpg"
        },
      ]
    },
    devOptions:{
      enabled: true,
    }
  }
})

