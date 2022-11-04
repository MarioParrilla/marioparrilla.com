const ImageCard = (icon: { icon: string; alt: string; title: string; }) => {

    return (
        <div className='flex flex-col rounded-2xl border mb-5 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white bg-white min-[320px]:h-32 md:h-40 lg:h-48  min-[320px]:w-32 md:w-40 lg:w-48 px-2'>
            <img className='min-[320px]:h-16 md:h-36 mx-auto my-auto' src={icon.icon} alt={icon.alt} />
            <div className="text-center dark:bg-white bg-black dark:text-black text-white font-bold rounded-full mb-2">
                <h1 className="">
                    {icon.title}
                </h1>
            </div>
        </div>
    );
}

export default ImageCard;