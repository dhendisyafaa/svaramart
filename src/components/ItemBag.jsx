// import checkbox from '../../public/icon/checkbox.svg'
import ProductInBag from './ProductInBag'

const ItemBag = () => {
    return (
        <div className="m-3 p-3 shadow-md">
            <div className="flex gap-2 mb-3">
                <input type="checkbox" name="" id="" />
                <div className='leading-4 text-sm'>
                    <p className='font-semibold'>nama tokonya disini</p>
                    <small className='font-light text-xs'>Jakarta Selatan</small>
                </div>
            </div>
            <ProductInBag />
            <ProductInBag />
            <ProductInBag />
        </div>
    )
}

export default ItemBag