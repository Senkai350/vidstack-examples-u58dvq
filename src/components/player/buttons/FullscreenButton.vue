<script setup>

</script>

<template>
  <media-tooltip>
    <media-tooltip-trigger>
      <media-fullscreen-button class="vds-button">
        <media-icon class="vds-fs-enter-icon" type="fullscreen"></media-icon>
        <media-icon class="vds-fs-exit-icon" type="fullscreen-exit"></media-icon>
      </media-fullscreen-button>
    </media-tooltip-trigger>
    <media-tooltip-content class="vds-tooltip-content" placement="top end">
      <span class="vds-fs-enter-tooltip-text">Full screen</span>
      <span class="vds-fs-exit-tooltip-text">Window</span>
    </media-tooltip-content>
  </media-tooltip>

</template>

<style scoped>

</style>