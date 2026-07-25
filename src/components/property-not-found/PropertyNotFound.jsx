// components/empty-state/NotFound.jsx

const PropertyNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <img
                src="/not-found.webp"
                alt="No properties found"
                className="w-64 mb-6"
            />

            <h2 className="text-3xl font-fredoka font-semibold">
                No Properties Found
            </h2>

            <p className="mt-3 text-center text-gray-500">
                Try adjusting your search or filters.
            </p>
        </div>
    );
};

export default PropertyNotFound;