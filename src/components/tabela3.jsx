import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function tabela() {
  return (
    <div>
    <img className="imagemA" src="https://img.freepik.com/vetores-premium/mulheres-de-diferentes-racas-juntas-em-um-fundo-abstrato-com-folhas_481273-350.jpg"></img>
    <p>*No gráfico abaixo 👇 podemos analisar que mulheres com a cor da pele branca sofrem mais na mão dos criminosos e em seguida as pessoas com cor de pele pardas com 355 casos*</p>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>TOP 10</th>
          <th>Cor de pele</th>
          <th>Vítimas</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Branca</td>
          <td>557</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Parda</td>
          <td>355</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Preta</td>
          <td>67</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Ignorada</td>
          <td>6</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Amarela</td>
          <td>5</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Outros</td>
          <td>1</td>
        </tr>
      </tbody>
    </Table>

    </div>
  );
}

export default tabela;