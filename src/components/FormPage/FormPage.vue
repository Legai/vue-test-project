<template>

  <form @submit.prevent="submitForm" class="form">

    <h3 class="form-title">User form</h3>

    <ui-kit-form-input :value="user.name"
                       :errors="errors"
                       :max-characters-count="(maxLengthEnabled) ? 1 : null"
                       @input="setValue({ name: $event })"
                       required
                       error-field-name="name"
                       placeholder="Name"/>

    <ui-kit-form-input :value="user.surname"
                       :errors="errors"
                       :max-characters-count="(maxLengthEnabled) ? 1 : null"
                       @input="setValue({ surname: $event })"
                       required
                       error-field-name="surname"
                       placeholder="Surname"/>

    <ui-kit-form-input :value="user.patronymic"
                       :errors="errors"
                       :max-characters-count="(maxLengthEnabled) ? 1 : null"
                       @input="setValue({ patronymic: $event })"
                       required
                       error-field-name="patronymic"
                       placeholder="Patronymic"/>

    <div class="form-group">
      <input v-model="maxLengthEnabled"
             type="checkbox"
             id="maxLengthCheckbox"
             class="checkbox">
      <label for="maxLengthCheckbox">
        Max length limitation enabled
      </label>
    </div>

    <div class="form-group">
      <button :class="{ 'button-loading': isLoading }" type="submit" class="button">Submit</button>
    </div>

    <div class="form-group">
      <div v-if="isSuccessful" class="success">
        Saved
      </div>
    </div>

  </form>

</template>

<script>
  import { mapMutations } from 'vuex';
  import handleErrorMixin from '../../mixins/handleError.mixin';
  import UiKitFormInput from '../UiKit/UiKitFormInput';

  export default {
    name: 'FormPage',
    components: { UiKitFormInput },
    mixins: [handleErrorMixin],
    data() {
      return {
        isLoading: false,
        isSuccessful: false,
        maxLengthEnabled: false,
        errors: {},
      };
    },
    computed: {
      user() {
        return this.$store.state.user.userData;
      }
    },
    methods: {
      ...mapMutations({
        setValue: 'user/setUserValue'
      }),
      submitForm() {
        this.isLoading = true;
        this.isSuccessful = false;
        this.errors = {};

        return this.$store.dispatch('user/saveUserData')
          .then(() => this.isSuccessful = true)
          .catch((exception) => this.errors = this.handleError(exception).userData)
          .finally(() => this.isLoading = false);
      }
    },
  };
</script>

