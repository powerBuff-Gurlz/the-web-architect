// pages/index.tsx
import { GetServerSideProps, NextPage } from 'next'
import { Lauch } from '@/model/Launch'
import Layout from '@/layouts/layout'
import axios from 'axios'

interface Props {
  launch: Lauch
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { data } = await axios.get('https://api.spacexdata.com/v3/launches/next')
  const nextLaunch = data
  return {
    props: {
      launch: {
        mission: nextLaunch.mission_name,
        site: nextLaunch.launch_site.site_name_long,
        timestamp: nextLaunch.launch_date_unix * 1000,
        rocket: nextLaunch.rocket.rocket_name,
      },
    },
  }
}

const IndexPage: NextPage<Props> = ({ launch }) => {
  const date = new Date(launch.timestamp)
  return (
    <Layout title="The Web Architech">
      <h1>Next SpaceX Launch: {launch.mission}</h1>
      <p>
        {launch.rocket} will take off from {launch.site} on {date.toDateString()}
      </p>
    </Layout>
  )
}
export default IndexPage
