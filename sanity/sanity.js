import {createClient} from '@sanity/client';

const client=createClient({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    dataset: 'production'
})
export default client;