import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"
import { Container } from "./styles"


const Chart = ({ data }) => {

  // example chart
  // const data = [{name: 'January', vendas: 400},{name: 'Frebuary', vendas: 800},
  // {name: 'March', vendas: 200}, {name: 'April', vendas: 200}]
  

  return (
    <>
      <Container>
        Sales By Month
        <LineChart width={1200} height={600} data={data} style={{padding: "10px"}} >
          <CartesianGrid vertical={false} stroke="#ccc"/>
          <Line type="linear" dataKey="vendas" stroke="#8884d8" fill="#8884d8" strokeWidth={2.9} />
          <XAxis dataKey="name"/>
          <YAxis axisLine={false} />
          <Legend iconSize="20"/>
          <Tooltip />
        </LineChart>
      </Container>
    </>
  )
}


export default Chart