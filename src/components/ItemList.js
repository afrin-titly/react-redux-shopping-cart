import Item from "./Item"

export default function ItemList({items, handleAddToCart}) {
  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
      {
        items.map(item=>(
          <Item key={item.id}
            item={item}
            handleAddToCart={handleAddToCart} />
        ))
      }
    </div>
  )
}