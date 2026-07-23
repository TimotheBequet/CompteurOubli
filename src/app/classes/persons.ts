export interface Persons {
    nom: string;
    prenom: string;
    photoUrl: string | null;
    score: number;
}

export interface Saison {
    id: number;
    libelle: string;
    estCourante: boolean;
}
