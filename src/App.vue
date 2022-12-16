<template>
  <div class="w-full h-full flex flex-col justify-center items-center text-center gap-12">
    <p v-christmas>Red + Green (default)</p>
    <p v-christmas:red>Red only</p>
    <p v-christmas:green>Green only</p>
    <p v-christmas="5">Slower Animation</p>
  </div>
</template>

<style></style>
