<template>
  <div class="form-group">
    <div class="form-control">
      <input :value="value"
             :placeholder="placeholder"
             :maxlength="maxCharactersCount"
             :required="required"
             :type="type"
             :class="{ 'has-error': errors[errorFieldName] }"
             :id="inputId"
             @input="$emit('input', $event.target.value)">
      <label :for="inputId">
        {{ (title) ? title : '' }}
        <span v-if="errors[errorFieldName]" class="form-error">
          {{ errors[errorFieldName] }}
        </span>
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UiKitFormInput',
    props: {
      value: {
        required: true
      },
      placeholder: {
        type: String,
        required: true
      },
      required: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'text'
      },
      title: {
        type: String
      },
      errors: {
        type: Object,
        default: () => ({})
      },
      errorMessages: {
        type: Object,
        default: () => ({})
      },
      errorFieldName: {
        type: String
      },
      maxCharactersCount: {
        type: Number
      }
    },
    data: () => ({
      /**
       * Generate unique string to bind input with label
       *
       * @return string
       **/
      inputId: null
    }),
    mounted() {
      this.inputId = '_' + Math.random().toString(36).substr(2, 9);
    }
  };
</script>

<style scoped>

</style>
