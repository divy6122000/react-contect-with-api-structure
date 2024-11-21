import { useEffect, useState } from 'react'
import userContext from './context/userContext'
import Login from './components/Login'
import Profile from './components/Profile'
import { ThemeProvider } from "./context/themeContext.js"
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
function App() {
  const [user, setUser] = useState(null)
  const [themeMode, setThemeMode] = useState("dark")
  const themeDark = () => {
    setThemeMode("dark")
  }
  const themeLight = () => {
    setThemeMode("light")
  }
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark")
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])

  return (
    <>
      <ThemeProvider value={{ themeMode, themeDark, themeLight }}>
        <userContext.Provider value={{ user, setUser }}>
          <Login />
          <Profile />
          <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                <Card />
              </div>
            </div>
          </div>
        </userContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default App
