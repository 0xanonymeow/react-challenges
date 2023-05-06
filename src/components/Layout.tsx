import { Link, Outlet, useLocation } from 'react-router-dom'

export const Layout = () => {
  const { pathname } = useLocation()
  return (
    <>
      <div className="absolute top-4 left-4">
        {pathname !== '/' && (
          <Link to="/" className="font-bold">
            Home
          </Link>
        )}
      </div>
      <Outlet />
    </>
  )
}
