<template>
    <div class="flex space-x-2 items-center">
    <div class="text-gray-500 text-xs" v-if="showNextModelLabel">Change to {{ nextMode }}</div>
    <button @click="toggleMode" @mouseenter="showNextModelLabel = true" @mouseleave="showNextModelLabel = false"
      class="hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 text-gray-500">{{ nextModeIcon
      }}</button>
  </div>
</template>

<script setup>

const colorMode = useColorMode();
const showNextModelLabel = ref(false)
const modes = [ 'system', 'light', 'dark' ];

const nextModeIcons = {
  system: '🌓',
  light: '🌕',
  dark: '🌑'
}

const nextMode = computed(() => {
    const currentModeIndex = modes.indexOf(colorMode.preference);
    let nextColorIndex = null;


    if(currentModeIndex + 1 === modes.length){
        nextColorIndex = 0;
    }else{
        nextColorIndex = currentModeIndex + 1;  
    }

    return modes[nextColorIndex]
})

const nextModeIcon = computed(() => nextModeIcons[nextMode.value])

const toggleMode = () => colorMode.preference = nextMode.value;
</script>

