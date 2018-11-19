<template>
<div>

    <div class="mb-4 " v-for="(article, i) in details" :key="i">
        <div class="card mt-3" v-if="article._id == $route.params.id">
                <div class="card-header">
                    <strong> {{ article.title}} </strong>
                    </div>
                    <div class="card-body">
                        <!-- <h5 class="card-title"> {{ article.title}} </h5> -->
                        <p class="card-text">{{ article.description}} </p>
                    </div>
                    <div class="card-footer text-muted">
                        2 days ago | Comment  <Button button="edit"/> <Button button="delete"/>
                        <!-- <button @click="$emit('deleteArt', article._id)">delete</button> -->
                </div>
                <div class="comment">
                    Comments
                </div>
                 <div v-for=" (list , index ) in allComments " :key='index'>
                    <div v-if="list.article._id === $route.params.id">
                        <div class="card-header">
                            <strong>{{ list.owner.name }}</strong> &nbsp; <span class="text-muted"> commented 5 days ago</span>
                        </div>
                        <div class="card-body" >
                            <p class="card-text"> {{ list.comment }} </p>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="card-body">
                   <div class="row">
                        <div class="col-sm">
                            <textarea class="form-control" id="exampleFormControlTextarea1" v-model="comment" placeholder="description" rows="3"></textarea>
                        </div>
                    </div>
                </div>
                    <button @click="$emit('addComment', comment)">submit</button>
                    <!-- <Button button="comment"/>     -->
        </div>
    </div>
</div>
</template>

<script>
import Button from '@/components/button.vue'

export default {
    name: 'detailsArticle',
    props: ['details','allComments'],
    data(){
        return{
            comment: ''
        }
    },
    components: {
        Button
    }
}
</script>