<script  setup>

</script>

<template>
  <media-tooltip>
    <media-tooltip-trigger>
      <media-caption-button class="vds-button">
        <media-icon class="vds-cc-on-icon" type="closed-captions-on"></media-icon>
        <media-icon class="vds-cc-off-icon" type="closed-captions"></media-icon>
      </media-caption-button>
    </media-tooltip-trigger>
    <media-tooltip-content class="vds-tooltip-content" placement="top">
      <span class="vds-cc-on-tooltip-text">Captions on</span>
      <span class="vds-cc-off-tooltip-text">Captions off</span>
    </media-tooltip-content>
  </media-tooltip>
</template>

<style scoped>

</style>