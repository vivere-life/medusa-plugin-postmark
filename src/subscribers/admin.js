class AdminSubscriber {
  constructor({ eventBusService, postmarkService }) {
    this.postmarkService_ = postmarkService;
    this.eventBus_ = eventBusService;

    this.eventBus_.subscribe('invite.created', async (data) => {
      console.log('AdminSubscriber: invite.created', data);
      await this.postmarkService_.sendNotification(
        'invite.created',
        data,
        null
      );

      console.log('AdminSubscriber: invite.created sent');
    });
  }
}

export default AdminSubscriber;
