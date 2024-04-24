<template>
    <section class="not-prose font-mono">
        <div class="column text-gray-400 text-sm">
            <div>Date</div>
            <div>Title</div>
        </div>
        <ul>
            <li v-for="post in posts" :key="post._path">
                <NuxtLink :to="post._path" class="column hover:bg-gray-200 dark:hover:bg-gray-800">
                    <div :class="{'text-white dark:text-gray-900': !post.displayYear, 'text-gary-400 dark:text-gray-500': post.displayYear}">{{ post.year }}</div>
                    <div>{{ post.title }}</div> 
                </NuxtLink>
            </li>
        </ul>
    </section>
</template>

<script setup>
import { computed } from 'vue'
const {data} = await useAsyncData(
    'bloglist', 
    () => queryContent("/blogs")
            .where({_path: {$ne: '/blogs'}})
            .only(['_path', 'title', 'publishedAt'])
            .sort({ publishedAt: -1 })
            .find()
);

const posts = computed(()=>{
    const results = [];
    let lastYear = null;

    if(!data.value){
        return [];
    }

    for (const post of data.value) {
        const year = new Date(post.publishedAt).getFullYear();

        const displayYear = year !== lastYear;       
        post.displayYear = displayYear;
        post.year = year;
        results.push(post);
        lastYear = year;
    }
    return results;
})
</script>

<style scoped>
.column {
    @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700
}
</style>