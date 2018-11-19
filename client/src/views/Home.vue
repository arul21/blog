<template>
	<div class="home">
		<div class="container"> 
			<div class="row">
			<div class="col-md-4">
				<sortcard/>
				<all-list :categories="categories"/>
				<form-category v-on:addThis='addCategory($event)'/>
			</div>
			<div class="col-md-8">
				<router-view :allComments='allComments' :details='allArticle' v-on:addComment='addComment({comments:$event,id:$route.params.id})'></router-view>
				<form-article v-if="!$route.params.id"  :category='categories'  v-on:addArticle='saveArticle($event)'/>
				<articles v-if="!$route.params.id" :allArticle='allArticle' />
			</div>
			</div>
		</div>
		
	</div>
</template>

<script>
import allList from '@/components/SideBar/allList.vue'
import formCategory from '@/components/SideBar/category.vue'
// import footerpage from '@/components/Footer/footer.vue'
import articles from '@/components/Articles/article.vue'
import formArticle from '@/components/Articles/formarticle.vue'
import sortcard from '@/components/SideBar/sortCard.vue'

import axios from 'axios'

export default {
name: 'home',
components: {
	allList,
	formCategory,
	articles,
	formArticle,
	sortcard
},
data(){
	return{
		categories: [],
		allArticle: [],
		cutAll:[],
		comments: [],
		allComments: []
	}
},
mounted(){
	this.allCategory()
	this.getArticle()
	this.allComment()
	// this.cutCaracter()
},
methods: {
	allCategory(){
		axios({
			url: `${this.$baseUrl}/category`,
			method: 'GET',
		})
		.then(response =>{
			console.log(response)
			this.categories = response.data 
		})
		.catch(err =>{
			console.log(`iiiiii`,err);
		})
	},

	addCategory(add){
		axios({
			url: `${this.$baseUrl}/category`,
			method: 'POST',
			data: {
				name: add
			},
			headers: {
				token: localStorage.getItem('token')
			}
		})
		.then(response =>{
			this.categories = ''
			this.allCategory()
		})
		.catch(err =>{
			console.log(`iniii`, err);
			
		})
	},

	getArticle(){
		axios({
			url: `${this.$baseUrl}/articles`,
			method: 'GET'
		})
		.then(response =>{
			this.allArticle = response.data
			// this.cutCaracter(response.data)
			// console.log(response.data);
		})
	},
	saveArticle(add){
		console.log('======>',add)
		axios({
			url: `${this.$baseUrl}/articles`,
			method: 'POST',
			data: {
				title: add.title,
				category: add.id,
				description: add.description
			},
			headers: {
				token: localStorage.getItem('token')
			}
		})
		.then(response =>{
			console.log(response.data);
			this.title = ''
			this.category = ''
			this.description = ''
			this.getArticle()
		})
	},

	addComment(com){
		axios({
			url: `${this.$baseUrl}/comments/${com.id}`,
			method: 'POST',
			data: {
				comment: com.comments
			},
			headers:{
				token: localStorage.getItem('token')
			}
		})
		.then(response =>{
			console.log(response.data.data);
			console.log(response.data.owner);
			this.allComment()
		})
		.catch(err =>{
			console.log(`error comment`, err);
		})
	},

	allComment(){
		axios({
			url:`${this.$baseUrl}/comments`,
			method: 'GET'
		})
		.then(response =>{
			console.log(`ini Koment`,response.data[0]);
			this.allComments = response.data
		})
		.catch(err =>{
			console.log(`error comment`, err);
		})
	},

	deleteArticle(){
		axios({
			url: `${this.$baseUrl}/articles/${id}`,
			method: 'DELETE',
			headers:{
				token: localStorage.getItem('token')
			}
		})
		.then(response =>{
			console.log(`deletee`, response);
		})
		.catch(err =>{
			console.log(`error delete`, err);
		})
	}





	// cutCaracter(val){
	//   console.log('article ini',val)
	//   let results = []
	//   for(let i = 0;i < val.length;i++){
	//     console.log('===length==',val[i].description.length);
	//     let isi = val[i].description.substring(0,20)
	//     console.log('==!!!==',isi);
			
	//       results.push({
	//         title:val[i].title,
	//         description:isi
	//       })
	//   }
	//   // this.cutAll = result
	//   console.log('====result======',result)
	//   // console.log('====cut======',this.cutAll)
	// }
},
  
  
}
</script>