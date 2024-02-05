import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">

            <div className="white_hermine"></div>

            <div className="footer_part_one">
                <div className="contact_footer">
                    <a className="tel_footer" href="#">06 06 XX XX XX</a>
                    <a className="mail_footer" href="#">namienbretagne@gmail.com</a>
                </div>
                <div className="social_networks">
                    <a className="facebook" href="#"></a>
                    <a className="twitter" href="#"></a>
                    <a className="linkedin" href="#"></a>
                </div>
            </div>

            <div className="footer_part_two">
                <p className="info">Plateforme à télécharger pour les cours en ligne :</p>
                <div className="download_platform">
                    <a className="whatsapp" href="#"></a>
                    <a className="messenger" href="#"></a>
                </div>
                <div className="mentions">
                    <p className="mentions_p">Huluette Design&copy; 2024 - Nami en Bretagne</p>
                    <a className="mentions_legales" href="#">Mentions legales</a>
                </div>
            </div>
        </footer>
    )
}