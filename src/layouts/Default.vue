<template>
  <div class="layout">
    <BaseHeader />
    <slot />
    <BaseFooter />
  </div>
</template>

<script>
import BaseFooter from "~/components/BaseFooter";
import BaseHeader from "~/components/BaseHeader";

export default {
  components: {
    BaseFooter,
    BaseHeader
  }
};
</script>