import {Component, useState} from "react";
import { AddCategory,GifGrid } from "./components";


export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['One Piece']);
    //funcion para agregar categorias
    const onAddCategory =  (newCategory) => {
        if (categories.includes(newCategory))return;
        setCategories([newCategory,...categories])
    }


    return (
        <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* input  */}
        <AddCategory 
            //setCategories={setCategories}
            // segunda forma de declararlo
            onNewCategory = {onAddCategory}
        />

        {/* listado de tarjetas */}
                {categories.map((category)=>(
                <GifGrid 
                    key={category} 
                    category = {category}
                />))}
        
        {/* gif item */}
        </>
    )

}