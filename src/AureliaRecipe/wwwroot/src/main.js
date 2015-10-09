export function configure(aurelia) {
    aurelia.use
      .standardConfiguration()
      .developmentLogging()
      .globalResources('services/converters');

    aurelia.start().then(a => a.setRoot());
}
