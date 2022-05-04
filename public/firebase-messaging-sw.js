/* eslint-disable no-restricted-globals */
self.addEventListener("push", function (event) {
  if (!(self.Notification && self.Notification.permission === "granted")) {
    return;
  }
  var data = {};
  if (event.data) {
    data = event.data.json();
  }
  var title = data.notification?.title ?? "Something Has Happened";
  var body =
    data.notification?.body || "Here's something you might want to check out.";

  self.registration.showNotification(title, {
    body,
    actions: [
      {
        action: "explore",
        title: "Ver Notificacion",
      },
      {
        action: "close",
        title: "Cerrar notificación",
      },
    ],
  });
});

self.addEventListener("notificationclick", function (e) {
  var notification = e.notification;
  var action = e.action;

  if (action === "close") {
    notification.close();
  } else {
    // eslint-disable-next-line no-undef
    clients.openWindow("http://localhost:3000/home");
    notification.close();
  }
});
