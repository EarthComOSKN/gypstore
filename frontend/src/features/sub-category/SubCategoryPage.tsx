import { useRouter } from 'next/dist/client/router'

import { Footer } from '../../component/Footer'
import { Navbar } from '../navigation/Navbar'

export const SubCategoryPage = () => {
  const router = useRouter()
  if (!router) return null

  console.log(router.query)
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  )
}
