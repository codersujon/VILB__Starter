<script setup>
    import axios from 'axios'
    import { ref } from 'vue'

    let Data = ref("");
    // API Data Access
    try {
        axios.get('http://127.0.0.1:8000/api/test').then(response =>{
            Data.value = response.data;
        });
    } catch (error) {
        console.log(error);
    }
        
</script>
<template>
    <div>
    <h1 class="display-2 text-center text-primary py-5">{{ Data }}</h1>
    </div>
</template>
