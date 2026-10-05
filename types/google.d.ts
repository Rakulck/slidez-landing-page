export interface GoogleIdCredentialResponse {
  credential: string;
  select_by?:
    | "auto"
    | "user"
    | "user_1tap"
    | "user_2tap"
    | "btn"
    | "btn_confirm"
    | "br";
  clientId?: string;
}

export interface GooglePromptNotification {
  isNotDisplayed: () => boolean;
  isSkippedMoment: () => boolean;
  isDismissedMoment: () => boolean;
  getNotDisplayedReason: () => string;
  getSkippedReason: () => string;
  getDismissedReason: () => string;
  getMomentType: () => string;
}

export interface GoogleIdInitializeConfig {
  client_id: string;
  callback: (response: GoogleIdCredentialResponse) => void | Promise<void>;
  auto_select?: boolean;
  cancel_on_tap_outside?: boolean;
  context?: "signin" | "signup" | "use";
  prompt_parent_id?: string;
  state_cookie_domain?: string;
  nonce?: string;
  itp_support?: boolean;
  use_fedcm_for_prompt?: boolean;
  ux_mode?: "popup" | "redirect";
}

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: GoogleIdInitializeConfig) => void;
          prompt: (
            listener?: (notification: GooglePromptNotification) => void
          ) => void;
          renderButton: (
            parent: HTMLElement,
            options: Record<string, unknown>
          ) => void;
          cancel: () => void;
          disableAutoSelect: () => void;
          storeCredential: (
            credential: unknown,
            callback?: () => void
          ) => void;
        };
      };
    };
    __resetGoogleOneTapCooldown?: () => void;
    __promptGoogleOneTap?: () => void;
  }
}
