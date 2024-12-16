class AdminSubscriber {
  constructor({ eventBusService, postmarkService }) {
    this.postmarkService_ = postmarkService;
    this.eventBus_ = eventBusService;

    this.eventBus_.subscribe('invite.created', async (data) => {
      const { id, token, user_email: email } = data;
      await this.postmarkService_.sendNotification(
        'invite.created',
        {
          email,
          id,
          token,
        },
        null
      );
    });
  }
}

export default AdminSubscriber;
