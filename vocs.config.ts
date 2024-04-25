import { defineConfig } from "vocs";

export default defineConfig({
  title: "nodyn",
  sidebar: [
    {
      text: "Foundry",
      items: [
        {
          text: "forge",
          link: "/foundry/forge",
        },
        {
          text: "cast",
          link: "/foundry/cast",
        },
        {
          text: "anvil",
          link: "/foundry/anvil",
        },
      ],
    },
  ],
});
