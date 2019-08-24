<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <!-- <AddBlog /> -->
    <!-- <ShowBlogs /> -->
    <!-- <ListBlogs /> -->
  </div>
</template>

<script>
// import AddBlog from "./components/AddBlog";
// import ShowBlogs from "./components/ShowBlogs";
// import ListBlogs from "./components/ListBlogs";
import Header from "./components/Header";
export default {
  name: "APP",
  components: {
    // AddBlog,
    // ShowBlogs,
    // ListBlogs
    Header
  }
};
</script>

<style>
</style>
