<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Eduardo Montanha</title>
        
        <meta content="IE=edge" http-equiv="X-UA-Compatible">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="robots" content="index,follow">
        <meta name="keywords" content="portfolio, developer, front end, martial art, music, musician">
        <meta name="author" content="Eduardo Montanha">
        
        <link rel="stylesheet" href="css/reset.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico">
        
        <script src="assets/js/jquery.js"></script>
        <script src="js/index.js"></script>
        
        <!-- Linked Data with JSON-LD -->
        <script type="application/ld+json">
            {
                "@context": "http://schema.org",
                "@type": "Person",
                "name": "Eduardo Montanha",
                "url": "http://eduardomontanha.com/",
                "sameAs": [
                    "https://www.linkedin.com/in/eduardomontanha/",
                    "https://www.facebook.com/eduardo.montanha",
                    "https://github.com/EduardoMontanha",
                    "https://www.youtube.com/channel/UCrbZZygou5Fc0GdzcwdeCog"
                ]
            }
        </script>
    </head>
    <body>
        <header>
            <img id="logo" src="img/mountain-logo.svg" alt="Mountain Logo">
            <h1>Eduardo Montanha</h1>
            
            <div>
                <a href="#!" id="burger">&#9776;</a>
                <nav id="menu">
                    <ul>
                        <li><a href="#home" title="Home" class="menuItem">Home</a></li>
                        <li><a href="#about" title="About" class="menuItem">About</a></li>
                        <li><a href="#it" title="Developer Portfolio" class="menuItem">Developer Portfolio</a></li>
                        <li><a href="#mu" title="Music Portfolio" class="menuItem">Music Portfolio</a></li>
                        <li><a href="#ma" title="Martial Arts Portfolio" class="menuItem">Martial Arts Portfolio</a></li>
                        <li><a href="#contact" title="Contact" class="menuItem">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        
        <main>
            <section id="home">
                <div class="container">
                    <h2>Hi, I'm Eduardo</h2>
                    <h3>
                        Looking for an experienced front-end developer, musician or
                        even a personal defense instructor.
                    </h3>
                    <a href="#about">Know More</a>
                </div>
            </section>
            
            <section id="about">
                
            </section>
            
            <section id="it">
                
            </section>
            
            <section id="mu">
                
            </section>
            
            <section id="ma">
                
            </section>
            
            <section id="contact">
                <h2>Contact</h2>
                
                <form method="post" action="<? $PHP_SELF; ?>">
                    <input name="name" type="text" placeholder="Name" required>
                    <input name="email" type="email" placeholder="Email" required>
                    <input name="subject" type="text" placeholder="Subject" required>
                    <textarea name="message" placeholder="Message" required></textarea>
                    
                    <input name="send" type="submit" value="Send">
                </form>
                
                <div id="social-media">
                    <ul>
                        <li class="facebook">
                            <a href="https://www.facebook.com/eduardo.montanha" title="Facebook" target="_blank">
                                <img src="img/social-media/facebook.png" alt="Facebook">
                            </a>
                        </li>
                        <li class="linkedin">
                            <a href="https://www.linkedin.com/in/eduardomontanha/" title="LinkedIn" target="_blank">
                                <img src="img/social-media/linkedin.png" alt="LinkedIn">
                            </a>
                        </li>
                        <li class="github">
                            <a href="https://github.com/EduardoMontanha" title="GitHub" target="_blank">
                                <img src="img/social-media/github.png" alt="GitHub">
                            </a>
                        </li>
                        <li class="youtube">
                            <a href="https://www.youtube.com/channel/UCrbZZygou5Fc0GdzcwdeCog" title="YouTube" target="_blank">
                                <img src="img/social-media/youtube.png" alt="YouTube">
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
        
        <footer>
            <h3>&copy; 2017 Eduardo Montanha, All rights reserved.</h3>
        </footer>
    </body>
</html>

<?php
    if (isset($_POST['send'])) {
        
        //Variaveis de POST, Alterar somente se necessário 
        //====================================================
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject']; 
        $message = $_POST['message'];
        //====================================================
        
        //REMETENTE --> ESTE EMAIL TEM QUE SER VALIDO DO DOMINIO
        //==================================================== 
        $email_remetente = "contact@eduardomontanha.com"; // deve ser uma conta de email do seu dominio 
        //====================================================
        
        //Configurações do email, ajustar conforme necessidade
        //==================================================== 
        $email_destinatario = "edumontanha14@gmail.com"; // pode ser qualquer email que receberá as mensagens
        $email_reply = "$email"; 
        $email_assunto = "$subject"; // Este será o assunto da mensagem
        //====================================================
        
        //Monta o Corpo da Mensagem
        //====================================================
        $email_conteudo = "Nome = $name \n"; 
        $email_conteudo .= "Email = $email \n";
        $email_conteudo .= "Mensagem = $message \n"; 
        //====================================================
        
        //Seta os Headers (Alterar somente caso necessario) 
        //==================================================== 
        $email_headers = implode("\n", array("From: $email_remetente", "Reply-To: $email_reply", "Return-Path: $email_remetente", "MIME-Version: 1.0", "X-Priority: 3", "Content-Type: text/html; charset=UTF-8"));
        //====================================================
        
        //Enviando o email 
        //==================================================== 
        if (mail($email_destinatario, $email_assunto, nl2br($email_conteudo), $email_headers)) { 
            echo "</b>E-Mail enviado com sucesso!</b>"; 
        } else { 
            echo "</b>Falha no envio do E-Mail!</b>";
        } 
        //====================================================
    } 
?>