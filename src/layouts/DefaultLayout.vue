<template lang='pug'>
  div.default-layout
    header.header
      h1 Esto es el header
    main
      slot
    footer.footer
      h1 Esto es el Footer
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style>

</style>
