<script lang="ts" setup>
// Import styles.
import 'vidstack/player/styles/default/theme.css';
// Register elements.
import 'vidstack/player';
import 'vidstack/player/ui';
import 'vidstack/icons';

import {
  isHLSProvider,
  type MediaCanPlayEvent,
  type MediaProviderChangeEvent,
  type MediaViewType,
} from 'vidstack';
import type { MediaPlayerElement } from 'vidstack/elements';
import { onMounted, ref } from 'vue';
const router = useRouter()
import { textTracks } from './tracks';
import TimeSlider from "./components/player/controls/TimeSlider.vue";
import PlayButton from "./components/player/buttons/PlayButton.vue";
import NextButton from "./components/player/buttons/NextButton.vue";
import VolumeButton from "./components/player/buttons/VolumeButton.vue";
import VolumeSlider from "./components/player/controls/VolumeSlider.vue";
import TimeGroup from "./components/player/elements/TimeGroup.vue";
import CaptionsButton from "./components/player/buttons/CaptionsButton.vue";
import SettingsButton from "./components/player/buttons/SettingsButton.vue";
import PipButton from "./components/player/buttons/PipButton.vue";
import FullscreenButton from "./components/player/buttons/FullscreenButton.vue";
import {useRouter} from "vue-router";

const $player = ref<MediaPlayerElement>(),
  $src = ref(''),
  $viewType = ref<MediaViewType>('unknown');

// Initialize src.
changeSource('video');

onMounted(() => {
  /**
   * You can add these tracks using HTML as well.
   *
   * @example
   * ```html
   * <media-provider>
   *   <track label="..." src="..." kind="..." srclang="..." default />
   *   <track label="..." src="..." kind="..." srclang="..." />
   * </media-provider>
   * ```
   */
  for (const track of textTracks) $player.value!.textTracks.add(track);

  // Subscribe to state updates - you can connect them to Vue refs if needed.
  return $player.value!.subscribe(({ paused, viewType }) => {
    $viewType.value = viewType;
    // console.log('is paused?', '->', paused);
    // console.log('is audio view?', '->', viewType === 'audio');
  });
});

function onProviderChange(event: MediaProviderChangeEvent) {
  const provider = event.detail;
  // We can configure provider's here.
  if (isHLSProvider(provider)) {
    provider.config = {};
  }
}

// We can listen for the `can-play` event to be notified when the player is ready.
function onCanPlay(event: MediaCanPlayEvent) {
  // ...
}

function changeSource(type: string) {
  const muxPlaybackId = 'VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU';
  switch (type) {
    case 'audio':
      $src.value = 'https://media-files.vidstack.io/sprite-fight/audio.mp3';
      break;
    case 'video':
      $src.value = `https://stream.mux.com/${muxPlaybackId}/low.mp4`;
      break;
    case 'hls':
      $src.value = `https://stream.mux.com/${muxPlaybackId}.m3u8`;
      break;
  }
}
</script>

<template>
  <media-player
    class="player"
    title="Sprite Fight"
    :src="$src"
    crossorigin
    @provider-change="onProviderChange"
    @can-play="onCanPlay"
    ref="$player"
  >
    <media-provider>
      <media-poster
        v-if="$viewType === 'video'"
        class="vds-poster"
        src="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp?time=268&width=1200"
        alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
      />
    </media-provider>

    <media-controls  class="vds-controls" style="position: absolute; z-index: 99; bottom: 0;">
      <div class="vds-controls-spacer"></div>
      <!-- Time Slider Controls Group -->
      <div style="background: linear-gradient(180deg, #0c101b00 0%, rgba(16,16,20,255) 100%); width: 100%; display: inline-block">
        <media-controls-group class="vds-controls-group">
          <!-- Time Slider -->
          <TimeSlider />
        </media-controls-group>

        <!-- Lower Controls Group -->
        <media-controls-group  class="vds-controls-group">
          <!-- Play Button -->
          <PlayButton />
          <!-- Next Button -->
          <NextButton  />
          <!-- Mute Button -->
          <VolumeButton />
          <!-- Volume Slider -->
          <VolumeSlider />
          <!-- Time Group -->
          <TimeGroup />

          <media-chapter-title class="vds-chapter-title"></media-chapter-title>
          <div class="vds-controls-spacer"></div>

          <!-- Caption Button -->
          <CaptionsButton />

          <!-- Settings Menu -->
          <media-menu class="vds-menu">
            <!-- Settings Menu Button -->
            <SettingsButton />
          </media-menu>

          <!-- PIP Button -->
          <PipButton />

          <!-- Fullscreen Button -->
          <FullscreenButton />
        </media-controls-group>
      </div>
    </media-controls>
  </media-player>

  <div class="src-buttons">
    <button @click="router.push({name: 'Page'})">Go to page 2</button>
    <button @click="changeSource('video')">Video</button>
    <button @click="changeSource('hls')">HLS</button>
  </div>
</template>

<style scoped>
@import 'vidstack/player/styles/default/theme.css';

.loading-spin {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}


media-player[data-view-type='video'] {
  --media-brand: #f5f5f5;
  --media-focus-ring-color: #4e9cf6;
  --media-focus-ring: 0 0 0 3px var(--media-focus-ring-color);
  --media-border-radius: 6px;

  --media-tooltip-y-offset: 30px;
  --media-menu-y-offset: 30px;

  contain: layout;
  aspect-ratio: 16 / 9;
  background-color: #212121;
  border-radius: var(--media-border-radius);
  height: 100% !important;
}

media-player video,
media-poster {
  border-radius: var(--media-border-radius);
}



/*************************************************************************************************
 * Gestures
 *************************************************************************************************/

media-gesture {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

media-gesture[action='seek:-10'],
media-gesture[action='seek:10'] {
  width: 20%;
  z-index: 1;
}

media-gesture[action='seek:10'] {
  left: unset;
  right: 0;
}

/* Remove toggle to pause on touch. */
@media (pointer: coarse) {
  media-gesture[action='toggle:paused'] {
    display: none;
  }
}

/* Remove toggle controls on mouse. */
@media not (pointer: coarse) {
  media-gesture[action='toggle:controls'] {
    display: none;
  }
}

/*************************************************************************************************
 * Controls
 *************************************************************************************************/

media-controls-group {
  display: flex;
  align-items: center;
  width: 100%;
}

media-controls-group {
  padding-inline: 8px;
}

media-controls-group:last-child {
  margin-top: -4px;
  padding-bottom: 8px;
}

/*************************************************************************************************
 * Time Slider
 *************************************************************************************************/

media-time-slider {
  --media-slider-height: 40px;
}

media-time-slider media-slider-value {
  background-color: unset;
}

/*************************************************************************************************
 * Volume
 *************************************************************************************************/

media-volume-slider {
  --media-slider-height: 40px;
  --media-slider-preview-offset: 32px;
  margin: 0;
  max-width: 0;
  transition: all 0.15s ease;
  transform: translateX(-2px);
}

:where(*[data-hocus], *:focus-within) + media-volume-slider,
media-volume-slider[data-active] {
  margin-left: 4px;
  max-width: 80px;
}

/*************************************************************************************************
 * Time
 *************************************************************************************************/

.vds-time-group {
  margin-left: 8px;
}

/*************************************************************************************************
 * Captions
 *************************************************************************************************/

media-captions {
  z-index: 10;
  bottom: 0;
  transition: bottom 0.15s linear;
}

/* Pull captions up when controls are visible. */
media-player[data-controls] media-captions {
  bottom: 80px;
}

/* Hide captions when interacting with time slider. */
media-player[data-preview] media-captions {
  opacity: 0;
}
</style>