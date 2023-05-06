import { useToggleMode } from 'hooks/useToggleMode'
import { Moon, Sun } from 'lucide-react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export const Layout = () => {
  const { pathname } = useLocation()
  const { mode, setMode } = useToggleMode()

  return (
    <>
      <div className="absolute top-4 left-4 flex items-center gap-4">
        {pathname !== '/' && (
          <Link to="/" className="font-bold dark:text-white">
            Home
          </Link>
        )}
        <button className="bg-transparent dark:text-white" onClick={setMode}>
          {mode === 'light' ? <Sun /> : <Moon />}
        </button>
      </div>
      <Outlet />
    </>
  )
}
