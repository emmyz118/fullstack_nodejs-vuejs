import { createRouter, createWebHistory } from "vue-router";
import NotesListComponent from "./components/notesListComponent.vue";
import CreateNoteForm from "./components/createNoteForm.vue";
import UpdateNote from "./components/UpdateNote.vue";
 const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/",
            name:"noteslist",
            component:NotesListComponent
        },
        {
            path:"/create",
            name:"createnote",
            component:CreateNoteForm
        },
        {
            path:"/update/:nid",
            name:"updatenote",
            component:UpdateNote
        }
    ]
})


export default router
