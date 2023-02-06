import type { NextPage } from 'next'
import DemoWidget from '../components/demo'

const Home: NextPage = () => {
  return (
    <div className='p-4 h-80'>
      <DemoWidget />
    </div>
  )
}

export default Home
