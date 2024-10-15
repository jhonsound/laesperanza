export const generateFormFields = (user, clans) => {
  const clanOptions = clans?.map(clan => ({
    id: clan.id,
    name: clan.name,
  }));

  const formFields = [
    { id: 'name', label: 'Nombre', type: 'text', defaultValue: user?.name },
    { id: 'userName', label: 'Usuario', type: 'text', defaultValue: user.userName },
    { id: 'identityCard', label: 'Cédula', type: 'text', defaultValue: user?.identityCard },
    { id: 'score', label: 'Puntuación', type: 'number', defaultValue: user?.score },
    { id: 'clanId', label: 'Clan', type: 'select', defaultValue: user?.clan?.id, options: clanOptions },
    { id: 'rolName', label: 'Rol', type: 'text', defaultValue: user?.rol?.name },
  ];

  return formFields;
};
