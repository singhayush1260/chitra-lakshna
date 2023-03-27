import {createClient} from '@sanity/client';

const client=createClient({
    projectId: '1xkfdsru',
    dataset: 'production'
})
export default client;