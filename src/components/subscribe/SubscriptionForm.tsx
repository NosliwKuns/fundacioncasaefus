import React, { useState } from 'react';
import SubscriptionModal from './SubscritionModal';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes simular una suscripción exitosa.
    // En una implementación real, se conectaría a una pasarela de pago y se manejarían los detalles del pago.

    setSubscribed(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-md w-full flex mx-auto p-4 border rounded-md shadow-md">
      {subscribed ? (
        <p className="text-green-500 text-xl font-semibold">¡Gracias por suscribirte!</p>
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <form className="w-full" onSubmit={handleSubscribe}>
            <input
              className="w-full p-2 mb-2 border rounded-md"
              type="email"
              placeholder="Tu dirección de correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>
          <button
            onClick={openModal}
            className="mt-4 bg-blue text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Suscribirse
          </button>
        </div>
      )}
      {isModalOpen && (
        <SubscriptionModal isOpen={isModalOpen} onRequestClose={closeModal} />
      )}
    </div>
  );
};

export default SubscriptionForm;
