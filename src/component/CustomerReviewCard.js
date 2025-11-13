export const CustomerReviewCard = ({ stars, comment, customer, address }) => {
    return (
        <div
            className="flex flex-col justify-center items-center gap-4 w-[380px] lg:w-[70%] 
                        p-6 rounded-2xl border-l-[5px] border-primary 
                        shadow-xl shadow-black/20 
                        hover:bg-primary hover:text-white hover:scale-105 
                        transition duration-300 ease-in-out"
        >
            <h2 className="text-2xl">{stars}</h2>
            <p className="text-center italic">{comment}</p>
            <h3 className="font-bold text-center">
                {customer}, {address}
            </h3>
        </div>
    );
};
