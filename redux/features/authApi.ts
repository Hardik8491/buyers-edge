import { apiSlice } from "./apiSlice";
import { userLogin, userRegister, setError, userLogout } from "./authSlice";

interface RegistrationResponse {
  message: string;
  accessToken: string;
}

interface LoginResponse {
  accessToken: string;
  user: string;
}

interface RegistrationData {
  // Define the registration data structure
}

interface LoginData {
  username: string;
  password: string;
}

interface ActivationData {
  activationToken: string;
  activationCode: string;
}

interface UpdateUserResponse {
  message: string;
  user: string;
}

interface UpdateUserData {
  // Define the update user data structure
  name: string;
  email: string;
}

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<RegistrationResponse, RegistrationData>({
      query: (data) => ({
        url: "register",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          dispatch(userRegister({ accessToken: result.data.activationToken }));
        } catch (error: any) {
          if (error.response && error.response.data) {
            dispatch(setError(error.response.data));
          } else {
            dispatch(setError("An unknown error occurred."));
          }
        }
      },
    }),
    activation: builder.mutation<void, ActivationData>({
      query: ({ activationToken, activationCode }) => ({
        url: "activation-user",
        method: "POST",
        body: { activationToken, activationCode },
        credentials: "include" as const,
      }),
    }),
    login: builder.mutation<LoginResponse, LoginData>({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          console.log(result.data, result);

          dispatch(
            userLogin({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (error: any) {
          console.log(error);

          if (error.response && error.response.data) {
            dispatch(setError(error.response.data));
          }
          if (error) {
            console.log(error);

            dispatch(
              setError("Please check your internet connection and try again.")
            );
          }
        }
      },
    }),

    updateUser: builder.mutation<UpdateUserResponse, UpdateUserData>({
      query: (data) => ({
        url: "update-user-info",
        method: "PUT",
        body: data,
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result.data, result);
          // Handle success, e.g., update the user state
          // dispatch(userUpdate(result.data.user));
        } catch (error: any) {
          console.log(error);
          if (error.response && error.response.data) {
            dispatch(setError(error.response.data));
          }
          if (error) {
            console.log(error);
            dispatch(
              setError("Please check your internet connection and try again.")
            );
          }
        }
      },
    }),
    logout: builder.query({
      query: () => ({
        url: "logout",
        method: "GET",
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          dispatch(userLogout());
        } catch (error: any) {
          console.log(error);
        }
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useActivationMutation,
  useLoginMutation,
  useUpdateUserMutation,
  useLogoutQuery,
} = authApi;