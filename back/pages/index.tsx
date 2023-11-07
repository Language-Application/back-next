import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        redirect: {
            destination: '/fr/',
            permanent: true,
        },
    };
};

const HomePage = () => null;

export default HomePage;
