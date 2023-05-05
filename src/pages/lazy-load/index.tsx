import { Suspense, lazy } from 'react'
import { SpinnerCircular } from 'spinners-react'

const wait = async (ms: number) => new Promise((res) => setTimeout(res, ms))

// eslint-disable-next-line import/no-unresolved
const ProgressBar = lazy(() => Promise.all([import('../progress-bar'), wait(3000)]).then(([imp]) => imp))

const LazyLoad = () => {
  return (
    <div className="container w-full h-full">
      <Suspense fallback={<SpinnerCircular color="blue" secondaryColor="grey" />}>
        <ProgressBar />
      </Suspense>
    </div>
  )
}

export default LazyLoad
