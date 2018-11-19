<template>
    <form style="width: 20rem;">
        <div class="form-group mt-4">
            <label>New Category</label>
            <input type="text" class="form-control" placeholder="New Category" v-model="categories">
        </div>
        <button type="submit" @click.prevent="$emit('addThis', categories)" class="btn btn-dark">New Category</button>
    </form>  
</template>

<script>
export default {
    name: 'categories',
    data(){
        return{
            categories: ''
        }
    }
}
</script>

<style>

</style>
