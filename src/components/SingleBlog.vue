<template>
  <div id="single-blog">
    <button @click="$router.go(-1)">返回</button>
    <h1>{{blog.title}}</h1>
    <article>{{blog.body}}</article>
    <p>{{blog.id}}</p>
    <p>{{blog.userId}}</p>
  </div>
</template>

<script>
export default {
  name: "SingleBlog",
  data() {
    return {
      id: this.$route.params.id,
      blog: []
    };
  },
  created() {
    // console.log(this.$route.params.id);
    // this.$axios.get(`/posts/${this.id}`).then(res => {
    this.$axios.get("/posts/" + this.id).then(res => {
      //   console.log(res.data);
      this.blog = res.data;
    });
  }
};
</script>

<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
</style>