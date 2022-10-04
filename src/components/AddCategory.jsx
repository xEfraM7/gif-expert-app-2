import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('')
    //funcion para escribir en el input
    const onInputChange = ({target}) => {
        setinputValue(target.value);
    }
    
    const onSubmit = (event) => {
        //prevenir comportamiento default de un form
        event.preventDefault();

        //verificamos que sea menor o igual a uno para no ejecutar el input
        if(inputValue.trim().length <= 1) return;

        //agregamos la categoria al inicio del arrray
        // setCategories(categories=>[inputValue,...categories])

        //segunda manera de hacerlo
        onNewCategory(inputValue.trim());


        //limpiamos el input
        setinputValue('');
    }

  return (
     <form onSubmit={onSubmit}>
        <input type="text" placeholder="Buscar Gifs" value={inputValue} onChange={onInputChange}/>
    </form>
  )
}
