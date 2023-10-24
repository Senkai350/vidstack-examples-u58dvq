<script setup>

</script>

<template>
  <media-tooltip>
    <media-tooltip-trigger>
      <media-pip-button class="vds-button">
        <media-icon class="vds-pip-enter-icon" type="picture-in-picture"></media-icon>
        <media-icon class="vds-pip-exit-icon" type="picture-in-picture-exit"></media-icon>
      </media-pip-button>
    </media-tooltip-trigger>
    <media-tooltip-content class="vds-tooltip-content" placement="top">
      <span class="vds-pip-enter-tooltip-text">PIP in</span>
      <span class="vds-pip-exit-tooltip-text">PIP out</span>
    </media-tooltip-content>
  </media-tooltip>
</template>

<style scoped>

</style>