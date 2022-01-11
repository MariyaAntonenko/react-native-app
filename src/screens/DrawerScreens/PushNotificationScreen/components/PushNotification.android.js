import React from 'react';
import PushNotification from 'react-native-push-notification';

PushNotification.createChannel({
  channelId: 'channel-id',
  channelName: 'My channel',
  channelDescription: 'A channel to categorise your notifications',
  playSound: false,
  soundName: 'default',
  vibrate: true,
});
export const notificationButtons = [
  {
    id: 1,
    title: 'Get Notification',
    color: 'green',
    notificationFunction: () => {
      PushNotification.localNotification({
        title: 'App notification',
        message: 'You got new notification',
        channelId: 'channel-id',
        actions: ['ReplyInput'],
        reply_placeholder_text: 'Write your response...',
        reply_button_text: 'Reply',
        invokeApp: false,
      });
    },
  },
  {
    id: 2,
    title: 'Get Timeout Notification',
    color: 'orange',
    notificationFunction: () => {
      PushNotification.localNotificationSchedule({
        title: 'New App notification!',
        message: 'You got new notification after 5 sec of waiting',
        date: new Date(Date.now() + 5 * 1000),
        channelId: 'channel-id',
        actions: ['Got it', 'Cancel'],
      });
    },
  },
  {
    id: 3,
    title: 'Cancel All Notification',
    color: 'red',
    notificationFunction: () => {
      PushNotification.removeAllDeliveredNotifications();
    },
  },
];
