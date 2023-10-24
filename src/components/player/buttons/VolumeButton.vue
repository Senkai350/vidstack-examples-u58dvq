<script setup>

</script>

<template>
  <media-tooltip>
    <media-tooltip-trigger>
      <media-mute-button class="vds-button">
        <media-icon class="vds-mute-icon" type="mute"></media-icon>
        <media-icon class="vds-volume-low-icon" type="volume-low"></media-icon>
        <media-icon class="vds-volume-high-icon" type="volume-high"></media-icon>
      </media-mute-button>
    </media-tooltip-trigger>
    <media-tooltip-content class="vds-tooltip-content" placement="top">
      <span class="vds-mute-tooltip-text">Unmute</span>
      <span class="vds-unmute-tooltip-text">Mute</span>
    </media-tooltip-content>
  </media-tooltip>
</template>

<style scoped>
.volume-slider {
  max-width: 7rem;
}
</style>
