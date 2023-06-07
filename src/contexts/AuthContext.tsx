import React, { useState, useContext, createContext, ReactNode, useEffect } from "react";
import { api } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextData = {
  user: UserProps,
  isAuthenticated: boolean,
  signIn: (credentials: SignInProps) => Promise<void>
  loadingAuth: boolean,
  loading: boolean,
  signOut: () => Promise<void>
}

type UserProps = {
  id: string,
  name: string,
  email: string,
  token: string
}

type AuthProviderProps = {
  children: ReactNode
}

type SignInProps = {
  email: string,
  password: string
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>({
    id: '',
    name: '',
    email: '',
    token: ''
  })

  const [loadingAuth, setLoadingAuth] = useState(false)
  const [loading, setLoading] = useState(true)

  const isAuthenticated = !!user.name 

  useEffect(() => {
    async function getUser() {
      const userInfo = await AsyncStorage.getItem('@user');

      let user: UserProps = JSON.parse(userInfo || '{}')

      if (Object.keys(user).length > 0) {
        api.defaults.headers.common['Authorization'] = 'Bearer ' + user.token;

        setUser({
          id: user.id,
          name: user.name,
          email: user.email,
          token: user.token
        })
      }

      setLoading(false)
    }

    getUser()
  }, [])

  async function signIn({ email, password }: SignInProps) {
    setLoadingAuth(true);

    try {
      // TODO: use this when api is available
      // const response = await api.post('/session', {
      //   email,
      //   password
      // })

      const response = {
        data:{
          id: '12',
          name: 'Rafael Menegon',
          email: 'menegon@gmail.com',
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyIiwibmFtZSI6IlJhZmFlbCBNZW5lZ29uIiwiZW1haWwiOiJtZW5lZ29uQGdtYWlsLmNvbSJ9.kclMJEYJo6D6kSMRVgivtbU0i8DFh3Ww_ykYZWeFCss'
        }
      }

      const data = {
        ...response.data
      } as UserProps

      const { id, name, email, token } = data

      await AsyncStorage.setItem('@user', JSON.stringify(data));

      api.defaults.headers.common['Authorization'] = 'Bearer ' + token

      setUser({
        id,
        name,
        email,
        token
      })

      setLoadingAuth(false);

    } catch (err) {
      console.log('erro ao acessar', err);
      setLoadingAuth(false);
    }
  }

  async function signOut() {
    await AsyncStorage.clear().then(() => {
      setUser({
        id: '',
        name: '',
        email: '',
        token: ''
      });
    })
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      signIn, 
      loadingAuth, 
      loading,
      signOut
      }}>
      {children}
    </AuthContext.Provider>
  )
}