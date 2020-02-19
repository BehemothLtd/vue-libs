<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="column in columns" :key="column">{{ column }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in listItems" :key="item[columns[0]]">
          <td v-for="column in columns" :key="column">
            {{ dataExtractor(item, column) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      required: true
    },
    resourceName: {
      type: String,
      required: true
    },
    baseUrl: {
      type: String,
      required: true
    },
    endpoints: {
      type: Object,
      required: false
    }
  },
  data: function() {
    return {
      indexEndPoint: "",
      createEndPoint: "",
      updateEndPoint: "",
      destroyEndPoint: "",
      listItems: []
    };
  },
  created: function() {
    this.constructApiEndpoint();

    this.fetchList();
  },
  methods: {
    constructApiEndpoint: function() {
      if (this._.isEmpty(this.endpoints)) {
        this.indexEndPoint = `${this.baseUrl}/${this.resourceName}`;
        this.createEndPoint = `${this.baseUrl}/${this.resourceName}`;
        this.updateEndPoint = `${this.baseUrl}/${this.resourceName}`;
        this.destroyEndPoint = `${this.baseUrl}/${this.resourceName}`;
      } else {
        // TODO: later
        this.indexEndPoint = `${this.baseUrl}/${this.resourceName}`;
        this.createEndPoint = `${this.baseUrl}/${this.resourceName}`;
        this.updateEndPoint = `${this.baseUrl}/${this.resourceName}`;
        this.destroyEndPoint = `${this.baseUrl}/${this.resourceName}`;
      }
    },
    fetchList: async function() {
      const response = await this.$axios.get(this.indexEndPoint);

      this.listItems = response.data;
    },
    dataExtractor: function(item, column) {
      if (!column.includes(".")) {
        return item[column];
      } else {
        return this.objectResolver(column, item);
      }
    },
    objectResolver(path, obj) {
      return path.split(".").reduce(function(prev, curr) {
        return prev ? prev[curr] : null;
      }, obj || self);
    }
  }
};
</script>

<style scoped>
</style>
