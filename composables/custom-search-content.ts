export default async function customSearchContent(search: Ref<string>) {
    const runtimeConfig = useRuntimeConfig()
    const { integrity, api } = runtimeConfig.public.content
  
    const { data } = await useFetch(`${api.baseURL}/search${integrity ? '.' + integrity : ''}.json`)
  
    const { results } = useFuse(search, data)
  
    return results
  }
  