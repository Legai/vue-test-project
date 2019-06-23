export default {
  methods: {
    handleError(exception) {
      if (typeof exception === 'string') {
        return { main: exception };
      }

      if (!exception.response) {
        return { main: 'General error' };
      }

      if (exception.response.status === 422) {
        return exception.response.errors;
      }

      return { main: 'Unknown error' };
    }
  }
};
