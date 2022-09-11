import '../App.css'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import serverURL from '../serverURL'
import { useMediaQuery } from 'react-responsive'
import ReactLoading from 'react-loading'

function Auth({ user, loginState, updateUser, updateLoggedIn }) {
  const navigation = useNavigate()
  const isPc = useMediaQuery({
    query: '(min-width:1024px)',
  })
  const isTablet = useMediaQuery({
    query: '(min-width:768px) and (max-width:1023px)',
  })
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  })

  useEffect(() => {
    async function fetchData() {
      await axios.post(`${serverURL}/me`).then((res) => {
        window.localStorage.setItem('userEmail', res.data.user.kakaoid)
        window.localStorage.setItem(
          'userPassword',
          String(res.data.user.snsId) + 'aosdapshdkanh2i92019jiksah',
        )
        updateUser(res.data.user)
        navigation('/MyInfo')
      })
    }
    fetchData()
  }, [])
  return (
    <div
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'black',
      }}
    >
      <ReactLoading color="#ffffff" type={'spokes'}></ReactLoading>
    </div>
  )
}
export default Auth
