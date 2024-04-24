<template>
    <div  class="container mx-auto mx-w-2xl p-5">
        <header class="flex justify-between items-center mb-5">
            <div class="flex items-center space-x-12">
                <div class="text-xl font-semibold">
                    <h2>Logos</h2>
                </div>
                <TheHeader />
            </div>
            <ClientOnly>
                <ColorModeSelect />
            </ClientOnly>
        </header>
        <main>
            <slot />
        </main>
        <!-- <footer>
            <TheFooter />
        </footer> -->
    </div>
</template>

<script setup lang="ts">
useHead({
  // as a string,
  // where `%s` is replaced with the title
  titleTemplate: '%s - Udemy',
})

useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>

<style>
    body { 
        @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200
    }
</style>
