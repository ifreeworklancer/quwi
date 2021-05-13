<template>
  <section class="section section-error section--full-height section--center">
    <div class="container">
      <el-row>
        <h1 v-if="error.statusCode === 404" class="page-title">
          Page not found
        </h1>
        <h1 v-else class="page-title">An error occurred</h1>
        <el-button type="primary">
          <NuxtLink to="/">Home page</NuxtLink>
        </el-button>
      </el-row>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'error',
  props: ['error'],
}
</script>
