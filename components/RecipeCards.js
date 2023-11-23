import Image from "next/image"

export default function RecipeCard({recipe}){
    console.log('https:' + recipe.fields.featuredImage.fields.file.url)
    return(
    <div key={recipe.sys.id}>
        <Image src={'https:' + recipe.fields.featuredImage.fields.file.url} width={500} height={500} />
          <h2>{ recipe.fields.titlebig}</h2>
          <p>{ recipe.fields.ingredients}</p>
        </div>
    )
}