import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function tabela() {
  return (
    <div>
    <img className="imagemA" src="https://st.depositphotos.com/5183619/58178/v/450/depositphotos_581781294-stock-illustration-june-2023-calendar-leaf-vector.jpg"></img>
    <p>*No gráfico abaixo 👇 podemos analisar que os casos foram de maior número em 2022 e em 2020 com 4 vítimas cada ano*</p>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>TOP 10</th>
          <th>Data Acontecimento</th>
          <th>Vítimas</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>15/10/2022</td>
          <td>4</td>
        </tr>
        <tr>
          <td>2</td>
          <td>21/12/2020</td>
          <td>4</td>
        </tr>
        <tr>
          <td>3</td>
          <td>15/3/2020</td>
          <td>4</td>
        </tr>
        <tr>
          <td>4</td>
          <td>15/3/2021</td>
          <td>3</td>
        </tr>
        <tr>
          <td>5</td>
          <td>17/4/2020</td>
          <td>3</td>
        </tr>
        <tr>
          <td>6</td>
          <td>28/4/2019</td>
          <td>3</td>
        </tr>
        <tr>
          <td>7</td>
          <td>18/5/2021</td>
          <td>3</td>
        </tr>
        <tr>
          <td>8</td>
          <td>17/5/2018</td>
          <td>3</td>
        </tr>
        <tr>
          <td>9</td>
          <td>21/5/2019</td>
          <td>3</td>
        </tr>
        <tr>
          <td>10</td>
          <td>24/12/2019</td>
          <td>3</td>
        </tr>
      </tbody>
    </Table>

    </div>
  );
}

export default tabela;