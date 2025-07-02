<template>
    <div class="container p-5">
        <h3>Create new note</h3>
        <div class="row mt-3">
                <form class="col-lg-4" @submit.prevent="createNote">
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
                        <div class="offset-sm-2 col-sm-10">
                            <button type="submit" class="btn btn-primary">Add</button>
                        </div>
                        <p v-if="res" class="text-danger">{{ res }}</p>
                    </div>
                </form>
        </div>

    </div> 
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
const title=ref("")
const descr=ref("")
    const res=ref(false)
    async function createNote(){
        const send= await axios.post("https://fullstack-nodejs-vuejs.onrender.com/create",{title:title.value,description:descr.value});
        if (send.data.resp) {
            res.value=send.data.resp;
        }
    }
</script>