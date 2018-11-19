<template>
    <div class="mb-4 ">
        <div class="card mt-3" v-for="(article, i) in allArticle" :key="i">
            <div class="card-header">
                <strong> {{ article.title}} </strong>
                </div>
                <div class="card-body">
                    <!-- <h5 class="card-title"> {{ article.title}} </h5> -->
                    <p class="card-text">{{ article.description}} </p>
                    <!-- <a href="#" class="btn btn-dark">Read More</a> -->
                    <router-link :to="`/${ article._id }`">Read more</router-link>
                </div>
                <div class="card-footer text-muted">
                    2 days ago
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'listarticles',
    props: ['allArticle']
}
</script>

<style>

</style>
