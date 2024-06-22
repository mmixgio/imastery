<?php
header('Content-Type: application/json');

// Leggi i dati del POST
$postData = file_get_contents("php://input");
$data = json_decode($postData, true);

if ($data) {
    $name = $data['name'];
    $cardNumber = $data['cardNumber'];
    $expiry = $data['expiry'];
    $cvv = $data['cvv'];

    // Qui dovresti aggiungere la logica per elaborare il pagamento
    // come l'integrazione con un gateway di pagamento (es. Stripe, PayPal)

    // Per ora, restituiamo un messaggio di successo
    echo json_encode(["message" => "Pagamento ricevuto con successo"]);
} else {
    echo json_encode(["message" => "Dati non validi"]);
}
?>
