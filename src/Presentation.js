import './Presentation.css';

export default function Presentation() {
    return (
        <section className="presentation">
            <div className="title_svg">
                <h1 className="title_presentation">Présentation</h1>
                <div className="svg_flower"></div>
            </div>
            <div className="flex_presentation">
                <div className="picture_presentation"></div>
                <div className="text_container"> 
                    <p className="description_presentation">Salut à tous,<br/><br/>
                    je suis Nami, et je suis super heureuse de vous proposer mon cours de japonais. <br/>
                    Je suis relativement nouvelle en Bretagne, et je trouve cette région et sa culture à la fois magnifiques et fascinantes. <br/><br/>
                    En tant qu'expatriée au cœur de la Bretagne, j'ai eu la chance de vivre de nombreuses expériences enrichissantes, 
                    et je suis impatiente de vous faire découvrir la beauté de la langue et de la culture japonaises. Rejoignez-moi 
                    pour une aventure d'apprentissage qui vous permettra de mieux comprendre le Japon et de maîtriser sa langue.</p>
                </div>
            </div>
        </section>
    )
}