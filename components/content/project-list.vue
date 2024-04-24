<template>
    <div  class="not-prose">
        <p class="mb-10">Project listed here!</p>
        <section v-if="pending">loading data...</section>
        <section v-else-if="error">Something went wrong, pls try again..</section>
        <section v-else="pending">
            <ul class="grid grid-cols-1 gap-4">
                <li v-for="repo in repos" :key="repo.id" class="border border-grey-200 rounded-sm p-4 hover:bg-gray-200 dark:hover:bg-gray-700 font-mono">                   
                        <a :href="repo.html_url" target="_blank" class="flex justify-between items-center">                           
                            <div class="font-semibold">{{ repo.name }}</div>
                            <div>{{ repo.stargazers_count }} *</div>
                        </a>
                        <p class="text-sm">
                            {{ repo.description }}
                        </p>
                </li>
            </ul>
        </section>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const {data, pending, error} = await useFetch('https://api.github.com/users/piotr-jura-udemy/repos');

const repos = computed(() => data.value.filter(repo => repo.description).sort((a,b) => b.stargazers_count - a.stargazers_count))
</script>