import { useCategory } from "../../context/category"
import { useMarca } from "../../context/marca"
import { useProduto } from "../../context/produto"
import { Chart }  from "../../components"
import { Container, Select, Option, Label } from "./styles.jsx"
import { useEffect, useState } from "react"

const Reports = () => {
  const { produto } = useProduto()
  const { category } = useCategory()
  const { marca } = useMarca()
  const [selectCategory, setSelectCategory] = useState(category[0])
  const [selectProduto, setSelectProduto] = useState(() => {
    return produto.filter(a => a.category === selectCategory)[0]
  })
  const [selectMarca, setSelectMarca] = useState(() => {
    return marca.filter(a => a.produto === selectProduto.name)[0].name
  })


  useEffect(()=> {
    setSelectProduto(produto.filter(a => a.category === selectCategory)[0])
    setSelectMarca(marca.filter(a => a.produto === selectProduto.name)[0].name)
  }, [selectCategory])

  useEffect(()=> {
    setSelectMarca(marca.filter(a => a.produto === selectProduto.name)[0].name)
  }, [selectProduto])

  return (
    <>
    <Container>

      <div>
        <Label htmlFor="category"> category </Label>
        <Select id="category" name="category" onChange={(e) => setSelectCategory(e.target.value)}>
          {category.map((a) =>( <Option key={a} value={a}> {a} </Option> ) )}
        </Select>
      </div>

      <div>
        <Label htmlFor="produtos"> produto </Label>
        <Select id="produtos" name="produtos" onChange={(e) => setSelectProduto(e.target.value)}>
          {produto.filter(a => a.category == selectCategory).map((a) =>( <Option key={a.name} value={a.name}> {a.name} </Option> ) )}
        </Select>
      </div>

      <div>
        <Label htmlFor="marca"> marca </Label>
        <Select id="marca" name="marca" onChange={(e) => setSelectMarca(e.target.value)}>
          {marca.filter(a => a.produto == selectProduto.name).map((a) =>( <Option key={a.name} value={a.name}> {a.name} </Option> ) )}
        </Select>
      </div>

    </Container>

      <Chart  data={marca.find(a => a.name == selectMarca).data}/>
    </>
  )
}

export default Reports 