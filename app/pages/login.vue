<script setup lang="ts">
import { z } from "zod";

// Login page simplified: no authentication

const formSchema = z.object({
  email: z.string().email("Invalid email"),
});

type Schema = z.output<typeof formSchema>;

const formState = reactive({
  email: "",
});

function formSubmission(event: SubmitEvent) {
  // No authentication, just clear the form and show a message
  formState.email = "";
  // Optionally show a toast or alert
  alert("This is a demo. No authentication is available.");
}
</script>

<template>
  <div
    class="bg-[#f1f1f1] max-w-screen-sm mx-auto mt-10 space-y-6 rounded-md p-8 text-xs shadow-md"
  >
    <h1 class="text-xl sm:text-2xl">Login (Demo Only)</h1>
    <UForm
      :state="formState"
      :schema="formSchema"
      @submit="formSubmission"
      class="space-y-4"
    >
      <UFormGroup label="Email" name="email" size="lg">
        <UInput v-model="formState.email" />
      </UFormGroup>
      <UButton type="submit" label="Sign in (Demo)" block />
    </UForm>
  </div>
</template>
