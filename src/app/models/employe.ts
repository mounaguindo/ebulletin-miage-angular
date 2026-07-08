export interface Employe {

  id: number;

  matricule: string;

  nom: string;

  prenom: string;

  email: string;

  poste: string;

  departement: string;

  salaireBrut: number;

  dateEmbauche: string;

  actif: boolean;

}


// DTO utilisé lors de la création ou de la modification
export type EmployeDTO = Omit<Employe, 'id'> & {
  id?: number;
};