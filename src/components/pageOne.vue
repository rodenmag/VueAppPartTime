<template>
  <div>
    <v-content>
      <h3> Fetching Data using Axios </h3> <br>
      <v-data-table
        :headers="headers"
        :items="user_data"
        hide-actions
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.id }}</td>
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.username }}</td>
          <td>{{ props.item.email }}</td>
          <td>{{ props.item.address.street }}</td>
          <td>{{ props.item.address.suite }}</td>
          <td>{{ props.item.address.city }}</td>
          <td>{{ props.item.address.zipcode }}</td>
          <td>{{ props.item.address.geo.lat }}</td>
          <td>{{ props.item.address.geo.lng }}</td>
        </template>
      </v-data-table>
    </v-content>
  </div>
</template>

<script>
export default {
  name: 'pageOne',
  created: function () {
    this.$axios.get('/users/')
      .then(response => {
        this.user_data = response.data
      })
  },
  data () {
    return {
      user_data: [],
      headers: [
        { text: 'Id', value: 'id', sortable: false },
        { text: 'Name', value: 'name', sortable: false },
        { text: 'Username', value: 'username', sortable: false },
        { text: 'Email', value: 'email', sortable: false },
        { text: 'Street', value: 'street', sortable: false },
        { text: 'Suite', value: 'suite', sortable: false },
        { text: 'City', value: 'city', sortable: false },
        { text: 'Zipcode', value: 'zipcode', sortable: false },
        { text: 'Lat', value: 'lat', sortable: false },
        { text: 'Lng', value: 'lng', sortable: false }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
