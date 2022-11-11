const Tag = (data: { ttile: string }) => {
    return (
        <h1 className='bg-orange-100 text-orange-500 border-orange-500 border-2 rounded-md px-1 ml-1 text-center text-sm my-auto font-bold '>
            {data.ttile}
        </h1>
    );
}

export default Tag;