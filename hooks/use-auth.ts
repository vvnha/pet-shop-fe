import { MS_PER_HOUR } from '@/constants';
import { authApi } from '@/services/auth';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';
import _get from 'lodash/get';
import { User } from '@/models/user';
import { toast } from 'react-toastify';
import { ApiResponseData, LoginPayload } from '@/models';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  UserInfo,
} from 'firebase/auth';
import { auth } from '@/firebase';
import { AxiosError } from 'axios';

export function useAuth(options?: Partial<PublicConfiguration>) {
  // manage profile
  const { data, error, mutate, isValidating } = useSWR('users/profile', {
    dedupingInterval: MS_PER_HOUR,
    revalidateOnFocus: false,
    ...options,
  });

  const profile = _get(data, 'value', undefined);
  const isLoggedIn = !!profile && profile?.email !== '';

  const firstLoading = profile === undefined && error === undefined;

  async function login(firebaseToken: string) {
    const response = await authApi.login(firebaseToken);
    await mutate(); // empty input mean it will trigger the profile in API to update automatically
  }

  async function register(payload: Partial<User>) {
    const formData = new FormData();

    formData.append('data', JSON.stringify(payload));

    const result = await authApi.register(formData);
    toast.success('Register successfully!');

    return result;
  }

  async function logout() {
    await authApi.logOut();
    mutate({}, false); // false mean shouldReavalidate : false
  }

  async function updateUser(payload: any) {
    const formData = new FormData();
    formData.append('data', JSON.stringify(payload));

    await authApi.addToCart(profile._id, formData);
    await mutate();
  }

  async function handleAutoRegister(payload: Partial<User>, firebaseToken: string) {
    try {
      const formData = new FormData();

      formData.append('data', JSON.stringify(payload));

      const result = await authApi.register(formData);
      await login(firebaseToken);
      toast.success('Login successfully!');

      return result;
    } catch (error: any) {
      if (error.response.data.message.toLowerCase().includes('email has been used!')) {
        await login(firebaseToken);
      } else throw error;
    }
  }

  async function signUpWithFirebase(payload: User) {
    const { email, password } = payload;

    try {
      if (!auth) return;
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await register({
        ...payload,
        firebase_user_id: userCredential.user.uid,
      });
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        toast.error('Email is already in use');
      } else {
        throw err;
      }
    }
  }

  async function signInWithFirebase(values: LoginPayload) {
    const { email, password } = values;

    try {
      if (!auth) return;
      const result = await signInWithEmailAndPassword(auth, email, password);
      const userRes = result.user;
      const newToken = await auth.currentUser?.getIdToken(true);

      if (!newToken) {
        throw Error('TOKEN NOT FOUND!');
      }

      const response = await login(newToken);
    } catch (error) {
      if (error !== 'auth/cancelled-popup-request') console.log(error);
    }
  }

  async function signInGoogleWithFirebase() {
    const provider = new GoogleAuthProvider();

    try {
      if (!auth) return;
      const result = await signInWithPopup(auth, provider);
      const { email, uid }: UserInfo = result.user;
      const newToken = await auth.currentUser?.getIdToken(true);

      if (!email) throw new Error('Something is wrong with your account!');
      if (!newToken) throw new Error('Token is not found!');

      await handleAutoRegister({ email, password: '', firebase_user_id: uid }, newToken);
    } catch (error: any) {
      if (error !== 'auth/cancelled-popup-request' && error !== 'auth/email-already-in-use')
        console.log(error);
    }
  }

  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
    isLoggedIn,
    register,
    updateUser,
    signUpWithFirebase,
    signInWithFirebase,
    signInGoogleWithFirebase,
  };
}
