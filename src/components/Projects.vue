<template>
  <section>
    <h2>My Projects</h2>
    <ul>
      <li>
        <h3>Project 1</h3>
        <p>Description of your first project.</p>
      </li>
      <li>
        <h3>Project 2</h3>
        <p>Description of your second project.</p>
      </li>
      <li>
        <h3>Project 3</h3>
        <p>Description of your third project.</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Projects'
}
</script>

<style scoped>
section {
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 20px;
}

h3 {
  color: #333;
}
</style>

