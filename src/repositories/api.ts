import i18n from "../i18n";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  errors?: string[];
  /** Stable backend error code (e.g. "EMAIL_NOT_VERIFIED"), independent of the UI language */
  code?: string;
  status?: number;
}

type Params = Record<string, unknown> | undefined;

// The backend sends English text plus a code; show the code's translation, or the text if we have none.
const translate = (ns: "apiErrors" | "apiMessages", code: unknown, fallback: string, params?: Params) =>
  typeof code === "string" ? i18n.t(`${ns}.${code}`, { ...params, defaultValue: fallback }) : fallback;

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const token = localStorage.getItem("token");

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...((options.headers as Record<string, string>) || {}),
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      const errors: string[] | undefined = Array.isArray(data.errors)
        ? data.errors.map((e: string, i: number) => translate("apiErrors", data.codes?.[i], e))
        : undefined;
      return {
        error: data.error
          ? translate("apiErrors", data.code, data.error, data.params)
          : errors?.join(", ") || i18n.t("apiErrors.SERVER_ERROR"),
        errors,
        code: data.code,
        status: response.status,
      };
    }

    if (data && typeof data.message === "string" && data.messageCode) {
      data.message = translate("apiMessages", data.messageCode, data.message, data.messageParams);
    }

    return { data, status: response.status };
  } catch {
    return { error: i18n.t("apiErrors.NETWORK"), status: 0 };
  }
}

export const api = {
  get: <T>(endpoint: string) => request<T>(endpoint),
  post: <T>(endpoint: string, body: unknown) =>
    request<T>(endpoint, { method: "POST", body: JSON.stringify(body) }),
  put: <T>(endpoint: string, body: unknown) =>
    request<T>(endpoint, { method: "PUT", body: JSON.stringify(body) }),
  delete: <T>(endpoint: string) => request<T>(endpoint, { method: "DELETE" }),
};
