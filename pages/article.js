import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Article = () => {
    return (
        <>
            <Head>
                <title>Artikel</title>
            </Head>

            <nav>
                <Navbar />
            </nav>

            <main>

            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Article;