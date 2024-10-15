import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'components/Forms/Form';
import HeaderStats from 'components/Headers/HeaderStats';
import { useForm } from 'react-hook-form';
import { FaStar } from 'react-icons/fa';
import { MdDownload, MdUpdate } from 'react-icons/md';
import { TiArrowBack } from 'react-icons/ti';
import { toast } from 'sonner';
import { LoadingComponent } from 'components/Loading/Loading';
import { usePostPutMutation } from 'hooks/queries/usePostPutMutation';
import { IconExcercise } from 'components/Icons/IconExercice';
import { Link } from 'react-router-dom';
import { IconLevel } from 'components/Icons/IconLevel';
import { AuthContext } from 'store/authContext';
import { validationExercises } from 'utils/verificationExercises';
import { generateFormFields } from 'utils/funtions';

export const UserDetail = ({ user, close, errorUser, clans, searchUser }) => {
  const formFields = generateFormFields(user, clans);
  const [selectedClan, setSelectedClan] = useState('');
  const { user: userLogin } = useContext(AuthContext);

  const { mutate: updateUse, isPending } = usePostPutMutation(
    `https://la-esperanza-backe-end.onrender.com/users/${user.id}`,
    {
      method: 'PUT',
      onSuccess: () => {
        toast.success('Usuario actualizado');
        close();
      },
      onError: () => {
        toast.error('Error al actualizar el usuario');
      },
    },
  );

  const handleUpdateStudent = data => {
    data.clanId = selectedClan;
    updateUse({ data });
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: user,
  });

  useEffect(() => {
    reset(user);
  }, [user, reset]);

  const [exerciseScores, setExerciseScores] = useState(() =>
    user.studentMissions.reduce((acc, mission) => {
      mission.studentLevels.forEach(level => {
        level.studentExercises.forEach(exercise => {
          acc[exercise.id] = exercise.score;
        });
      });
      return acc;
    }, {}),
  );

  const handleScoreChange = (exerciseId, newScore) => {
    setExerciseScores(prevScores => ({
      ...prevScores,
      [exerciseId]: newScore,
    }));
  };

  const { mutate: updateScore } = usePostPutMutation(
    exerciseId => `https://la-esperanza-backe-end.onrender.com/users/updateExerciseScore/${exerciseId}`,
    {
      method: 'PUT',
      onSuccess: () => {
        toast.success('Score actualizado');
      },
      onError: error => {
        toast.error('Error al actualizar el score: ' + error);
      },
    },
  );

  const handleUpdateExerciseScore = exerciseId => {
    const newScore = exerciseScores[exerciseId];

    updateScore({
      data: { newScore: +newScore, exerciseId: exerciseId },
      exerciseId: exerciseId, // Pasar el exerciseId directamente
    });
    searchUser({ data: { by: 'userName' }, exerciseId: user.userName });
  };

  return (
    <div className="flex-col items-center justify-center">
      {isPending && <LoadingComponent />}
      {user?.rol?.name !== 'student' && (
        <div
          className="flex items-center justify-center bg-white rounded-md shadow-md w-full cursor-pointer"
          onClick={close}
        >
          <TiArrowBack color="green" />
          <span className="text-lg font-semibold ml-4">Volver atrás</span>
        </div>
      )}
      <div className="py-4 mx-auto">
        <div className="flex">
          <div className="w-1/2 md:w-2/3">
            <Form
              onSubmit={handleUpdateStudent}
              handleSubmit={handleSubmit}
              error={errorUser}
              errors={errors}
              setSelectedClan={setSelectedClan}
              selectedClan={selectedClan}
              register={register}
              formFields={formFields}
              user={user}
            />
          </div>

          <div className="w-1/2 md:w-1/3 flex flex-col px-4">
            {user.studentMissions.map((mission, missionIndex) => {
              return (
                <div key={mission.id} className="p-1">
                  <HeaderStats
                    title={mission?.mission?.name}
                    bgColor="bg-gray-700"
                    color="white"
                    extra={() => (
                      <div className="flex items-center justify-center w-full gap-2">
                        <FaStar color="yellow" size={'1em'} />
                        <span className="text-white font-bold text-lg">{mission.score}</span>
                      </div>
                    )}
                  />
                  {mission.studentLevels
                    .map((level, index) => ({ ...level, originalIndex: index }))
                    .sort((a, b) => a.level?.name.localeCompare(b.level?.name))
                    .map(({ originalIndex, ...level }) => (
                      <div key={level.id} className="rounded-sm my-1 p-2 bg-gray-500 text-white font-semibold">
                        <div className="flex justify-between">
                          <div className="font-bold">{level?.level?.name}</div>
                          {validationExercises(level.studentExercises) === true ? (
                            <div>
                              <IconLevel id={level?.level?.name} />{' '}
                            </div>
                          ) : null}
                        </div>
                        <div className="bg-gray-100 rounded-md p-2 my-2">
                          <div className="flex w-full justify-between text-gray-800">
                            <div className="font-bold text-gray-800">{level.level.title}</div>
                            <div className="font-bold text-gray-800">{level.score}</div>
                          </div>
                          {level.studentExercises
                            .map((exercise, index) => ({ ...exercise, originalIndex: index }))
                            .sort((a, b) => a.exercise?.name.localeCompare(b.exercise?.name))
                            .map(({ originalIndex, ...exercise }) => (
                              <div key={exercise.id} className="flex items-center my-1">
                                <span className="w-1/2 text-gray-800">{exercise?.exercise?.name}</span>
                                <input
                                  value={exerciseScores[exercise.id]}
                                  onChange={e => handleScoreChange(exercise.id, e.target.value)}
                                  type="text"
                                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                  placeholder="4.0"
                                />
                                {exercise?.urlFile !== 'empty' && (
                                  <Link
                                    target="_blank"
                                    to={exercise?.urlFile}
                                    className="underline-none text-xl bg-emerald-500 text-white font-bold py-2 px-4 rounded ml-2"
                                  >
                                    <MdDownload size={15} className="inline-block mr-1" />
                                  </Link>
                                )}
                                {exerciseScores[exercise?.id] !== 0 ? (
                                  <IconExcercise ejercicio={originalIndex} />
                                ) : (
                                  <IconExcercise ejercicio={0} />
                                )}

                                {userLogin?.rol?.name === 'teacher' && (
                                  <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                                    onClick={() => handleUpdateExerciseScore(exercise?.id)}
                                  >
                                    <MdUpdate className="inline-block mr-1" />
                                  </button>
                                )}
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
