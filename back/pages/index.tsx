import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        redirect: {
            destination: '/en/',
            permanent: true,
        },
    }
}

const HomePage = () => null

export default HomePage