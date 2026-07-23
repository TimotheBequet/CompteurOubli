export interface OubliDetail {
    date: string;
    commentaire: string | null;
}

export interface Persons {
    nom: string;
    prenom: string;
    photoUrl: string | null;
    score: number;
    oublis?: OubliDetail[];
}

export interface Saison {
    id: number;
    libelle: string;
    estCourante: boolean;
}
