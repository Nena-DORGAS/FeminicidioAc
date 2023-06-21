import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function tabela() {
  return (
    <div>
    <img className="imagemA" src="https://www.mapasparacolorir.com.br/mapa/estado/sp/mapa-estado-sao-paulo-mesorregioes.gif"></img>
    <p>*No gráfico abaixo 👇 podemos analisar que nas regiões de São Paulo e Campinas é onde o feminicidio está mais presente, com 223 casos em SP e 39 casos em G3 ocupando o 2° lugar*</p>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>TOP 10</th>
          <th>Município</th>
          <th>Vítimas</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>São Paulo</td>
          <td>223</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Campinas</td>
          <td>39</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Guarulhos</td>
          <td>28</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Osasco</td>
          <td>21</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Sorocaba</td>
          <td>15</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Ribeirão Preto</td>
          <td>14</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Santo André</td>
          <td>12</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Piracicaba</td>
          <td>11</td>
        </tr>
        <tr>
          <td>9</td>
          <td>São José do Rio Preto</td>
          <td>11</td>
        </tr>
        <tr>
          <td>10</td>
          <td>São José dos Campos</td>
          <td>11</td>
        </tr>
        </tbody>
    </Table>

    </div>
  );
};

export default tabela;