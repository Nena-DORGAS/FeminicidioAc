import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


function tabela() {
  return (
    <div>
    <img className="imagemA"src="https://4.bp.blogspot.com/-IdiNJ4AztRE/TbkU3muKC9I/AAAAAAAAcEM/t5Be_aG5JG8/s1600/1%2Ba%2Ba%2Ba%2Ba%2Bemp%2Bsofrendo.jpg"></img>
    <p>*No gráfico abaixo 👇 podemos analisar que na profissão de empregada doméstica é onde o feminicidio mais acontece, com 347 casos*</p>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>TOP 10</th>
          <th>Profissão</th>
          <th>Vitimas</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Prendas domésticas</td>
          <td>347</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Não informada</td>
          <td>105</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Estudante</td>
          <td>91</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Desempregado</td>
          <td>70</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Aposentado</td>
          <td>22</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Autonomo</td>
          <td>21</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Auxiliar de limpeza</td>
          <td>18</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Balconista</td>
          <td>17</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Empregado doméstico</td>
          <td>17</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Comerciante</td>
          <td>16</td>
        </tr>
      </tbody>
    </Table>

    </div>
  );
}

export default tabela;