<template>
    <form>
        <div class="form-group row mt-4">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Title</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" placeholder="Title" v-model="titles">
            </div>
        </div>
        <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Category</label>
                <div class="col-sm-10">
                    <select  class="custom-select" v-model="_id" >
                        <option v-for="(data,i) in category" :key="i" v-bind:value="data._id">{{ data.name }}</option>

                    </select>
                </div>
        </div>
        <fieldset class="form-group">
            <div class="row">
                <legend class="col-form-label col-sm-2 pt-0">Description</legend>
                <div class="col-sm-10">
                    <textarea class="form-control" id="exampleFormControlTextarea1" v-model="descriptions" placeholder="description" rows="3"></textarea>
                </div>
            </div>
        </fieldset>
        
        <div class="form-group row">
            <div class="col-sm-10">
            <button type="submit" @click.prevent="$emit('addArticle',{title:titles,id:_id,description:descriptions})" class="btn btn-dark">Publish Article</button>
            </div>
        </div>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    name: 'formarticle',
    data(){
        return {
            titles: '',
            _id: '',
            descriptions: '',
        }
    },
    props:['category']

}
</script>

<style>

</style>
