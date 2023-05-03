import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { auth, FirebaseUser, UserCredential } from "../configs/FirebaseConfig";
import {
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence,
} from "firebase/auth";

import {} from "firebase/auth";

interface IUser {
  uid: string;
  name?: string | null;
  email: string | null;
  isAdmin?: boolean;
}

type FirebaseAuthLoginAction = (
  email: string,
  password: string,
  rememberMe: boolean
) => Promise<UserCredential>;

type FirebaseAuthSignUpAction = (
  email: string,
  password: string
) => Promise<UserCredential>;

interface IAuthContextProps {
  user: IUser | null;
  loading: boolean;
  isAuthenticated: boolean;
  signup: FirebaseAuthSignUpAction;
  login: FirebaseAuthLoginAction;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: (displayName: string | null | undefined) => Promise<void>;
  updateEmail: (newEmail: string) => Promise<void>;
  updatePassword: (newPassword: string) => Promise<void>;
}

const AuthContext = createContext({} as IAuthContextProps);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  const signup = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email: string, password: string, rememberMe: boolean) => {
    return setPersistence(
      auth,
      rememberMe ? browserLocalPersistence : browserSessionPersistence
    ).then(() => auth.signInWithEmailAndPassword(email, password));
  };

  const logout = async () => {
    await auth.signOut();
  };

  const resetPassword = (email: string) => {
    return auth.sendPasswordResetEmail(email);
  };

  const updateProfile = async (displayName: string | null | undefined) => {
    if (!auth.currentUser || !user) return Promise.resolve();
    await auth.currentUser.updateProfile({ displayName });
    setUser({ ...user, name: displayName });
  };

  const updateEmail = async (newEmail: string) => {
    if (!auth.currentUser || !user) return Promise.resolve();
    await auth.currentUser.updateEmail(newEmail);
    setUser({ ...user, email: newEmail });
  };

  const updatePassword = async (newPassword: string) => {
    if (!auth.currentUser) return Promise.resolve();
    return auth.currentUser.updatePassword(newPassword);
  };

  const updateUser = useCallback(async (user: FirebaseUser | null) => {
    if (user) {
      const tokenResult = await user.getIdTokenResult();
      setUser({
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        isAdmin: tokenResult.claims.admin, // Check if the user is admin
      });
    } else {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      updateUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, [updateUser]);

  const isAuthenticated = useMemo(
    () => Boolean(user && !loading),
    [user, loading]
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated,
        login,
        logout,
        signup,
        resetPassword,
        updateProfile,
        updateEmail,
        updatePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
