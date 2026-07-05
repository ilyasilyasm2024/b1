const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  errors?: string[];
  status?: number;
}

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
      return {
        error: data.error || data.errors?.join(", ") || "Something went wrong",
        errors: data.errors,
        status: response.status,
      };
    }

    return { data, status: response.status };
  } catch (err) {
    return { error: "Network error. Please check your connection.", status: 0 };
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
