import  styled  from "styled-components"
import { catergories } from "../data"
import CategoryItem from "./CategoryItem"


const Container=styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
`

const Categories=()=>{
  return (
    <Container>
      {catergories.map(item=>(
        <CategoryItem item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Categories
