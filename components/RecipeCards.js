import Image from "next/image"



export default function RecipeCard({recipe}){

  const {titlebig, ingredients} = recipe.fields
  const {id} = recipe.sys
  const featuredImageUrl = recipe.fields.featuredImage.fields.file.url
  
    return(
    <div key={id}>
        <Image src={'https:' + featuredImageUrl} width={500} height={500} />
          <h2>{ titlebig}</h2>
          <p>{ ingredients}</p>
        </div>
    )
}