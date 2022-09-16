import  styled  from "styled-components"
import { catergories } from "../data"
import { tablet } from "../responsive"
import CategoryItem from "./CategoryItem"


const Container=styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
    ${tablet({padding:"0px", flexDirection:"column"})}
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