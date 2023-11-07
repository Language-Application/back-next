import Link from 'next/link'

export default function Bottom() {
    return (
        <div className="bg-gray-800 py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="flex space-x-4">
                    <Link href="/">
                        <a className="text-gray-300 hover:text-white">Accueil</a>
                    </Link>
                    <Link href="/about">
                        <a className="text-gray-300 hover:text-white">À propos</a>
                    </Link>
                    <Link href="/contact">
                        <a className="text-gray-300 hover:text-white">Contact</a>
                    </Link>
                </div>
                <div className="text-gray-300">&copy; 2021 MonSite.com</div>
            </div>
        </div>
    )
}
