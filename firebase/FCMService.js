import firebase from 'react-native-firebase';
import type {Notification , NotificationOpen} from 'react-native-firebase';

import { Platform } from 'react-native';

class FCMService {

    register = (onRegister, onNotification, onOpenNotification) => {
        this.checkPermission(onRegister)
        this.createNotificationListeners(onRegister, onNotification, onOpenNotification)
    }

    checkPermission = (onRegister) => {
            firebase.messaging().hasPermission()
            .then(enabled => {
                if (enabled) {
                    this.getToken(onRegister)

                    firebase.messaging().subscribeToTopic("Offers");
                }
                else{
                    this.requestPermission(onRegister)
                }
            })
            .catch(error => {
                console.log("Permission rejected ", error)
            });
    }

    getToken = (onRegister) => {
        firebase.messaging().getToken()
        .then(fcmToken => {
                if (fcmToken) {
                    onRegister(fcmToken)
                }
                else{
                    console.log("not have token ")
                }
            })
            .catch(error => {
                console.log("getToken rejected ", error)
            });
    }

    requestPermission = (onRegister) => {
         firebase.messaging().requestPermission()
            .then(enabled => {
                this.getToken(onRegister)
            })
            .catch(error => {
                console.log("requestPermission rejected ", error)
            });
    }

    deleteToken = () => {
         firebase.messaging().deleteToken()            
            .catch(error => {
                console.log("Delete Token error ", error)
            });
    }

    createNotificationListeners = (onRegister, onNotification, onOpenNotification) => {

        this.notificationListeners = firebase.notifications().onNotification((notification : Notification) => {
            onNotification(notification)
        })

        this.notificationOpenedListeners = firebase.notifications().onNotificationOpened((notificationOpen : NotificationOpen) => {
            if (notificationOpen){
                const notification : Notification = notificationOpen.notification
                onOpenNotification(notification)

                this.removeDeliveredNotification(notification)
            }
        })

        firebase.notifications().getInitialNotification()
        .then(notificationOpen => {
            if (notificationOpen){
                const notification : Notification = notificationOpen.notification
                onOpenNotification(notification)

                this.removeDeliveredNotification(notification)
            }
        })

        this.messageListener = firebase.messaging().onMessage((message => {
            onNotification(message)
        }))

        this.onTokenRefreshListener = firebase.messaging().onTokenRefresh((fcmToken => {
            console.log("New Token ", fcmToken)
            onRegister(fcmToken)
        }))

    }

    unRegister = ( ) => {
        this.notificationListeners()
        this.notificationOpenedListeners()
        this.messageListener()
        this.onTokenRefreshListener()
    }

    buildChannel = (obj) =>{
       const  channel =  new firebase.notifications.Android.Channel(
           obj.channelId,
          obj.channelName,
          firebase.notifications.Android.Importance.High)
            .setDescription("General Notifications")

           return  firebase.notifications().android.createChannel(channel)
        // _show(notification.android.setChannelId("general"))

    }

    buildNotification = (obj) => {
        // firebase.notifications().androidcreateChannel(obj.channel)
        if (Platform.OS === 'android') {

            return new firebase.notifications.Notification({
            sound: 'default',
            show_in_foreground: true,
          })
            // return new firebase.notifications.Notification()
                // .setSound(obj.sound)
                .setNotificationId(obj.dataId)
                .setTitle(obj.title)
                .setBody(obj.content)
                .setData(obj.data)
                
                .android.setChannelId(obj.channelId)
                .android.setLargeIcon(obj.largeIcon)
                .android.setSmallIcon(obj.smallIcon)
                .android.setColor(obj.colorBgIcon)
                .android.setPriority(firebase.notifications.Android.Priority.High)
                .android.setVibrate(obj.vibrate)

        //         firebase.notifications()
        //   .displayNotification(localNotification)

        } else if (Platform.OS === 'ios') {
                return new firebase.notifications.Notification()
                // .setSound(obj.sound)
                .setNotificationId(obj.dataId)
                .setTitle(obj.data.title)
                .setBody(obj.data.content)
                .setData(obj.data)
                // .ios.setBadge(3000)
        }

    }

    scheduleNotification = (notification , days, minutes) => {
        const date = new Date()
        if (days) {
            date.setDate(date.getDate() + days)
        } 
        if (minutes) {
            date.setMinutes(date.getMinutes() + minutes)
        } 

        firebase.notifications().scheduleNotification(notification, {fireDate : date.getTime()})
    } 

    displayNotification = (notification) => {
        firebase.notifications().displayNotification(notification);
        // firebase.notifications().displayNotification(notification)
        // .catch(error => {
        //     console.log("Display Notification error", error);
        // })
    }

    removeDeliveredNotification = (notification) => {
        firebase.notifications().removeDeliveredNotification(notification.notificationId)
    }

}

export const fcmService = new FCMService()