import React, { useState } from 'react';

interface Props {
  isOpen: boolean
  onRequestClose: () => void
}

const SubscriptionModal = ({ isOpen, onRequestClose }: Props) => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async () => {
    // Aquí deberías implementar la lógica de suscripción real utilizando una pasarela de pago.
    // Esto implica procesar la tarjeta de crédito y realizar una transacción real.
    // Esta implementación es solo una maqueta y no maneja pagos reales.

    // Después de una suscripción exitosa, puedes marcarla como completada.
    setSubscribed(true);
    setTimeout(() => {
      onRequestClose(); 
    }, 2000);
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div className="modal-container bg-white w-96 p-4 rounded-lg shadow-lg z-10">
        {subscribed ? (
          <div>
            <p className="text-xl font-semibold">¡Suscripción completa!</p>
            <p>Tu suscripción ha sido procesada con éxito.</p>
            <button
              onClick={onRequestClose}
              className="bg-blue text-white p-2 rounded-md mt-4 hover:bg-blue-600 transition duration-300"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <div>
            <p className="text-xl font-semibold mb-4">Suscripción a nuestro servicio</p>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-2 mb-2 border rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Número de tarjeta"
              className="w-full p-2 mb-2 border rounded-md"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <div className="flex">
              <input
                type="text"
                placeholder="MM/AA"
                className="w-1/2 p-2 mb-2 mr-2 border rounded-md"
                value={expiration}
                onChange={(e) => setExpiration(e.target.value)}
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-1/2 p-2 mb-2 border rounded-md"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
            <button
              onClick={handleSubscribe}
              className="mr-6 bg-blue text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Suscribirse
            </button>
            <button
              onClick={onRequestClose}
              className="bg-gray-300 text-gray-700 p-2 rounded-md mt-4 hover:bg-gray-400 transition duration-300"
            >
              Cancelar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionModal;
