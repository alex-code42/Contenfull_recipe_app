import  { createClient } from 'contentful'
import RecipeCard from '../components/RecipeCards'



export async function getStaticProps() {
  //connect to contentful
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })

  //get recipes
  const res = await client.getEntries({ content_type: 'blogPost' })

  return {
    props: {
      recipes: res.items
    }
  }
}

export default function Recipes({ recipes }) {
  console.log(recipes);

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} />
      ))}
    </div>
  );
}
