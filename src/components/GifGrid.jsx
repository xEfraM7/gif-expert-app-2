
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

//no colocar funciones dentro un functional component por que ralentiza la renderizacion
export const GifGrid = ({category}) => {

    const {images,isLoading } = useFetchGifs(category);

    return (
    <>
    <h3>{category}</h3>
    {

        isLoading
        ? (<h2>cargando...</h2>)
        : null

    }

        <div className="card-grid">
        {
            images.map((image) =>(
            <GifGridItem 
                key={image.id}
                {...image}
            />
            ))
        }
        </div>
    </>
  )
}
