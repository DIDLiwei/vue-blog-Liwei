<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>第四天学习内容：所有博客</h1>
    <!-- search -->
    <input type="text" v-model="search" placeholder="search something ..." />
    <div v-for="(blog,index) in filterBlogs" :key="index" class="single-blog">
      <router-link :to="'/blog/'+ blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link>
      <article>{{blog.body | snippet}}</article>
    </div>
  </div>
</template>

<script>
import searchMixins from "../mixins/searchMixins";
export default {
  name: "ShowBlogs",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    this.$axios.get("/posts").then(res => {
      console.log(res.data);
      this.blogs = res.data.slice(0, 10);
    });
  },

  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      }
    },
    theme: {
      bind(el, binding, vnode) {
        if (binding.value == "wide") {
          el.style.maxWidth = "1260px";
        } else if (binding.value == "narrow") {
          el.style.maxWidth = "560px";
        }
        if (binding.arg == "column") {
          el.style.background = "lightgreen";
          el.style.padding = "20px";
        }
      }
    }
  },
  filters: {
    // "to-uppercase": function(value) {
    //   return value.toUpperCase();
    // }
    toUppercase(value) {
      return value.toUpperCase();
    },
    snippet(value) {
      return value.slice(0, 100) + "...";
    }
  },
  mixins: [searchMixins]
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}

input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
