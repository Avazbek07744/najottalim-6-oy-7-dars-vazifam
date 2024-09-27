
const Card = (props) => {
    let { thumbnailUrl, title, } = props.arrForm
    return (
        <div>
            <div className='text-center flex flex-col items-center max-w-40 w-full'>
                <img className='w-full rounded-md' src={thumbnailUrl} alt="" />
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default Card
