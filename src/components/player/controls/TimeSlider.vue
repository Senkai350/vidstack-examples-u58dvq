<template>
  <media-time-slider class="vds-time-slider vds-slider">
    <media-slider-chapters class="vds-slider-chapters">
      <template>
        <div class="vds-slider-chapter">
          <div class="vds-slider-track"></div>
          <div class="vds-slider-track-fill vds-slider-track"></div>
          <div class="vds-slider-progress vds-slider-track"></div>
        </div>
      </template>
    </media-slider-chapters>

    <div class="vds-slider-thumb"></div>

    <!-- Slider Preview -->
    <media-slider-preview class="vds-slider-preview">
      <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
      <media-slider-value
          class="vds-slider-value"
          type="pointer"
          format="time"
      ></media-slider-value>
    </media-slider-preview>
  </media-time-slider>
</template>
<script lang="ts" setup>
</script>

<style scoped>

</style>