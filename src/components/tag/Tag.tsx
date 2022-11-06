const Tag = (data: { text: string; }) => {

    return (
        <div className="text-center rounded-full border">
            <p>
                {data.text}
            </p>
        </div>
    );
}

export default Tag;