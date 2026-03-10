import UrlForm from "../components/UrlForm"

const HomePage = () => {


    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">

                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    URL Shortener
                </h1>
                <UrlForm />

                
            </div>
        </div>

    )
}

export default HomePage