import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
    scrollBehavior(to: {hash: any}, from: any, savedPosition: any) {
        if(savedPosition) {
            return savedPosition;
        }

        if(to.hash){
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 30
            };
        }

        return { 
            top: 0, 
            left: 0, 
            behavior: 'smooth'
        };
    }
}
