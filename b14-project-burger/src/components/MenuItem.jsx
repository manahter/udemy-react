export const MenuItem = ({ image, name, content, price }) => {
    return (
        <div className='menuItem'>
            <div style={{ backgroundImage: `url(${image})` }} ></div>
            <h1>{name} </h1>
            <h6>{content} </h6>
            <p><i style={{ color: 'red' }}>{price} TL</i></p>
        </div >
    )
}
