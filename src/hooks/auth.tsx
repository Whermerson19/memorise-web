import {
  createContext,
  useContext,
  useCallback,
  useState,
} from "react";
import api from "../services/api";

interface IUser {
  id: string;
  username: string;
  email: string;
  avatarURL: string;
}

interface ISessionCredentials {
  loginField: string;
  password: string;
}

interface ICreateCredentials {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

interface IAuthContext {
  user: IUser;
  token: string;
  logIn(credentials: ISessionCredentials): Promise<void>;
  logOut(): void;
  createUser(credentials: ICreateCredentials): Promise<void>;
  updateUser(user: IUser): void;
}

interface IAuthState {
  user: IUser;
  token: string;
}

interface IAuthProvider {
  children: React.ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  if (!context) throw new Error("invalid context");

  return context;
}

export default function AuthProvider({ children }: IAuthProvider) {
  const [data, setData] = useState<IAuthState>(() => {
    const user = localStorage.getItem("@MemoRise:user");
    const token = localStorage.getItem("@MemoRise:token");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return {
        user: JSON.parse(user),
        token,
      };
    }

    return {} as IAuthState;
  });

  const logIn = useCallback(async ({ loginField, password }) => {
    const response = await api.post("/session", {
      loginField,
      password,
    });

    const { user, token } = response.data;

    localStorage.setItem("@MemoRise:user", JSON.stringify(user));
    localStorage.setItem("@MemoRise:token", token);

    setData({
      token,
      user,
    });
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem("@MemoRise:user");
    localStorage.removeItem("@MemoRise:token");

    setData({} as IAuthState);
  }, []);

  const createUser = useCallback(async ({ username, email, password, confirm_password }) => {
    await api.post("/users", {
      username,
      email,
      password,
      confirm_password
    });
  }, []);

  const updateUser = useCallback(
    (user: IUser) => {
      localStorage.setItem("@MemoRise:user", JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [data.token]
  );

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        token: data.token,
        logIn,
        logOut,
        updateUser,
        createUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
