<template>
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" id="navId">
        <li class="nav-item">
            <router-link to="/" :class="rt.name=='noteslist' ? 'nav-link active':'nav-link'">notes</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/create" :class="rt.name=='createnote' ? 'nav-link active':'nav-link'">Add note</router-link>
        </li>

    </ul>
</template>

<script setup>
import { useRoute } from 'vue-router';
const rt=useRoute()

</script>