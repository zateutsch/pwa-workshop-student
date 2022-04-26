# Make your PWA network-independent - register a service worker

In this step, we will take a look at how service worker is registered.

## How do service workers work?

From a development perspective, you need to know two concepts:

**[Service Worker Registration:](https://docs.microsoft.com/microsoft-edge/progressive-web-apps-chromium/how-to/service-workers)**

Like all Web Workers, the Service Worker must be authored in its own file. The location of that file (relative to the root of the app) defines the scope of its authority. Service Workers can only intercept or manage requests to pages within their scope. Placing the file at the root of your app ensures your service worker will manage all pages within it.

**[Service Worker Lifecycle:](https://docs.microsoft.com/microsoft-edge/progressive-web-apps-chromium/how-to/service-workers#the-service-worker-lifecycle)**

1. Registration: The browser registers the service worker, kicking off the Service Worker lifecycle.
1. Installation: The browser triggers `install` as the first event to the Service Worker. It can use this for pre-caching resources (e.g., populate cache with long-lived resources like logos or offline pages).
1. Activation: The browser sends the `activate` event to indicate that the service worker has been installed. This service worker can now do clean up actions (e.g., remove old caches from prior version) and ready itself to handle functional events. If there is an old service worker in play, you can use `clients.claim()` to immediately replace the old service worker with your new one.

## How is service worker registered in PWA Studio generated projects?

Good news! With PWA Studio, you don't need to create or register a service worker. The service worker is automatically registered for you based on the configuration you provide in the `vite.config.ts` file.
