<template>
    <div class="container p-5">
        <h3>Update note</h3>
        <div class="row mt-3">
                <form class="col-lg-4" @submit.prevent="updateNote">
                    <div class="form-group row">
                        <div class="col-sm-1-12">
                            <input type="text" class="form-control" v-model="title" id="inputName" placeholder="Enter title">
                        </div>
                    </div>
                    <div class="form-group row mt-3">
                        <div class="col-sm-1-12">
                            <textarea v-model="descr" id="" placeholder="Description" class="form-control"></textarea>
                        </div>
                    </div>
                    <div class="form-group row mt-3">
                        <p v-if="isLoading"><center>Wait..</center></p>
                        <div class="offset-sm-2 col-sm-10" v-if="!isLoading">
                            <button type="submit" class="btn btn-primary">update</button>
                        </div>

                        <p class="text-danger" v-if="result">{{ result }}</p>
                    </div>
                </form>
        </div>
    </div> 
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const title=ref();
const descr=ref();
const rt=useRoute();
const id=rt.params.nid;
const result=ref(false)
let isLoading=true
onMounted(async ()=>{
    isLoading=false
    const res= await axios.get("https://fullstack-nodejs-vuejs.onrender.com/notes/id/"+id);
    title.value=res.data[0].title;
    descr.value=res.data[0].description
})
async function updateNote(){
        const send= await axios.put("https://fullstack-nodejs-vuejs.onrender.com/update/",{id:id,title:title.value,description:descr.value});
        if (send.data.resp) {
            result.value=send.data.resp;
        }
    }
</script>