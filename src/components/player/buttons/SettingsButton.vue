<script setup>

import CaptionsMenu from '../menu/CaptionsMenu.vue'
import QualityMenu from '../menu/QualityMenu.vue'
import SpeedMenu from '../menu/SpeedMenu.vue'
</script>

<template>
  <media-tooltip>
    <media-tooltip-trigger>
      <media-menu-button class="vds-menu-button vds-button">
        <media-icon class="vds-rotate-icon" type="settings"></media-icon>
      </media-menu-button>
    </media-tooltip-trigger>
    <media-tooltip-content class="vds-tooltip-content" placement="top">
      Settings
    </media-tooltip-content>
  </media-tooltip>
  <media-menu-items class="vds-menu-items" placement="top end">
    <CaptionsMenu />
    <QualityMenu />
    <SpeedMenu />
  </media-menu-items>
</template>

<style scoped>

</style>
