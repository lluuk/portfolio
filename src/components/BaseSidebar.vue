<template>
  <section id="sidebar">
    <div class="inner">
      <nav>
        <ul v-scroll-spy-active v-scroll-spy-link>
          <li v-for="tab in tabs" :key="tab.href">
            <a href="#" v-scroll-to="`#${tab.href}`">{{ tab.content }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: "BaseFooter",

  data() {
    return {
      tabs: [
        { content: "Welcome", href: "intro" },
        { content: "Projects", href: "one" },
        { content: "Skills", href: "two" },
        { content: "Get in touch", href: "three" }
      ]
    };
  }
};
</script>