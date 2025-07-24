export default function ProductNotFound() {

return(

<div className="flex flex-col items-center justify-center h-full text-center p-6">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
                        alt="Not Found"
                        className="w-40 h-40 mb-6 opacity-80"
                    />
                    <h1 className="text-4xl font-bold text-red-500 mb-2">Product Not Found</h1>
                    <p className="text-gray-600 text-lg max-w-md">
                        Sorry, the product you're looking for doesn't exist or may have been removed.
                    </p>
                </div>





)




}