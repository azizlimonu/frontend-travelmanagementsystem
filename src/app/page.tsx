import AvailableServices from '@/components/Home/AvailableServices'
import Banner from '@/components/Home/Banner'
import ClientReview from '@/components/Home/ClientReview'
import Survey from '@/components/Home/Survey'
import UpcomingTour from '@/components/Home/UpcomingTour'
import Navbar from '@/components/Layouts/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='overflow-x-hidden'>
      <Navbar />
      <Banner />
      <AvailableServices />
      <UpcomingTour />
      <Survey />
      <ClientReview />
    </main>
  )
}
