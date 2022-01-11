import React from 'react';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

PushNotificationIOS.setNotificationCategories([
  {
    id: 'userAction',
    actions: [
      {id: 'open', title: 'Open', options: {foreground: true}},
      {
        id: 'ignore',
        title: 'Ignore',
        options: {foreground: true, destructive: true},
      },
      {
        id: 'ReplyInput',
        title: 'Reply',
        options: {foreground: true},
        textInput: {buttonTitle: 'Send'},
      },
    ],
  },
]);
export const notificationButtons = [
  {
    id: 1,
    title: 'Get Notification',
    color: 'green',
    notificationFunction: () => {
      PushNotificationIOS.presentLocalNotification({
        alertTitle: 'App notification',
        alertBody: 'You got new notification',
        category: 'userAction',
        applicationIconBadgeNumber:
          PushNotificationIOS.getApplicationIconBadgeNumber(value =>
            PushNotificationIOS.setApplicationIconBadgeNumber(value + 1),
          ),
      });
    },
  },
  {
    id: 2,
    title: 'Get Timeout Notification',
    color: 'orange',
    notificationFunction: () => {
      const date = new Date();
      date.setSeconds(date.getSeconds() + 5);
      PushNotificationIOS.scheduleLocalNotification({
        alertTitle: 'New App notification!',
        alertBody: 'You got new notification after 5 sec of waiting',
        fireDate: date.toISOString(),
        applicationIconBadgeNumber:
          PushNotificationIOS.getApplicationIconBadgeNumber(value =>
            PushNotificationIOS.setApplicationIconBadgeNumber(value + 1),
          ),
      });
    },
  },
  {
    id: 3,
    title: 'Cancel All Notification',
    color: 'red',
    notificationFunction: () => {
      PushNotificationIOS.removeAllDeliveredNotifications();
      PushNotificationIOS.setApplicationIconBadgeNumber(0);
    },
  },
];
