import { Layout } from 'components/Layout'
import NotFound from 'pages/notFound'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

const pages = import.meta.glob('./pages/**/*.tsx', { eager: true })
const routes = []
for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1]
  if (!fileName) {
    continue
  }

  const normalizedPathName = fileName.includes('$') ? fileName.replace('$', ':') : fileName.replace(/\/index/, '')

  routes.push({
    path: fileName === 'index' ? '/' : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader,
    action: pages[path]?.action,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  })
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: routes.map(({ Element, ErrorBoundary, ...rest }) => ({
      ...rest,
      element: <Element />,
      ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
    })),
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
