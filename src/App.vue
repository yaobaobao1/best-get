<template>
  <router-view/>
  <XtxMessage type='success'/>
</template>
<script>
import XtxMessage from '@/components/library/xtx-message.vue'
export default {
  components: { XtxMessage }
}
</script>
