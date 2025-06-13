import Constants from 'expo-constants';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';
import { Platform } from 'react-native';

interface INotificationProvider {
  handler: Notifications.NotificationHandler;
  setNotificationToken: (value: string | undefined) => void | PromiseLike<void>;
  development: boolean;
  channelId?: string;
  channel?: Notifications.NotificationChannelInput;
}

export const NotificationProvider = (props: INotificationProvider) => {
  const { handler, setNotificationToken } = props;

  useEffect(() => {
    Notifications.setNotificationHandler(handler);

    registerForPushNotificationsAsync(props).then(setNotificationToken);
  }, [handler, props, setNotificationToken]);
  return null;
};

async function registerForPushNotificationsAsync(
  props: Partial<INotificationProvider> = {}
) {
  const {
    development = false,
    channelId = 'default',
    channel = {
      name: 'default',
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
      showBadge: true,
      sound: 'default',
    },
  } = props;
  let token = '';

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync(channelId, channel);
  }
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    // Learn more about projectId:
    // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
    // EAS projectId is used here.
    try {
      const projectId =
        Constants?.expoConfig?.extra?.eas?.projectId ??
        Constants?.easConfig?.projectId;
      if (!projectId) {
        throw new Error('Project ID not found');
      }
      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId,
          development,
        })
      ).data;
    } catch (e) {
      console.warn(e);
    }
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}
