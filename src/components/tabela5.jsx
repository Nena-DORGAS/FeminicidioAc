import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function tabela() {
  return (
    <div>
    <img className="imagemA" src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/3-feminicidio.jpg"></img>
    <p>*No gráfico abaixo 👇 podemos analisar que mulheres que não tiveram as idades divulgadas ou analisadas, e pessoas com mais de 40 anos sofreram mais na mão do feminicidio*</p>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>TOP 10</th>
          <th>Data Nascimento</th>
          <th>Vítimas</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Null</td>
          <td>11</td>
        </tr>
        <tr>
          <td>2</td>
          <td>3/11/1976</td>
          <td>3</td>
        </tr>
        <tr>
          <td>3</td>
          <td>21/12/1983</td>
          <td>2</td>
        </tr>
        <tr>
          <td>4</td>
          <td>23/12/1987</td>
          <td>2</td>
        </tr>
        <tr>
          <td>5</td>
          <td>16/2/1981</td>
          <td>2</td>
        </tr>
        <tr>
          <td>6</td>
          <td>16/11/2001</td>
          <td>2</td>
        </tr>
        <tr>
          <td>7</td>
          <td>15/1/1993</td>
          <td>2</td>
        </tr>
        <tr>
          <td>8</td>
          <td>29/10/1994</td>
          <td>2</td>
        </tr>
        <tr>
          <td>9</td>
          <td>6/2/1992</td>
          <td>2</td>
        </tr>
        <tr>
          <td>10</td>
          <td>17/3/1976</td>
          <td>2</td>
        </tr>
      </tbody>
    </Table>

</div>
  );
}

export default tabela;