<template>
  <media-menu class="vds-menu">
    <media-menu-button class="vds-menu-button">
      <media-icon class="vds-menu-button-close-icon" type="chevron-left"></media-icon>
      <media-icon class="vds-menu-button-icon" type="settings-menu"></media-icon>
      <span class="vds-menu-button-label">Quality</span>
      <span class="vds-menu-button-hint" data-part="hint"></span>
      <media-icon class="vds-menu-button-open-icon" type="chevron-right"></media-icon>
    </media-menu-button>
    <media-menu-items class="vds-menu-items">
      <media-quality-radio-group class="vds-radio-group" hideBitrate="true" autoLabel="Авто">
        <template>
          <media-radio class="vds-radio">
            <div class="vds-radio-check"></div>
            <span class="vds-radio-label" data-part="label"></span>
            <span data-part="bitrate"></span>
          </media-radio>
        </template>
      </media-quality-radio-group>
    </media-menu-items>
  </media-menu>
</template>

<script setup>

</script>

<style scoped>

</style>
