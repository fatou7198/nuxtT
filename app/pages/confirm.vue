<script setup lang="ts">
definePageMeta({
  layout: "no-header",
});

// Confirm page simplified: no authentication
</script>

<template>
  <div class="min-h-screen grid place-items-center">
    <div class="flex flex-col items-center gap-2">
      <UIcon
        name="i-mdi-information"
        class="text-dodgeroll-gold-500 text-5xl"
      />
      <h1 class="text-5xl">No authentication required</h1>
      <p>This is a demo confirmation page.</p>
    </div>
  </div>
</template>
