class AdminSubscriber {
  constructor({ eventBusService, postmarkService }) {
    this.postmarkService_ = postmarkService;
    this.eventBus_ = eventBusService;

    this.eventBus_.subscribe('invite.created', async (data) => {
      await this.postmarkService_.sendNotification(
        'invite.created',
        data,
        null
      );
    });
  }
}

export default AdminSubscriber;
