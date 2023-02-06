const validateEvenements = (evenements) => {
  if (
    evenements.name === null ||
    evenements.name.length < 2 ||
    typeof evenements.name !== "string"
  ) {
    return {
      status: false,
      errorMessage: "Minimum 2 charactere dans le champ nom",
    };
  }
  if (evenements.photo.length === 0) {
    return {
      status: false,
      errorMessage: "Veuillez inserez une url de photo",
    };
  }
  if (evenements.description.length === 0) {
    return {
      status: false,
      errorMessage: "Le champ description est vide",
    };
  }
  return { status: true };
};

export default validateEvenements;
