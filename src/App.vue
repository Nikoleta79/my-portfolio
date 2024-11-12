<template>
  <div id="app">
    <Header />
    <main>
      <h1>Welcome to My Portfolio</h1>
      <p>This is where you can showcase your skills, projects, and more.</p>
      <Projects />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Projects from './components/Projects.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Projects,
    Footer
  }
}
</script>

<style>
/* Add basic styling here */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

main {
  padding: 20px;
  text-align: center;
}

h1 {
  color: #333;
}
</style>

