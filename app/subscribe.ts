import {CONFIG} from "@/app/webPushConfig";
import {saveSubscription} from "@/app/saveSubscription";

export async function subscribe() {
    await window?.Notification.requestPermission();

    try {
        const options = {
            applicationServerKey: CONFIG.PUBLIC_KEY,
            userVisibleOnly: true,
        }

        const swRegistration = await window.navigator.serviceWorker.getRegistration()
        const subscription = await swRegistration?.pushManager.subscribe(options)

        if (subscription) {
            await saveSubscription(subscription)
        }

        console.log({subscription})
    } catch (err) {
        console.error('Error', err)
    }
}
