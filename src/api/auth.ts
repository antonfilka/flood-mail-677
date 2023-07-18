import axios from "axios";

// const domain = "https://8a1d-46-53-246-51.ngrok-free.app";
const domain = "http://localhost:8080";

export const signUpMutationFunc = (payload: SignUpPayload) =>
  axios.post(`${domain}/auth/sing-up`, payload).then((res) => res.data);

export const signInMutationFunc = (payload: SignInPayload) =>
  axios.post(`${domain}/auth/sing-in`, payload).then((res) => res.data);

export const makePaymentMutationFunc = (data: {
  payload: makePaymentPayload;
  access_token: string;
}) =>
  axios
    .post<PaymentMutationResponse>(`${domain}/payment`, data.payload, {
      headers: {
        Authorization: `Bearer ${data.access_token}`,
        "ngrok-skip-browser-warning": "69420",
      },
    })
    .then((res) => res.data);

export const startFloodMutationFunc = (data: {
  payload: StartFloodPayload;
  access_token: string;
}) =>
  axios
    .post(`${domain}/flood`, data.payload, {
      headers: {
        Authorization: `Bearer ${data.access_token}`,
        "ngrok-skip-browser-warning": "69420",
      },
    })
    .then((res) => res.data);

export const getUserDataQueryFunc = (access_token: string) =>
  axios
    .get<UserData>(`${domain}/profile`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "ngrok-skip-browser-warning": "69420",
      },
    })
    .then((res) => res.data);

export const getTasksQueryFunc = (access_token: string) =>
  axios
    .get<Tasks>(`${domain}/tasks`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "ngrok-skip-browser-warning": "69420",
      },
    })
    .then((res) => res.data);

export const getPaymentsQueryFunc = (access_token: string) =>
  axios
    .get<PaymentsForAdmin>(`${domain}/payments`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "ngrok-skip-browser-warning": "69420",
      },
    })
    .then((res) => res.data);

export const putPaymentByIdQueryFunc = (payload: {
  access_token: string;
  userId: string;
  paymentId: number;
}) =>
  axios
    .put(
      `${domain}/payment/${payload.paymentId}`,
      { user_id: payload.userId },
      {
        headers: {
          Authorization: `Bearer ${payload.access_token}`,
          "ngrok-skip-browser-warning": "69420",
        },
      }
    )
    .then((res) => res.data);

export const putTaskByIdQueryFunc = (payload: {
  access_token: string;
  userId: string;
  status: "start" | "stop";
  taskId: number;
}) =>
  axios
    .put(
      `${domain}/task/${payload.taskId}`,
      { user_id: payload.userId, status: payload.status },
      {
        headers: {
          Authorization: `Bearer ${payload.access_token}`,
          "ngrok-skip-browser-warning": "69420",
        },
      }
    )
    .then((res) => res.data);

export const deleteTaskByIdQueryFunc = (payload: {
  access_token: string;
  userId: string;
  taskId: number;
}) =>
  axios
    .delete(`${domain}/task/${payload.taskId}`, {
      data: { user_id: payload.userId },
      headers: {
        Authorization: `Bearer ${payload.access_token}`,
        "ngrok-skip-browser-warning": "69420",
      },
    })
    .then((res) => res.data);

export interface PaymentsForAdmin {
  orders: {
    ID: number;
    UserId: number;
    State: "submitted" | "completed";
    data: {
      id: string;
      hosted_url: string;
      pricing: {
        local: {
          amount: string;
        };
      };
      payments: null;
      timeline: null;
    };
  }[];
}

export interface UserData {
  payments: Payment[];
  user: { balance: number; name: string; email: string };
}

export interface PaymentMutationResponse {
  ID: number;
  UserId: number;
  State: "submitted" | "completed";
  data: {
    id: string;
    hosted_url: string;
    pricing: {
      local: {
        amount: string;
      };
    };
    payments: any;
    timeline: [
      {
        status: any;
      }
    ];
  };
}

export interface Tasks {
  "tasks:": Task[] | null;
}

export interface Task {
  Id: number;
  UserID: string;
  Status: "in_progress" | string;
  Email: string;
  Time: number;
}

export interface Payment {
  ID: number;
  UserId: number;
  State: string;
  data: {
    id: string;
    pricing: {
      local: {
        amount: number;
      };
    };
    payments: any;
    timeline: any;
  };
}

export interface makePaymentPayload {
  name: string;
  description: string;
  local_price: {
    amount: string;
    currency: string;
  };
  redirect_url: string;
  cancel_url: string;
}

export interface StartFloodPayload {
  Email: string;
  price: number;
  Time: number;
}

export interface SignUpPayload {
  name: string;
  email: string;
  password: string;
}

export interface SignInPayload {
  email: string;
  password: string;
}
