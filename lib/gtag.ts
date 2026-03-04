export const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

function event(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.gtag || !GA_ID) return;
  window.gtag("event", name, params);
}

export const trackDownloadClick    = () => event("download_app_click");
export const trackExtensionClick   = () => event("install_extension_click");
export const trackStylistDemoSubmit = () => event("stylist_demo_submit");
