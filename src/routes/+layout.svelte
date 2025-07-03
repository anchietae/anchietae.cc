<script lang="ts">
  import iconHome from "@ktibow/iconset-material-symbols/home-outline";
  import iconHomeS from "@ktibow/iconset-material-symbols/home";

  import iconDocs from "@ktibow/iconset-material-symbols/developer-guide-outline";
  import iconDocsS from "@ktibow/iconset-material-symbols/developer-guide";

  import chat from "@ktibow/iconset-material-symbols/chat-outline";
  import chatS from "@ktibow/iconset-material-symbols/chat";

  import articlePerson from "@ktibow/iconset-material-symbols/article-person-outline";
  import articlePersonS from "@ktibow/iconset-material-symbols/article-person";

  import { base } from "$app/paths";
  import { page } from "$app/state";
  import { NavCMLX, NavCMLXItem } from "m3-svelte";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "../app.css";

  const paths = [
    {
      path: base || "/",
      icon: iconHome,
      iconS: iconHomeS,
      label: "Home",
    },
    {
      path: "/docs",
      icon: iconDocs,
      iconS: iconDocsS,
      label: "Docs",
    },
    {
      path: "/blog",
      icon: articlePerson,
      iconS: articlePersonS,
      label: "Blog",
    },
    {
      path: "https://matrix.to/#/#general:anchietae.cc",
      icon: chat,
      iconS: chatS,
      label: "Matrix",
    },
  ];
  const isExternal = (path: string) => /^(https?:\/\/)/.test(path);
  const normalizePath = (path: string) => {
    const u = new URL(path, page.url.href);
    path = u.pathname;
    if (path.endsWith("/")) path = path.slice(0, -1);
    return path || "/";
  };
</script>

<div class="container">
  <div class="sidebar">
    <NavCMLX variant="auto">
      {#each paths as { path, icon, iconS, label }}
        {@const selected =
          !isExternal(path) &&
          normalizePath(path) === normalizePath(page.url.pathname)}
        <NavCMLXItem
          variant="auto"
          href={path}
          {selected}
          icon={selected ? iconS : icon}
          text={label}
        />
      {/each}
    </NavCMLX>
  </div>
  <div class="content">
    <Header />
    <slot />
    <Footer />
  </div>
</div>

<style>
  .container {
    display: grid;
    min-height: 100dvh;
  }
  .sidebar {
    display: flex;
    position: sticky;
  }
  .content {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    position: relative;
  }
  @media (width < 52.5rem) {
    .container {
      grid-template-rows: 1fr auto;
      --m3-util-bottom-offset: 5rem;
    }
    .sidebar {
      flex-direction: column;
      bottom: 0;
      width: 100%;
      z-index: 3;
      grid-row: 2;
    }
  }
  @media (width >= 52.5rem) {
    .container {
      grid-template-columns: auto 1fr;
    }
    .sidebar {
      grid-column: 1;
      top: 0;
      left: 0;
      flex-direction: column;
      height: 100dvh;
      @media (width < 100rem) {
        width: 6rem;
        > :global(nav) {
          position: absolute;
          top: 50%;
          translate: 0 -50%;
        }
      }
    }
    .content {
      padding: 1.5rem;
      grid-column: 2;
    }
  }
</style>
