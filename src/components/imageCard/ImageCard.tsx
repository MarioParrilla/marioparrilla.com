const ImageCard = (icon: { icon: string; alt: string; }, alt: string) => {

    return (
        <div className='flex flex-row rounded-2xl border mb-5 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white bg-white min-[320px]:h-32 md:h-40 lg:h-48  min-[320px]:w-32 md:w-40 lg:w-48 px-2'>
            <img className='h-36 mx-auto my-auto' src={icon.icon} alt={alt} />
        </div>
    );
}

export default ImageCard;