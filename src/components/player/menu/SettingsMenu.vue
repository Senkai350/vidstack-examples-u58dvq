<script setup>

import SpeedMenu from './SpeedMenu.vue'
import CaptionsMenu from './CaptionsMenu.vue'
import VoiceMenu from './VoiceMenu.vue'
import QualityMenu from './QualityMenu.vue'
import SettingsButton from '../buttons/SettingsButton.vue'
</script>

<template>
  <media-menu position="bottom right">
    <SettingsButton />
    <media-menu-items>
      <SpeedMenu />
      <QualityMenu />
      <CaptionsMenu />
      <VoiceMenu />
    </media-menu-items>
  </media-menu>
</template>

<style scoped>

</style>
