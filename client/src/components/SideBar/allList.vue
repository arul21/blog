<template>
    <div class="row mt-4 ml-0">
        <div class="card" style="width: 20rem;">
            <div class="card-header">
                Category
            </div>
            <ul class="list-group list-group-flush" v-for="(category, i) in categories" :key="i">
                <li class="list-group-item"> {{ category.name }}</li>
            </ul>
        </div> 
    </div>


</template>

<script>

export default {
    props: ['categories']   
}
</script>

<style>



</style>
