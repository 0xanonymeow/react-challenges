import { Link } from 'react-router-dom'

const excluded = ['url-parameters-two', 'not-found']
const pages = import.meta.glob('./**/*.tsx', { eager: true })
const routes = []
for (const path of Object.keys(pages)) {
  if (excluded.filter((_path) => path.includes(_path)).length) continue
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
