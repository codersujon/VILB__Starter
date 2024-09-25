import './bootstrap';
import { createApp } from 'vue';

const app = createApp({});

import TestComponent from './components/Test.vue';
app.component(
    'test-component', TestComponent
);

app.mount('#app')
