<template>
  <List
    :columns="[
      'id','name', 'description', 'title', 
      'school.id', 'school.name', 'school.district.name'
      ]
    "
    resourceName="users"
    baseUrl="http://localhost:3000"
    cssPath=""
  ></List>
</template>

<script>
import List from "./components/List";

export default {
  components: {
    List
  }
};
</script>

<style>
</style>