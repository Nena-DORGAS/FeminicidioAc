import NavProjeto from '../components/NavProjeto'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import CarrosselSobre from '../components/CarrosselSobre';





function Sobre() {
  return (
    <>
      <div>
      <NavProjeto/>
      <CarrosselSobre/>
      <br/>
      <h1>Sobre Nós</h1>
      <p>
      Nosso site tem como propósito ser uma plataforma online dedicada ao combate à violência de gênero e à promoção da igualdade e dignidade das mulheres. Este site oferece uma variedade de recursos e informações para conscientizar e educar o público sobre o feminicídio e suas causas.   No site, você pode encontrar estatísticas atualizadas, artigos, ativistas e sobreviventes. Há também informações sobre os direitos das mulheres,  sinais de violência doméstica e orientações sobre como denunciar um incidente de violência. O site também oferece apoio emocional e jurídico a mulheres em situação de violência, conectando-as a organizações locais e redes de apoio. O site também incentiva a participação em campanhas e eventos para aumentar a conscientização sobre o feminicídio e mobilizar energia.  Através de  uma abordagem inclusiva e transversal, procuramos envolver os homens, as instituições e a sociedade como um todo na luta contra a violência de género e promover uma cultura de respeito, igualdade e segurança para todas as mulheres.
      </p>
      <br/>
          <Footer/>
      </div>
    </>
  )
}

export default Sobre