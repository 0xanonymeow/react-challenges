import { Link } from 'react-router-dom'

const pages = import.meta.glob('./**/*.tsx', { eager: true })
const routes = []
for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/(.*)\.tsx$/)?.[1]
  if (!fileName) {
    continue
  }

  const normalizedPathName = fileName.includes('$') ? fileName.replace('$', ':') : fileName.replace(/\/index/, '')

  routes.push({
    path: fileName === 'index' ? '/' : `/${normalizedPathName.toLowerCase()}`,
  })
}

const Home = () => {
  return (
    <div className="container flex flex-col">
      {routes.map(({ path }, i) => (
        <Link key={i} to={path}>
          {path}
        </Link>
      ))}
    </div>
  )
}

export default Home
