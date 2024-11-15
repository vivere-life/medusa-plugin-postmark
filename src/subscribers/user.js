class UserSubscriber {
  constructor({ eventBusService, postmarkService }) {
    this.postmarkService_ = postmarkService;
    this.eventBus_ = eventBusService;

    this.eventBus_.subscribe("user.password_reset", async (data) => {
      await this.postmarkService_.sendNotification(
        "user.password_reset",
        data,
        null
      );
    });

    this.eventBus_.subscribe("user.created", async (data) => {
      await this.postmarkService_.sendNotification("user.created", data, null);
    });

    this.eventBus_.subscribe("auth.password_reset", async (data) => {
      await this.postmarkService_.sendNotification(
        "auth.password_reset",
        data,
        null
      );
    });

    this.eventBus_.subscribe("auth.verify_account", async (data) => {
      await this.postmarkService_.sendNotification(
        "auth.verify_account",
        data,
        null
      );
    });

    this.eventBus_.subscribe("activity.inactive_user", async (data) => {
      await this.postmarkService_.sendNotification(
        "activity.inactive_user",
        data,
        null
      );
    });

    this.eventBus_.subscribe("activity.inactive_customer", async (data) => {
      await this.postmarkService_.sendNotification(
        "activity.inactive_customer",
        data,
        null
      );
    });

    this.eventBus_.subscribe("custom.contact_us", async (data) => {
      await this.postmarkService_.sendNotification(
        "custom.contact_us",
        data,
        null
      );
    });
  }
}

export default UserSubscriber;
