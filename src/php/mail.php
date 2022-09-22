<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <title>Envoi d'un message par formulaire</title>
</head>

<body>
    <?php
    $body = ["From :", $_POST['email'], "\n", $_POST['message']];

    $send = implode("\n", $body);

    $retour = mail(
        'kevin.granier@gmail.com',
        $_POST['subject'],
        $send,
        'From: webmaster@monsite.fr'
    );

    if ($retour)
        $messageSend = true;
    

    ?>
    
    <script>
        const messageSend = "<?php echo $messageSend ?>"
        
        if (messageSend) {
            window.history.back()
        }
    </script>
    <script src="./src/javascript/send.js"></script>
</body>

</html>