<template>
    <div class="container p-5">
        <h3>notes list</h3>
        <form action="">
            
            <input type="text" placeholder="search....." class="form-control" v-model="search">
        </form>
        <p v-if="mess" class="text-danger">{{ mess }}</p>
        <div v-if="isLoading" class="align-center mt-5" style="margin: auto;">
            <center>
                <img src="../../public/loading-load.gif" width="70px" height="70px" alt="">
            </center>
        </div>
        
        <div class="row ">
            <div v-if="error">
                    {{ error }}
            </div>
            <div class="col-lg-3 mt-3" v-else v-for="(ls,index) in liste" :key="index">
                <div class="card">
                    <div class="card-header">{{ls.title}}</div>
                    <div class="card-body">{{ls.description}}</div>
                    <div class="card-footer">
                        <button class="btn btn-danger btn-sm" @click="deleteNote(ls.id)">Delete</button>
                        <router-link :to="'/update/'+ls.id" class="btn btn-primary float-end btn-sm">Update</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
const liste=ref()
const error=ref(false)
let isLoading=ref(true)
onMounted(async ()=>{
    isLoading=false;
    const res= await axios.get("https://fullstack-nodejs-vuejs.onrender.com/notes");
    if (res.data.error) {
        error.value=res.data.error
    }
    liste.value=res.data
})
const mess=ref(false)
async function deleteNote(id){
    const res= await axios.delete("https://fullstack-nodejs-vuejs.onrender.com/delete/"+id)
    if (res.data.message) {
        mess.value=res.data.message
    }
}
</script>