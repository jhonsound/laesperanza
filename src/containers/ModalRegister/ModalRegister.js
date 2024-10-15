import React from 'react';
import { ModalSimple } from '../../components/Modals/simple';

export const ModalRegister = ({ showModal, setShowModal, missions, selectedMission }) => {
    return (
        <>
            {showModal && (
                <ModalSimple setShowModal={setShowModal} title="Hi!">
                    <div className="container p-2">
                        <p className="mx-4">Por favor, regístrate para continuar.</p>
                        <div className="w-full flex px-3 justify-between">
                            <button
                                className="bg-indigo-500 hover:bg-indigo-600 text-white ftext-sm font-normal py-2 px-4 rounded-lg mt-4"
                                onClick={() => {
                                    const mission = missions.find(
                                        (m) => m.id === selectedMission
                                    );
                                    mission.isRegistered = true;
                                    setShowModal(false);
                                }}
                            >
                                Registrar
                            </button>
                            <button
                                className="bg-blueGray-600 text-white text-sm font-normal py-2 px-4 rounded-lg mt-4"
                                onClick={() => {
                                    setShowModal(false);
                                }}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </ModalSimple>
            )}
        </>
    );
};
