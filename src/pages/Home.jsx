import Carrossel from '../components/Carrossel'
import NavProjeto from '../components/NavProjeto'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'

import Footer from '../components/Footer';
import Table from '../components/tabela';
import Table2 from '../components/tabela2';
import Table3 from '../components/tabela3';
import Table4 from '../components/tabela4';
import Table5 from '../components/tabela5';

function Home() {
    return (
      <>
        <div>
          <NavProjeto/>

          <Carrossel/>
          <br/>
          
          <Footer/>
          <br/>

          <Table/>

          <Table2/>

          <Table3/>

          <Table4/>

          <Table5/>


        </div>

      </>
    )
  }
  
  export default Home