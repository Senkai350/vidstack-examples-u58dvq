<template>
  <media-menu class="vds-menu">
    <media-menu-button class="vds-menu-button">
      <media-icon class="vds-menu-button-close-icon" type="chevron-left"></media-icon>
      <media-icon class="vds-menu-button-icon" type="closed-captions"></media-icon>
      <span class="vds-menu-button-label">Subtitles</span>
      <span class="vds-menu-button-hint" data-part="hint"></span>
      <media-icon class="vds-menu-button-open-icon" type="chevron-right"></media-icon>
    </media-menu-button>
    <media-menu-items class="vds-menu-items">
      <media-captions-radio-group class="vds-captions-radio-group vds-radio-group">
        <template>
          <media-radio class="vds-radio">
            <div class="vds-radio-check"></div>
            <span class="vds-radio-label" data-part="label"></span>
          </media-radio>
        </template>
      </media-captions-radio-group>
    </media-menu-items>
  </media-menu>
</template>

<script setup>

</script>

<style scoped>

</style>
